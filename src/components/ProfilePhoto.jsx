// The radius, ring and shadow live on the container now: the faces carry an
// alignment transform (see .portrait__face in src/index.css) that would drag
// their own corners and ring outside the frame.
const FACE = "portrait__face object-cover";

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
    <div
      className={`portrait shrink-0 overflow-hidden rounded-2xl shadow-sm ring-1 ring-gray-200 dark:ring-[#262626] ${className}`}
    >
      <img
        src="/images/me-light.webp"
        alt="John Raison Salvador"
        width={800}
        height={800}
        fetchPriority="high"
        decoding="async"
        className={FACE}
      />

      <img
        src="/images/me-dark.webp"
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
