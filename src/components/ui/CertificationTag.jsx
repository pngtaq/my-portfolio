export default function CertificationTag({
  certificateName,
  certificateFrom,
  issued,
  href,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg bg-gray-100 px-2.5 py-2 transition-colors hover:bg-gray-200 dark:bg-[#161616] dark:hover:bg-[#1f1f1f]"
    >
      <p className="text-xs font-medium">{certificateName}</p>
      <p className="mt-0.5 flex items-center justify-between gap-2 text-[11px] text-gray-600 dark:text-gray-400">
        <span className="min-w-0 truncate">{certificateFrom}</span>
        {issued ? <span className="shrink-0">{issued}</span> : null}
      </p>
    </a>
  );
}
