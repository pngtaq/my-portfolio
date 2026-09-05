import { UserRound } from "lucide-react";
import Card from "./ui/Card";
import SectionHeader from "./ui/SectionHeader";

export default function About({ delay = 0 }) {
  return (
    <Card delay={delay}>
      <SectionHeader icon={UserRound} title="About" />

      <div className="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        <p>
          I'm a full-stack software developer working mainly in JavaScript and
          TypeScript, with production experience since 2024 building web
          applications for organizational and government clients using Next.js
          and Node.js.
        </p>
        <p>
          My work covers the whole path from schema to screen: RESTful APIs,
          secure authentication and role-based access, SQL and NoSQL databases,
          and interfaces that hold up on every screen size. I lean on
          AI-assisted tooling to move faster without giving up on understanding
          the code I ship.
        </p>
        <p>
          Right now I'm going deeper on Dart and Flutter for polished mobile
          apps, and on how intelligent systems work so I can apply them where
          they genuinely help.
        </p>
      </div>
    </Card>
  );
}
