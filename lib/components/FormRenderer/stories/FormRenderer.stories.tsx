import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { FormRenderer } from '..';
import type { FormRendererProps } from '../FormRenderer.types';
import { formWithAllFieldTypes } from '../__mock__/formWithAllFieldTypes';
import { formWithDefaultValues } from '../__mock__/formWithDefaultValues';
import { formWithLogic } from '../__mock__/formWithLogic';
import { formWithValidations } from '../__mock__/formWithValidations';
import { FormRendererStorybookWrapper } from './FormRendererStoryWrapper';

const meta: Meta = {
  title: 'components/ui/FormRenderer',
  component: FormRenderer,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<Story> = args => (
  <FormRendererStorybookWrapper {...(args as FormRendererProps)} />
);

export const Base: Story = Template.bind({});
export const WithDefaultValues: Story = Template.bind({});
export const WithValidations: Story = Template.bind({});
export const WithLogic: Story = Template.bind({});

Base.args = formWithAllFieldTypes;
WithDefaultValues.args = formWithDefaultValues;
WithValidations.args = formWithValidations;
WithLogic.args = formWithLogic;
