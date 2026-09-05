export default function TechStackPageTag({ stack }) {
  return (
    <span className="inline-block rounded-lg border border-gray-200 px-3 py-1.5 text-sm tracking-wide text-gray-700 transition-colors duration-200 hover:border-gray-400 hover:text-black dark:border-[#2e2e2e] dark:text-gray-300 dark:hover:border-[#4a4a4a] dark:hover:text-white">
      {stack}
    </span>
  );
}
