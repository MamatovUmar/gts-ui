# Easybooking UI Library

## Overview
This is a Vue-based UI component library for the GTS projects, providing reusable and customizable components.

## Prerequisites
- Node.js (v20 or later)
- npm (v8 or later)
- Vue 3

## Local Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/MamatovUmar/gts-ui.git
cd gts-ui
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Storybook
To view and develop components interactively:
```bash
npm run storybook
```

### 4. Build the Library
To build the library for production:
```bash
npm run build
```

## Installation in Other Projects

### 1. Install via npm
```bash
npm install gts-ui
```

### 2. Import Components
```typescript
// In your Vue component
import { EasyIcon } from 'gts-ui'
```

### 3. Import Styles
```typescript
// In your main.ts or main.js
import 'gts-ui/styles'
```

### 4. Global Import
```typescript
// In your main.ts or main.js
import gts from 'gts-ui'

const app = createApp(App)

app.use(gts)
```

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Mamatov Umar - mamatov.umar@mail.ru

Project Link: [https://mamatovumar.github.io/gts-ui](https://mamatovumar.github.io/gts-ui)
