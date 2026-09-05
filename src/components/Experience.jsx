import { GraduationCap } from "lucide-react";
import Card from "./ui/Card";
import SectionHeader from "./ui/SectionHeader";
import ExperienceTag from "./ui/ExperienceTag";
import { experiences } from "../data/experience";

export default function Experience({ delay = 0, className = "" }) {
  return (
    <Card delay={delay} className={className}>
      <SectionHeader icon={GraduationCap} title="Learning Journey" />

      <ol className="relative space-y-5">
        {experiences.map((item, index) => (
          <ExperienceTag
            key={`${item.title}-${item.year}`}
            {...item}
            isLast={index === experiences.length - 1}
          />
        ))}
      </ol>
    </Card>
  );
}
