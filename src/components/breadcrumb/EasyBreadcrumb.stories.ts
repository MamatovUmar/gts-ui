import type {Meta, StoryObj} from '@storybook/vue3';
import EasyBreadcrumb from './EasyBreadcrumb.vue';

const meta: Meta = {
  title: 'Components/Breadcrumb',
  component: EasyBreadcrumb,
  tags: ['autodocs'],
  argTypes: {
    items: []
  },
  parameters: {
    docs: {
      description: {
        component: ` EasyBreadcrumb component developed by EasyTechnologies "LLC"
        `,
      },
    },
  },

};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    home: {
      icon: 'icon-Home',
      route: '/'
    },
    items: [
      {label: 'main', route: '/main'},
      {label: 'form', route: '/form'},
      {label: 'current-page'}
    ]
  },
  render: (args) => ({
    components: {EasyBreadcrumb},
    setup() {
      return {args};
    },
    template: `
      <EasyBreadcrumb :home="args.home" :items="args.items"/>`,
  }),
};


export const WithoutHomeIcon: Story = {
  args: {
    items: [
      {label: 'main', route: '/main'},
      {label: 'form', route: '/form'},
      {label: 'current-page'}
    ]
  },
  render: (args) => ({
    components: {EasyBreadcrumb},
    setup() {
      return {args};
    },
    template: `
      <EasyBreadcrumb :items="args.items"/>`,
  }),
};

