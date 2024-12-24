import type {Meta, StoryObj} from '@storybook/vue3';
import EasyTabs from './EasyTabs.vue';

const meta = {
  title: 'Components/EasyTabs',
  component: EasyTabs,
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof EasyTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {label: 'Tab 1', value: 'qq', icon: 'icon-Image-Outline'},
      {label: 'Tab 2', value: 'ww', icon: 'icon-Image-Outline'},
      {label: 'Tab 3', value: 'ee', icon: 'icon-Image-Outline'},
      {label: 'Tab 4', value: 'rr', icon: 'icon-Image-Outline'},
      {label: 'Tab 5', value: 'tt', icon: 'icon-Image-Outline'}
    ]
  }
};