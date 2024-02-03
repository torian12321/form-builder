import { FIELD_TYPE as e, LOGIC_TYPES as r, LOGIC_ACTIONS as a } from "../FormRenderer.constants.js";
import { mockOptions as t } from "./mockFormUtils.js";
const i = {
  fields: [
    {
      type: e.DROPDOWN,
      name: "session_year",
      label: "Session Year",
      validations: {
        required: !0
      },
      properties: {
        choices: t
      }
    },
    {
      type: e.DATE_TIME,
      name: "date",
      label: "Request Date",
      validations: {
        required: !0
      }
    },
    {
      type: e.BOOLEAN,
      name: "reintro",
      label: "Reintro"
    },
    {
      type: e.DROPDOWN,
      name: "session",
      label: "Session",
      properties: {
        choices: t
      }
    },
    {
      type: e.DROPDOWN,
      name: "bill_number",
      label: "Bill Number",
      validations: {
        required: !0
      },
      properties: {
        choices: t
      }
    },
    {
      type: e.RADIO_BUTTON,
      name: "chamber",
      label: "Chamber",
      properties: {
        choices: [
          { value: "house", label: "House" },
          { value: "seante", label: "Senate" },
          { value: "both", label: "Both" }
        ]
      }
    },
    {
      type: e.DROPDOWN,
      name: "request_type",
      label: "Request Type",
      validations: {
        required: !0
      },
      properties: {
        choices: t
      }
    },
    {
      type: e.DROPDOWN,
      name: "drafter",
      label: "Drafter",
      validations: {
        required: !0
      },
      properties: {
        choices: t
      }
    },
    {
      type: e.DROPDOWN,
      name: "secretary",
      label: "Secretary",
      properties: {
        choices: t
      }
    },
    {
      type: e.DROPDOWN,
      name: "requester",
      label: "Requester",
      validations: {
        required: !0
      },
      properties: {
        choices: t
      }
    },
    {
      type: e.DROPDOWN,
      name: "sponsor",
      label: "Sponsor",
      properties: {
        choices: t
      }
    },
    {
      type: e.DROPDOWN,
      name: "subject_tag",
      label: "Subject Tag",
      properties: {
        choices: t
      }
    },
    {
      type: e.BOOLEAN,
      name: "by_request",
      label: "By Request"
    },
    {
      type: e.TEXT,
      name: "subject",
      label: "Subject",
      placeholder: "Enter Subject",
      validations: {
        required: !0
      }
    },
    {
      type: e.LONG_TEXT,
      name: "notes",
      label: "Notes",
      placeholder: "Enter Note"
    },
    {
      type: e.BOOLEAN,
      name: "active",
      label: "active"
    },
    {
      type: e.BOOLEAN,
      name: "create_another",
      label: "Create Another"
    },
    {
      type: e.BOOLEAN,
      name: "bulk_create",
      label: "Bulk Create"
    },
    {
      type: e.NUMBER,
      name: "bulk_create_number",
      defaultValue: 0
    }
  ],
  logic: [
    {
      condition: {
        type: r.EQUAL,
        ref: "reintro",
        value: !0
      },
      actions: [
        {
          ref: ["session", "bill_number"],
          action: a.SHOW
        }
      ]
    }
  ]
};
export {
  i as formExampleCreateRequest
};
