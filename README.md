# @xtr-dev/xtr-brand-react

React components and utilities for xtr.dev branding.

## Installation

```bash
npm install @xtr-dev/xtr-brand-react
```

## Components

### XLogo

Animated XTR logo that collapses from full "XTR" text to just the "X" icon.

```tsx
import { XLogo } from '@xtr-dev/xtr-brand-react';

<XLogo />
<XLogo scale={2} delay={1000} />
<XLogo reveal={false} />
<XLogo revealOnHover />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `delay` | `number` | `2000` | Delay in ms before collapse animation starts |
| `duration` | `number` | `500` | Animation duration in ms |
| `scale` | `number` | `1` | Scale factor for the logo |
| `margin` | `boolean` | `false` | Add margin around logo (1/3 height) |
| `stableWidth` | `boolean` | `false` | Keep full width, only clip content |
| `reveal` | `boolean` | `undefined` | Override reveal state (`true` = full, `false` = X only) |
| `revealOnHover` | `boolean` | `false` | Reveal full logo on hover |

### XButton

Styled button with color variants.

```tsx
import { XButton } from '@xtr-dev/xtr-brand-react';

<XButton>Click me</XButton>
<XButton variant="pastel-green">Success</XButton>
<XButton variant="pastel-red" disabled>Disabled</XButton>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'body' \| 'white' \| 'pastel-yellow' \| 'pastel-green' \| 'pastel-red' \| 'pastel-blue'` | `'body'` | Button color variant |

### XFlex

Flexbox layout wrapper.

```tsx
import { XFlex } from '@xtr-dev/xtr-brand-react';

<XFlex gap="1rem">
  <div>Item 1</div>
  <div>Item 2</div>
</XFlex>

<XFlex horizontal wrap gap="0.5rem">
  <div>Horizontal</div>
  <div>Wrapped</div>
</XFlex>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `horizontal` | `boolean` | `false` | Row direction (default is column) |
| `wrap` | `boolean` | `false` | Enable flex wrap |
| `gap` | `string` | - | Gap between items |
| `align` | `string` | - | Align items |
| `justify` | `string` | - | Justify content |
| `grow` | `boolean` | `false` | Flex grow to fill container |

### XGrid

CSS Grid layout wrapper.

```tsx
import { XGrid } from '@xtr-dev/xtr-brand-react';

<XGrid columns={3} gap="1rem">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</XGrid>

<XGrid columns="1fr 2fr 1fr" rowGap="1rem">
  <div>Narrow</div>
  <div>Wide</div>
  <div>Narrow</div>
</XGrid>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `number \| string` | - | Number of columns or grid-template-columns |
| `rows` | `number \| string` | - | Number of rows or grid-template-rows |
| `gap` | `string` | - | Gap between items |
| `rowGap` | `string` | - | Row gap |
| `columnGap` | `string` | - | Column gap |

### XArticle

Article wrapper with typography styles and vertical rhythm.

```tsx
import { XArticle } from '@xtr-dev/xtr-brand-react';

<XArticle className="theme background padding">
  <h1>Title</h1>
  <p>Content with proper typography.</p>
  <ul>
    <li>List item</li>
  </ul>
  <pre><code>code block</code></pre>
</XArticle>
```

### XCode

Code block with Prism.js syntax highlighting.

```tsx
import { XCode } from '@xtr-dev/xtr-brand-react';

<XCode language="typescript" lineNumbers>
{`function hello(name: string) {
  return "Hello, " + name;
}`}
</XCode>

<p>Use <XCode inline>console.log()</XCode> to debug.</p>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `language` | `string` | - | Language for syntax highlighting |
| `inline` | `boolean` | `false` | Display as inline code |
| `lineNumbers` | `boolean` | `false` | Show line numbers |

Supported languages: typescript, javascript, jsx, tsx, css, json, bash, markdown, python, rust, go

### XRem

Wrapper that snaps element height to rem multiples (for vertical rhythm).

```tsx
import { XRem } from '@xtr-dev/xtr-brand-react';

<XRem>
  Content with height snapped to 1rem multiples
</XRem>

<XRem unit={0.5}>
  Snaps to 0.5rem multiples
</XRem>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `unit` | `number` | `1` | Rem multiple to snap to |

## Theme

Import the theme CSS for fonts and color variables:

```tsx
import '@xtr-dev/xtr-brand-react/dist/styles/theme.css';
```

Use the `.theme` class for themed containers:

```tsx
<div className="theme background padding">
  Themed content
</div>
```

### Dark Mode

Supports system dark mode automatically, or override manually:

```html
<html data-theme="dark">
<html data-theme="light">
```

### CSS Variables

```css
--font-body: 'Cantarell', sans-serif;
--font-header: 'Geist', sans-serif;
--color-body: #333333;
--color-white: #ffffff;
--color-pastel-yellow: #fdf4b8;
--color-pastel-green: #afefb0;
--color-pastel-red: #ffd7d6;
--color-pastel-blue: #beebf8;
--theme-fg: current foreground color;
--theme-bg: current background color;
```

## Development

```bash
npm install
npm run storybook    # Run Storybook
npm run build        # Build library
```

## License

MIT
