import type { Meta, StoryObj } from '@storybook/react';
import { LoadingBar } from '.';

const meta: Meta<typeof LoadingBar> = {
  title: 'Components/UI/LoadingBar',
  component: LoadingBar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
