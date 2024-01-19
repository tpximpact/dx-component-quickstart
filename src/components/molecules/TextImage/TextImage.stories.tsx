import type { Meta, StoryObj } from "@storybook/react";
import TextImage from "./TextImage";

const meta = {
  title: "Molecules/TextImage",
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
    title: "Example title",
    body: "Example body text",
    image: {
      src: {
        small: "https://picsum.photos/600/600",
        medium: "https://picsum.photos/1200/1200",
        default: "https://picsum.photos/2400/2400",
      },
      width: 500,
      height: 500,
      altText: "An example image",
    },
  },
};
