import { NotepadText } from "lucide-react";
import { useEffect, useState } from "react";

import Card from "./ui/Card";
import SectionHeader from "./ui/SectionHeader";
import RecommendationCard from "./ui/RecommendationCard";
import { recommendations } from "../data/recommendations";

const ROTATE_MS = 8000;

export default function Recommendation({ delay = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = recommendations.length;

  useEffect(() => {
    if (total < 2) return undefined;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, ROTATE_MS);

    return () => clearInterval(interval);
  }, [total]);

  // No real recommendations yet — render nothing rather than placeholder text.
  if (total === 0) return null;

  return (
    <Card delay={delay}>
      <SectionHeader icon={NotepadText} title="Recommendations" />

      <div className="min-h-40">
        {/* Keying on the index restarts the CSS reveal on every slide change. */}
        <div key={currentIndex} className="reveal">
          <RecommendationCard {...recommendations[currentIndex]} />
        </div>
      </div>

      {total > 1 ? (
        <div className="mt-4 flex gap-x-2">
          {recommendations.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show recommendation from ${item.name}`}
              aria-current={index === currentIndex}
              className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? "bg-black dark:bg-white"
                  : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      ) : null}
    </Card>
  );
}
