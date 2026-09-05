import { ArrowUpRight } from "lucide-react";

export default function ProjectsTag({ projectName, description, stack = [], link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-gray-200 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-[0_8px_20px_-10px_rgba(0,0,0,0.2)] dark:border-[#262626] dark:hover:border-[#3a3a3a]"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold">{projectName}</h3>
        <ArrowUpRight
          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black dark:group-hover:text-white"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      <p className="mt-1 flex-1 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
        {description}
      </p>

      {stack.length ? (
        <ul className="mt-2.5 flex flex-wrap gap-1">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-700 dark:bg-[#1a1a1a] dark:text-gray-300"
            >
              {tech}
            </li>
          ))}
        </ul>
      ) : null}
    </a>
  );
}
