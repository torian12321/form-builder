import { FIELD_TYPE as l, FIELDS_WITH_OPTIONS as o } from "../FormRenderer.constants.js";
import { mockOptions as i } from "./mockFormUtils.js";
const s = {
  fields: Object.values(l).map((e) => ({
    type: e,
    name: e,
    label: `Field Type - ${e.replaceAll("_", " ")}`,
    properties: o.includes(e) ? {
      choices: i
    } : {}
  }))
};
export {
  s as formWithAllFieldTypes
};
