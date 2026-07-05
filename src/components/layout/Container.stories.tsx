import React from "react";
import { Container } from "./Container";

export default {
  title: "Layout/Container",
  component: Container,
  parameters: { backgrounds: { default: "light" } },
} as const;

const Template = (args: React.ComponentProps<typeof Container>) => (
  <Container {...args}>
    <div className="bg-gray-100 p-4">Content inside Container</div>
  </Container>
);

export const Default = Template.bind({});
Default.args = {};

export const Dark = Template.bind({});
Dark.parameters = { backgrounds: { default: "dark" } };
