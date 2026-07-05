import React from "react";
import { FocusRing } from "./FocusRing";

export default {
  title: "Primitives/FocusRing",
  component: FocusRing,
  parameters: { backgrounds: { default: "light" } },
} as const;

const Template = (args: React.ComponentProps<typeof FocusRing>) => (
  <FocusRing {...args} className="focus-visible:outline-none">
    <button className="px-4 py-2 bg-gray-200 rounded">Focusable Button</button>
  </FocusRing>
);

export const Default = Template.bind({});
Default.args = {};

export const Dark = Template.bind({});
Dark.parameters = { backgrounds: { default: "dark" } };
