import { App } from 'vue';
import './assets/main.scss';

// Import all components
import EasyInput from './components/input/EasyInput.vue';
import EasyIcon from './components/icon/EasyIcon.vue';
import EasyCheckbox from './components/checkbox/EasyCheckbox.vue';
import EasyRadioButton from './components/radio/EasyRadioButton.vue';
import EasyButton from './components/button/EasyButton.vue';
import EasyTag from './components/tag/EasyTag.vue'
// import EasyTextarea from "@/components/textarea/EasyTextarea.vue";

const components = [
  EasyInput,
  EasyIcon,
  EasyRadioButton,
  EasyCheckbox,
  EasyButton,
  EasyTag,
  // EasyTextarea
  // Add more components
];

export default {
  install(app: App) {
    components.forEach(component => {
      const componentName = component.name || component.__name;
      if (componentName) {
        app.component(componentName, component);
      }
    });
  }
};

// Export individual components for direct import
export {
  EasyInput,
  EasyIcon,
  EasyRadioButton,
  EasyCheckbox,
  EasyButton,
  EasyTag,
  // EasyTextarea
  // Add more component exports
};
