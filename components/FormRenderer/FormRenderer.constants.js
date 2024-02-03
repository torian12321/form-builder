var t = /* @__PURE__ */ ((o) => (o.TEXT = "text", o.LONG_TEXT = "long_text", o.NUMBER = "number", o.DATE = "date", o.DATE_TIME = "date_time", o.BOOLEAN = "boolean", o.FILE_UPLOAD = "file_upload", o.DROPDOWN = "dropdown", o.OPTIONS_LIST = "options_list", o.RADIO_BUTTON = "radio_button", o.INFO_MESSAGE = "info_message", o.INFO_LIST = "info_list", o))(t || {});
const a = [
  "boolean",
  "file_upload",
  "radio_button"
  /* RADIO_BUTTON */
], i = [
  "dropdown",
  "radio_button",
  "options_list",
  "info_list"
  /* INFO_LIST */
], l = [
  "info_message",
  "info_list"
  /* INFO_LIST */
];
var e = /* @__PURE__ */ ((o) => (o.EQUAL = "equal", o.NOT_EQUAL = "not_equal", o.HAS_VALUE = "has_value", o.CONTAINS = "contains", o.LOWER_THAN = "lower_than", o.GREATER_THAN = "greater_than", o.AND = "and", o.OR = "or", o))(e || {}), n = /* @__PURE__ */ ((o) => (o.SHOW = "show", o.HIDDE = "hidde", o.MAKE_MANDATORY = "make_mandatory", o.MAKE_DISABLED = "make_disabled", o))(n || {});
const d = {
  text: "",
  long_text: "",
  number: "",
  // If not set to null, datepicker will show a date on render when value is undefined.
  date: null,
  date_time: null,
  boolean: !1,
  file_upload: void 0,
  dropdown: void 0,
  options_list: [],
  radio_button: void 0,
  // Info fields
  info_message: void 0,
  info_list: void 0
};
export {
  a as FIELDS_WITHOUT_INNER_LABEL,
  i as FIELDS_WITH_OPTIONS,
  t as FIELD_TYPE,
  l as INFO_FIELDS,
  n as LOGIC_ACTIONS,
  e as LOGIC_TYPES,
  d as emptyFieldValues
};
