import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { FormRenderer } from '..';
import { FIELD_TYPE } from '../FormRenderer.constants';
import type { FormRendererProps } from '../FormRenderer.types';
import { formExampleCreateRequest } from '../__mock__/formExampleCreateRequest';
import { formExampleWorkflow } from '../__mock__/formExampleWorkflow';
import { formExampleWorkflowAttachment } from '../__mock__/formExampleWorkflowAttachment';
import {
  stylesHalfRow,
  stylesInlined,
  stylesLastRow,
} from './FormRendererStory.styles';
import { FormRendererStorybookWrapper } from './FormRendererStoryWrapper';

const meta: Meta = {
  title: 'components/ui/FormRenderer/Examples',
  component: FormRenderer,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<Story> = args => (
  <FormRendererStorybookWrapper {...(args as FormRendererProps)} />
);

export const WorkflowStep: Story = Template.bind({});
export const WorkflowAttachments: Story = Template.bind({});
export const CreateRequest: Story = Template.bind({});

WorkflowStep.args = {
  innerLabel: true,
  ...formExampleWorkflow,
};
WorkflowAttachments.args = {
  innerLabel: true,
  ...formExampleWorkflowAttachment,
};
CreateRequest.args = {
  validateAfterSubmit: false,
  sxFieldsByType: {
    [FIELD_TYPE.DROPDOWN]: stylesHalfRow,
    [FIELD_TYPE.DATE]: stylesHalfRow,
    [FIELD_TYPE.DATE_TIME]: stylesHalfRow,
  },
  sxFieldsByName: {
    session: stylesInlined,
    bill_number: stylesInlined,

    // Last row fields
    active: stylesLastRow,
    create_another: stylesLastRow,
    bulk_create: stylesLastRow,
    bulk_create_number: stylesLastRow,
  },
  ...formExampleCreateRequest,
};
