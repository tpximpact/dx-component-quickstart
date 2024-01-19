import type { Meta, StoryObj } from '@storybook/react';
import Image from './Image';

const meta = {
  title: 'Atoms/Image',
  component: Image,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...Image.defaultProps
  }
};
