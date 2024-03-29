import type { Meta, StoryObj } from '@storybook/react';
import '~/styles/globals.css'
import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    text: 'Button',
    intent: 'primary'
  },
};

export const Secondary: Story = {
  args: {
    text: 'Button',
    intent: 'secondary'
  },
};



