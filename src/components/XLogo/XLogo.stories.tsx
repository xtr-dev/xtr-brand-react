import type { Meta, StoryObj } from '@storybook/react';
import { XLogo } from './XLogo';

const meta: Meta<typeof XLogo> = {
  title: 'Components/XLogo',
  component: XLogo,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    delay: {
      control: { type: 'number', min: 0, max: 10000, step: 100 },
      description: 'Delay before animation starts (ms)',
    },
    duration: {
      control: { type: 'number', min: 100, max: 2000, step: 50 },
      description: 'Animation duration (ms)',
    },
    scale: {
      control: { type: 'number', min: 0.5, max: 5, step: 0.5 },
      description: 'Scale factor for the logo',
    },
    margin: {
      control: 'boolean',
      description: 'Add margin around the logo (1/3 height)',
    },
    stableWidth: {
      control: 'boolean',
      description: 'Keep width stable at full logo width',
    },
    reveal: {
      control: 'boolean',
      description: 'Override reveal state (true = full, false = X only)',
    },
    revealOnHover: {
      control: 'boolean',
      description: 'Reveal full logo on hover',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    delay: 2000,
    duration: 500,
    scale: 1,
  },
};

export const Large: Story = {
  args: {
    delay: 2000,
    duration: 500,
    scale: 3,
  },
};

export const FastAnimation: Story = {
  args: {
    delay: 1000,
    duration: 200,
    scale: 2,
  },
};

export const SlowAnimation: Story = {
  args: {
    delay: 3000,
    duration: 1500,
    scale: 2,
  },
};

export const Immediate: Story = {
  args: {
    delay: 0,
    duration: 500,
    scale: 2,
  },
  parameters: {
    docs: {
      description: {
        story: 'Logo collapses immediately on mount',
      },
    },
  },
};

export const WithMargin: Story = {
  args: {
    delay: 2000,
    duration: 500,
    scale: 2,
    margin: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Logo with 1/3 height margin around it',
      },
    },
  },
};

export const StableWidth: Story = {
  args: {
    delay: 2000,
    duration: 500,
    scale: 2,
    stableWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Logo keeps full width while content clips',
      },
    },
  },
};

export const RevealOnHover: Story = {
  args: {
    delay: 0,
    scale: 2,
    revealOnHover: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover to reveal the full logo',
      },
    },
  },
};

export const AlwaysRevealed: Story = {
  args: {
    scale: 2,
    reveal: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Logo is always fully revealed',
      },
    },
  },
};

export const AlwaysCollapsed: Story = {
  args: {
    scale: 2,
    reveal: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Logo is always collapsed to X',
      },
    },
  },
};
