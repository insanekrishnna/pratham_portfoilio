"use client"

import { useEffect, useState } from "react"

type ContributionDay = {
  date: string
  contributionCount: number
  contributionLevel: string
}

type Week = {
  contributionDays: ContributionDay[]
}

export function GitHubContributions() {
  const [weeks, setWeeks] = useState<Week[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/github")
        if (!res.ok) throw new Error("Failed")

        const data = await res.json()
        setWeeks(data.weeks)
        setTotal(data.totalContributions)
      } catch {
        setError("Unable to load GitHub contributions")
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  const color = (level: string) => {
    switch (level) {
      case "NONE":
        return "bg-neutral-800"
      case "FIRST_QUARTILE":
        return "bg-purple-900"
      case "SECOND_QUARTILE":
        return "bg-purple-700"
      case "THIRD_QUARTILE":
        return "bg-purple-500"
      case "FOURTH_QUARTILE":
        return "bg-purple-300"
      default:
        return "bg-neutral-800"
    }
  }

  if (loading) {
    return (
      <div className="h-40 flex items-center justify-center text-xs text-neutral-500">
        Loading GitHub activity…
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-xs text-red-400">
        {error}
      </div>
    )
  }

  return (
    <section className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold text-neutral-100">
          GitHub Contributions
        </h3>
        <p className="text-xs text-neutral-400">
          {total} contributions in the last year
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-flex gap-1">
          {weeks.map((week, w) => (
            <div key={w} className="flex flex-col gap-1">
              {week.contributionDays.map((day, d) => (
                <div
                  key={d}
                  title={`${day.date} — ${day.contributionCount}`}
                  className={`h-3 w-3 rounded-sm transition-transform duration-200 hover:scale-125 ${color(
                    day.contributionLevel
                  )}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 text-[10px] text-neutral-500">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="h-3 w-3 rounded-sm bg-neutral-800" />
          <div className="h-3 w-3 rounded-sm bg-purple-900" />
          <div className="h-3 w-3 rounded-sm bg-purple-700" />
          <div className="h-3 w-3 rounded-sm bg-purple-500" />
          <div className="h-3 w-3 rounded-sm bg-purple-300" />
        </div>
        <span>More</span>
      </div>
    </section>
  )
}
