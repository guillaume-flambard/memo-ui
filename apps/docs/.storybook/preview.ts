import type { Preview } from '@storybook/react';
import './preview.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // Canvas only — avoids Storybook chrome (panels, docs tabs) false positives
      context: '#storybook-root',
      test: 'todo',
      options: {
        iframes: false,
      },
    },
    backgrounds: {
      default: 'paper',
      values: [
        { name: 'paper', value: '#FAFBFC' },
        { name: 'surface', value: '#FFFFFF' },
        { name: 'encre', value: '#0E1320' },
      ],
    },
    docs: {
      toc: true,
      // Keep autodocs; a11y audits should be run from Canvas, not Docs
    },
  },
};

export default preview;
