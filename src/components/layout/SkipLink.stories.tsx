import React from "react";
import { SkipLink } from "./SkipLink";

export default {
  title: "Layout/SkipLink",
  component: SkipLink,
  parameters: { backgrounds: { default: "light" } },
} as const;

const Template = (args: React.ComponentProps<typeof SkipLink>) => <SkipLink {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Dark = Template.bind({});
Dark.parameters = { backgrounds: { default: "dark" } };
