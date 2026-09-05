import { BadgeCheck } from "lucide-react";
import Card from "./ui/Card";
import SectionHeader from "./ui/SectionHeader";
import CertificationTag from "./ui/CertificationTag";
import { certificates } from "../data/certificates";

export default function RecentCertification({ delay = 0 }) {
  return (
    <Card delay={delay}>
      <SectionHeader
        icon={BadgeCheck}
        title="Certifications"
        to="/certificates"
      />

      <ul className="space-y-2">
        {certificates.slice(0, 4).map((certificate) => (
          <li key={certificate.certificateName}>
            <CertificationTag {...certificate} />
          </li>
        ))}
      </ul>
    </Card>
  );
}
