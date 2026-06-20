import type { Preview } from '@storybook/react-vite';
import { DesignSystemProvider, darkTheme, lightTheme } from '@strapi/design-system';

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'sun',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [
    (Story, context) => (
      <DesignSystemProvider theme={context.globals.theme === 'dark' ? darkTheme : lightTheme} locale="en">
        <style>{`
          html, body {
            background-color: var(--strapi-colors-neutral0);
          }
        `}</style>
        <Story />
      </DesignSystemProvider>
    ),
  ],
};

export default preview;
