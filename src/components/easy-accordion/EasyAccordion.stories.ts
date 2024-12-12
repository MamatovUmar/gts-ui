import type {Meta, StoryObj} from '@storybook/vue3';
import EasyAccordion from './EasyAccordion.vue';

const meta = {
  title: 'Components/EasyAccordion',
  component: EasyAccordion,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof EasyAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
