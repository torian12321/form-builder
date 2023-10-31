import { FormRenderer, FIELD_TYPE } from "../../../../lib/main";
import { useAppSelector } from "../../../store/actions";
import { getSelectedField } from "../../../store/selectors/settings.selectors";
import { useGetFieldById } from "../../../store/selectors/fields.selectors";

const FORM_FIELDS = [
  {
    name: "label",
    label: "label",
    type: FIELD_TYPE.TEXT,
  },
  {
    name: "name",
    label: "name",
    type: FIELD_TYPE.TEXT,
  },
  {
    name: "type",
    label: "type",
    type: FIELD_TYPE.DROPDOWN,
    properties: {
      choices: Object.values(FIELD_TYPE).map((fieldType) => ({
        value: fieldType,
        label: fieldType,
      })),
    },
  },
];

export const FieldDetailsForm = () => {
  const selectedFieldId = useAppSelector(getSelectedField);
  const fieldDetails = useGetFieldById(selectedFieldId);

  return selectedFieldId ? (
    <FormRenderer
      key={selectedFieldId}
      id="field-details"
      fields={FORM_FIELDS}
      defaultValues={{
        name: fieldDetails?.name || "",
        label: fieldDetails?.label || "",
        type: fieldDetails?.type || FIELD_TYPE.TEXT,
      }}
    />
  ) : null;
};
