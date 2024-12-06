import type { Meta, StoryObj } from '@storybook/vue3';
import EasyLoader from "./EasyLoader.vue";

const meta = {
  title: 'Components/EasyLoader',
  component: EasyLoader,
  tags: ['autodocs'],
  argTypes: {
    size: String,
  },
} satisfies Meta<typeof EasyLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'large'
  },
};
