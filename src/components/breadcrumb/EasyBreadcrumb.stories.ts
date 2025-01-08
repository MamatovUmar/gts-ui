import type { Meta, StoryObj } from '@storybook/vue3';
import EasyBreadcrumb from './EasyBreadcrumb.vue';

const meta: Meta<typeof EasyBreadcrumb> = {
  title: 'Components/EasyBreadcrumb',
  component: EasyBreadcrumb,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items.',
      table: {
        type: { summary: 'BreadcrumbItem[]' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof EasyBreadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Section', href: '/section' },
      { label: 'Subsection', href: '/section/subsection' },
      { label: 'Current Page', href: '/section/subsection/current' },
    ],
  },
  render: (args) => ({
    components: { EasyBreadcrumb },
    setup() {
      const handleNavigate = (item: { label: string; href: string }) => {
        alert(`Navigating to: ${item.label} (${item.href})`);
      };

      return { args, handleNavigate };
    },
    template: `
      <EasyBreadcrumb
        :items="args.items"
        @navigate="handleNavigate"
      />
    `,
  }),
};
