import type { Meta, StoryObj } from "@storybook/react";
import Link from "./Link";

const meta = {
  title: "Atoms/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    href: "#",
    className: "link",
    children: "Primary link",
  },
};
