import type {Meta, StoryObj} from '@storybook/vue3';
import EasyTextarea from './EasyTextarea.vue';

const meta: Meta = {
  title: "Components/EasyTextarea",
  component: EasyTextarea,
  tags: ["autodocs"],
  argTypes: {
    invalid: {
      control: "boolean",
      description: "Determines if the textarea is in an error state.",
      table: {
        defaultValue: {summary: 'false'},
      },
    },
    placeholder: {
      control: "text",
      description: "Displays a placeholder inside the textarea.",
      table: {
        defaultValue: {
          summary: "Enter ...",
          detail: "Enter your text ...",
        },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disables the textarea, preventing user interaction.",
      table: {
        defaultValue: {
          summary: "false"
        }
      }
    },
    rows: {
      control: "number",
      description: "Sets the number of visible rows in the textarea.",
      table: {
        defaultValue: {
          summary: "20"
        }
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    invalid: false,
    placeholder: "Enter your text...",
  },
  render: (args) => ({
    components: {EasyTextarea},
    setup() {
      return {args};
    },
    template: `
      <div style="max-width: 400px; margin: auto;">
        <EasyTextarea
          :invalid="args.invalid"
          v-model="args.model"
          :placeholder="args.placeholder"/>
        <p style="margin-top: 1rem; font-size: 0.9rem; color: #42b2d7">
          Current Value: {{ args.model ? args.model : "enter the text" }}
        </p>
      </div>
    `,
  }),
};

export const Invalid: Story = {
  args: {
    placeholder: 'Enter your text...',
    invalid: true,
  },
  render: (args) => ({
    components: {EasyTextarea},
    setup() {
      return {args};
    },
    template: `
      <div style="max-width: 400px; margin: auto;">
        <EasyTextarea
          v-model="args.model"
          :placeholder="args.placeholder"
          :invalid="args.invalid"/>
        <p style="margin-top: 1rem; font-size: 0.9rem;">
          Current Value: {{ args.model }}
        </p>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    placeholder: 'Enter your text...',
    disabled: true,
  },
  render: (args) => ({
    components: {EasyTextarea},
    setup() {
      return {args};
    },
    template: `
      <div style="max-width: 400px; margin: auto;">
        <EasyTextarea
          v-model="args.model"
          :placeholder="args.placeholder"
          :disabled="args.disabled"/>
      </div>
    `,
  }),
};

export const Rows: Story = {
  args: {
    placeholder: "Enter your text...",
    rows: 20,
  },
  render: (args) => ({
    components: {EasyTextarea},
    setup() {
      return {args};
    },
    template: `
      <div style="max-width: 400px; margin: auto;">
        <EasyTextarea
          v-model="args.model"
          :placeholder="args.placeholder"
          :rows="args.rows"/>
      </div>
    `,
  }),
};
