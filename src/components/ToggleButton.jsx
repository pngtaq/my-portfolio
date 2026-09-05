import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function ToggleButton() {
  const { isDark, toggleTheme } = useTheme();

  // Track is h-7.5/w-13 (30x52px). With 1px borders that leaves a 28x50px
  // well for the 24px knob, so a 0.5 (2px) inset sits evenly on all four
  // sides. h-7 would have left only 1px above and below.
  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative h-7.5 w-11 shrink-0 rounded-full border transition-colors duration-300 ease-in-out min-[360px]:w-13 ${
        isDark
          ? "border-[#3a3a3a] bg-[#1f1f1f]"
          : "border-gray-300 bg-gray-200"
      }`}
    >
      {/*
        Positioned with `left` rather than a fixed translate: `100%` resolves
        against the track, so the knob keeps an even 0.5 inset on both sides
        even if the track width changes. A hardcoded translate-x-6 slid it 24px
        against a 50px inner track and left it flush with the right edge.
      */}
      <span
        className={`absolute top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-sm transition-[left] duration-300 ease-in-out ${
          isDark ? "left-[calc(100%-1.5rem-0.125rem)]" : "left-0.5"
        }`}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-gray-700" aria-hidden="true" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-amber-500" aria-hidden="true" />
        )}
      </span>
    </button>
  );
}
