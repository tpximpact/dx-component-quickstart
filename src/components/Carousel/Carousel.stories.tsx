import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';
import Carousel from './Carousel';
import Card from '../Card/Card';

const meta = {
  title: 'Example/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof Carousel>;

const cards = Array(12)
  .fill(null)
  .map(() => <Card key={uuidv4()} {...Card.defaultProps} />);

export const Primary: Story = {
  args: {
    children: cards
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    )
  ]
};
