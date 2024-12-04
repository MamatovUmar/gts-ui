import type {Meta, StoryObj} from '@storybook/vue3';
import EasyModal from './EasyModal.vue';

const meta: Meta = {
  title: 'Components/EasyModal',
  component: EasyModal,
  tags: ['autodocs'],
  argTypes: {
    model: {
      control: 'boolean',
      description: 'Controls whether the modal is visible or not (v-model).',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: 'false'},
      },
    },
    title: {
      control: 'text',
      description: 'The title displayed in the modal header.',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: '""'},
      },
    },
    whiteBg: {
      control: 'boolean',
      description: 'Determines if the modal background should be white.',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: 'false'},
      },
    },
    maxWidth: {
      control: 'text',
      description: 'Sets the maximum width of the modal.',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: '"650px"'},
      },
    },
    hideClose: {
      control: 'boolean',
      description: 'If true, hides the close button.',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: 'false'},
      },
    },
    noScroll: {
      control: 'boolean',
      description: 'Prevents the page from scrolling when the modal is open.',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: 'false'},
      },
    },
    close: {
      description: 'Emits when the modal is closed.',
      table: {
        type: {summary: 'Event'},
      },
    },

    position: {
      control: "text",
      description: 'Prevents the page from scrolling when the modal is open.',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'center'},
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: ` Modal component developed by EasyTechnologies "LLC"
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'This is default modal',
    whiteBg: true,
    model: false,
    maxWidth: '650px',
    hideClose: false,
    noScroll: true,
  },
  render: (args) => ({
    components: {EasyModal},
    setup() {
      return {args};
    },
    template: `
      <button class="p-button" @click="args.model = true">Open Modal</button>
      <h3>Basic modal</h3>
      <EasyModal
        :white-bg="args.whiteBg"
        v-model="args.model"
        v-bind="args"
        :max-width="args.maxWidth"
        :hide-close="args.hideClose"
        :no-scroll="args.noScroll"
        @close="args.close"/>`,
  }),
};

export const ExpandToWidth: Story = {
  args: {
    title : "full width",
    whiteBg: true,
    model: false,
    hideClose: false,
    noScroll: true,
    position: 'center'
  },
  render: (args) => ({
    components: {EasyModal},
    setup() {
      return {args};
    },
    template: `
      <button
        class="p-button"
        @click="args.model = true">
        Open Modal
      </button>

      <h3>full width modal</h3>

      <EasyModal
        :white-bg="args.whiteBg"
        v-model="args.model"
        v-bind="args"
        :position="args.position"
        :max-width="args.maxWidth"
        :hide-close="args.hideClose"
        :no-scroll="args.noScroll"
        @close="args.close"/>`,
  }),
}
