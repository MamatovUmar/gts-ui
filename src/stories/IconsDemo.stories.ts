import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent, ref, computed } from 'vue';
import './icons-demo.css';

const IconsDemo = defineComponent({
  name: 'IconsDemo',
  setup() {
    // Icons with multiple paths need special handling
    const multiPathIcons = {
      'uzbekistan': 18,
      'russia': 3,
      'united-kingdom': 14,
      'airlineseates': 3,
      'Discount1': 4,
      'Chat': 4,
      'Chart': 4,
      'card2': 4,
      'card2-1': 4,
      'card1': 4,
      'Call-Missed': 3,
      'Call-Silent': 3,
      'Call': 3,
      'Calling': 3,
      'Leading-element': 3
    };

    const icons = [
      'uzbekistan',
      'russia',
      'united-kingdom',
      'receipt-search',
      'airlineseat-persone',
      'airlineseates',
      'airlineseat',
      'violin',
      'Move',
      'Two-arrow-2',
      'Refresh-2',
      'Close-2',
      'Sun',
      'Moon',
      'Minus',
      'Add',
      'Plane',
      'Milk',
      'Hospital',
      'Global',
      'Flight-on',
      'Flight-off',
      'Coffee',
      'Card-pos',
      'Buildings',
      'two-one-two',
      'more-vertical',
      'arrow_drop_down_24px',
      'More-Square',
      'More-Circle',
      'Document',
      'Chack',
      'Calendar',
      'Bag-2',
      'Bag',
      'User',
      'User1',
      'Activity',
      'Add-User',
      'Arrow---Down-2',
      'Arrow---Down-3',
      'Arrow---Down-Circle',
      'Arrow---Down-Square',
      'Arrow---Down',
      'Arrow---Left-2',
      'Arrow---Left-3',
      'Arrow---Left-Circle',
      'Arrow---Left-Square',
      'Arrow---Left',
      'Arrow---Right-2',
      'Arrow---Right-3',
      'Arrow---Right-Circle',
      'Arrow---Right-Square',
      'Arrow---Right',
      'Arrow---Up-2',
      'Arrow---Up-3',
      'Arrow---Up-Circle',
      'Arrow---Up-Square',
      'Arrow---Up',
      'Buy',
      'Call',
      'Call-Missed',
      'Call-Silent',
      'Calling',
      'card2',
      'card2-1',
      'Category',
      'Chart',
      'Chat',
      'Close-Square',
      'Danger',
      'Delete',
      'Discovery',
      'Document',
      'Download',
      'Edit',
      'Edit-Square',
      'Filter',
      'Filter-2',
      'Folder',
      'Graph',
      'Heart',
      'Hide',
      'Home',
      'Image',
      'Image-2',
      'Info-Circle',
      'Info-Square',
      'Leading-element',
      'Location',
      'Lock',
      'Login',
      'Logout',
      'Message',
      'Notification',
      'Paper',
      'Paper-Download',
      'Paper-Fail',
      'Paper-Negative',
      'Paper-Plus',
      'Paper-Upload',
      'Password',
      'Play',
      'Plus',
      'Profile',
      'Scan',
      'Search',
      'Send',
      'Setting',
      'Shield-Done',
      'Shield-Fail',
      'Show',
      'Star',
      'Swap',
      'Tick-Square',
      'Ticket',
      'Ticket-Star',
      'Time-Circle',
      'Time-Square',
      'transfer-filed',
      'Unlock',
      'Upload',
      'Video',
      'Voice',
      'Voice-2',
      'Volume-Down',
      'Volume-Off',
      'Volume-Up',
      'Wallet',
      'Work',
      'close',
      'hotel-Outline',
      // Outline versions
      'Activity-Outline',
      'Add-User-Outline',
      'Arrow---Down-2-Outline',
      'Arrow---Down-3-Outline',
      'Arrow---Down-Circle-Outline',
      'Arrow---Down-Square-Outline',
      'Arrow---Down-Outline',
      'Arrow---Left-2-Outline',
      'Arrow---Left-3-Outline',
      'Arrow---Left-Circle-Outline',
      'Arrow---Left-Square-Outline',
      'Arrow---Left-Outline',
      'Arrow---Right-2-Outline',
      'Arrow---Right-3-Outline',
      'Arrow---Right-Circle-Outline',
      'Arrow---Right-Square-Outline',
      'Arrow---Right-Outline',
      'Arrow---Up-2-Outline',
      'Arrow---Up-3-Outline',
      'Arrow---Up-Circle-Outline',
      'Arrow---Up-Square-Outline',
      'Arrow---Up-Outline',
      'Bag-Outline',
      'Buy-Outline',
      'Calendar-Outline',
      'Camera-Outline',
      'Category-Outline',
      'Chart-Outline',
      'Chat-Outline',
      'Close-Square-Outline',
      'Danger-Circle-Outline',
      'Delete-Outline',
      'Discovery-Outline',
      'Document-Outline',
      'Download-Outline',
      'Edit-Outline',
      'Edit-Square-Outline',
      'Filter-Outline',
      'Folder-Outline',
      'Game-Outline',
      'Graph-Outline',
      'Heart-Outline',
      'Hide-Outline',
      'Home-Outline',
      'Image-2-Outline',
      'Image-Outline',
      'Info-Circle-Outline',
      'Info-Square-Outline',
      'Location-Outline',
      'Lock-Outline',
      'Login-Outline',
      'Logout-Outline',
      'Message-Outline',
      'More-Circle-Outline',
      'More-Square-Outline',
      'Notification-Outline',
      'Paper-Download-Outline',
      'Paper-Fail-Outline',
      'Paper-Negative-Outline',
      'Paper-Outline',
      'Paper-Plus-Outline',
      'Paper-Upload-Outline',
      'Password-Outline',
      'Play-Outline',
      'Plus-Outline',
      'Profile-Outline',
      'Scan-Outline',
      'Search-Outline-Outline',
      'Send-Outline',
      'Setting-Outline',
      'Shield-Done-Outline',
      'Shield-Fail-Outline',
      'Show-Outline',
      'Star-Outline',
      'Swap-Outline',
      'Tick-Square-Outline',
      'Ticket-Outline',
      'Ticket-Star-Outline',
      'Time-Circle-Outline',
      'Time-Square-Outline',
      'Unlock-Outline',
      'Upload-Outline',
      'User-Outline',
      'Video-Outline',
      'Voice-Outline',
      'Volume-Down-Outline',
      'Volume-Off-Outline',
      'Volume-Up-Outline',
      'Wallet-Outline',
      'Work-Outline',
      'memo-Outline'
    ].sort();

    // Search functionality
    const searchQuery = ref('');
    const filteredIcons = computed(() => {
      if (!searchQuery.value) return icons;
      
      const normalizedQuery = searchQuery.value.toLowerCase().trim();
      return icons.filter(icon => 
        icon.toLowerCase().includes(normalizedQuery) ||
        // Also search by category (e.g., 'Outline', 'Arrow', etc.)
        icon.toLowerCase().split('---').some(part => part.includes(normalizedQuery))
      );
    });

    // Copy to clipboard functionality
    const copiedIcon = ref<string | null>(null);

    const copyToClipboard = async (iconName: string) => {
      try {
        await navigator.clipboard.writeText(`icon-${iconName}`);
        copiedIcon.value = iconName;
        setTimeout(() => {
          copiedIcon.value = null;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    };

    return { 
      icons, 
      multiPathIcons, 
      copyToClipboard, 
      copiedIcon,
      searchQuery,
      filteredIcons 
    };
  },
  template: `
    <div class="icons-demo">
      <h1>Icomoon Icons</h1>
      <p>This page showcases all available icons in our icomoon font set. Click on any icon to copy its class name.</p>
      
      <div class="search-container">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Search icons..." 
          class="icon-search-input"
        />
        <span class="icon-count">
          {{ filteredIcons.length }} / {{ icons.length }} icons
        </span>
      </div>
      
      <div class="icons-grid">
        <div 
          v-for="icon in filteredIcons" 
          :key="icon" 
          class="icon-item"
          :class="{ 'copied': copiedIcon === icon }"
          @click="copyToClipboard(icon)"
        >
          <div class="icon-preview">
            <i v-if="!multiPathIcons[icon]" :class="'icon-' + icon"></i>
            <span v-else :class="'icon-' + icon">
              <template v-for="n in multiPathIcons[icon]" :key="n">
                <span :class="'path' + n"></span>
              </template>
            </span>
          </div>
          <div class="icon-info">
            <div class="icon-name">icon-{{ icon }}</div>
            <code class="icon-class">.icon-{{ icon }}</code>
            <div class="copy-feedback" v-if="copiedIcon === icon">Copied!</div>
          </div>
        </div>
      </div>

      <div class="usage-section">
        <h2>Usage</h2>
        <p>To use an icon in your component:</p>
        
        <h3>1. Use the icon class in your template:</h3>
        <pre><code>&lt;i class="icon-Home"&gt;&lt;/i&gt;</code></pre>
        
        <h3>2. For multi-path icons (like flags):</h3>
        <pre><code>&lt;span class="icon-uzbekistan"&gt;
  &lt;span class="path1"&gt;&lt;/span&gt;
  &lt;span class="path2"&gt;&lt;/span&gt;
  ...
&lt;/span&gt;</code></pre>
        
        <h3>3. Customize size and color:</h3>
        <pre><code>&lt;i class="icon-Home" style="font-size: 24px; color: #007bff;"&gt;&lt;/i&gt;</code></pre>
      </div>
    </div>
  `
});

const meta: Meta<typeof IconsDemo> = {
  title: 'Design System/Icons',
  component: IconsDemo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive showcase of all available icomoon icons in the design system.'
      }
    }
  }
};

export default meta;

export const AllIcons: StoryFn<typeof IconsDemo> = () => ({
  components: { IconsDemo },
  template: '<IconsDemo />'
});
