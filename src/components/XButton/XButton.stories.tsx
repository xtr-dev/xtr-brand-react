import type { Meta, StoryObj } from '@storybook/react';
import { XButton } from './XButton';

const meta: Meta<typeof XButton> = {
  title: 'Components/XButton',
  component: XButton,
};

export default meta;
type Story = StoryObj<typeof XButton>;

export const Default: Story = {
  args: {
    children: 'Click me',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const WithOnClick: Story = {
  args: {
    children: 'Click me',
    onClick: () => alert('Clicked!'),
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <XButton variant="body">Body</XButton>
        <XButton variant="white">White</XButton>
        <XButton variant="pastel-yellow">Pastel Yellow</XButton>
        <XButton variant="pastel-green">Pastel Green</XButton>
        <XButton variant="pastel-red">Pastel Red</XButton>
        <XButton variant="pastel-blue">Pastel Blue</XButton>

        <XButton variant="body">Body</XButton>
        <XButton variant="white">White</XButton>
        <XButton variant="pastel-yellow">Pastel Yellow</XButton>
        <XButton variant="pastel-green">Pastel Green</XButton>
        <XButton variant="pastel-red">Pastel Red</XButton>
        <XButton variant="pastel-blue">Pastel Blue</XButton>      <XButton variant="body">Body</XButton>
        <XButton variant="white">White</XButton>
        <XButton variant="pastel-yellow">Pastel Yellow</XButton>
        <XButton variant="pastel-green">Pastel Green</XButton>
        <XButton variant="pastel-red">Pastel Red</XButton>
        <XButton variant="pastel-blue">Pastel Blue</XButton>      <XButton variant="body">Body</XButton>
        <XButton variant="white">White</XButton>
        <XButton variant="pastel-yellow">Pastel Yellow</XButton>
        <XButton variant="pastel-green">Pastel Green</XButton>
        <XButton variant="pastel-red">Pastel Red</XButton>
        <XButton variant="pastel-blue">Pastel Blue</XButton>      <XButton variant="body">Body</XButton>
        <XButton variant="white">White</XButton>
        <XButton variant="pastel-yellow">Pastel Yellow</XButton>
        <XButton variant="pastel-green">Pastel Green</XButton>
        <XButton variant="pastel-red">Pastel Red</XButton>
        <XButton variant="pastel-blue">Pastel Blue</XButton>
    </div>
  ),
};
