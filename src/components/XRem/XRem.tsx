import { forwardRef, HTMLAttributes, useEffect, useRef, useCallback } from 'react';

export interface XRemProps extends HTMLAttributes<HTMLDivElement> {
  /** The rem multiple to snap to (default: 1) */
  unit?: number;
}

export const XRem = forwardRef<HTMLDivElement, XRemProps>(
  ({ children, unit = 1, style, ...props }, forwardedRef) => {
    const innerRef = useRef<HTMLDivElement>(null);

    const ref = useCallback(
      (node: HTMLDivElement | null) => {
        (innerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        if (typeof forwardedRef === 'function') {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef]
    );

    useEffect(() => {
      const element = innerRef.current;
      if (!element) return;

      const remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const unitSize = remSize * unit;

      const updateHeight = () => {
        // Reset min-height to measure natural height
        element.style.minHeight = '';

        const naturalHeight = element.scrollHeight;
        const snappedHeight = Math.ceil(naturalHeight / unitSize) * unitSize;

        if (snappedHeight !== naturalHeight) {
          element.style.minHeight = `${snappedHeight}px`;
        }
      };

      const observer = new ResizeObserver(() => {
        updateHeight();
      });

      observer.observe(element);
      updateHeight();

      return () => observer.disconnect();
    }, [unit]);

    return (
      <div ref={ref} style={style} {...props}>
        {children}
      </div>
    );
  }
);

XRem.displayName = 'XRem';
