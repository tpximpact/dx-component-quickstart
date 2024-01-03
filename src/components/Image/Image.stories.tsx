import type { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";

const meta = {
  title: "Example/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: {
      small: "https://picsum.photos/600/600",
      medium: "https://picsum.photos/1200/1200",
      default: "https://picsum.photos/2400/2400",
    },
    width: 500,
    height: 500,
    altText: "An example image",
  },
};
