export default function RecommendationCard({ description, name, job, link }) {
  return (
    <figure className="space-y-3">
      <blockquote className="text-[13px] leading-relaxed tracking-wide text-gray-700 dark:text-gray-300">
        {description}
      </blockquote>

      <figcaption className="border-t border-gray-200 pt-3 text-xs dark:border-[#262626]">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
          >
            {name}
          </a>
        ) : (
          <p className="font-semibold">{name}</p>
        )}
        <p className="text-gray-600 dark:text-gray-400">{job}</p>
      </figcaption>
    </figure>
  );
}
