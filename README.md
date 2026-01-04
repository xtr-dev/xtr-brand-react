# xtr-brand-react

React components and utilities for xtr.dev branding.

## Installation

```bash
npm install xtr-brand-react
```

## Components

### XLogo

Animated XTR logo that collapses from full "XTR" text to just the "X" icon.

```tsx
import { XLogo } from 'xtr-brand-react';

<XLogo />
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `delay` | `number` | `2000` | Delay in ms before collapse animation starts |
| `duration` | `number` | `500` | Animation duration in ms |
| `scale` | `number` | `1` | Scale factor for the logo |
| `margin` | `boolean` | `false` | Add margin around logo (1/3 height) |
| `stableWidth` | `boolean` | `false` | Keep full width, only clip content |
| `reveal` | `boolean` | `undefined` | Override reveal state (`true` = full, `false` = X only) |
| `revealOnHover` | `boolean` | `false` | Reveal full logo on hover |
| `className` | `string` | - | CSS class name |
| `style` | `CSSProperties` | - | Inline styles |

#### Examples

```tsx
// Basic usage - collapses after 2 seconds
<XLogo />

// Larger logo with slower animation
<XLogo scale={3} delay={3000} duration={1000} />

// With margin padding
<XLogo margin />

// Stable width (container doesn't shrink)
<XLogo stableWidth />

// Hover to reveal
<XLogo delay={0} revealOnHover />

// Controlled state
<XLogo reveal={isExpanded} />

// Always show full logo
<XLogo reveal={true} />

// Always show X only
<XLogo reveal={false} />
```

## Development

```bash
# Install dependencies
npm install

# Build library
npm run build

# Run Storybook
npm run storybook
```

## License

MIT
