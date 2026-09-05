import CertificateAndProjectsPageContainer from "../components/CertificateAndProjectsPageContainer";
import CertificatePageTag from "../components/ui/CertificatePageTag";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <CertificateAndProjectsPageContainer
      title="All Projects"
      description="Production applications and side projects. Each card links to the live deployment."
    >
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {projects.map((project, index) => (
          <CertificatePageTag
            key={project.projectName}
            title={project.projectName}
            subtitle={project.description}
            stack={project.stack}
            meta={project.link?.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            link={project.link}
            index={index}
          />
        ))}
      </ul>
    </CertificateAndProjectsPageContainer>
  );
}
