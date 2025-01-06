import type { Meta, StoryObj } from '@storybook/vue3';
import Tag from 'primevue/tag'

const meta: Meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  argTypes: {
    severity: {
      control: 'select',
      options: ['success', 'secondary', 'info', 'warning', 'danger', 'contrast'],
      description: 'To determine the state.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
  },
  tags: ['autodocs'],
  args: {
    value: 'Default Value',
    rounded: false,
    severity: 'info',
  },
};



export const Rounded: Story = {
  argTypes: {
    rounded: {
      control: 'boolean',
      type: 'boolean',
      description: 'Rounded makes it circular.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },

  },
  args: {
    value: 'Rounded Tag',
    rounded: true,
    severity: 'success',
  },
};


export const WithIcon: Story = {
  argTypes: {
    icon: {
      control: 'text',
      type: 'boolean',
      description: 'Rounded makes it circular.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },

  },
  args: {
    value: 'with icon',
    rounded: false,
    severity: 'success',
    icon : "icon-Add-User-Outline"
  },
};

export const WithSlot: Story = {
  args: {
    value : "with slot icon",
    rounded: true,
    severity: 'danger',
  },
  render: (args) => ({
    components: { Tag },
    setup() {
      return { args };
    },
    template: `
      <Tag severity="danger" v-bind="args">
        <span>
          <i class="icon-Add-User-Outline"></i>
        </span>
      </Tag>
    `,
  }),
};
