import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import PrimeVue from 'primevue/config';

// Import global styles
import '../src/assets/main.scss';
import '../src/assets/icomoon/style.css';

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
