import { FlaskConical } from "lucide-react";
import Card from "./ui/Card";
import SectionHeader from "./ui/SectionHeader";
import TechStackTag from "./ui/TechStackTag";
import { backend, developerTools, frontend } from "../data/techStack";

const GROUPS = [
  { title: "Frontend", items: frontend },
  { title: "Backend", items: backend },
  { title: "Developer Tools", items: developerTools },
];

export default function TechStack({ delay = 0 }) {
  return (
    <Card delay={delay}>
      <SectionHeader icon={FlaskConical} title="Tech Stack" to="/techstack" />

      <div className="space-y-4">
        {GROUPS.map(({ title, items }) => (
          <div key={title} className="space-y-2">
            <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
              {title}
            </h3>
            {/* flex-wrap matters: without it these tags overflowed the card on phones. */}
            <ul className="flex flex-wrap gap-1.5">
              {items.map((tag) => (
                <li key={tag}>
                  <TechStackTag tag={tag} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
}
