export default function ExperienceTag({ title, company, year, active, isLast }) {
  return (
    <li className="group relative pl-6">
      {/* The rail is drawn per-item and skipped on the last one; a single
          `h-full` rail on the parent used to trail past the final bullet. */}
      {!isLast ? (
        <span
          className="absolute top-4 bottom-[-1.25rem] left-[5px] w-px bg-gray-200 dark:bg-[#2a2a2a]"
          aria-hidden="true"
        />
      ) : null}

      <span
        className={`absolute top-1.5 left-0 h-2.5 w-2.5 rounded-full border-2 transition-colors duration-300 ${
          active
            ? "border-black bg-black dark:border-white dark:bg-white"
            : "border-gray-300 bg-white group-hover:border-black group-hover:bg-black dark:border-[#3a3a3a] dark:bg-[#0d0d0d] dark:group-hover:border-white dark:group-hover:bg-white"
        }`}
        aria-hidden="true"
      />

      <div className="space-y-1">
        <p className="text-sm font-bold">{title}</p>
        <p className="flex items-center justify-between gap-2 text-xs text-gray-600 dark:text-gray-400">
          <span className="min-w-0 truncate">{company}</span>
          <span className="shrink-0 rounded-full border border-gray-200 px-2 py-0.5 dark:border-[#333]">
            {year}
          </span>
        </p>
      </div>
    </li>
  );
}
