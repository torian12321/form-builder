import { FIELD_TYPE as e } from "../FormRenderer.constants.js";
import { mockOptions as a } from "./mockFormUtils.js";
const n = {
  fields: [
    {
      type: e.TEXT,
      name: "name",
      label: "name",
      validations: {
        required: !0,
        min_length: 3,
        max_length: 20
      }
    },
    {
      type: e.LONG_TEXT,
      name: "surname",
      label: "surname",
      validations: {
        min_length: 3,
        max_length: 100
      }
    },
    {
      type: e.NUMBER,
      name: "age",
      label: "age",
      validations: {
        required: !0,
        min: 5,
        max: 99
      }
    },
    {
      type: e.DROPDOWN,
      name: "role",
      label: "Role",
      properties: {
        choices: a
      },
      validations: {
        required: !0
      }
    }
  ]
};
export {
  n as formWithValidations
};
