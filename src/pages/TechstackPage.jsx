import CertificateAndProjectsPageContainer from "../components/CertificateAndProjectsPageContainer";
import TechStackTagContainer from "../components/ui/TechStackTagContainer";
import { techStack } from "../data/techStack";

export default function TechstackPage() {
  return (
    <CertificateAndProjectsPageContainer
      title="Tech Stack"
      description="Languages, frameworks and tools I use day to day."
    >
      <div className="space-y-8">
        {techStack.map((group, index) => (
          <TechStackTagContainer key={group.title} {...group} index={index} />
        ))}
      </div>
    </CertificateAndProjectsPageContainer>
  );
}
