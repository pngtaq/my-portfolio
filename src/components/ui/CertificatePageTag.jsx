import { ArrowUpRight } from "lucide-react";

export default function CertificatePageTag({
  title,
  subtitle,
  meta,
  stack = [],
  link,
  index = 0,
}) {
  const Wrapper = link ? "a" : "div";
  const wrapperProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <li className="reveal h-full" style={{ animationDelay: `${index * 0.05}s` }}>
      <Wrapper
        {...wrapperProps}
        className="group flex h-full flex-col rounded-2xl border border-gray-200 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-[0_10px_24px_-12px_rgba(0,0,0,0.2)] dark:border-[#262626] dark:bg-[#0d0d0d] dark:hover:border-[#3a3a3a]"
      >
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-base font-semibold">{title}</h2>
          {link ? (
            <ArrowUpRight
              className="mt-1 h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black dark:group-hover:text-white"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          ) : null}
        </div>

        {subtitle ? (
          <p className="mt-1.5 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {subtitle}
          </p>
        ) : null}

        {stack.length ? (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded bg-gray-100 px-1.5 py-0.5 text-[11px] font-medium text-gray-700 dark:bg-[#1a1a1a] dark:text-gray-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}

        {meta ? (
          <p className="mt-3 inline-block self-start rounded-md bg-gray-100 px-2 py-1 text-xs break-all text-gray-700 dark:bg-[#161616] dark:text-gray-300">
            {meta}
          </p>
        ) : null}
      </Wrapper>
    </li>
  );
}
