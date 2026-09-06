const FACE =
  "portrait__face rounded-2xl object-cover shadow-sm ring-1 ring-gray-200 dark:ring-[#262626]";

/**
 * Stacks the light-mode and dark-mode portraits and swaps them on the `dark`
 * class, with no transition of its own (see .portrait-* in src/index.css).
 *
 * The swap is deliberately instant: the theme switch is a view transition, so
 * the portrait is carried across by the same wipe as the page background and
 * changes on exactly the same edge. Animating it separately would put it out
 * of step with everything around it.
 */
export default function ProfilePhoto({ className = "" }) {
  return (
    <div className={`portrait shrink-0 ${className}`}>
      <img
        src="/images/me-light.jpg"
        alt="John Raison Salvador"
        width={800}
        height={800}
        fetchPriority="high"
        decoding="async"
        className={FACE}
      />

      <img
        src="/images/me-dark.jpg"
        alt=""
        aria-hidden="true"
        width={800}
        height={800}
        decoding="async"
        className={`${FACE} portrait__face--dark`}
      />
    </div>
  );
}
