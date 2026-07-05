import React from "react";
import { VisuallyHidden } from "./VisuallyHidden";

export default {
  title: "Primitives/VisuallyHidden",
  component: VisuallyHidden,
  parameters: {
    // Show component on a dark background to verify visibility toggling
    backgrounds: { default: "light" },
  },
} as const;

const Template = (args: React.ComponentProps<typeof VisuallyHidden>) => (
  <div className="p-4">
    <p>Before hidden text</p>
    <VisuallyHidden {...args}>Screen reader only text</VisuallyHidden>
    <p>After hidden text</p>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Dark = Template.bind({});
Dark.parameters = { backgrounds: { default: "dark" } };
