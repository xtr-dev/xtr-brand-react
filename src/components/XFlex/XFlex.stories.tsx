import type { Meta, StoryObj } from '@storybook/react';
import { XFlex } from './XFlex';

const meta: Meta<typeof XFlex> = {
  title: 'Components/XFlex',
  component: XFlex,
};

export default meta;
type Story = StoryObj<typeof XFlex>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '1rem', background: '#beebf8', border: '1px solid #3498db' }}>
    {children}
  </div>
);

export const Vertical: Story = {
  render: () => (
    <XFlex gap="1rem">
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </XFlex>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <XFlex horizontal gap="1rem">
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </XFlex>
  ),
};

export const Wrap: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <XFlex horizontal wrap gap="1rem">
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
        <Box>Item 4</Box>
        <Box>Item 5</Box>
      </XFlex>
    </div>
  ),
};

export const Centered: Story = {
  render: () => (
    <XFlex horizontal align="center" justify="center" gap="1rem" style={{ height: '200px', border: '1px dashed #ccc' }}>
      <Box>Centered</Box>
      <Box>Items</Box>
    </XFlex>
  ),
};
