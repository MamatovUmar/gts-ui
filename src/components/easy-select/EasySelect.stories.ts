import type { Meta, StoryObj } from '@storybook/vue3';
import EasySelect from "./EasySelect.vue";

const meta = {
  title: 'Components/EasySelect',
  component: EasySelect,
  tags: ['autodocs'],
  argTypes: {
    size: String,
  },
} satisfies Meta<typeof EasySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'small'
  },
};
