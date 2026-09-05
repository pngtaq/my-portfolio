import { LayoutTemplate } from "lucide-react";
import Card from "./ui/Card";
import SectionHeader from "./ui/SectionHeader";
import ProjectsTag from "./ui/ProjectsTag";
import { projects } from "../data/projects";

export default function Projects({ delay = 0 }) {
  return (
    <Card className="md:col-span-2" delay={delay}>
      <SectionHeader icon={LayoutTemplate} title="Recent Projects" to="/projects" />

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {projects.slice(0, 4).map((project) => (
          <ProjectsTag key={project.projectName} {...project} />
        ))}
      </div>
    </Card>
  );
}
