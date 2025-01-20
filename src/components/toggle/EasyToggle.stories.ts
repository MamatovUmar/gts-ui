import type {Meta, StoryObj} from '@storybook/vue3';
import InputSwitch from 'primevue/inputswitch';

import './EasyToggle.scss'

const meta: Meta = {
  title: 'Components/EasyToggle',
  tags: ['autodocs'],
  component: InputSwitch,
  argTypes: {
    model: {
      control: 'boolean',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: 'false'},
      },
    },
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    model: false,
  },
  render: (args) => ({
    components: {InputSwitch},
    setup() {
      return {args};
    },
      template: `
        <InputSwitch v-model="args.model" />
      `
  })
};
