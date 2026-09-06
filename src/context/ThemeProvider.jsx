import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { ThemeContext } from "./theme-context";

const STORAGE_KEY = "theme";

function readInitialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    // localStorage can throw in private mode — fall through to system preference.
  }

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }

  return "light";
}

/**
 * Writes the theme to the document. Called from the state effect and, directly,
 * from inside the view transition's DOM-update callback: the snapshot is taken
 * the moment that callback returns, so the class cannot wait on an effect.
 */
function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Owns the single source of truth for the theme. Previously every component
 * that called `useTheme` created its own independent state, so nothing outside
 * the toggle button could react to a theme change.
 */
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readInitialTheme);
  /* Identifies the most recent sweep, so an older one finishing late cannot
     clear the direction attribute out from under the one now running. */
  const sweepIdRef = useRef(0);

  useEffect(() => {
    applyTheme(theme);

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore quota / private-mode failures; the theme still applies for this visit.
    }
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event) => {
      let saved = null;
      try {
        saved = localStorage.getItem(STORAGE_KEY);
      } catch {
        // Treat an unreadable store as "no explicit choice".
      }
      if (!saved) setTheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    /* No view transitions (Safari < 18, older Firefox) or the visitor asked for
       less motion: switch outright rather than faking the wipe with an overlay,
       which would cover the page instead of recolouring it. */
    if (typeof document.startViewTransition !== "function" || prefersReducedMotion()) {
      setTheme(next);
      return;
    }

    /* Drives which direction the CSS wipes from — see .sweep-* in index.css. */
    root.dataset.sweep = next;
    const id = ++sweepIdRef.current;

    const transition = document.startViewTransition(() => {
      /* Synchronous, so the toggle knob, the portrait and the palette all land
         in the single snapshot the browser is about to take. Without the flush
         React would commit a frame later, outside the wipe. */
      flushSync(() => setTheme(next));
      applyTheme(next);
    });

    /* A transition can be aborted before its callback ever runs — a hidden tab,
       or another transition starting on top of this one. The wipe is expendable
       but the theme change is not, so apply it plainly instead. */
    transition.updateCallbackDone.catch(() => {
      setTheme(next);
      applyTheme(next);
    });

    /* `ready` rejects on any skipped transition. Nothing to do about it, but it
       has to be handled or it surfaces as an uncaught rejection. */
    transition.ready.catch(() => {});

    transition.finished
      .catch(() => {
        // Likewise: a superseded transition rejects here too.
      })
      .finally(() => {
        if (sweepIdRef.current === id) delete root.dataset.sweep;
      });
  }, [theme]);

  const value = useMemo(
    () => ({ theme, isDark: theme === "dark", toggleTheme, setTheme }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
