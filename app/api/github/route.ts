import { NextResponse } from "next/server"

const GITHUB_API = "https://api.github.com/graphql"
const DEFAULT_USER = "insanekrishnna"

export async function GET() {
  const token =
    process.env.GITHUB_TOKEN || process.env.NEXT_PUBLIC_GITHUB_TOKEN
  const login = process.env.GITHUB_USERNAME || DEFAULT_USER

  if (!token) {
    return NextResponse.json(
      { error: "GitHub token not configured." },
      { status: 500 }
    )
  }

  // No from/to on purpose. Passing them meant sending `new Date()` as a
  // UTC instant, so before 05:30 IST the window ended on *yesterday* and
  // today's contributions were dropped. Omitting the range makes GitHub
  // use its own trailing year in the account's timezone — the identical
  // window github.com/<login> renders, so the totals always agree.
  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }
  `

  const res = await fetch(GITHUB_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables: { login } }),
    // Next would otherwise be free to memoise this; the CDN header below
    // is what controls freshness, so keep the upstream call uncached.
    cache: "no-store",
  })

  if (!res.ok) {
    const text = await res.text()
    return NextResponse.json(
      { error: "GitHub request failed.", detail: text },
      { status: 502 }
    )
  }

  const json = await res.json()
  if (json.errors) {
    return NextResponse.json(
      { error: "GitHub query error.", detail: json.errors },
      { status: 502 }
    )
  }

  const calendar =
    json?.data?.user?.contributionsCollection?.contributionCalendar

  if (!calendar) {
    return NextResponse.json(
      { error: "No GitHub contribution data found." },
      { status: 404 }
    )
  }

  return NextResponse.json(
    {
      totalContributions: calendar.totalContributions,
      weeks: calendar.weeks,
    },
    {
      headers: {
        // 5 minutes at the CDN; `max-age=0` keeps browsers from holding
        // their own copy, so a reload is never older than that window.
        "Cache-Control":
          "public, max-age=0, s-maxage=300, stale-while-revalidate=600",
      },
    }
  )
}
