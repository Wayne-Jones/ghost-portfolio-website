import type { Preview } from "@storybook/react";
import '../src/styles/tailwind.css';

import { withThemeByClassName } from "@storybook/addon-themes";
import { themes } from '@storybook/theming';
import * as React from "react";
import { montserrat } from '../src/helper/util';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      // Override the default dark theme
      dark: { ...themes.dark },
      // Override the default light theme
      light: { ...themes.normal },
      stylePreview: false
    }
  },

  decorators: [
    withThemeByClassName({
      themes: {
          // nameOfTheme: 'classNameForTheme',
          light: '',
          dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (Story) => (
      <div className={`${montserrat.className}`}>
        <Story />
      </div>
    )
  ]
};

export default preview;
