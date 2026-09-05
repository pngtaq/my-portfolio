import { createContext } from "react";

/**
 * Kept in its own module (no components) so Vite fast-refresh stays happy and
 * so both the provider and the `useTheme` hook can import it without a cycle.
 */
export const ThemeContext = createContext(null);
