import type {Meta, StoryObj} from '@storybook/vue3';
import EasyDropdown from "./EasyDropdown.vue";
import EasyButton from "../button/EasyButton.vue";
const meta = {
  title: 'Components/EasyDropdown',
  component: EasyDropdown,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof EasyDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { EasyButton, EasyDropdown },
    setup() {
      return { args };
    },
    template: `
      <EasyDropdown bg-color="#FFFFFF40">
        <template #trigger>
          <div class="icon pointer">
            <i class="icon-share"></i>
          </div>
        </template>

        <div class="socials">
         Instagram
        </div>
      </EasyDropdown>
    `,
  }),
  args: {
  },
};
