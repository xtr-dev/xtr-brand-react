import { useEffect, useState, CSSProperties } from 'react';

export interface XLogoProps {
  /** Delay in milliseconds before animation starts (default: 2000) */
  delay?: number;
  /** Duration of the clip animation in milliseconds (default: 500) */
  duration?: number;
  /** Scale factor for the logo size (default: 1) */
  scale?: number;
  /** Add margin around the logo. true/1 = 1 logo pixel (10px), 0.5 = half logo pixel, etc. */
  margin?: boolean | number;
  /** Keep width stable at full logo width instead of shrinking */
  stableWidth?: boolean;
  /** Override reveal state (true = full logo, false = X only, undefined = auto) */
  reveal?: boolean;
  /** Reveal full logo on hover */
  revealOnHover?: boolean;
  /** Additional CSS class name */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
}

const SVG_WIDTH = 110;
const SVG_HEIGHT = 30;
const X_WIDTH = 30;
const PADDING = 1;
const MARGIN = 10; // 1/3 of height (1 logo pixel)

export function XLogo({
  delay = 2000,
  duration = 500,
  scale = 1,
  margin = false,
  stableWidth = false,
  reveal,
  revealOnHover = false,
  className,
  style,
}: XLogoProps) {
  const [autoCollapsed, setAutoCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (reveal !== undefined) return;

    const timer = setTimeout(() => {
      setAutoCollapsed(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, reveal]);

  const isRevealed =
    reveal !== undefined
      ? reveal
      : revealOnHover && isHovered
        ? true
        : !autoCollapsed;
  const isCollapsed = !isRevealed;

  // margin: true/1 = 1 logo pixel (10px), 0.5 = 5px, etc.
  const marginSize = typeof margin === 'number' ? margin * MARGIN : (margin ? MARGIN : 0);

  // Round SVG dimensions first, then derive container size to ensure alignment
  const svgWidth = Math.round(SVG_WIDTH * scale);
  const svgHeight = Math.round(SVG_HEIGHT * scale);
  const xWidth = Math.round(X_WIDTH * scale);
  const padding = Math.round((PADDING + marginSize) * scale);

  // Container dimensions = content + padding (ensures clip fits exactly)
  const fullWidth = svgWidth + padding * 2;
  const collapsedWidth = xWidth + padding * 2;
  const height = svgHeight + padding * 2;

  const outerWidth = stableWidth ? fullWidth : (isCollapsed ? collapsedWidth : fullWidth);

  const containerStyle: CSSProperties = {
    width: outerWidth,
    height,
    overflow: 'hidden',
    backgroundColor: '#000',
    display: 'inline-block',
    transition: stableWidth ? undefined : `width ${duration}ms ease-in-out`,
    padding,
    boxSizing: 'border-box',
    ...style,
  };

  const clipWidth = isCollapsed ? xWidth : svgWidth;

  const clipStyle: CSSProperties = {
    width: clipWidth,
    overflow: 'hidden',
    transition: `width ${duration}ms ease-in-out`,
  };

  const svgStyle: CSSProperties = {
    display: 'block',
  };

  return (
    <div
      className={className}
      style={containerStyle}
      onMouseEnter={revealOnHover ? () => setIsHovered(true) : undefined}
      onMouseLeave={revealOnHover ? () => setIsHovered(false) : undefined}
    >
      <div style={clipStyle}>
        <svg
          viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
          width={svgWidth}
          height={svgHeight}
          style={svgStyle}
        >
        {/* R */}
        <path
          d="M0 0 C9.9 0 19.8 0 30 0 C30 3.3 30 6.6 30 10 C23.4 10 16.8 10 10 10 C10 16.6 10 23.2 10 30 C6.7 30 3.4 30 0 30 C0 20.1 0 10.2 0 0 Z"
          fill="#FFFFFF"
          transform="translate(80,0)"
        />
        {/* T */}
        <path
          d="M0 0 C9.9 0 19.8 0 30 0 C30 3.3 30 6.6 30 10 C26.7 10 23.4 10 20 10 C20 16.6 20 23.2 20 30 C16.7 30 13.4 30 10 30 C10 23.4 10 16.8 10 10 C6.7 10 3.4 10 0 10 C0 6.7 0 3.4 0 0 Z"
          fill="#FFFFFF"
          transform="translate(40,0)"
        />
        {/* X - bottom right square */}
        <path
          d="M0 0 C3.3 0 6.6 0 10 0 C10 3.3 10 6.6 10 10 C6.7 10 3.4 10 0 10 C0 6.7 0 3.4 0 0 Z"
          fill="#FFFFFF"
          transform="translate(20,20)"
        />
        {/* X - bottom left square */}
        <path
          d="M0 0 C3.3 0 6.6 0 10 0 C10 3.3 10 6.6 10 10 C6.7 10 3.4 10 0 10 C0 6.7 0 3.4 0 0 Z"
          fill="#FFFFFF"
          transform="translate(0,20)"
        />
        {/* X - center square */}
        <path
          d="M0 0 C3.3 0 6.6 0 10 0 C10 3.3 10 6.6 10 10 C6.7 10 3.4 10 0 10 C0 6.7 0 3.4 0 0 Z"
          fill="#FFFFFF"
          transform="translate(10,10)"
        />
        {/* X - top right square */}
        <path
          d="M0 0 C3.3 0 6.6 0 10 0 C10 3.3 10 6.6 10 10 C6.7 10 3.4 10 0 10 C0 6.7 0 3.4 0 0 Z"
          fill="#FFFFFF"
          transform="translate(20,0)"
        />
        {/* X - top left square */}
        <path
          d="M0 0 C3.3 0 6.6 0 10 0 C10 3.3 10 6.6 10 10 C6.7 10 3.4 10 0 10 C0 6.7 0 3.4 0 0 Z"
          fill="#FFFFFF"
          transform="translate(0,0)"
        />
        </svg>
      </div>
    </div>
  );
}
