import type { Meta, StoryObj } from '@storybook/vue3';
import EasyInput from './EasyInput.vue';

const meta = {
  title: 'Components/EasyInput',
  component: EasyInput,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'mini', 'large'],
    },
    password: { control: 'boolean' },
    inputMask: { control: 'boolean' },
    mask: { control: 'text' },
    bordered: { control: 'boolean' },
    uppercase: { control: 'boolean' },
    invalid: { control: 'boolean' },
    readonly: { control: 'boolean' },
  },
} satisfies Meta<typeof EasyInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Input label',
    placeholder: 'Enter text',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    password: true,
    placeholder: 'Enter password',
  },
};

export const WithMask: Story = {
  args: {
    label: 'Phone',
    inputMask: true,
    mask: '(999) 999-9999',
    placeholder: 'Enter phone number',
  },
};

export const Invalid: Story = {
  args: {
    label: 'Invalid input',
    invalid: true,
    value: 'Invalid value',
    placeholder: 'This input is invalid',
  },
};

export const Small: Story = {
  args: {
    label: 'Small input',
    size: 'small',
    placeholder: 'Small size',
  },
};

export const Mini: Story = {
  args: {
    label: 'Mini input',
    size: 'mini',
    placeholder: 'Mini size',
  },
};

export const Large: Story = {
  args: {
    label: 'Large input',
    size: 'large',
    placeholder: 'Large size',
  },
};

export const Bordered: Story = {
  args: {
    label: 'Bordered input',
    bordered: true,
    placeholder: 'With border',
  },
};
