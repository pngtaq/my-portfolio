export default function MyQuote() {
  return (
    <figure className="rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 px-4 py-3 text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-12px_rgba(37,99,235,0.6)] dark:from-blue-700 dark:via-blue-800 dark:to-blue-900">
      <blockquote className="text-xs leading-relaxed">
        “Goals are good for setting a direction, but systems are best for making
        progress.”
      </blockquote>
      <figcaption className="mt-1 text-end text-[11px] text-blue-100">
        — James Clear
      </figcaption>
    </figure>
  );
}
