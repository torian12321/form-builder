import { INFO_FIELDS as s, FIELDS_WITHOUT_INNER_LABEL as I, FIELDS_WITH_OPTIONS as e } from "../FormRenderer.constants.js";
const o = (i) => s.includes(i), t = (i) => I.includes(i), l = (i) => e.includes(i);
export {
  t as isFieldWithLabel,
  l as isFieldWithOptions,
  o as isInfoField
};
