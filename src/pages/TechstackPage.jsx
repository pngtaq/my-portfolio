import CertificateAndProjectsPageContainer from "../components/CertificateAndProjectsPageContainer";
import TechStackTagContainer from "../components/ui/TechStackTagContainer";
import { techStack } from "../data/techStack";
import { usePageMeta } from "../hooks/usePageMeta";

export default function TechstackPage() {
  usePageMeta({
    title: "Tech Stack | John Raison Salvador",
    description:
      "The languages, frameworks and tools John Raison Salvador works with day to day — React, Next.js, TypeScript, Node.js, Flutter, MongoDB and Supabase.",
    path: "/techstack",
  });

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
