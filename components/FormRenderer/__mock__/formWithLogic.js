import { FIELD_TYPE as e, LOGIC_TYPES as o, LOGIC_ACTIONS as a } from "../FormRenderer.constants.js";
const n = {
  fields: [
    {
      type: e.TEXT,
      name: "name",
      label: "name"
    },
    {
      type: e.LONG_TEXT,
      name: "surname",
      label: "surname"
    },
    {
      type: e.NUMBER,
      name: "age",
      label: "age"
    },
    {
      type: e.BOOLEAN,
      name: "buy_lottery",
      label: "Do you want to buy Lottery?"
    },
    {
      type: e.INFO_MESSAGE,
      name: "moderation_message",
      label: "Warning",
      placeholder: "Play in moderation and responsibly"
    }
  ],
  logic: [
    {
      condition: {
        type: o.EQUAL,
        ref: "buy_lottery",
        value: !0
      },
      actions: [
        {
          ref: "age",
          action: a.MAKE_MANDATORY
        },
        {
          ref: "moderation_message",
          action: a.SHOW
        }
      ]
    }
  ]
};
export {
  n as formWithLogic
};
