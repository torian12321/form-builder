import { FIELD_TYPE as e } from "../FormRenderer.constants.js";
const o = {
  fields: [
    {
      type: e.TEXT,
      name: "note",
      label: "Add Note",
      placeholder: "Add Note..."
    },
    {
      type: e.FILE_UPLOAD,
      name: "attachment",
      validations: {
        required: !0
      }
    }
  ]
};
export {
  o as formExampleWorkflowAttachment
};
