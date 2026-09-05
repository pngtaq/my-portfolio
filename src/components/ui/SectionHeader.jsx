import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function SectionHeader({ icon: Icon, title, to, linkLabel = "View all" }) {
  return (
    <div className="flex items-center justify-between gap-3 pb-3">
      <h2 className="flex items-center gap-x-2 text-base font-bold sm:text-lg">
        {Icon ? (
          <Icon className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
        ) : null}
        <span>{title}</span>
      </h2>

      {to ? (
        <Link
          to={to}
          className="group flex shrink-0 items-center rounded-md text-xs text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
        >
          <span className="pr-1">{linkLabel}</span>
          <ChevronRight
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </Link>
      ) : null}
    </div>
  );
}
