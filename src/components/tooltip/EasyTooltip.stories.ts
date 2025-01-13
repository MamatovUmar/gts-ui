// src/stories/PrimeTooltip.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3';
import Tooltip from 'primevue/tooltip';
import Button from 'primevue/button';


const meta: Meta = {
  title: 'PrimeVue/EasyTooltip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The **EasyTooltip** directive provides advisory information for a component. You can use it with different positions like \`top\`, \`bottom\`, \`left\`, and \`right\`.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    directives: { tooltip: Tooltip },
    components: { Button },
    setup() {
      return {};
    },
    template: `
      <div style="padding: 20px;">
        <Button
          v-tooltip="'this is tooltip'"
          style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Hover me
        </Button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
<div style="padding: 20px;">
  <button
    v-tooltip="'Default Tooltip'"
    style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
    Hover me
  </button>
</div>
        `,
      },
    },
  },
};


export const AutoHide: Story = {
  render: () => ({
    directives: { tooltip: Tooltip },
    components: { Button },
    setup() {
      return {};
    },
    template: `
      <div style="padding: 20px;">
        <Button
          v-tooltip="{value: 'autoHide false', autoHide: false}"
          style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Hover me
        </Button>
<br>
        how to use: v-tooltip="{value: 'something', autoHide: false}"
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
<div style="padding: 20px;">
  <button
    v-tooltip="'autoHide false'"
    style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
    Hover me
  </button>


</div>
        `,
      },
    },
  },
};


export const Positioning: Story = {
  render: () => ({
    directives: { tooltip: Tooltip },
    components: { Button },
    setup() {
      return {};
    },
    template: `
      <div style="padding: 20px; display: flex; gap: 20px;">

        <Button
          severity="secondary"
          v-tooltip.bottom="'Bottom Tooltip'">
          Hover me (Bottom)
        </Button>

        <Button
          severity="primary"
          v-tooltip.left="'Left Tooltip'">
          Hover me (Left)
        </Button>

        <Button
          severity="danger"
          v-tooltip.right="'Right Tooltip'">
          Hover me (Right)
        </Button>

        <Button
          severity="primary"
          v-tooltip.right="'Right Tooltip'">
          Hover me (Right)
        </Button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
<div style="padding: 20px; display: flex; gap: 20px;">

  <button
    v-tooltip.bottom="'Bottom Tooltip'"
    style="padding: 10px 20px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;">
    Hover me (Bottom)
  </button>

  <button
    v-tooltip.left="'Left Tooltip'"
    style="padding: 10px 20px; background: #ffc107; color: white; border: none; border-radius: 4px; cursor: pointer;">
    Hover me (Left)
  </button>

  <button
    v-tooltip.right="'Right Tooltip'"
    style="padding: 10px 20px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;">
    Hover me (Right)
  </button>

</div>
        `,
      },
    },
  },
};
