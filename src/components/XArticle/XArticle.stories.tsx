import type { Meta, StoryObj } from '@storybook/react';
import { XArticle } from './XArticle';

const meta: Meta<typeof XArticle> = {
  title: 'Components/XArticle',
  component: XArticle,
};

export default meta;
type Story = StoryObj<typeof XArticle>;

export const Default: Story = {
  render: () => (
    <XArticle className={'padding'}>
      <h1>Article Title</h1>
      <p>This is the lead paragraph with some introductory text. It demonstrates the base font size and line height.</p>

      <h2>Section Heading</h2>
      <p>Regular paragraph text that follows a heading. The spacing between elements follows a consistent vertical rhythm based on the line height.</p>
      <p>A second paragraph to show the spacing between consecutive paragraphs.</p>

      <h3>Subsection</h3>
      <p>Content under a smaller heading. Here's some <code>inline code</code> as well.</p>

      <ul>
        <li>First list item</li>
        <li>Second list item</li>
        <li>Third list item</li>
      </ul>

      <blockquote>
        This is a blockquote. It's styled with a left border and italic text.
      </blockquote>

      <h4>Even Smaller Heading</h4>
      <p>More content with a <a href="#">link</a> in it.</p>

      <pre><code>{`function example() {
  return 'Hello, world!';
}`}</code></pre>

      <hr />

      <p>Final paragraph after a horizontal rule.</p>
    </XArticle>
  ),
};
