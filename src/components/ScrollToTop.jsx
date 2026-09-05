import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Client-side navigation keeps the previous scroll offset, so opening
 * "View all" from halfway down the home page used to land mid-list.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
