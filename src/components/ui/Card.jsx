/**
 * The one place the bento-card look is defined. Every panel on the site uses
 * this so light/dark styling can never drift between sections again.
 *
 * The entrance animation is the CSS `.reveal` class (see src/index.css) rather
 * than a JS-driven one, so the card is never left invisible if animation
 * frames are throttled.
 */
export default function Card({
  children,
  className = "",
  as: Component = "section",
  delay = 0,
  interactive = true,
  ...rest
}) {
  return (
    <Component
      style={delay ? { animationDelay: `${delay}s` } : undefined}
      className={[
        "reveal rounded-2xl border border-gray-200 bg-white p-4 sm:p-5",
        "dark:border-[#262626] dark:bg-[#0d0d0d]",
        "transition-[transform,box-shadow,border-color] duration-300",
        interactive
          ? "hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-[0_12px_28px_-12px_rgba(0,0,0,0.18)] dark:hover:border-[#3a3a3a] dark:hover:shadow-[0_12px_28px_-12px_rgba(0,0,0,0.8)]"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </Component>
  );
}
