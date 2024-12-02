import type { Meta, StoryObj } from '@storybook/vue3';
import EasyRadioButton from './EasyRadioButton.vue';

const meta: Meta = {
  title: 'Components/EasyRadioButton',
  component: EasyRadioButton,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input label',
    name: 'food',
    value: 'bar'
  }
}


export const WithText: Story = {
  args: {
    label: 'Input label',
    text: 'Lorem ipsum dolor sit amet',
    name: 'food',
    value: 'bar'
  }
}

