import { useState, SetStateAction } from 'react';
import { FormRenderer } from '../';
import { Button } from '../../Button';
import { Tabs } from '../../Tabs';
import type { FormRendererProps } from '../FormRenderer.types';
import type { FieldValue } from '../FormRenderer.types';
import { SBCode, SBTabBody } from './FormRendererStory.styles';

interface FormExampleProps extends FormRendererProps {
  onUpdateValues?: SetStateAction<FieldValue>;
}
const FormExample = ({
  onUpdateValues = () => undefined,
  ...args
}: FormExampleProps) => (
  <div>
    <FormRenderer
      {...args}
      onChange={({ values }) => {
        onUpdateValues(values);
      }}
      onSubmit={({ values, isValid }) => {
        console.log(isValid);
        console.table(values);
      }}
    />
    <Button primary form={args.id} type='submit'>
      Submit
    </Button>
  </div>
);

interface CodeExampleProps {
  obj: { [fieldName: string]: unknown };
}
const CodeExample = ({ obj }: CodeExampleProps) => (
  <SBCode>{JSON.stringify(obj, null, 2)}</SBCode>
);

export const FormRendererStorybookWrapper = ({
  id = 'my-form',
  fields = [],
  logic,
  ...rest
}: FormRendererProps) => {
  const [formValues, setFormValues] = useState({});
  const formArgs = {
    id,
    fields,
    logic,
    ...rest,
  };

  return (
    <Tabs
      labels={['Form', 'Form + Object', 'Form + Response', 'All']}
      defaultTab={2}
    >
      <SBTabBody>
        <FormExample {...formArgs} />
      </SBTabBody>
      <SBTabBody>
        <FormExample {...formArgs} />
        <CodeExample obj={{ fields, logic }} />
      </SBTabBody>
      <SBTabBody>
        <FormExample {...formArgs} onUpdateValues={setFormValues} />
        <CodeExample obj={formValues} />
      </SBTabBody>
      <SBTabBody>
        <FormExample {...formArgs} onUpdateValues={setFormValues} />
        <CodeExample obj={formValues} />
        <CodeExample obj={{ fields, logic }} />
      </SBTabBody>
    </Tabs>
  );
};
