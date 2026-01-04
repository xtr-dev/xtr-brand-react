import { forwardRef, HTMLAttributes, CSSProperties } from 'react';

export interface XFlexProps extends HTMLAttributes<HTMLDivElement> {
  /** Horizontal layout (row direction). Default is vertical (column) */
  horizontal?: boolean;
  /** Enable flex wrap */
  wrap?: boolean;
  /** Gap between items */
  gap?: CSSProperties['gap'];
  /** Align items */
  align?: CSSProperties['alignItems'];
  /** Justify content */
  justify?: CSSProperties['justifyContent'];
  /** Flex grow to fill container */
  grow?: boolean;
}

export const XFlex = forwardRef<HTMLDivElement, XFlexProps>(
  ({ horizontal, wrap, gap, align, justify, grow, style, children, ...props }, ref) => {
    const flexStyle: CSSProperties = {
      display: 'flex',
      flexDirection: horizontal ? 'row' : 'column',
      flexWrap: wrap ? 'wrap' : undefined,
      gap,
      alignItems: align,
      justifyContent: justify,
      flexGrow: grow ? 1 : undefined,
      ...style,
    };

    return (
      <div ref={ref} style={flexStyle} {...props}>
        {children}
      </div>
    );
  }
);

XFlex.displayName = 'XFlex';
