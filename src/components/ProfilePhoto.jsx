const FACE =
  "flip-face rounded-2xl object-cover shadow-sm ring-1 ring-gray-200 dark:ring-[#262626]";

/**
 * Flips between the light-mode and dark-mode portraits when the theme changes.
 *
 * The rotation is pure CSS keyed off the `dark` class on <html> (see
 * .flip-* in src/index.css), so it works before React hydrates and cannot be
 * left half-turned by a throttled animation frame. Both images stay mounted so
 * the reverse face is already decoded when the card turns.
 */
export default function ProfilePhoto({ className = "" }) {
  return (
    <div className={`flip-scene relative shrink-0 ${className}`}>
      <div className="flip-inner">
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
          className={`${FACE} flip-face-back`}
        />
      </div>
    </div>
  );
}
