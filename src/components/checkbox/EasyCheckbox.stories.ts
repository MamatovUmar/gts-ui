import type { Meta, StoryObj } from '@storybook/vue3';
import EasyCheckbox from './EasyCheckbox.vue';

const meta: Meta = {
  title: 'Components/EasyCheckbox',
  component: EasyCheckbox,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input label',
  }
}

export const Binary: Story = {
  args: {
    label: 'Input label',
    binary: true,
  }
}

export const WithText: Story = {
  args: {
    label: 'Input label',
    text: 'Lorem ipsum dolor sit amet',
  }
}

