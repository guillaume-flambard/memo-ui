import type { Preview } from '@storybook/react';
import '@memo-ui/core/tailwind.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    backgrounds: {
      default: 'paper',
      values: [
        { name: 'paper', value: '#FAFBFC' },
        { name: 'encre', value: '#0E1320' },
      ],
    },
    docs: {
      toc: true,
    },
  },
};

export default preview;
