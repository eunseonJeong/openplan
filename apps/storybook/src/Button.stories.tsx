import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@repo/ui";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    size: {
      control: "radio",
      options: ["l", "m"]
    }
  },
  args: {
    children: "다음",
    size: "l"
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Large: Story = {};

export const Medium: Story = {
  args: {
    size: "m",
    children: "확인"
  }
};

export const Loading: Story = {
  args: {
    loading: true,
    size: "l"
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    size: "m"
  }
};
