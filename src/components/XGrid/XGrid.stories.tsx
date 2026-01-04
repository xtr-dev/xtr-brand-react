import type { Meta, StoryObj } from '@storybook/react';
import { XGrid } from './XGrid';

const meta: Meta<typeof XGrid> = {
  title: 'Components/XGrid',
  component: XGrid,
};

export default meta;
type Story = StoryObj<typeof XGrid>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '1rem', background: '#afefb0', border: '1px solid #2ecc71' }}>
    {children}
  </div>
);

export const ThreeColumns: Story = {
  render: () => (
    <XGrid columns={3} gap="1rem">
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
      <Box>6</Box>
    </XGrid>
  ),
};

export const TwoByTwo: Story = {
  render: () => (
    <XGrid columns={2} rows={2} gap="1rem">
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
    </XGrid>
  ),
};

export const CustomTemplate: Story = {
  render: () => (
    <XGrid columns="1fr 2fr 1fr" gap="1rem">
      <Box>Narrow</Box>
      <Box>Wide</Box>
      <Box>Narrow</Box>
    </XGrid>
  ),
};

export const WithGaps: Story = {
  render: () => (
    <XGrid columns={3} rowGap="2rem" columnGap="0.5rem">
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
      <Box>6</Box>
    </XGrid>
  ),
};
