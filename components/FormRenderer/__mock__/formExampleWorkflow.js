import { FIELD_TYPE as e } from "../FormRenderer.constants.js";
import { mockOptions as o } from "./mockFormUtils.js";
const r = {
  fields: [
    {
      type: e.DROPDOWN,
      name: "assignee",
      placeholder: "--Assign--",
      properties: {
        choices: o
      }
    },
    {
      type: e.TEXT,
      name: "note",
      placeholder: "Note to assignee"
    },
    {
      type: e.FILE_UPLOAD,
      name: "attachment",
      placeholder: "Drop a file or click to upload"
    }
  ]
};
export {
  r as formExampleWorkflow
};
