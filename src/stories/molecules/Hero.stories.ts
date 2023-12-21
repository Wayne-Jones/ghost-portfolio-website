import type { Meta, StoryObj } from "@storybook/react";
import Hero from "@/components/Hero";

const meta = {
  title: "Molecules/Hero",
  component: Hero,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Center: Story = {
  args: {
    textAlign: "center",
    inlineImage: "https://picsum.photos/1000"
  },
};

export const LeftAlign: Story = {
  args: {
    textAlign: "left",
    inlineImage: "https://picsum.photos/1000"
  },
};

export const RightAlign: Story = {
  args: {
    textAlign: "right",
    inlineImage: "https://picsum.photos/1000"
  },
};