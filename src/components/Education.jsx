import { GraduationCap, Users } from "lucide-react";
import Card from "./ui/Card";
import SectionHeader from "./ui/SectionHeader";
import { education } from "../data/profile";

const COMMUNITIES = [
  {
    name: "ALPHA",
    detail: "Alliance of Leading Programmers through Heuristic Adaptation",
  },
  {
    name: "Zero To Mastery",
    detail: "Community for developers",
  },
];

export default function Education({ delay = 0 }) {
  return (
    <Card delay={delay}>
      <SectionHeader icon={GraduationCap} title="Education" />

      <div className="rounded-xl border border-gray-200 p-3 dark:border-[#262626]">
        <p className="text-sm font-semibold">{education.degree}</p>
        <p className="mt-1 flex items-center justify-between gap-2 text-xs text-gray-600 dark:text-gray-400">
          <span className="min-w-0 truncate">{education.school}</span>
          <span className="shrink-0 rounded-full border border-gray-200 px-2 py-0.5 dark:border-[#333]">
            {education.year}
          </span>
        </p>
      </div>

      <h3 className="mt-5 mb-2 flex items-center gap-x-2 text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
        <Users className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
        Communities
      </h3>

      <ul className="space-y-1.5">
        {COMMUNITIES.map(({ name, detail }) => (
          <li
            key={name}
            className="rounded-lg bg-gray-100 px-2.5 py-2 dark:bg-[#161616]"
          >
            <p className="text-xs font-medium">{name}</p>
            <p className="mt-0.5 text-[11px] text-gray-600 dark:text-gray-400">
              {detail}
            </p>
          </li>
        ))}
      </ul>
    </Card>
  );
}
