import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";

const meta = {
  title: "Example/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
  args: {
    ...Accordion.defaultProps,
  },
};
