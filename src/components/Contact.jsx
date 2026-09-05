import { ArrowUpRight, Download, Mail, MessageSquare } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

import Card from "./ui/Card";
import GithubIcon from "./svg/GithubIcon";
import { profile } from "../data/profile";

const CHANNELS = [
  {
    key: "email",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
    Icon: ({ className }) => (
      <Mail className={className} strokeWidth={1.5} aria-hidden="true" />
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: profile.linkedinHandle,
    href: profile.linkedin,
    external: true,
    Icon: ({ className }) => <FaLinkedinIn className={className} aria-hidden="true" />,
  },
  {
    key: "github",
    label: "GitHub",
    value: profile.githubHandle,
    href: profile.github,
    external: true,
    Icon: ({ className }) => <GithubIcon isForDark={true} className={className} />,
  },
  {
    key: "resume",
    label: "Resume",
    value: "Download PDF",
    href: profile.resume,
    external: true,
    Icon: ({ className }) => (
      <Download className={className} strokeWidth={1.5} aria-hidden="true" />
    ),
  },
];

export default function Contact({ delay = 0 }) {
  return (
    <Card delay={delay} interactive={false} className="sm:p-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-md">
          <h2 className="flex items-center gap-x-2 text-lg font-bold sm:text-xl">
            <MessageSquare className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            Let's build something
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {profile.availability}, and open to freelance work. The fastest way
            to reach me is email — I usually reply within a day.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 dark:bg-white dark:text-black"
          >
            <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            Get in touch
          </a>
        </div>

        {/* Two columns only in the stacked (sm) layout. From md the card turns
            into a row, so the channels stack vertically beside the copy — which
            also gives each one enough width to show its value untruncated. */}
        <ul className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:w-auto md:min-w-[19rem] md:grid-cols-1">
          {CHANNELS.map(({ key, label, value, href, external, Icon }) => (
            <li key={key}>
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 dark:border-[#262626] dark:hover:border-[#3a3a3a]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-[#1a1a1a]">
                  <Icon className="h-4 w-4" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold">{label}</span>
                  <span className="block truncate text-[11px] text-gray-600 dark:text-gray-400">
                    {value}
                  </span>
                </span>

                <ArrowUpRight
                  className="h-3.5 w-3.5 shrink-0 text-gray-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black dark:group-hover:text-white"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
