import { Button, FormRenderer } from "../../../lib/main";
import { useFieldActions } from "../../store/actions/fields";
import { getFieldsList } from "../../store/selectors/fields.selectors";
import { useAppSelector } from "../../store/actions";
import { getSelectedFieldDetails } from "../../store/selectors/selectedField.selectors";
import {
  Wrapper,
  selectedFieldStyles,
  unselectedFieldStyles,
} from "./FormDemo.styles";

export const FormDemo = () => {
  const { resetFields } = useFieldActions();
  const fields = useAppSelector(getFieldsList);
  const selectedField = useAppSelector(getSelectedFieldDetails);
  const hasSelection = Boolean(selectedField);

  return (
    <Wrapper>
      <FormRenderer
        id="demo-form"
        fields={fields}
        sxFields={hasSelection ? unselectedFieldStyles : {}}
        sxFieldsByName={{
          [selectedField?.name]: selectedFieldStyles,
        }}
      />
      <Button onClick={resetFields}>Reset</Button>
    </Wrapper>
  );
};
