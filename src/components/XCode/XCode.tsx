import '../../styles/code.css';

import { forwardRef, HTMLAttributes, useMemo } from 'react';
import Prism from 'prismjs';
import { XRem } from '../XRem';

// Import common languages
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-go';

export interface XCodeProps extends HTMLAttributes<HTMLElement> {
  /** Code content */
  children: string;
  /** Language for syntax highlighting */
  language?: string;
  /** Display as inline code (default: false = block) */
  inline?: boolean;
  /** Show line numbers */
  lineNumbers?: boolean;
}

export const XCode = forwardRef<HTMLElement, XCodeProps>(
  ({ children, language, inline = false, lineNumbers = false, className, ...props }, ref) => {
    const highlightedCode = useMemo(() => {
      if (!language || !Prism.languages[language]) {
        return null;
      }
      return Prism.highlight(children, Prism.languages[language], language);
    }, [children, language]);

    if (inline) {
      return (
        <code ref={ref} className={`code code-inline ${className ?? ''}`} {...props}>
          {children}
        </code>
      );
    }

    if (lineNumbers) {
      const lines = highlightedCode
        ? highlightedCode.split('\n')
        : children.split('\n');

      return (
        <XRem
          ref={ref as React.Ref<HTMLDivElement>}
          className={`code code-block code-line-numbers ${className ?? ''}`}
          data-language={language}
          {...props}
        >
          <code>
            {lines.map((line, i) => (
              <span
                key={i}
                className="code-line"
                data-line-number={i + 1}
                {...(highlightedCode
                  ? { dangerouslySetInnerHTML: { __html: line + (i < lines.length - 1 ? '\n' : '') } }
                  : { children: line + (i < lines.length - 1 ? '\n' : '') }
                )}
              />
            ))}
          </code>
        </XRem>
      );
    }

    return (
      <XRem
        ref={ref as React.Ref<HTMLDivElement>}
        className={`code code-block ${className ?? ''}`}
        data-language={language}
        {...props}
      >
        {highlightedCode ? (
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        ) : (
          <code>{children}</code>
        )}
      </XRem>
    );
  }
);

XCode.displayName = 'XCode';
