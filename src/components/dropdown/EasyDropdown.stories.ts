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
      <EasyDropdown class="mb-30">
        <template #trigger>
          <EasyButton label="Dropdown" size="mini" severity="secondary" outlined />
        </template>

        <div class="socials">
         Instagram
        </div>
      </EasyDropdown>
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
    `,
  }),
  args: {
  },
};
