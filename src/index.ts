import { App } from 'vue';
import './assets/main.scss';

// Import all components
import EasyInput from './components/input/EasyInput.vue';
import EasyIcon from './components/icon/EasyIcon.vue';
import EasyCheckbox from './components/checkbox/EasyCheckbox.vue';
import EasyRadioButton from './components/radio/EasyRadioButton.vue';
import EasyButton from './components/button/EasyButton.vue';
import EasyDropdown from './components/dropdown/EasyDropdown.vue';
import EasyLoader from './components/loader/EasyLoader.vue';
import EasyAirline from './components/airlines/EasyAirlineAutocomplete.vue';
import EasyAvatar from './components/avatar/EasyAvatar.vue';
import EasySelect from './components/select/EasySelect.vue';
import EasyCity from './components/city/CityAutocomplete.vue';
import EasyCountry from './components/country/CountryAutocomplete.vue';
import EasyCurrency from './components/currency/CurrencyAutocomplete.vue';
import EasyDocument from './components/document/DocumentAutocomplete.vue';
import EasyTabs from './components/tabs/EasyTabs.vue';
import EasyBackground from './components/background/EasyBackground.vue';
import EasyLayout from './components/layout/EasyLayout.vue';
import EasyModal from './components/modal/EasyModal.vue';
import EasyConfirmModal from './components/modal/EasyConfirmModal.vue';
import EasySidebar from './components/sidebar/NavigationSidebar.vue';
import EasyBreadcrumb from "@/components/breadcrumb/EasyBreadcrumb.vue";


const components = [
  EasyInput,
  EasyIcon,
  EasyRadioButton,
  EasyCheckbox,
  EasyButton,
  EasyDropdown,
  EasyLoader,
  EasyAirline,
  EasyAvatar,
  EasySelect,
  EasyCity,
  EasyCountry,
  EasyCurrency,
  EasyDocument,
  EasyTabs,
  EasyBackground,
  EasyLayout,
  EasyModal,
  EasyConfirmModal,
  EasySidebar,
  EasyBreadcrumb
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
  EasyDropdown,
  EasyLoader,
  EasyAirline,
  EasyAvatar,
  EasySelect,
  EasyCity,
  EasyCountry,
  EasyCurrency,
  EasyDocument,
  EasyTabs,
  EasyBackground,
  EasyLayout,
  EasyModal,
  EasyConfirmModal,
  EasySidebar,
  EasyBreadcrumb
  // Add more component exports
};

// Export all types
export type {
  IAirline,
  ICountry,
  ICurrency,
  IDocument,
  ICity
} from './types/autocomplete';
export type { IItem, DatepickerModelType, ISidebarItem } from './types/ui';

// Export utility functions
export { catcher } from './utils/catcher';
export { debounce } from './utils/debounce';
export { padStart } from './utils/string';
