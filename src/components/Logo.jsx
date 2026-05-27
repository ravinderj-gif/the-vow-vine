import { BRAND_LOGO } from '../data/images';

export default function Logo({ className = '', variant = 'light', useImage = true }) {
  if (useImage) {
    return (
      <img
        src={BRAND_LOGO}
        alt="THE VOW VINE"
        className={`rounded-full object-cover ${className}`}
      />
    );
  }

  const textColor = variant === 'light' ? '#FAF7F2' : '#0F0F0F';
  const accentColor = variant === 'light' ? '#D4AF37' : '#7A0019';

  return (
    <svg
      viewBox="0 0 240 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="THE VOW VINE"
    >
      <text
        x="120"
        y="18"
        textAnchor="middle"
        fill={accentColor}
        fontFamily="Cormorant Garamond, serif"
        fontSize="8"
        letterSpacing="3"
      >
        PHOTOGRAPHY | WEDDING FILMS
      </text>
      <line x1="30" y1="38" x2="210" y2="38" stroke={accentColor} strokeWidth="0.5" opacity="0.6" />
      <text
        x="120"
        y="36"
        textAnchor="middle"
        fill={textColor}
        fontFamily="Playfair Display, serif"
        fontSize="10"
        letterSpacing="2"
      >
        THE
      </text>
      <text
        x="120"
        y="58"
        textAnchor="middle"
        fill={textColor}
        fontFamily="Playfair Display, serif"
        fontSize="22"
        fontWeight="500"
        letterSpacing="4"
      >
        VOW VINE
      </text>
      <line x1="30" y1="62" x2="210" y2="62" stroke={accentColor} strokeWidth="0.5" opacity="0.6" />
    </svg>
  );
}
