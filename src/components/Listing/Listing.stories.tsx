import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { v4 as uuidv4 } from "uuid";
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

const cards = Array(12)
  .fill(null)
  .map(() => <Card key={uuidv4()} {...Card.defaultProps} />);

export const Primary: Story = {
  args: {
    children: cards,
  },
};
