import type { Meta, StoryObj } from '@storybook/react';
import { XCode } from './XCode';

const meta: Meta<typeof XCode> = {
  title: 'Components/XCode',
  component: XCode,
};

export default meta;
type Story = StoryObj<typeof XCode>;

const sampleCode = `function greet(name: string) {
  const message = "Hello, " + name;
  console.log(message);
  return message;
}

greet("World");`;

export const Default: Story = {
  args: {
    children: sampleCode,
  },
};

export const WithLanguage: Story = {
  args: {
    children: sampleCode,
    language: 'typescript',
  },
};

export const WithLineNumbers: Story = {
  args: {
    children: sampleCode,
    language: 'typescript',
    lineNumbers: true,
  },
};

export const Inline: Story = {
  render: () => (
    <p>
      Use the <XCode inline>console.log()</XCode> function to debug your code.
    </p>
  ),
};

export const CSSExample: Story = {
  args: {
    language: 'css',
    lineNumbers: true,
    children: `.button {
  padding: 0.5rem 1rem;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
}`,
  },
};
