import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Listing from "./Listing";
import Card from "../Card/Card";

const meta = {
  title: "Example/Listing",
  component: Listing,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Listing>;

export default meta;
type Story = StoryObj<typeof Listing>;

const cards = Array.from(Array(12).keys()).map((i) => (
  <Card key={i} {...Card.defaultProps} />
));

export const Primary: Story = {
  args: {
    children: cards,
  },
};
