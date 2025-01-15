import type {StoryObj} from '@storybook/vue3';
import EasyLanguageCurrencyDropdown from "./EasyLanguageCurrencyDropdown.vue";

const meta = {
  title: 'Components/EasyLanguageCurrencyDropdown',
  component: EasyLanguageCurrencyDropdown,
  tags: ['autodocs'],
  argTypes: {
    currencies: {
      control: 'object',
      description: 'Currencies',
    }
  }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currencies: [
      {
        base: 'EUR',
        ru: 'Евро',
        bool: true,
        disabled: false
      },
      {
        base: 'UAH',
        ru: 'Гривны',
        bool: true,
        disabled: false
      },
      {
        base: 'KZT',
        ru: 'Тенге',
        bool: true,
        disabled: true
      },
      {
        base: 'AZN',
        ru: 'Манат',
        bool: true,
        disabled: false
      },
      {
        base: 'HKD',
        ru: 'Гонконгские доллары',
        bool: false,
        disabled: false
      },
      {
        base: 'UZS',
        ru: 'Узбекские сумы',
        bool: true,
        disabled: true
      },
    ]
  }
}
