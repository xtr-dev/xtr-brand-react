import '../../styles/button.css';

import { forwardRef, ButtonHTMLAttributes } from 'react';

export interface XButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'black' | 'body' | 'white' | 'pastel-yellow' | 'pastel-green' | 'pastel-red' | 'pastel-blue';
}

export const XButton = forwardRef<HTMLButtonElement, XButtonProps>(
  ({ children, variant = 'black', ...props }, ref) => {
    return (
      <button ref={ref} {...props} className={`button ${variant}`}>
        {children}
      </button>
    );
  }
);

XButton.displayName = 'XButton';
