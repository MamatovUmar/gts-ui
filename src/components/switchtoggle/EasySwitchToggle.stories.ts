import type {Meta, StoryObj} from '@storybook/vue3';
import EasySwitchToggle from './EasySwitchToggle.vue';

const meta = {
  title: 'Components/Form/EasySwitchToggle',
  component: EasySwitchToggle,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {type: 'select'},
      options: ['small', 'large'],
    },
  },
} satisfies Meta<typeof EasySwitchToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "large",
    label: "Select label",
    options: [
      {label: 'item 1', value: 'aassd'},
      {label: 'item 2', value: 'aas3sd'},
      {label: 'item 3', value: 'aas3sdf'}
    ]
  },
};
