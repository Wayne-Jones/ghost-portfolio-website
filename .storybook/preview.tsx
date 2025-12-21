import type { Preview } from "@storybook/nextjs-vite";
import '../src/styles/globals.css';

import { withThemeByClassName } from "@storybook/addon-themes";
import { themes } from 'storybook/theming';
import * as React from "react";
import { montserrat } from '../src/helper/util';
import { ReactRenderer } from '@storybook/nextjs-vite';
import { fn } from "storybook/test";

const preview: Preview = {
  parameters: {
    args: { onClick: fn() },
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
    },
    docs: {
      toc: true
    }
  },

  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
          light: '',
          dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (Story) => (
      <div className={`antialiased ${montserrat.className}`}>
        <Story />
      </div>
    )
  ]
};

export default preview;
