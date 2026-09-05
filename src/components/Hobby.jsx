import { BookOpen } from "lucide-react";
import Card from "./ui/Card";
import SectionHeader from "./ui/SectionHeader";

export default function Hobby({ delay = 0 }) {
  return (
    <Card delay={delay}>
      <SectionHeader icon={BookOpen} title="Beyond Coding" />

      <div className="space-y-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        <p>
          Away from the editor I read and take e-learning courses on
          productivity and the quieter forces that shape how things actually
          work.
        </p>
        <p>
          I'm after the principles underneath — the ones that transfer from a
          book to a codebase to a team — and I try to put them to work rather
          than just collect them.
        </p>
      </div>
    </Card>
  );
}
