import type { Meta, StoryFn } from '@storybook/vue3';
import EasyIcon from './EasyIcon.vue';

const meta = {
  title: 'Components/Icon',
  component: EasyIcon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: [
        'Search',
        'Home',
        'russia',
        'uzbekistan',
        'united-kingdom',
        'Chat',
        'Call',
        'Calling'
      ],
      description: 'Icon name (can be used with or without "icon-" prefix)'
    },
    size: {
      control: { type: 'number', min: 12, max: 64, step: 4 }
    },
    color: {
      control: 'color'
    }
  }
} satisfies Meta<typeof EasyIcon>;

export default meta;

export const Default: StoryFn = () => ({
  components: { EasyIcon },
  template: '<EasyIcon name="Home" size="24" color="#000000" />'
});

export const MultiPathIcons: StoryFn = () => ({
  components: { EasyIcon },
  template: `
    <div style="display: flex; gap: 16px; align-items: center;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <EasyIcon name="russia" size="32" />
        <span>Russia</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <EasyIcon name="uzbekistan" size="32" />
        <span>Uzbekistan</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <EasyIcon name="united-kingdom" size="32" />
        <span>UK</span>
      </div>
    </div>
  `
});

export const ColoredIcons: StoryFn = () => ({
  components: { EasyIcon },
  template: `
    <div style="display: flex; gap: 16px; align-items: center;">
      <EasyIcon name="Chat" size="32" color="#FF0000" />
      <EasyIcon name="Call" size="32" color="#00FF00" />
      <EasyIcon name="Calling" size="32" color="#0000FF" />
    </div>
  `
});

export const Sizes: StoryFn = () => ({
  components: { EasyIcon },
  template: `
    <div style="display: flex; gap: 16px; align-items: flex-end;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <EasyIcon name="Home" size="16" />
        <span>16px</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <EasyIcon name="Home" size="24" />
        <span>24px</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <EasyIcon name="Home" size="32" />
        <span>32px</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <EasyIcon name="Home" size="48" />
        <span>48px</span>
      </div>
    </div>
  `
});
