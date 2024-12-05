import { App } from 'vue';
import './assets/main.scss';

// Import all components
import EasyInput from './components/input/EasyInput.vue';
import EasyIcon from './components/icon/EasyIcon.vue';
import EasyLoader from "./components/loader/EasyLoader.vue";
import EasySelect from "@/components/easy-select/EasySelect.vue";
// Add more component imports as needed

const components = [
  EasyInput,
  EasyIcon,
  EasyLoader,
  EasySelect
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
  EasyLoader,
  EasySelect
};
