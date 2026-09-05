import { BriefcaseBusiness, ExternalLink } from "lucide-react";
import Card from "./ui/Card";
import SectionHeader from "./ui/SectionHeader";
import { work } from "../data/work";

export default function WorkExperience({ delay = 0, className = "" }) {
  return (
    <Card delay={delay} className={className}>
      <SectionHeader icon={BriefcaseBusiness} title="Experience" />

      <ol className="relative space-y-6">
        {work.map((job, index) => (
          <li key={`${job.company}-${job.period}`} className="relative pl-6">
            {/* Timeline rail, stopped short on the last entry so it does not
                dangle past the final bullet. */}
            {index < work.length - 1 ? (
              <span
                className="absolute top-4 bottom-[-1.5rem] left-[5px] w-px bg-gray-200 dark:bg-[#2a2a2a]"
                aria-hidden="true"
              />
            ) : null}
            <span
              className="absolute top-1.5 left-0 h-2.5 w-2.5 rounded-full border-2 border-black bg-black dark:border-white dark:bg-white"
              aria-hidden="true"
            />

            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-sm font-bold">{job.role}</h3>
              <span className="shrink-0 rounded-full border border-gray-200 px-2 py-0.5 text-[11px] text-gray-600 dark:border-[#333] dark:text-gray-400">
                {job.period}
              </span>
            </div>

            <p className="mt-0.5 text-xs font-medium text-gray-700 dark:text-gray-300">
              {job.link ? (
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  {job.company}
                  <ExternalLink className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
                </a>
              ) : (
                job.company
              )}
            </p>

            <ul className="mt-2 space-y-1.5">
              {job.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="relative pl-3.5 text-xs leading-relaxed text-gray-700 before:absolute before:top-[0.55em] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-gray-400 dark:text-gray-300 dark:before:bg-gray-600"
                >
                  {highlight}
                </li>
              ))}
            </ul>

            <ul className="mt-2.5 flex flex-wrap gap-1.5">
              {job.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-700 dark:bg-[#1a1a1a] dark:text-gray-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Card>
  );
}
