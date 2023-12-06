import type { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/Button";
import { HiOutlineArrowRight } from "react-icons/hi2";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const Icon: JSX.Element = <HiOutlineArrowRight className="w-6 h-6" />;
const toggleTheme = () => {
  const currentTheme = document.documentElement.className;
  if (currentTheme.includes('dark')){
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.theme = 'light';
  }
  else{
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
  }
}

export const Default: Story = {
  args: {
    text: "Button"
  },
};

export const WithIcon: Story = {
  args: {
    text: "Button",
    icon: Icon
  },
};

export const InvertedWithIcon: Story = {
  args: {
    text: "Button",
    icon: Icon,
    invert: true
  },
};

export const IconOnly: Story = {
  args: {
    text: "",
    icon: Icon
  },
};

export const DarkModeToggle: Story = {
  args: {
    text: "",
    icon: Icon,
    onClick: toggleTheme
  },
};


