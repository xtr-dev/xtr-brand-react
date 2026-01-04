import type { Meta, StoryObj } from '@storybook/react';
import { XRem } from './XRem';

const meta: Meta<typeof XRem> = {
  title: 'Components/XRem',
  component: XRem,
};

export default meta;
type Story = StoryObj<typeof XRem>;

export const Default: Story = {
  render: () => (
    <div style={{ background: 'repeating-linear-gradient(to bottom, #eee 0px, #eee 1px, transparent 1px, transparent 16px)', padding: '1rem' }}>
      <XRem style={{ background: 'rgba(190, 235, 248, 0.5)', marginBottom: '1rem' }}>
        <p style={{ margin: 0 }}>This content's container height snaps to 1rem multiples.</p>
      </XRem>
      <XRem style={{ background: 'rgba(175, 239, 176, 0.5)', marginBottom: '1rem' }}>
        <p style={{ margin: 0 }}>Short text.</p>
      </XRem>
      <XRem style={{ background: 'rgba(253, 244, 184, 0.5)' }}>
        <p style={{ margin: 0 }}>Some longer content that might wrap to multiple lines depending on the container width, demonstrating how the height snaps.</p>
      </XRem>
    </div>
  ),
};

export const WithUnit: Story = {
  render: () => (
    <div style={{ background: 'repeating-linear-gradient(to bottom, #eee 0px, #eee 1px, transparent 1px, transparent 24px)', padding: '1rem' }}>
      <XRem unit={1.5} style={{ background: 'rgba(190, 235, 248, 0.5)', marginBottom: '1.5rem' }}>
        <p style={{ margin: 0 }}>Snaps to 1.5rem (24px) multiples.</p>
      </XRem>
      <XRem unit={1.5} style={{ background: 'rgba(175, 239, 176, 0.5)' }}>
        <p style={{ margin: 0 }}>Also 1.5rem grid.</p>
      </XRem>
    </div>
  ),
};
