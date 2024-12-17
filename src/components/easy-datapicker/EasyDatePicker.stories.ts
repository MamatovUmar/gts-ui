import type {Meta, StoryObj} from '@storybook/vue3';
import EasyDatePicker from "./EasyDatePicker.vue";

const meta = {
  title: 'Components/EasyDatePicker',
  component: EasyDatePicker,
  tags: ['autodocs'],
  argTypes: {
    selectionMode: {
      options: ['multiple', 'range', 'single'],
    }
  },
} satisfies Meta<typeof EasyDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectionMode: 'single'
  },
};
export const Range: Story = {
  args: {
    selectionMode: 'range'
  },
};
export const Multiple: Story = {
  args: {
    selectionMode: 'multiple'
  },
};

