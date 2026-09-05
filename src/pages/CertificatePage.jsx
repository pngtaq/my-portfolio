import CertificateAndProjectsPageContainer from "../components/CertificateAndProjectsPageContainer";
import CertificatePageTag from "../components/ui/CertificatePageTag";
import { certificates } from "../data/certificates";

export default function CertificatePage() {
  return (
    <CertificateAndProjectsPageContainer
      title="All Certifications"
      description="Courses completed end to end. Each card opens the issued certificate."
    >
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {certificates.map((cert, index) => (
          <CertificatePageTag
            key={cert.certificateName}
            title={cert.certificateName}
            subtitle={cert.certificateFrom}
            meta={cert.issued}
            // The previous version never passed a link, so no certificate was
            // actually openable from this page.
            link={cert.href}
            index={index}
          />
        ))}
      </ul>
    </CertificateAndProjectsPageContainer>
  );
}
