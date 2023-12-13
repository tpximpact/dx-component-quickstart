import type { Meta, StoryObj } from '@storybook/react';
import Audio from './Audio';

const meta = {
  title: 'Example/Audio',
  component: Audio,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Audio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...Audio.defaultProps
  }
};
