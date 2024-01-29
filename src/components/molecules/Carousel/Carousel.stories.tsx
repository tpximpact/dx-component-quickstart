import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "./Carousel";
import Card from "../Card/Card";

const meta = {
  title: "Molecules/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof Carousel>;

const cards = Array.from(Array(12).keys()).map((i) => (
  <Card
    key={i}
    title="Example title"
    body="Example body text"
    image={{
      src: {
        small: "https://picsum.photos/600/600",
        medium: "https://picsum.photos/1200/1200",
        default: "https://picsum.photos/2400/2400",
      },
      width: 500,
      height: 500,
      altText: "An example image",
    }}
  />
));

export const Primary: Story = {
  args: {
    children: cards,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};