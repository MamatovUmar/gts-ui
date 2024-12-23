import type {Meta, StoryObj} from '@storybook/vue3';
import EasyAvatar from "./EasyAvatar.vue";
const meta = {
  title: 'Components/EasyAvatar',
  component: EasyAvatar,
  tags: ['autodocs'],
  argTypes: {

  },
  args: {

  }
} satisfies Meta<typeof EasyAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initials: 'VA',
  },
};

export const Status: Story = {
  args: {
    online: true
  },
};

export const Initials: Story = {
  args: {
    initials: 'VA',
    bordered: true,
    borderColor: '#F4EBFF',
    bgColor: '#F9F5FF',
    textColor: '#7F56D9'
  },
};
