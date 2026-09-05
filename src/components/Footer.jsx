import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 py-8 text-center text-xs text-gray-600 dark:border-[#262626] dark:text-gray-400">
      <p>
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
      <p className="mt-1">Built with React, Vite and Tailwind CSS.</p>
    </footer>
  );
}
