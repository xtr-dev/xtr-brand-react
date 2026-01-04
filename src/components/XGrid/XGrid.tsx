import { forwardRef, HTMLAttributes, CSSProperties } from 'react';

export interface XGridProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of columns or grid-template-columns value */
  columns?: number | string;
  /** Number of rows or grid-template-rows value */
  rows?: number | string;
  /** Gap between items */
  gap?: CSSProperties['gap'];
  /** Row gap */
  rowGap?: CSSProperties['rowGap'];
  /** Column gap */
  columnGap?: CSSProperties['columnGap'];
  /** Align items */
  align?: CSSProperties['alignItems'];
  /** Justify items */
  justify?: CSSProperties['justifyItems'];
}

export const XGrid = forwardRef<HTMLDivElement, XGridProps>(
  ({ columns, rows, gap, rowGap, columnGap, align, justify, style, children, ...props }, ref) => {
    const gridStyle: CSSProperties = {
      display: 'grid',
      gridTemplateColumns: typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns,
      gridTemplateRows: typeof rows === 'number' ? `repeat(${rows}, 1fr)` : rows,
      gap,
      rowGap,
      columnGap,
      alignItems: align,
      justifyItems: justify,
      ...style,
    };

    return (
      <div ref={ref} style={gridStyle} {...props}>
        {children}
      </div>
    );
  }
);

XGrid.displayName = 'XGrid';
