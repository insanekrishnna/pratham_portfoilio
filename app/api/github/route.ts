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

  const to = new Date()
  const from = new Date()
  from.setFullYear(to.getFullYear() - 1)

  const query = `
    query($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
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
    body: JSON.stringify({
      query,
      variables: { login, from: from.toISOString(), to: to.toISOString() },
    }),
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
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
      },
    }
  )
}
