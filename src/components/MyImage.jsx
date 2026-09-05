import { Download, Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

import CheckBadge from "./svg/CheckBadge";
import GithubIcon from "./svg/GithubIcon";
import LocationIcon from "./svg/LocationIcon";
import ProfilePhoto from "./ProfilePhoto";
import ToggleButton from "./ToggleButton";
import { profile } from "../data/profile";

const SECONDARY_BUTTON =
  "flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-2 py-2 text-xs font-medium whitespace-nowrap transition-transform duration-200 hover:-translate-y-0.5 sm:px-3 dark:border-[#333] dark:hover:border-[#4a4a4a]";

export default function MyImage() {
  return (
    <header className="reveal mb-8">
      {/*
        On sm+ the photo spans both rows. Left in row 1 alone it sized that row
        to its own 160px while the text block is ~84px, and `items-center` then
        parked ~38px of dead space between the role line and the buttons.
      */}
      <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-3 sm:items-start sm:gap-x-6">
        {/* 72px under 360px: the extra 24px it gives back to the text column is
            what lets the name sit on one line and the location stop truncating. */}
        <ProfilePhoto className="h-18 w-18 min-[360px]:h-24 min-[360px]:w-24 sm:h-36 sm:w-36 sm:row-span-2 sm:self-center" />

        <div className="min-w-0">
          <div className="flex items-start justify-between gap-2">
            {/* No `truncate` here: at 375px it clipped the name to
                "Raison Salva…". Wrapping is better than losing the name. */}
            {/* Badge is inline (not a flex sibling) so it follows the last
                word when the name wraps, instead of dropping to its own line. */}
            {/* text-base under 360px: at 320 the photo and toggle leave the
                heading ~116px, which text-lg overflows onto a second line. */}
            <h1 className="text-base leading-snug font-bold min-[360px]:text-lg sm:text-2xl">
              <span className="hidden sm:inline">{profile.givenName} </span>
              {/* No whitespace before the badge: a space is a line-break
                  opportunity, which dropped the badge onto its own line at
                  320px. The gap comes from the margin instead. */}
              {profile.shortName}<CheckBadge className="ml-0.5 sm:ml-1" />
            </h1>

            <ToggleButton />
          </div>

          <p className="mt-1.5 flex items-center gap-1 text-xs font-medium tracking-wide text-gray-700 sm:text-[13px] dark:text-gray-300">
            <LocationIcon />
            <span className="truncate">{profile.location}</span>
          </p>

          <p className="mt-2 text-[13px] tracking-wide sm:text-[15px]">
            {profile.role}
            <span className="hidden sm:inline">
              <span className="px-1.5 text-gray-400" aria-hidden="true">
                \
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                {profile.secondaryRole}
              </span>
            </span>
          </p>
        </div>

        <div className="col-span-2 grid grid-cols-2 gap-2 sm:col-span-1 sm:col-start-2 sm:flex sm:flex-wrap">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-lg bg-black px-2 py-2 text-xs font-medium whitespace-nowrap text-white transition-transform duration-200 hover:-translate-y-0.5 sm:px-3 dark:bg-white dark:text-black"
          >
            <GithubIcon isForDark={false} />
            <span>GitHub</span>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={SECONDARY_BUTTON}
          >
            <FaLinkedinIn size={14} aria-hidden="true" />
            <span>LinkedIn</span>
          </a>

          <a href={`mailto:${profile.email}`} className={SECONDARY_BUTTON}>
            <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            <span>Email</span>
          </a>

          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={SECONDARY_BUTTON}
          >
            <Download className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
