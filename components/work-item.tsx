import { Badge } from "@/components/ui/badge";
import { Building2, Shield } from "lucide-react";
import Image from "next/image";

type WorkItemProps = {
  company: string;
  role: string;
  period: string;
  summary?: string;
  bullets?: string[];
  icon?: "shield" | "building";
  logoUrl?: string;
  companyUrl?: string;
};

export function WorkItem({
  company,
  role,
  period,
  summary,
  bullets,
  icon = "building",
  logoUrl,
  companyUrl,
}: WorkItemProps) {
  const Icon = icon === "shield" ? Shield : Building2;
  return (
    <div className="rounded-xl border border-neutral-200 bg-white px-4 py-3 md:px-5 md:py-3.5 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex gap-4">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 overflow-hidden">
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt={`${company} logo`}
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          ) : (
            <Icon className="h-4 w-4" aria-hidden="true" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-1">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 flex-1 min-w-0">
              {companyUrl ? (
                <a
                  href={companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline cursor-pointer text-blue-600 dark:text-blue-400"
                >
                  {company}
                </a>
              ) : (
                company
              )}
            </h4>
            <span className="text-xs rounded-md border border-neutral-200 bg-neutral-50 px-1.5 py-1 text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 whitespace-nowrap flex-shrink-0 self-start">
              {period}
            </span>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-300">
            {role}
          </p>
          {bullets ? (
            <ul className="mt-2 space-y-1">
              {bullets.map((bullet, index) => (
                <li key={index} className="text-xs leading-relaxed text-neutral-700 dark:text-neutral-300 flex gap-2">
                  <span className="text-neutral-400 dark:text-neutral-600 flex-shrink-0">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
              {summary}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
