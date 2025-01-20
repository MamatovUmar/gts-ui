import type { Meta, StoryObj } from '@storybook/vue3';
import EasySectionMessage from "./EasySectionMessage.vue";

const meta: Meta = {
  title: 'Components/EasySectionMessage',
  component: EasySectionMessage,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: "text"
    },
    description: {
      control: "text"
    },
    type: {
      control: 'text'
    }
  }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title',
    description: 'You\'re not allowed to change these restrictions. It\'s either due to the restrictions on the page, or permission settings for this space.'
  }
}
