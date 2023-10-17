import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { FIELD_TYPE } from '../../FormRenderer.constants';
import { TextField } from '../Fields/TextField';
import { FieldWrapper } from './FieldWrapper';
import { MESSAGE_SEVERITY } from './FieldWrapper.types';

const meta: Meta = {
  title: 'components/ui/FormRenderer/FieldWrapper',
  component: FieldWrapper,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<Story> = args => (
  <FieldWrapper name='field-name' label='Field label' {...args}>
    <TextField
      type={FIELD_TYPE.TEXT}
      name='field-name'
      placeholder='Add any field as child'
      onChange={v => console.log(v)}
    />
  </FieldWrapper>
);

export const Base: Story = Template.bind({});
export const RequiredContent: Story = Template.bind({});
export const WithMessages: Story = Template.bind({});

RequiredContent.args = {
  required: true,
};

WithMessages.args = {
  messages: Object.values(MESSAGE_SEVERITY).map(severity => ({
    message: `Example of ${severity} message`,
    severity,
  })),
};
