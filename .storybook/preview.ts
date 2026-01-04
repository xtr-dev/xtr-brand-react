import type { Preview } from '@storybook/react-vite'
import React from 'react'
import '../src/styles/theme.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      grid: {
        cellSize: 16,
        cellAmount: 1,
        opacity: 0.15,
      },
    },
  },
};

export default preview;