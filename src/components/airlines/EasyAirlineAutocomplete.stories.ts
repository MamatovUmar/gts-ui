import type { Meta, StoryObj } from '@storybook/vue3'
import EasyAirlineAutocomplete from './EasyAirlineAutocomplete.vue'

const meta = {
  title: 'Components/EasyAirlineAutocomplete',
  component: EasyAirlineAutocomplete,
  tags: ['autodocs'],
} satisfies Meta<typeof EasyAirlineAutocomplete>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Авиакомпания',
  },
}
