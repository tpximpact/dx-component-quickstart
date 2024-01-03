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
    title: "Example title",
    body: "Example body",
    accordionItems: Array(12).fill({
      summary: "Accordion Item",
      body: "Content for Accordion Item",
    }),
  },
};
