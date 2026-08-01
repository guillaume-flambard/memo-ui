import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(dirname, '../../..');

const config: StorybookConfig = {
  stories: [
    '../stories/components/**/*.stories.@(ts|tsx)',
    '../stories/layout/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tailwindcss()],
      resolve: {
          alias: {
            '@memo-ui/react': path.join(root, 'packages/react/src'),
            '@memo-ui/utils': path.join(root, 'packages/utils/src'),
          },
      },
    });
  },
};

export default config;
