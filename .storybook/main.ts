import type { StorybookConfig } from "@storybook/vue3-vite";
import { mergeConfig } from 'vite';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          vue: 'vue/dist/vue.esm-bundler.js',
          '@': resolve(__dirname, '../src')
        },
        dedupe: ['vue']
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@use "@/assets/colors" as *;`
          }
        }
      },
      optimizeDeps: {
        include: [
          'vue',
          'primevue/password',
          'primevue/inputtext',
          'primevue/inputmask',
          'primevue/floatlabel'
        ]
      }
    });
  }
};
export default config;
