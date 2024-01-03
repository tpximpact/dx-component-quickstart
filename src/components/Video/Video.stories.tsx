import type { Meta, StoryObj } from "@storybook/react";
import Video from "./Video";

const meta = {
  title: "Example/Video",
  component: Video,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Video>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    videoSrc: "myVideo.mp4",
    posterImage: "",
  },
};
