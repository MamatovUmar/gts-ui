import type {Meta, StoryObj} from '@storybook/vue3';
import EasyMultiSelect from "./EasyMultiSelect.vue";

const meta = {
  title: 'Components/EasyMultiSelect',
  component: EasyMultiSelect,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {type: 'select'},
      options: ['small', 'large'],
    },
  },
} satisfies Meta<typeof EasyMultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "large",
    label: "Select label",
    options: [
      {label: 'asdf', value: 'aassd'},
      {label: 'asdf', value: 'awas3sd'},
      {label: 'asdf', value: 'aaws3sd'},
      {label: 'asdf', value: 'aawas3sd'},
      {label: 'asdf', value: 'aasssdfd'}
    ]
  },
};
export const Filter: Story = {
  args: {
    size: "large",
    filter: true,
    options: [
      {label: 'asdf', value: 'aassd'},
      {label: 'asdf', value: 'aass3sd'},
      {label: 'asdf', value: 'aadf3sd'},
      {label: 'asdf', value: 'aas3аsd'},
      {label: 'asdf', value: 'aassdfd'}
    ]
  },
};
