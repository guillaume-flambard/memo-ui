import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(dirname, '../../..');

const config: StorybookConfig = {
  stories: [
    '../stories/docs/**/*.mdx',
    '../stories/components/**/*.stories.@(ts|tsx)',
    '../stories/layout/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-mcp',
      options: {
        endpoint: '/mcp',
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    // @ts-expect-error preview AI manifests (Storybook 10.5+)
    experimentalComponentsManifest: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      tsconfigPath: path.join(dirname, '../tsconfig.json'),
    },
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
