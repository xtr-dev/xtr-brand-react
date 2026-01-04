import '../../styles/article.css';

import { forwardRef, HTMLAttributes } from 'react';

export interface XArticleProps extends HTMLAttributes<HTMLElement> {}

export const XArticle = forwardRef<HTMLElement, XArticleProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <article ref={ref} className={`article ${className ?? ''}`} {...props}>
        {children}
      </article>
    );
  }
);

XArticle.displayName = 'XArticle';
