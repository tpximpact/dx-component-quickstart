import type { Meta, StoryObj } from "@storybook/react";
import TextImage from "./TextImage";

const meta = {
  title: "Example/TextImage",
  component: TextImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...TextImage.defaultProps,
  },
};
