import { FIELD_TYPE } from "../../../../lib/main";
import type { Field } from "../../../../lib/components/FormRenderer";

export const FORM_FIELDS: Field[] = [
  {
    name: "label",
    label: "label",
    type: FIELD_TYPE.TEXT,
  },
  {
    name: "name",
    label: "name",
    type: FIELD_TYPE.TEXT,
    validations: {
      required: true,
    },
  },
  {
    name: "type",
    label: "type",
    type: FIELD_TYPE.DROPDOWN,
    validations: {
      required: true,
    },
    properties: {
      choices: Object.values(FIELD_TYPE).map((fieldType) => ({
        value: fieldType,
        label: fieldType,
      })),
    },
  },
];
