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

export const Default: Story = {
  args: {
  },
};

export const HeroCTA: Story = {
  args: {
    cta: "http://google.com"
  },
};

export const HeroBG: Story = {
  args: {
    bgImage: "https://picsum.photos/3000"
  },
};

export const HeroPic: Story = {
  args: {
    inlineImage: "https://picsum.photos/1000"
  },
};