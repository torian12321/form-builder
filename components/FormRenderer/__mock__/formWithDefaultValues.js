import { FIELD_TYPE as e } from "../FormRenderer.constants.js";
import { mockOptions as a } from "./mockFormUtils.js";
const m = {
  fields: [
    {
      type: e.TEXT,
      name: "name",
      label: "name",
      defaultValue: "Peter"
    },
    {
      type: e.LONG_TEXT,
      name: "surname",
      label: "surname",
      defaultValue: "Parker"
    },
    {
      type: e.NUMBER,
      name: "age",
      label: "age",
      defaultValue: 22
    },
    {
      type: e.DROPDOWN,
      name: "role",
      label: "Role",
      defaultValue: a[2].value,
      properties: {
        choices: a
      }
    }
  ]
};
export {
  m as formWithDefaultValues
};
