export default function TechStackTag({ tag }) {
  return (
    <span className="inline-block rounded-md border border-gray-200 px-2 py-0.5 text-xs whitespace-nowrap text-gray-700 dark:border-[#2e2e2e] dark:text-gray-300">
      {tag}
    </span>
  );
}
