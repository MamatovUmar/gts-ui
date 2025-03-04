import type { Meta, StoryObj } from '@storybook/vue3'
import ServicesTab from './ServicesTab.vue'

const meta = {
  title: 'Components/ServicesTab',
  component: ServicesTab,
  tags: ['autodocs'],
  argTypes: {
    locale: {
      options: ['ru', 'uz', 'en'],
    }
  },
} satisfies Meta<typeof ServicesTab>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    locale: 'ru',
  },
}
