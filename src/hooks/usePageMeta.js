import { useEffect } from "react";

const SITE_URL = "https://raisonsalvador.dev";

/**
 * Keeps the title, description and canonical URL in step with the current
 * route.
 *
 * Why this exists: the app ships one index.html that the Worker serves for
 * every path, so before this hook /projects, /certificates and /techstack all
 * carried the home page's <title> and — worse — its `rel="canonical"`. A
 * canonical pointing somewhere else tells Google the page is a duplicate and
 * can be dropped from the index, so three of the four routes were quietly
 * asking to be deindexed.
 *
 * index.html keeps the home page's values as static markup on purpose. Social
 * scrapers (LinkedIn, Facebook, Slack) do not execute JavaScript, so anything
 * set from here is invisible to them; the static tags are what they read.
 * Googlebot does render, so it sees the per-route values below.
 *
 * React 19 can hoist <title>/<meta> rendered inside a component, but it does
 * not replace the tags already in index.html — the browser honours the first
 * <title> in the document, and two canonicals is worse than one wrong one.
 * Updating the existing tags in place avoids both problems.
 */
function setAttr(selector, attribute, value) {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

export function usePageMeta({ title, description, path, noindex = false }) {
  useEffect(() => {
    /* NotFound renders on an unknown URL, so it has no fixed path to pass. */
    const url = `${SITE_URL}${path ?? window.location.pathname}`;

    document.title = title;
    setAttr('meta[name="description"]', "content", description);
    setAttr('meta[property="og:title"]', "content", title);
    setAttr('meta[property="og:description"]', "content", description);
    setAttr('meta[property="og:url"]', "content", url);
    setAttr('meta[name="twitter:title"]', "content", title);
    setAttr('meta[name="twitter:description"]', "content", description);
    setAttr('link[rel="canonical"]', "href", url);

    /* The SPA fallback answers unknown URLs with 200 and the 404 screen, which
       Google would otherwise file as a soft 404. Added and removed per route
       rather than left in index.html, where it would suppress the whole site. */
    const existing = document.head.querySelector('meta[name="robots"]');
    if (!noindex) {
      existing?.remove();
      return;
    }

    const robots = existing ?? document.createElement("meta");
    robots.setAttribute("name", "robots");
    robots.setAttribute("content", "noindex");
    if (!existing) document.head.appendChild(robots);
  }, [title, description, path, noindex]);
}
