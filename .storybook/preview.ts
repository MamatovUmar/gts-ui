import type { Preview } from "@storybook/vue3";
import { setup } from '@storybook/vue3';
import PrimeVue from 'primevue/config';

// Import PrimeVue styles
import 'primevue/resources/themes/aura-light-green/theme.css';

// Import global styles
import '../src/assets/main.scss';

setup((app) => {
  app.use(PrimeVue, {
    ripple: true,
    inputStyle: "filled"
  });
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
