import React from "react";
import { SectionDivider } from "./SectionDivider";

export default {
  title: "Layout/SectionDivider",
  component: SectionDivider,
  parameters: { backgrounds: { default: "light" } },
} as const;

const Template = (args: React.ComponentProps<typeof SectionDivider>) => <SectionDivider {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Dark = Template.bind({});
Dark.parameters = { backgrounds: { default: "dark" } };
