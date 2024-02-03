import { jsx as T, jsxs as Q } from "react/jsx-runtime";
import { h as yt } from "../../../../moment-a2f61e40.js";
import { FIELD_TYPE as xt } from "../../FormRenderer.constants.js";
import { getSlotPropsTextField as wt, formatMomentToDateTime as Dt } from "./Fields.utils.js";
import { m as kt, n as ro, v as St, s as Pt, f as Mt, u as Ee, b as jo, d as no, g as Ue, h as It, i as Ot, a as je, o as oo, D as Rt, T as Nt, P as Vt, p as uo, M as Ke, q as Ne, c as zo, e as $t, t as Wo, S as Ft, w as Bt, x as mo, y as po, z as fo, B as bo, E as so, F as _t, G as Ge, H as Be, I as Et, V as Lt, r as wo, J as Do, j as lo, C as At, k as jt, l as zt, L as Wt, A as Ht } from "../../../../dateViewRenderers-bf92a99d.js";
import { g as Te, s as $, _ as ae, a as m, P as o, h as Ho, H as Ut, j as Ve, r as qt } from "../../../../styled-c6437ab8.js";
import * as b from "react";
import { g as be, u as pe, c as he } from "../../../../useThemeProps-7889d54e.js";
import { c as ne } from "../../../../clsx-f0826a09.js";
import { u as ho } from "../../../../useTheme-f100ae81.js";
import { r as go, b as vo, u as _e, a as To } from "../../../../TransitionGroupContext-fe4c547b.js";
import { d as Uo, a as qo, o as Yt, u as Kt } from "../../../../FormHelperText-5a47fd9c.js";
import { c as Yo } from "../../../../createSvgIcon-4c228bdf.js";
import { B as Co } from "../../../../ButtonBase-b38416c5.js";
import { M as Gt, u as We, L as ko, b as Ko, r as Go } from "../../../../SharedTextField-c5888703.js";
import { u as Xt } from "../../../../unsupportedProp-3dbf01f6.js";
import { T as Xo } from "../../../../Typography-cd3e79a2.js";
import { M as Jt } from "../../../../Button-1104b2f9.js";
import { I as Jo } from "../../../../IconButton-cb9cf13b.js";
import "../../../utils/dateUtils.js";
import "../../../../useFormControl-a3d8b2b6.js";
import "../../../../Paper-79c19457.js";
import "../../../../emotion-react.browser.esm-3aa427f2.js";
import "../../../../Chip-f92e5f00.js";
import "../../../../extendSxProp-e33cd6d1.js";
let ze;
function Zo() {
  if (ze)
    return ze;
  const e = document.createElement("div"), t = document.createElement("div");
  return t.style.width = "10px", t.style.height = "1px", e.appendChild(t), e.dir = "rtl", e.style.fontSize = "14px", e.style.width = "4px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.overflow = "scroll", document.body.appendChild(e), ze = "reverse", e.scrollLeft > 0 ? ze = "default" : (e.scrollLeft = 1, e.scrollLeft === 0 && (ze = "negative")), document.body.removeChild(e), ze;
}
function Zt(e, t) {
  const s = e.scrollLeft;
  if (t !== "rtl")
    return s;
  switch (Zo()) {
    case "negative":
      return e.scrollWidth - e.clientWidth + s;
    case "reverse":
      return e.scrollWidth - e.clientWidth - s;
    default:
      return s;
  }
}
function Qt(e) {
  return Te("MuiPickersToolbarText", e);
}
const So = be("MuiPickersToolbarText", ["root", "selected"]), en = ["className", "selected", "value"], on = (e) => {
  const {
    classes: t,
    selected: s
  } = e;
  return he({
    root: ["root", s && "selected"]
  }, Qt, t);
}, tn = $(Xo, {
  name: "MuiPickersToolbarText",
  slot: "Root",
  overridesResolver: (e, t) => [t.root, {
    [`&.${So.selected}`]: t.selected
  }]
})(({
  theme: e
}) => ({
  transition: e.transitions.create("color"),
  color: (e.vars || e).palette.text.secondary,
  [`&.${So.selected}`]: {
    color: (e.vars || e).palette.text.primary
  }
})), Qo = /* @__PURE__ */ b.forwardRef(function(t, s) {
  const n = pe({
    props: t,
    name: "MuiPickersToolbarText"
  }), {
    className: r,
    value: a
  } = n, i = ae(n, en), l = on(n);
  return /* @__PURE__ */ T(tn, m({
    ref: s,
    className: ne(r, l.root),
    component: "span"
  }, i, {
    children: a
  }));
}), nn = ["align", "className", "selected", "typographyClassName", "value", "variant", "width"], sn = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"]
  }, kt, t);
}, rn = $(Jt, {
  name: "MuiPickersToolbarButton",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  padding: 0,
  minWidth: 16,
  textTransform: "none"
}), Fe = /* @__PURE__ */ b.forwardRef(function(t, s) {
  const n = pe({
    props: t,
    name: "MuiPickersToolbarButton"
  }), {
    align: r,
    className: a,
    selected: i,
    typographyClassName: l,
    value: c,
    variant: d,
    width: v
  } = n, p = ae(n, nn), u = sn(n);
  return /* @__PURE__ */ T(rn, m({
    variant: "text",
    ref: s,
    className: ne(a, u.root)
  }, v ? {
    sx: {
      width: v
    }
  } : {}, p, {
    children: /* @__PURE__ */ T(Qo, {
      align: r,
      className: l,
      variant: d,
      value: c,
      selected: i
    })
  }));
}), an = ({
  adapter: e,
  value: t,
  props: s
}) => {
  if (t === null)
    return null;
  const {
    minTime: n,
    maxTime: r,
    minutesStep: a,
    shouldDisableClock: i,
    shouldDisableTime: l,
    disableIgnoringDatePartForTimeValidation: c = !1,
    disablePast: d,
    disableFuture: v,
    timezone: p
  } = s, u = e.utils.dateWithTimezone(void 0, p), h = ro(c, e.utils);
  switch (!0) {
    case !e.utils.isValid(t):
      return "invalidDate";
    case !!(n && h(n, t)):
      return "minTime";
    case !!(r && h(t, r)):
      return "maxTime";
    case !!(v && e.utils.isAfter(t, u)):
      return "disableFuture";
    case !!(d && e.utils.isBefore(t, u)):
      return "disablePast";
    case !!(l && l(t, "hours")):
      return "shouldDisableTime-hours";
    case !!(l && l(t, "minutes")):
      return "shouldDisableTime-minutes";
    case !!(l && l(t, "seconds")):
      return "shouldDisableTime-seconds";
    case !!(i && i(e.utils.getHours(t), "hours")):
      return "shouldDisableClock-hours";
    case !!(i && i(e.utils.getMinutes(t), "minutes")):
      return "shouldDisableClock-minutes";
    case !!(i && i(e.utils.getSeconds(t), "seconds")):
      return "shouldDisableClock-seconds";
    case !!(a && e.utils.getMinutes(t) % a !== 0):
      return "minutesStep";
    default:
      return null;
  }
}, et = ({
  props: e,
  value: t,
  adapter: s
}) => {
  const n = St({
    adapter: s,
    value: t,
    props: e
  });
  return n !== null ? n : an({
    adapter: s,
    value: t,
    props: e
  });
}, ln = (e) => {
  var t, s, n, r, a, i, l, c;
  const d = Ee(), v = jo(), u = ((t = e.ampm) != null ? t : d.is12HourCycleInCurrentLocale()) ? d.formats.keyboardDateTime12h : d.formats.keyboardDateTime24h;
  return m({}, e, {
    disablePast: (s = e.disablePast) != null ? s : !1,
    disableFuture: (n = e.disableFuture) != null ? n : !1,
    format: (r = e.format) != null ? r : u,
    disableIgnoringDatePartForTimeValidation: !!(e.minDateTime || e.maxDateTime),
    minDate: no(d, (a = e.minDateTime) != null ? a : e.minDate, v.minDate),
    maxDate: no(d, (i = e.maxDateTime) != null ? i : e.maxDate, v.maxDate),
    minTime: (l = e.minDateTime) != null ? l : e.minTime,
    maxTime: (c = e.maxDateTime) != null ? c : e.maxTime
  });
}, cn = ({
  props: e,
  inputRef: t
}) => {
  const s = ln(e), {
    forwardedProps: n,
    internalProps: r
  } = Pt(s, "date-time");
  return Mt({
    inputRef: t,
    forwardedProps: n,
    internalProps: r,
    valueManager: Ue,
    fieldValueManager: It,
    validator: et,
    valueType: "date-time"
  });
}, dn = ["components", "componentsProps", "slots", "slotProps", "InputProps", "inputProps"], un = ["inputRef"], mn = ["ref", "onPaste", "onKeyDown", "inputMode", "readOnly", "clearable", "onClear"], ot = /* @__PURE__ */ b.forwardRef(function(t, s) {
  var n, r, a;
  const i = pe({
    props: t,
    name: "MuiDateTimeField"
  }), {
    components: l,
    componentsProps: c,
    slots: d,
    slotProps: v,
    InputProps: p,
    inputProps: u
  } = i, h = ae(i, dn), D = i, f = (n = (r = d == null ? void 0 : d.textField) != null ? r : l == null ? void 0 : l.TextField) != null ? n : Gt, C = We({
    elementType: f,
    externalSlotProps: (a = v == null ? void 0 : v.textField) != null ? a : c == null ? void 0 : c.textField,
    externalForwardedProps: h,
    ownerState: D
  }), {
    inputRef: M
  } = C, k = ae(C, un);
  k.inputProps = m({}, u, k.inputProps), k.InputProps = m({}, p, k.InputProps);
  const O = cn({
    props: k,
    inputRef: M
  }), {
    ref: N,
    onPaste: S,
    onKeyDown: g,
    inputMode: E,
    readOnly: V,
    clearable: R,
    onClear: F
  } = O, H = ae(O, mn), {
    InputProps: ee,
    fieldProps: W
  } = Ot({
    onClear: F,
    clearable: R,
    fieldProps: H,
    InputProps: H.InputProps,
    slots: d,
    slotProps: v,
    components: l,
    componentsProps: c
  });
  return /* @__PURE__ */ T(f, m({
    ref: s
  }, W, {
    InputProps: m({}, ee, {
      readOnly: V
    }),
    inputProps: m({}, H.inputProps, {
      inputMode: E,
      onPaste: S,
      onKeyDown: g,
      ref: N
    })
  }));
});
process.env.NODE_ENV !== "production" && (ot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: o.bool,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: o.bool,
  className: o.string,
  /**
   * If `true`, a clear button will be shown in the field allowing value clearing.
   * @default false
   */
  clearable: o.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: o.elementType,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: o.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: o.object,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: o.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: o.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: o.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: o.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: o.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: o.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: o.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The helper text content.
   */
  helperText: o.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: o.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: o.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: o.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: go,
  /**
   * The label content.
   */
  label: o.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable date.
   */
  maxDate: o.any,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: o.any,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: o.any,
  /**
   * Minimal selectable date.
   */
  minDate: o.any,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: o.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: o.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: o.number,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  onBlur: o.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: o.func,
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear: o.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error.
   * @param {TValue} value The value associated to the error.
   */
  onError: o.func,
  onFocus: o.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: o.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   * @default false
   */
  readOnly: o.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: o.any,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: o.bool,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: o.oneOfType([o.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), o.number, o.shape({
    endIndex: o.number.isRequired,
    startIndex: o.number.isRequired
  })]),
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: o.func,
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: o.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: o.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: o.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: o.func,
  /**
   * If `true`, the format will respect the leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `8/16/2018`)
   * If `false`, the format will always add leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `08/16/2018`)
   *
   * Warning n°1: Luxon is not able to respect the leading zeroes when using macro tokens (e.g: "DD"), so `shouldRespectLeadingZeros={true}` might lead to inconsistencies when using `AdapterLuxon`.
   *
   * Warning n°2: When `shouldRespectLeadingZeros={true}`, the field will add an invisible character on the sections containing a single digit to make sure `onChange` is fired.
   * If you need to get the clean value from the input, you can remove this character using `input.value.replace(/\u200e/g, '')`.
   *
   * Warning n°3: When used in strict mode, dayjs and moment require to respect the leading zeros.
   * This mean that when using `shouldRespectLeadingZeros={false}`, if you retrieve the value directly from the input (not listening to `onChange`) and your format contains tokens without leading zeros, the value will not be parsed by your library.
   *
   * @default `false`
   */
  shouldRespectLeadingZeros: o.bool,
  /**
   * The size of the component.
   */
  size: o.oneOf(["medium", "small"]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: o.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: o.object,
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: o.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: o.oneOfType([o.func, o.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: o.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
function pn(e) {
  return Te("MuiTab", e);
}
const fn = be("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper"]), Le = fn, bn = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"], hn = (e) => {
  const {
    classes: t,
    textColor: s,
    fullWidth: n,
    wrapped: r,
    icon: a,
    label: i,
    selected: l,
    disabled: c
  } = e, d = {
    root: ["root", a && i && "labelIcon", `textColor${Ho(s)}`, n && "fullWidth", r && "wrapped", l && "selected", c && "disabled"],
    iconWrapper: ["iconWrapper"]
  };
  return he(d, pn, t);
}, gn = $(Co, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: s
    } = e;
    return [t.root, s.label && s.icon && t.labelIcon, t[`textColor${Ho(s.textColor)}`], s.fullWidth && t.fullWidth, s.wrapped && t.wrapped];
  }
})(({
  theme: e,
  ownerState: t
}) => m({}, e.typography.button, {
  maxWidth: 360,
  minWidth: 90,
  position: "relative",
  minHeight: 48,
  flexShrink: 0,
  padding: "12px 16px",
  overflow: "hidden",
  whiteSpace: "normal",
  textAlign: "center"
}, t.label && {
  flexDirection: t.iconPosition === "top" || t.iconPosition === "bottom" ? "column" : "row"
}, {
  lineHeight: 1.25
}, t.icon && t.label && {
  minHeight: 72,
  paddingTop: 9,
  paddingBottom: 9,
  [`& > .${Le.iconWrapper}`]: m({}, t.iconPosition === "top" && {
    marginBottom: 6
  }, t.iconPosition === "bottom" && {
    marginTop: 6
  }, t.iconPosition === "start" && {
    marginRight: e.spacing(1)
  }, t.iconPosition === "end" && {
    marginLeft: e.spacing(1)
  })
}, t.textColor === "inherit" && {
  color: "inherit",
  opacity: 0.6,
  // same opacity as theme.palette.text.secondary
  [`&.${Le.selected}`]: {
    opacity: 1
  },
  [`&.${Le.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, t.textColor === "primary" && {
  color: (e.vars || e).palette.text.secondary,
  [`&.${Le.selected}`]: {
    color: (e.vars || e).palette.primary.main
  },
  [`&.${Le.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  }
}, t.textColor === "secondary" && {
  color: (e.vars || e).palette.text.secondary,
  [`&.${Le.selected}`]: {
    color: (e.vars || e).palette.secondary.main
  },
  [`&.${Le.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  }
}, t.fullWidth && {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: 0,
  maxWidth: "none"
}, t.wrapped && {
  fontSize: e.typography.pxToRem(12)
})), tt = /* @__PURE__ */ b.forwardRef(function(t, s) {
  const n = pe({
    props: t,
    name: "MuiTab"
  }), {
    className: r,
    disabled: a = !1,
    disableFocusRipple: i = !1,
    // eslint-disable-next-line react/prop-types
    fullWidth: l,
    icon: c,
    iconPosition: d = "top",
    // eslint-disable-next-line react/prop-types
    indicator: v,
    label: p,
    onChange: u,
    onClick: h,
    onFocus: D,
    // eslint-disable-next-line react/prop-types
    selected: f,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: C,
    // eslint-disable-next-line react/prop-types
    textColor: M = "inherit",
    value: k,
    wrapped: O = !1
  } = n, N = ae(n, bn), S = m({}, n, {
    disabled: a,
    disableFocusRipple: i,
    selected: f,
    icon: !!c,
    iconPosition: d,
    label: !!p,
    fullWidth: l,
    textColor: M,
    wrapped: O
  }), g = hn(S), E = c && p && /* @__PURE__ */ b.isValidElement(c) ? /* @__PURE__ */ b.cloneElement(c, {
    className: ne(g.iconWrapper, c.props.className)
  }) : c, V = (F) => {
    !f && u && u(F, k), h && h(F);
  }, R = (F) => {
    C && !f && u && u(F, k), D && D(F);
  };
  return /* @__PURE__ */ Q(gn, m({
    focusRipple: !i,
    className: ne(g.root, r),
    ref: s,
    role: "tab",
    "aria-selected": f,
    disabled: a,
    onClick: V,
    onFocus: R,
    ownerState: S,
    tabIndex: f ? 0 : -1
  }, N, {
    children: [d === "top" || d === "start" ? /* @__PURE__ */ Q(b.Fragment, {
      children: [E, p]
    }) : /* @__PURE__ */ Q(b.Fragment, {
      children: [p, E]
    }), v]
  }));
});
process.env.NODE_ENV !== "production" && (tt.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: Xt,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * The icon to display.
   */
  icon: o.oneOfType([o.element, o.string]),
  /**
   * The position of the icon relative to the label.
   * @default 'top'
   */
  iconPosition: o.oneOf(["bottom", "end", "start", "top"]),
  /**
   * The label element.
   */
  label: o.node,
  /**
   * @ignore
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: o.any,
  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   * @default false
   */
  wrapped: o.bool
});
const Po = tt;
function vn(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function Tn(e, t, s, n = {}, r = () => {
}) {
  const {
    ease: a = vn,
    duration: i = 300
    // standard
  } = n;
  let l = null;
  const c = t[e];
  let d = !1;
  const v = () => {
    d = !0;
  }, p = (u) => {
    if (d) {
      r(new Error("Animation cancelled"));
      return;
    }
    l === null && (l = u);
    const h = Math.min(1, (u - l) / i);
    if (t[e] = a(h) * (s - c) + c, h >= 1) {
      requestAnimationFrame(() => {
        r(null);
      });
      return;
    }
    requestAnimationFrame(p);
  };
  return c === s ? (r(new Error("Element already at target position")), v) : (requestAnimationFrame(p), v);
}
const Cn = ["onChange"], yn = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function nt(e) {
  const {
    onChange: t
  } = e, s = ae(e, Cn), n = b.useRef(), r = b.useRef(null), a = () => {
    n.current = r.current.offsetHeight - r.current.clientHeight;
  };
  return vo(() => {
    const i = Uo(() => {
      const c = n.current;
      a(), c !== n.current && t(n.current);
    }), l = qo(r.current);
    return l.addEventListener("resize", i), () => {
      i.clear(), l.removeEventListener("resize", i);
    };
  }, [t]), b.useEffect(() => {
    a(), t(n.current);
  }, [t]), /* @__PURE__ */ T("div", m({
    style: yn,
    ref: r
  }, s));
}
process.env.NODE_ENV !== "production" && (nt.propTypes = {
  onChange: o.func.isRequired
});
const xn = Yo(/* @__PURE__ */ T("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft"), wn = Yo(/* @__PURE__ */ T("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight");
function Dn(e) {
  return Te("MuiTabScrollButton", e);
}
const kn = be("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), Sn = kn, Pn = ["className", "slots", "slotProps", "direction", "orientation", "disabled"], Mn = (e) => {
  const {
    classes: t,
    orientation: s,
    disabled: n
  } = e;
  return he({
    root: ["root", s, n && "disabled"]
  }, Dn, t);
}, In = $(Co, {
  name: "MuiTabScrollButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: s
    } = e;
    return [t.root, s.orientation && t[s.orientation]];
  }
})(({
  ownerState: e
}) => m({
  width: 40,
  flexShrink: 0,
  opacity: 0.8,
  [`&.${Sn.disabled}`]: {
    opacity: 0
  }
}, e.orientation === "vertical" && {
  width: "100%",
  height: 40,
  "& svg": {
    transform: `rotate(${e.isRtl ? -90 : 90}deg)`
  }
})), st = /* @__PURE__ */ b.forwardRef(function(t, s) {
  var n, r;
  const a = pe({
    props: t,
    name: "MuiTabScrollButton"
  }), {
    className: i,
    slots: l = {},
    slotProps: c = {},
    direction: d
  } = a, v = ae(a, Pn), u = ho().direction === "rtl", h = m({
    isRtl: u
  }, a), D = Mn(h), f = (n = l.StartScrollButtonIcon) != null ? n : xn, C = (r = l.EndScrollButtonIcon) != null ? r : wn, M = We({
    elementType: f,
    externalSlotProps: c.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: h
  }), k = We({
    elementType: C,
    externalSlotProps: c.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: h
  });
  return /* @__PURE__ */ T(In, m({
    component: "div",
    className: ne(D.root, i),
    ref: s,
    role: null,
    ownerState: h,
    tabIndex: null
  }, v, {
    children: d === "left" ? /* @__PURE__ */ T(f, m({}, M)) : /* @__PURE__ */ T(C, m({}, k))
  }));
});
process.env.NODE_ENV !== "production" && (st.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The direction the button should indicate.
   */
  direction: o.oneOf(["left", "right"]).isRequired,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * The component orientation (layout flow direction).
   */
  orientation: o.oneOf(["horizontal", "vertical"]).isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   * @default {}
   */
  slotProps: o.shape({
    endScrollButtonIcon: o.oneOfType([o.func, o.object]),
    startScrollButtonIcon: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    EndScrollButtonIcon: o.elementType,
    StartScrollButtonIcon: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const On = st;
function Rn(e) {
  return Te("MuiTabs", e);
}
const Nn = be("MuiTabs", ["root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), to = Nn, Vn = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"], Mo = (e, t) => e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : e.firstChild, Io = (e, t) => e === t ? e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : e.lastChild, Qe = (e, t, s) => {
  let n = !1, r = s(e, t);
  for (; r; ) {
    if (r === e.firstChild) {
      if (n)
        return;
      n = !0;
    }
    const a = r.disabled || r.getAttribute("aria-disabled") === "true";
    if (!r.hasAttribute("tabindex") || a)
      r = s(e, r);
    else {
      r.focus();
      return;
    }
  }
}, $n = (e) => {
  const {
    vertical: t,
    fixed: s,
    hideScrollbar: n,
    scrollableX: r,
    scrollableY: a,
    centered: i,
    scrollButtonsHideMobile: l,
    classes: c
  } = e;
  return he({
    root: ["root", t && "vertical"],
    scroller: ["scroller", s && "fixed", n && "hideScrollbar", r && "scrollableX", a && "scrollableY"],
    flexContainer: ["flexContainer", t && "flexContainerVertical", i && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", l && "scrollButtonsHideMobile"],
    scrollableX: [r && "scrollableX"],
    hideScrollbar: [n && "hideScrollbar"]
  }, Rn, c);
}, Fn = $("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: s
    } = e;
    return [{
      [`& .${to.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${to.scrollButtons}`]: s.scrollButtonsHideMobile && t.scrollButtonsHideMobile
    }, t.root, s.vertical && t.vertical];
  }
})(({
  ownerState: e,
  theme: t
}) => m({
  overflow: "hidden",
  minHeight: 48,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  display: "flex"
}, e.vertical && {
  flexDirection: "column"
}, e.scrollButtonsHideMobile && {
  [`& .${to.scrollButtons}`]: {
    [t.breakpoints.down("sm")]: {
      display: "none"
    }
  }
})), Bn = $("div", {
  name: "MuiTabs",
  slot: "Scroller",
  overridesResolver: (e, t) => {
    const {
      ownerState: s
    } = e;
    return [t.scroller, s.fixed && t.fixed, s.hideScrollbar && t.hideScrollbar, s.scrollableX && t.scrollableX, s.scrollableY && t.scrollableY];
  }
})(({
  ownerState: e
}) => m({
  position: "relative",
  display: "inline-block",
  flex: "1 1 auto",
  whiteSpace: "nowrap"
}, e.fixed && {
  overflowX: "hidden",
  width: "100%"
}, e.hideScrollbar && {
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}, e.scrollableX && {
  overflowX: "auto",
  overflowY: "hidden"
}, e.scrollableY && {
  overflowY: "auto",
  overflowX: "hidden"
})), _n = $("div", {
  name: "MuiTabs",
  slot: "FlexContainer",
  overridesResolver: (e, t) => {
    const {
      ownerState: s
    } = e;
    return [t.flexContainer, s.vertical && t.flexContainerVertical, s.centered && t.centered];
  }
})(({
  ownerState: e
}) => m({
  display: "flex"
}, e.vertical && {
  flexDirection: "column"
}, e.centered && {
  justifyContent: "center"
})), En = $("span", {
  name: "MuiTabs",
  slot: "Indicator",
  overridesResolver: (e, t) => t.indicator
})(({
  ownerState: e,
  theme: t
}) => m({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  transition: t.transitions.create()
}, e.indicatorColor === "primary" && {
  backgroundColor: (t.vars || t).palette.primary.main
}, e.indicatorColor === "secondary" && {
  backgroundColor: (t.vars || t).palette.secondary.main
}, e.vertical && {
  height: "100%",
  width: 2,
  right: 0
})), Ln = $(nt)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Oo = {};
let Ro = !1;
const rt = /* @__PURE__ */ b.forwardRef(function(t, s) {
  const n = pe({
    props: t,
    name: "MuiTabs"
  }), r = ho(), a = r.direction === "rtl", {
    "aria-label": i,
    "aria-labelledby": l,
    action: c,
    centered: d = !1,
    children: v,
    className: p,
    component: u = "div",
    allowScrollButtonsMobile: h = !1,
    indicatorColor: D = "primary",
    onChange: f,
    orientation: C = "horizontal",
    ScrollButtonComponent: M = On,
    scrollButtons: k = "auto",
    selectionFollowsFocus: O,
    slots: N = {},
    slotProps: S = {},
    TabIndicatorProps: g = {},
    TabScrollButtonProps: E = {},
    textColor: V = "primary",
    value: R,
    variant: F = "standard",
    visibleScrollbar: H = !1
  } = n, ee = ae(n, Vn), W = F === "scrollable", U = C === "vertical", G = U ? "scrollTop" : "scrollLeft", J = U ? "top" : "left", ie = U ? "bottom" : "right", Ce = U ? "clientHeight" : "clientWidth", B = U ? "height" : "width", q = m({}, n, {
    component: u,
    allowScrollButtonsMobile: h,
    indicatorColor: D,
    orientation: C,
    vertical: U,
    scrollButtons: k,
    textColor: V,
    variant: F,
    visibleScrollbar: H,
    fixed: !W,
    hideScrollbar: W && !H,
    scrollableX: W && !U,
    scrollableY: W && U,
    centered: d && !W,
    scrollButtonsHideMobile: !h
  }), X = $n(q), le = We({
    elementType: N.StartScrollButtonIcon,
    externalSlotProps: S.startScrollButtonIcon,
    ownerState: q
  }), fe = We({
    elementType: N.EndScrollButtonIcon,
    externalSlotProps: S.endScrollButtonIcon,
    ownerState: q
  });
  process.env.NODE_ENV !== "production" && d && W && console.error('MUI: You can not use the `centered={true}` and `variant="scrollable"` properties at the same time on a `Tabs` component.');
  const [oe, L] = b.useState(!1), [_, ye] = b.useState(Oo), [ce, xe] = b.useState(!1), [we, De] = b.useState(!1), [ge, de] = b.useState(!1), [ke, se] = b.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), te = /* @__PURE__ */ new Map(), ue = b.useRef(null), re = b.useRef(null), Pe = () => {
    const y = ue.current;
    let P;
    if (y) {
      const z = y.getBoundingClientRect();
      P = {
        clientWidth: y.clientWidth,
        scrollLeft: y.scrollLeft,
        scrollTop: y.scrollTop,
        scrollLeftNormalized: Zt(y, r.direction),
        scrollWidth: y.scrollWidth,
        top: z.top,
        bottom: z.bottom,
        left: z.left,
        right: z.right
      };
    }
    let A;
    if (y && R !== !1) {
      const z = re.current.children;
      if (z.length > 0) {
        const Z = z[te.get(R)];
        process.env.NODE_ENV !== "production" && (Z || console.error(["MUI: The `value` provided to the Tabs component is invalid.", `None of the Tabs' children match with "${R}".`, te.keys ? `You can provide one of the following values: ${Array.from(te.keys()).join(", ")}.` : null].join(`
`))), A = Z ? Z.getBoundingClientRect() : null, process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && !Ro && A && A.width === 0 && A.height === 0 && // if the whole Tabs component is hidden, don't warn
        P.clientWidth !== 0 && (P = null, console.error(["MUI: The `value` provided to the Tabs component is invalid.", `The Tab with this \`value\` ("${R}") is not part of the document layout.`, "Make sure the tab item is present in the document or that it's not `display: none`."].join(`
`)), Ro = !0);
      }
    }
    return {
      tabsMeta: P,
      tabMeta: A
    };
  }, I = _e(() => {
    const {
      tabsMeta: y,
      tabMeta: P
    } = Pe();
    let A = 0, z;
    if (U)
      z = "top", P && y && (A = P.top - y.top + y.scrollTop);
    else if (z = a ? "right" : "left", P && y) {
      const ve = a ? y.scrollLeftNormalized + y.clientWidth - y.scrollWidth : y.scrollLeft;
      A = (a ? -1 : 1) * (P[z] - y[z] + ve);
    }
    const Z = {
      [z]: A,
      // May be wrong until the font is loaded.
      [B]: P ? P[B] : 0
    };
    if (isNaN(_[z]) || isNaN(_[B]))
      ye(Z);
    else {
      const ve = Math.abs(_[z] - Z[z]), Me = Math.abs(_[B] - Z[B]);
      (ve >= 1 || Me >= 1) && ye(Z);
    }
  }), w = (y, {
    animation: P = !0
  } = {}) => {
    P ? Tn(G, ue.current, y, {
      duration: r.transitions.duration.standard
    }) : ue.current[G] = y;
  }, x = (y) => {
    let P = ue.current[G];
    U ? P += y : (P += y * (a ? -1 : 1), P *= a && Zo() === "reverse" ? -1 : 1), w(P);
  }, Y = () => {
    const y = ue.current[Ce];
    let P = 0;
    const A = Array.from(re.current.children);
    for (let z = 0; z < A.length; z += 1) {
      const Z = A[z];
      if (P + Z[Ce] > y) {
        z === 0 && (P = y);
        break;
      }
      P += Z[Ce];
    }
    return P;
  }, Oe = () => {
    x(-1 * Y());
  }, Re = () => {
    x(Y());
  }, K = b.useCallback((y) => {
    se({
      overflow: null,
      scrollbarWidth: y
    });
  }, []), j = () => {
    const y = {};
    y.scrollbarSizeListener = W ? /* @__PURE__ */ T(Ln, {
      onChange: K,
      className: ne(X.scrollableX, X.hideScrollbar)
    }) : null;
    const A = W && (k === "auto" && (ce || we) || k === !0);
    return y.scrollButtonStart = A ? /* @__PURE__ */ T(M, m({
      slots: {
        StartScrollButtonIcon: N.StartScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: le
      },
      orientation: C,
      direction: a ? "right" : "left",
      onClick: Oe,
      disabled: !ce
    }, E, {
      className: ne(X.scrollButtons, E.className)
    })) : null, y.scrollButtonEnd = A ? /* @__PURE__ */ T(M, m({
      slots: {
        EndScrollButtonIcon: N.EndScrollButtonIcon
      },
      slotProps: {
        endScrollButtonIcon: fe
      },
      orientation: C,
      direction: a ? "left" : "right",
      onClick: Re,
      disabled: !we
    }, E, {
      className: ne(X.scrollButtons, E.className)
    })) : null, y;
  }, me = _e((y) => {
    const {
      tabsMeta: P,
      tabMeta: A
    } = Pe();
    if (!(!A || !P)) {
      if (A[J] < P[J]) {
        const z = P[G] + (A[J] - P[J]);
        w(z, {
          animation: y
        });
      } else if (A[ie] > P[ie]) {
        const z = P[G] + (A[ie] - P[ie]);
        w(z, {
          animation: y
        });
      }
    }
  }), Se = _e(() => {
    W && k !== !1 && de(!ge);
  });
  b.useEffect(() => {
    const y = Uo(() => {
      ue.current && I();
    });
    let P;
    const A = (ve) => {
      ve.forEach((Me) => {
        Me.removedNodes.forEach((qe) => {
          var $e;
          ($e = P) == null || $e.unobserve(qe);
        }), Me.addedNodes.forEach((qe) => {
          var $e;
          ($e = P) == null || $e.observe(qe);
        });
      }), y(), Se();
    }, z = qo(ue.current);
    z.addEventListener("resize", y);
    let Z;
    return typeof ResizeObserver < "u" && (P = new ResizeObserver(y), Array.from(re.current.children).forEach((ve) => {
      P.observe(ve);
    })), typeof MutationObserver < "u" && (Z = new MutationObserver(A), Z.observe(re.current, {
      childList: !0
    })), () => {
      var ve, Me;
      y.clear(), z.removeEventListener("resize", y), (ve = Z) == null || ve.disconnect(), (Me = P) == null || Me.disconnect();
    };
  }, [I, Se]), b.useEffect(() => {
    const y = Array.from(re.current.children), P = y.length;
    if (typeof IntersectionObserver < "u" && P > 0 && W && k !== !1) {
      const A = y[0], z = y[P - 1], Z = {
        root: ue.current,
        threshold: 0.99
      }, ve = (io) => {
        xe(!io[0].isIntersecting);
      }, Me = new IntersectionObserver(ve, Z);
      Me.observe(A);
      const qe = (io) => {
        De(!io[0].isIntersecting);
      }, $e = new IntersectionObserver(qe, Z);
      return $e.observe(z), () => {
        Me.disconnect(), $e.disconnect();
      };
    }
  }, [W, k, ge, v == null ? void 0 : v.length]), b.useEffect(() => {
    L(!0);
  }, []), b.useEffect(() => {
    I();
  }), b.useEffect(() => {
    me(Oo !== _);
  }, [me, _]), b.useImperativeHandle(c, () => ({
    updateIndicator: I,
    updateScrollButtons: Se
  }), [I, Se]);
  const Je = /* @__PURE__ */ T(En, m({}, g, {
    className: ne(X.indicator, g.className),
    ownerState: q,
    style: m({}, _, g.style)
  }));
  let Ze = 0;
  const Tt = b.Children.map(v, (y) => {
    if (!/* @__PURE__ */ b.isValidElement(y))
      return null;
    process.env.NODE_ENV !== "production" && Ut.isFragment(y) && console.error(["MUI: The Tabs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    const P = y.props.value === void 0 ? Ze : y.props.value;
    te.set(P, Ze);
    const A = P === R;
    return Ze += 1, /* @__PURE__ */ b.cloneElement(y, m({
      fullWidth: F === "fullWidth",
      indicator: A && !oe && Je,
      selected: A,
      selectionFollowsFocus: O,
      onChange: f,
      textColor: V,
      value: P
    }, Ze === 1 && R === !1 && !y.props.tabIndex ? {
      tabIndex: 0
    } : {}));
  }), Ct = (y) => {
    const P = re.current, A = Yt(P).activeElement;
    if (A.getAttribute("role") !== "tab")
      return;
    let Z = C === "horizontal" ? "ArrowLeft" : "ArrowUp", ve = C === "horizontal" ? "ArrowRight" : "ArrowDown";
    switch (C === "horizontal" && a && (Z = "ArrowRight", ve = "ArrowLeft"), y.key) {
      case Z:
        y.preventDefault(), Qe(P, A, Io);
        break;
      case ve:
        y.preventDefault(), Qe(P, A, Mo);
        break;
      case "Home":
        y.preventDefault(), Qe(P, null, Mo);
        break;
      case "End":
        y.preventDefault(), Qe(P, null, Io);
        break;
    }
  }, ao = j();
  return /* @__PURE__ */ Q(Fn, m({
    className: ne(X.root, p),
    ownerState: q,
    ref: s,
    as: u
  }, ee, {
    children: [ao.scrollButtonStart, ao.scrollbarSizeListener, /* @__PURE__ */ Q(Bn, {
      className: X.scroller,
      ownerState: q,
      style: {
        overflow: ke.overflow,
        [U ? `margin${a ? "Left" : "Right"}` : "marginBottom"]: H ? void 0 : -ke.scrollbarWidth
      },
      ref: ue,
      children: [/* @__PURE__ */ T(_n, {
        "aria-label": i,
        "aria-labelledby": l,
        "aria-orientation": C === "vertical" ? "vertical" : null,
        className: X.flexContainer,
        ownerState: q,
        onKeyDown: Ct,
        ref: re,
        role: "tablist",
        children: Tt
      }), oe && Je]
    }), ao.scrollButtonEnd]
  }));
});
process.env.NODE_ENV !== "production" && (rt.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It supports two actions: `updateIndicator()` and `updateScrollButtons()`
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: go,
  /**
   * If `true`, the scroll buttons aren't forced hidden on mobile.
   * By default the scroll buttons are hidden on mobile and takes precedence over `scrollButtons`.
   * @default false
   */
  allowScrollButtonsMobile: o.bool,
  /**
   * The label for the Tabs as a string.
   */
  "aria-label": o.string,
  /**
   * An id or list of ids separated by a space that label the Tabs.
   */
  "aria-labelledby": o.string,
  /**
   * If `true`, the tabs are centered.
   * This prop is intended for large views.
   * @default false
   */
  centered: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Determines the color of the indicator.
   * @default 'primary'
   */
  indicatorColor: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {any} value We default to the index of the child (number)
   */
  onChange: o.func,
  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation: o.oneOf(["horizontal", "vertical"]),
  /**
   * The component used to render the scroll buttons.
   * @default TabScrollButton
   */
  ScrollButtonComponent: o.elementType,
  /**
   * Determine behavior of scroll buttons when tabs are set to scroll:
   *
   * - `auto` will only present them when not all the items are visible.
   * - `true` will always present them.
   * - `false` will never present them.
   *
   * By default the scroll buttons are hidden on mobile.
   * This behavior can be disabled with `allowScrollButtonsMobile`.
   * @default 'auto'
   */
  scrollButtons: o.oneOf(["auto", !1, !0]),
  /**
   * If `true` the selected tab changes on focus. Otherwise it only
   * changes on activation.
   */
  selectionFollowsFocus: o.bool,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   * @default {}
   */
  slotProps: o.shape({
    endScrollButtonIcon: o.oneOfType([o.func, o.object]),
    startScrollButtonIcon: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    EndScrollButtonIcon: o.elementType,
    StartScrollButtonIcon: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Props applied to the tab indicator element.
   * @default  {}
   */
  TabIndicatorProps: o.object,
  /**
   * Props applied to the [`TabScrollButton`](/material-ui/api/tab-scroll-button/) element.
   * @default {}
   */
  TabScrollButtonProps: o.object,
  /**
   * Determines the color of the `Tab`.
   * @default 'primary'
   */
  textColor: o.oneOf(["inherit", "primary", "secondary"]),
  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this prop to `false`.
   */
  value: o.any,
  /**
   * Determines additional display behavior of the tabs:
   *
   *  - `scrollable` will invoke scrolling properties and allow for horizontally
   *  scrolling (or swiping) of the tab bar.
   *  - `fullWidth` will make the tabs grow to use all the available space,
   *  which should be used for small views, like on mobile.
   *  - `standard` will render the default state.
   * @default 'standard'
   */
  variant: o.oneOf(["fullWidth", "scrollable", "standard"]),
  /**
   * If `true`, the scrollbar is visible. It can be useful when displaying
   * a long vertical list of tabs.
   * @default false
   */
  visibleScrollbar: o.bool
});
const An = rt;
function jn(e) {
  return Te("MuiDateTimePickerTabs", e);
}
be("MuiDateTimePickerTabs", ["root"]);
const zn = (e) => oo(e) ? "date" : "time", Wn = (e) => e === "date" ? "day" : "hours", Hn = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"]
  }, jn, t);
}, Un = $(An, {
  name: "MuiDateTimePickerTabs",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  boxShadow: `0 -1px 0 0 inset ${(e.vars || e).palette.divider}`,
  "&:last-child": {
    boxShadow: `0 1px 0 0 inset ${(e.vars || e).palette.divider}`,
    [`& .${to.indicator}`]: {
      bottom: "auto",
      top: 0
    }
  }
})), at = function(t) {
  const s = pe({
    props: t,
    name: "MuiDateTimePickerTabs"
  }), {
    dateIcon: n = /* @__PURE__ */ T(Rt, {}),
    onViewChange: r,
    timeIcon: a = /* @__PURE__ */ T(Nt, {}),
    view: i,
    hidden: l = typeof window > "u" || window.innerHeight < 667
  } = s, c = je(), d = Hn(s), v = (p, u) => {
    r(Wn(u));
  };
  return l ? null : /* @__PURE__ */ Q(Un, {
    ownerState: s,
    variant: "fullWidth",
    value: zn(i),
    onChange: v,
    className: d.root,
    children: [/* @__PURE__ */ T(Po, {
      value: "date",
      "aria-label": c.dateTableLabel,
      icon: /* @__PURE__ */ T(b.Fragment, {
        children: n
      })
    }), /* @__PURE__ */ T(Po, {
      value: "time",
      "aria-label": c.timeTableLabel,
      icon: /* @__PURE__ */ T(b.Fragment, {
        children: a
      })
    })]
  });
};
process.env.NODE_ENV !== "production" && (at.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * Date tab icon.
   * @default DateRange
   */
  dateIcon: o.node,
  /**
   * Toggles visibility of the tabs allowing view switching.
   * @default `window.innerHeight < 667` for `DesktopDateTimePicker` and `MobileDateTimePicker`, `displayStaticWrapperAs === 'desktop'` for `StaticDateTimePicker`
   */
  hidden: o.bool,
  /**
   * Callback called when a tab is clicked
   * @template TView
   * @param {TView} view The view to open
   */
  onViewChange: o.func.isRequired,
  /**
   * Time tab icon.
   * @default Time
   */
  timeIcon: o.node,
  /**
   * Currently visible picker view.
   */
  view: o.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]).isRequired
});
function qn(e) {
  return Te("MuiDateTimePickerToolbar", e);
}
const co = be("MuiDateTimePickerToolbar", ["root", "dateContainer", "timeContainer", "timeDigitsContainer", "separator", "timeLabelReverse", "ampmSelection", "ampmLandscape", "ampmLabel"]), Yn = ["ampm", "ampmInClock", "value", "onChange", "view", "isLandscape", "onViewChange", "toolbarFormat", "toolbarPlaceholder", "views", "disabled", "readOnly", "toolbarVariant"], Kn = (e) => {
  const {
    classes: t,
    theme: s,
    isLandscape: n
  } = e, r = {
    root: ["root"],
    dateContainer: ["dateContainer"],
    timeContainer: ["timeContainer", s.direction === "rtl" && "timeLabelReverse"],
    timeDigitsContainer: ["timeDigitsContainer", s.direction === "rtl" && "timeLabelReverse"],
    separator: ["separator"],
    ampmSelection: ["ampmSelection", n && "ampmLandscape"],
    ampmLabel: ["ampmLabel"]
  };
  return he(r, qn, t);
}, it = $(Vt, {
  name: "MuiDateTimePickerToolbar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => ({
  paddingLeft: t.toolbarVariant === "desktop" && !t.isLandscape ? 24 : 16,
  paddingRight: t.toolbarVariant === "desktop" && !t.isLandscape ? 0 : 16,
  borderBottom: t.toolbarVariant === "desktop" ? `1px solid ${(e.vars || e).palette.divider}` : void 0,
  borderRight: t.toolbarVariant === "desktop" && t.isLandscape ? `1px solid ${(e.vars || e).palette.divider}` : void 0,
  justifyContent: "space-around",
  position: "relative"
}));
it.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: o.elementType,
  classes: o.object,
  className: o.string,
  isLandscape: o.bool.isRequired,
  isMobileKeyboardViewOpen: o.bool,
  landscapeDirection: o.oneOf(["column", "row"]),
  ownerState: o.object.isRequired,
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  toggleMobileKeyboardView: o.func,
  toolbarTitle: o.node,
  viewType: o.oneOf(["date", "time"])
};
const Gn = $("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "DateContainer",
  overridesResolver: (e, t) => t.dateContainer
})({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start"
}), lt = $("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "TimeContainer",
  overridesResolver: (e, t) => t.timeContainer
})(({
  theme: e,
  ownerState: t
}) => {
  const s = t.isLandscape && t.toolbarVariant !== "desktop" ? "column" : "row";
  return m({
    display: "flex",
    flexDirection: s
  }, t.toolbarVariant === "desktop" && m({}, !t.isLandscape && {
    gap: 9,
    marginRight: 4,
    alignSelf: "flex-end"
  }), e.direction === "rtl" && {
    flexDirection: `${s}-reverse`
  });
}), Xn = $("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "TimeDigitsContainer",
  overridesResolver: (e, t) => t.timeDigitsContainer
})(({
  theme: e,
  ownerState: t
}) => m({
  display: "flex"
}, t.toolbarVariant === "desktop" && {
  gap: 1.5
}, e.direction === "rtl" && {
  flexDirection: "row-reverse"
}));
lt.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: o.elementType,
  ownerState: o.object.isRequired,
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
};
const No = $(Qo, {
  name: "MuiDateTimePickerToolbar",
  slot: "Separator",
  overridesResolver: (e, t) => t.separator
})(({
  ownerState: e
}) => ({
  margin: e.toolbarVariant === "desktop" ? 0 : "0 4px 0 2px",
  cursor: "default"
})), Jn = $("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "AmPmSelection",
  overridesResolver: (e, t) => [{
    [`.${co.ampmLabel}`]: t.ampmLabel
  }, {
    [`&.${co.ampmLandscape}`]: t.ampmLandscape
  }, t.ampmSelection]
})(({
  ownerState: e
}) => m({
  display: "flex",
  flexDirection: "column",
  marginRight: "auto",
  marginLeft: 12
}, e.isLandscape && {
  margin: "4px 0 auto",
  flexDirection: "row",
  justifyContent: "space-around",
  width: "100%"
}, {
  [`& .${co.ampmLabel}`]: {
    fontSize: 17
  }
}));
function ct(e) {
  const t = pe({
    props: e,
    name: "MuiDateTimePickerToolbar"
  }), {
    ampm: s,
    ampmInClock: n,
    value: r,
    onChange: a,
    view: i,
    isLandscape: l,
    onViewChange: c,
    toolbarFormat: d,
    toolbarPlaceholder: v = "––",
    views: p,
    disabled: u,
    readOnly: h,
    toolbarVariant: D = "mobile"
  } = t, f = ae(t, Yn), C = t, M = Ee(), {
    meridiemMode: k,
    handleMeridiemChange: O
  } = uo(r, s, a), N = !!(s && !n), S = D === "desktop", g = je(), E = ho(), V = Kn(m({}, C, {
    theme: E
  })), R = (H) => s ? M.format(H, "hours12h") : M.format(H, "hours24h"), F = b.useMemo(() => r ? d ? M.formatByString(r, d) : M.format(r, "shortDate") : v, [r, d, v, M]);
  return /* @__PURE__ */ Q(it, m({
    toolbarTitle: g.dateTimePickerToolbarTitle,
    isLandscape: l,
    className: V.root
  }, f, {
    ownerState: C,
    children: [/* @__PURE__ */ Q(Gn, {
      className: V.dateContainer,
      ownerState: C,
      children: [p.includes("year") && /* @__PURE__ */ T(Fe, {
        tabIndex: -1,
        variant: "subtitle1",
        onClick: () => c("year"),
        selected: i === "year",
        value: r ? M.format(r, "year") : "–"
      }), p.includes("day") && /* @__PURE__ */ T(Fe, {
        tabIndex: -1,
        variant: S ? "h5" : "h4",
        onClick: () => c("day"),
        selected: i === "day",
        value: F
      })]
    }), /* @__PURE__ */ Q(lt, {
      className: V.timeContainer,
      ownerState: C,
      children: [/* @__PURE__ */ Q(Xn, {
        className: V.timeDigitsContainer,
        ownerState: C,
        children: [p.includes("hours") && /* @__PURE__ */ T(Fe, {
          variant: S ? "h5" : "h3",
          width: S && !l ? Ke : void 0,
          onClick: () => c("hours"),
          selected: i === "hours",
          value: r ? R(r) : "--"
        }), p.includes("minutes") && /* @__PURE__ */ Q(b.Fragment, {
          children: [/* @__PURE__ */ T(No, {
            variant: S ? "h5" : "h3",
            value: ":",
            className: V.separator,
            ownerState: C
          }), /* @__PURE__ */ T(Fe, {
            variant: S ? "h5" : "h3",
            width: S && !l ? Ke : void 0,
            onClick: () => c("minutes"),
            selected: i === "minutes",
            value: r ? M.format(r, "minutes") : "--"
          })]
        }), p.includes("seconds") && /* @__PURE__ */ Q(b.Fragment, {
          children: [/* @__PURE__ */ T(No, {
            variant: S ? "h5" : "h3",
            value: ":",
            className: V.separator,
            ownerState: C
          }), /* @__PURE__ */ T(Fe, {
            variant: S ? "h5" : "h3",
            width: S && !l ? Ke : void 0,
            onClick: () => c("seconds"),
            selected: i === "seconds",
            value: r ? M.format(r, "seconds") : "--"
          })]
        })]
      }), N && !S && /* @__PURE__ */ Q(Jn, {
        className: V.ampmSelection,
        ownerState: C,
        children: [/* @__PURE__ */ T(Fe, {
          variant: "subtitle2",
          selected: k === "am",
          typographyClassName: V.ampmLabel,
          value: Ne(M, "am"),
          onClick: h ? void 0 : () => O("am"),
          disabled: u
        }), /* @__PURE__ */ T(Fe, {
          variant: "subtitle2",
          selected: k === "pm",
          typographyClassName: V.ampmLabel,
          value: Ne(M, "pm"),
          onClick: h ? void 0 : () => O("pm"),
          disabled: u
        })]
      }), s && S && /* @__PURE__ */ T(Fe, {
        variant: "h5",
        onClick: () => c("meridiem"),
        selected: i === "meridiem",
        value: r && k ? Ne(M, k) : "--",
        width: Ke
      })]
    })]
  }));
}
process.env.NODE_ENV !== "production" && (ct.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  ampm: o.bool,
  ampmInClock: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * className applied to the root component.
   */
  className: o.string,
  disabled: o.bool,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: o.bool,
  isLandscape: o.bool.isRequired,
  onChange: o.func.isRequired,
  /**
   * Callback called when a toolbar is clicked
   * @template TView
   * @param {TView} view The view to open
   */
  onViewChange: o.func.isRequired,
  readOnly: o.bool,
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  titleId: o.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: o.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: o.node,
  toolbarVariant: o.oneOf(["desktop", "mobile"]),
  value: o.any,
  /**
   * Currently visible picker view.
   */
  view: o.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]).isRequired,
  views: o.arrayOf(o.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]).isRequired).isRequired
});
function Zn(e, t) {
  var s, n, r, a, i, l, c, d, v, p, u;
  const h = Ee(), D = jo(), f = pe({
    props: e,
    name: t
  }), C = (s = f.ampm) != null ? s : h.is12HourCycleInCurrentLocale(), M = b.useMemo(() => {
    var N;
    return ((N = f.localeText) == null ? void 0 : N.toolbarTitle) == null ? f.localeText : m({}, f.localeText, {
      dateTimePickerToolbarTitle: f.localeText.toolbarTitle
    });
  }, [f.localeText]), k = (n = f.slots) != null ? n : zo(f.components), O = (r = f.slotProps) != null ? r : f.componentsProps;
  return m({}, f, $t({
    views: f.views,
    openTo: f.openTo,
    defaultViews: ["year", "day", "hours", "minutes"],
    defaultOpenTo: "day"
  }), {
    ampm: C,
    localeText: M,
    orientation: (a = f.orientation) != null ? a : "portrait",
    // TODO: Remove from public API
    disableIgnoringDatePartForTimeValidation: (i = f.disableIgnoringDatePartForTimeValidation) != null ? i : !!(f.minDateTime || f.maxDateTime || // allow time clock to correctly check time validity: https://github.com/mui/mui-x/issues/8520
    f.disablePast || f.disableFuture),
    disableFuture: (l = f.disableFuture) != null ? l : !1,
    disablePast: (c = f.disablePast) != null ? c : !1,
    minDate: no(h, (d = f.minDateTime) != null ? d : f.minDate, D.minDate),
    maxDate: no(h, (v = f.maxDateTime) != null ? v : f.maxDate, D.maxDate),
    minTime: (p = f.minDateTime) != null ? p : f.minTime,
    maxTime: (u = f.maxDateTime) != null ? u : f.maxTime,
    slots: m({
      toolbar: ct,
      tabs: at
    }, k),
    slotProps: m({}, O, {
      toolbar: m({
        ampm: C
      }, O == null ? void 0 : O.toolbar)
    })
  });
}
function Qn(e) {
  return Te("MuiDivider", e);
}
const Vo = be("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), es = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"], os = (e) => {
  const {
    absolute: t,
    children: s,
    classes: n,
    flexItem: r,
    light: a,
    orientation: i,
    textAlign: l,
    variant: c
  } = e;
  return he({
    root: ["root", t && "absolute", c, a && "light", i === "vertical" && "vertical", r && "flexItem", s && "withChildren", s && i === "vertical" && "withChildrenVertical", l === "right" && i !== "vertical" && "textAlignRight", l === "left" && i !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", i === "vertical" && "wrapperVertical"]
  }, Qn, n);
}, ts = $("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: s
    } = e;
    return [t.root, s.absolute && t.absolute, t[s.variant], s.light && t.light, s.orientation === "vertical" && t.vertical, s.flexItem && t.flexItem, s.children && t.withChildren, s.children && s.orientation === "vertical" && t.withChildrenVertical, s.textAlign === "right" && s.orientation !== "vertical" && t.textAlignRight, s.textAlign === "left" && s.orientation !== "vertical" && t.textAlignLeft];
  }
})(({
  theme: e,
  ownerState: t
}) => m({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: (e.vars || e).palette.divider,
  borderBottomWidth: "thin"
}, t.absolute && {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%"
}, t.light && {
  borderColor: e.vars ? `rgba(${e.vars.palette.dividerChannel} / 0.08)` : Ve(e.palette.divider, 0.08)
}, t.variant === "inset" && {
  marginLeft: 72
}, t.variant === "middle" && t.orientation === "horizontal" && {
  marginLeft: e.spacing(2),
  marginRight: e.spacing(2)
}, t.variant === "middle" && t.orientation === "vertical" && {
  marginTop: e.spacing(1),
  marginBottom: e.spacing(1)
}, t.orientation === "vertical" && {
  height: "100%",
  borderBottomWidth: 0,
  borderRightWidth: "thin"
}, t.flexItem && {
  alignSelf: "stretch",
  height: "auto"
}), ({
  ownerState: e
}) => m({}, e.children && {
  display: "flex",
  whiteSpace: "nowrap",
  textAlign: "center",
  border: 0,
  "&::before, &::after": {
    content: '""',
    alignSelf: "center"
  }
}), ({
  theme: e,
  ownerState: t
}) => m({}, t.children && t.orientation !== "vertical" && {
  "&::before, &::after": {
    width: "100%",
    borderTop: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  theme: e,
  ownerState: t
}) => m({}, t.children && t.orientation === "vertical" && {
  flexDirection: "column",
  "&::before, &::after": {
    height: "100%",
    borderLeft: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  ownerState: e
}) => m({}, e.textAlign === "right" && e.orientation !== "vertical" && {
  "&::before": {
    width: "90%"
  },
  "&::after": {
    width: "10%"
  }
}, e.textAlign === "left" && e.orientation !== "vertical" && {
  "&::before": {
    width: "10%"
  },
  "&::after": {
    width: "90%"
  }
})), ns = $("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (e, t) => {
    const {
      ownerState: s
    } = e;
    return [t.wrapper, s.orientation === "vertical" && t.wrapperVertical];
  }
})(({
  theme: e,
  ownerState: t
}) => m({
  display: "inline-block",
  paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
  paddingRight: `calc(${e.spacing(1)} * 1.2)`
}, t.orientation === "vertical" && {
  paddingTop: `calc(${e.spacing(1)} * 1.2)`,
  paddingBottom: `calc(${e.spacing(1)} * 1.2)`
})), yo = /* @__PURE__ */ b.forwardRef(function(t, s) {
  const n = pe({
    props: t,
    name: "MuiDivider"
  }), {
    absolute: r = !1,
    children: a,
    className: i,
    component: l = a ? "div" : "hr",
    flexItem: c = !1,
    light: d = !1,
    orientation: v = "horizontal",
    role: p = l !== "hr" ? "separator" : void 0,
    textAlign: u = "center",
    variant: h = "fullWidth"
  } = n, D = ae(n, es), f = m({}, n, {
    absolute: r,
    component: l,
    flexItem: c,
    light: d,
    orientation: v,
    role: p,
    textAlign: u,
    variant: h
  }), C = os(f);
  return /* @__PURE__ */ T(ts, m({
    as: l,
    className: ne(C.root, i),
    role: p,
    ref: s,
    ownerState: f
  }, D, {
    children: a ? /* @__PURE__ */ T(ns, {
      className: C.wrapper,
      ownerState: f,
      children: a
    }) : null
  }));
});
yo.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (yo.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Absolutely position the element.
   * @default false
   */
  absolute: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   * @default false
   */
  flexItem: o.bool,
  /**
   * If `true`, the divider will have a lighter color.
   * @default false
   */
  light: o.bool,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: o.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The text alignment.
   * @default 'center'
   */
  textAlign: o.oneOf(["center", "left", "right"]),
  /**
   * The variant to use.
   * @default 'fullWidth'
   */
  variant: o.oneOfType([o.oneOf(["fullWidth", "inset", "middle"]), o.string])
});
const $o = yo;
function ss(e) {
  return Te("MuiMultiSectionDigitalClock", e);
}
be("MuiMultiSectionDigitalClock", ["root"]);
const rs = be("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Fo = rs, as = be("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Bo = as;
function is(e) {
  return Te("MuiMenuItem", e);
}
const ls = be("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Ye = ls, cs = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"], ds = (e, t) => {
  const {
    ownerState: s
  } = e;
  return [t.root, s.dense && t.dense, s.divider && t.divider, !s.disableGutters && t.gutters];
}, us = (e) => {
  const {
    disabled: t,
    dense: s,
    divider: n,
    disableGutters: r,
    selected: a,
    classes: i
  } = e, c = he({
    root: ["root", s && "dense", t && "disabled", !r && "gutters", n && "divider", a && "selected"]
  }, is, i);
  return m({}, i, c);
}, ms = $(Co, {
  shouldForwardProp: (e) => qt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: ds
})(({
  theme: e,
  ownerState: t
}) => m({}, e.typography.body1, {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap"
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, {
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Ye.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Ye.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Ye.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Ye.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Ye.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Vo.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Vo.inset}`]: {
    marginLeft: 52
  },
  [`& .${Bo.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Bo.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Fo.root}`]: {
    minWidth: 36
  }
}, !t.dense && {
  [e.breakpoints.up("sm")]: {
    minHeight: "auto"
  }
}, t.dense && m({
  minHeight: 32,
  // https://m2.material.io/components/menus#specs > Dense
  paddingTop: 4,
  paddingBottom: 4
}, e.typography.body2, {
  [`& .${Fo.root} svg`]: {
    fontSize: "1.25rem"
  }
}))), dt = /* @__PURE__ */ b.forwardRef(function(t, s) {
  const n = pe({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: r = !1,
    component: a = "li",
    dense: i = !1,
    divider: l = !1,
    disableGutters: c = !1,
    focusVisibleClassName: d,
    role: v = "menuitem",
    tabIndex: p,
    className: u
  } = n, h = ae(n, cs), D = b.useContext(ko), f = b.useMemo(() => ({
    dense: i || D.dense || !1,
    disableGutters: c
  }), [D.dense, i, c]), C = b.useRef(null);
  vo(() => {
    r && (C.current ? C.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [r]);
  const M = m({}, n, {
    dense: f.dense,
    divider: l,
    disableGutters: c
  }), k = us(n), O = To(C, s);
  let N;
  return n.disabled || (N = p !== void 0 ? p : -1), /* @__PURE__ */ T(ko.Provider, {
    value: f,
    children: /* @__PURE__ */ T(ms, m({
      ref: O,
      role: v,
      tabIndex: N,
      component: a,
      focusVisibleClassName: ne(k.focusVisible, d),
      className: ne(k.root, u)
    }, h, {
      ownerState: M,
      classes: k
    }))
  });
});
process.env.NODE_ENV !== "production" && (dt.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: o.bool,
  /**
   * @ignore
   */
  disabled: o.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  role: o.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number
});
const ut = dt;
function ps(e) {
  return Te("MuiMultiSectionDigitalClock", e);
}
const fs = be("MuiMultiSectionDigitalClock", ["root", "item"]), bs = ["autoFocus", "onChange", "className", "disabled", "readOnly", "items", "active", "slots", "slotProps", "skipDisabled"], hs = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"],
    item: ["item"]
  }, ps, t);
}, gs = $(Ko, {
  name: "MuiMultiSectionDigitalClockSection",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => ({
  maxHeight: Wo,
  width: 56,
  padding: 0,
  overflow: "hidden",
  "@media (prefers-reduced-motion: no-preference)": {
    scrollBehavior: t.alreadyRendered ? "smooth" : "auto"
  },
  "&:hover": {
    overflowY: "auto"
  },
  "&:not(:first-of-type)": {
    borderLeft: `1px solid ${(e.vars || e).palette.divider}`
  },
  "&:after": {
    display: "block",
    content: '""',
    // subtracting the height of one item, extra margin and borders to make sure the max height is correct
    height: "calc(100% - 40px - 6px)"
  }
})), vs = $(ut, {
  name: "MuiMultiSectionDigitalClockSection",
  slot: "Item",
  overridesResolver: (e, t) => t.item
})(({
  theme: e
}) => ({
  padding: 8,
  margin: "2px 4px",
  width: Ke,
  justifyContent: "center",
  "&:first-of-type": {
    marginTop: 4
  },
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ve(e.palette.primary.main, e.palette.action.hoverOpacity)
  },
  "&.Mui-selected": {
    backgroundColor: (e.vars || e).palette.primary.main,
    color: (e.vars || e).palette.primary.contrastText,
    "&:focus-visible, &:hover": {
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  },
  "&.Mui-focusVisible": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.focusOpacity})` : Ve(e.palette.primary.main, e.palette.action.focusOpacity)
  }
})), Ts = /* @__PURE__ */ b.forwardRef(function(t, s) {
  var n;
  const r = b.useRef(null), a = To(s, r), i = b.useRef(null), l = pe({
    props: t,
    name: "MuiMultiSectionDigitalClockSection"
  }), {
    autoFocus: c,
    onChange: d,
    className: v,
    disabled: p,
    readOnly: u,
    items: h,
    active: D,
    slots: f,
    slotProps: C,
    skipDisabled: M
  } = l, k = ae(l, bs), O = b.useMemo(() => m({}, l, {
    alreadyRendered: !!r.current
  }), [l]), N = hs(O), S = (n = f == null ? void 0 : f.digitalClockSectionItem) != null ? n : vs;
  return b.useEffect(() => {
    if (r.current === null)
      return;
    const g = r.current.querySelector('[role="option"][aria-selected="true"]');
    if (!g || i.current === g) {
      i.current !== g && (i.current = g);
      return;
    }
    i.current = g, D && c && g.focus();
    const E = g.offsetTop;
    r.current.scrollTop = E - 4;
  }), /* @__PURE__ */ T(gs, m({
    ref: a,
    className: ne(N.root, v),
    ownerState: O,
    autoFocusItem: c && D,
    role: "listbox"
  }, k, {
    children: h.map((g) => {
      var E, V;
      if (M && (E = g.isDisabled) != null && E.call(g, g.value))
        return null;
      const R = g.isSelected(g.value);
      return /* @__PURE__ */ T(S, m({
        onClick: () => !u && d(g.value),
        selected: R,
        disabled: p || ((V = g.isDisabled) == null ? void 0 : V.call(g, g.value)),
        disableRipple: u,
        role: "option",
        "aria-disabled": u,
        "aria-label": g.ariaLabel,
        "aria-selected": R
      }, C == null ? void 0 : C.digitalClockSectionItem, {
        children: g.label
      }), g.label);
    })
  }));
}), Cs = ({
  now: e,
  value: t,
  utils: s,
  ampm: n,
  isDisabled: r,
  resolveAriaLabel: a,
  timeStep: i
}) => {
  const l = t ? s.getHours(t) : null, c = [], d = (p) => l === null ? !1 : n ? p === 12 ? l === 12 || l === 0 : l === p || l - 12 === p : l === p, v = n ? 11 : 23;
  for (let p = 0; p <= v; p += i) {
    let u = s.format(s.setHours(e, p), n ? "hours12h" : "hours24h");
    const h = a(parseInt(u, 10).toString());
    u = s.formatNumber(u), c.push({
      value: p,
      label: u,
      isSelected: d,
      isDisabled: r,
      ariaLabel: h
    });
  }
  return c;
}, _o = ({
  value: e,
  isDisabled: t,
  timeStep: s,
  resolveLabel: n,
  resolveAriaLabel: r,
  hasValue: a = !0
}) => {
  const i = (l) => e === null ? !1 : a && e === l;
  return [...Array.from({
    length: Math.ceil(60 / s)
  }, (l, c) => {
    const d = s * c;
    return {
      value: d,
      label: n(d),
      isDisabled: t,
      isSelected: i,
      ariaLabel: r(d.toString())
    };
  })];
}, xo = ({
  value: e,
  referenceDate: t,
  utils: s,
  props: n,
  timezone: r
}) => {
  const a = b.useMemo(
    () => Ue.getInitialReferenceValue({
      value: e,
      utils: s,
      props: n,
      referenceDate: t,
      granularity: Ft.day,
      timezone: r,
      getTodayDate: () => Bt(s, r, "date")
    }),
    // We only want to compute the reference date on mount.
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  return e ?? a;
}, ys = ["ampm", "timeSteps", "autoFocus", "components", "componentsProps", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableClock", "shouldDisableTime", "onChange", "view", "views", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "disabled", "readOnly", "skipDisabled", "timezone"], xs = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"]
  }, ss, t);
}, ws = $(mo, {
  name: "MuiMultiSectionDigitalClock",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`
})), mt = /* @__PURE__ */ b.forwardRef(function(t, s) {
  const n = Ee(), r = pe({
    props: t,
    name: "MuiMultiSectionDigitalClock"
  }), {
    ampm: a = n.is12HourCycleInCurrentLocale(),
    timeSteps: i,
    autoFocus: l,
    components: c,
    componentsProps: d,
    slots: v,
    slotProps: p,
    value: u,
    defaultValue: h,
    referenceDate: D,
    disableIgnoringDatePartForTimeValidation: f = !1,
    maxTime: C,
    minTime: M,
    disableFuture: k,
    disablePast: O,
    minutesStep: N = 1,
    shouldDisableClock: S,
    shouldDisableTime: g,
    onChange: E,
    view: V,
    views: R = ["hours", "minutes"],
    openTo: F,
    onViewChange: H,
    focusedView: ee,
    onFocusedViewChange: W,
    className: U,
    disabled: G,
    readOnly: J,
    skipDisabled: ie = !1,
    timezone: Ce
  } = r, B = ae(r, ys), {
    value: q,
    handleValueChange: X,
    timezone: le
  } = po({
    name: "MultiSectionDigitalClock",
    timezone: Ce,
    value: u,
    defaultValue: h,
    onChange: E,
    valueManager: Ue
  }), fe = je(), oe = fo(le), L = b.useMemo(() => m({
    hours: 1,
    minutes: 5,
    seconds: 5
  }, i), [i]), _ = xo({
    value: q,
    referenceDate: D,
    utils: n,
    props: r,
    timezone: le
  }), ye = _e((w, x, Y) => X(w, x, Y)), ce = b.useMemo(() => !a || !R.includes("hours") || R.includes("meridiem") ? R : [...R, "meridiem"], [a, R]), {
    view: xe,
    setValueAndGoToView: we,
    focusedView: De
  } = bo({
    view: V,
    views: ce,
    openTo: F,
    onViewChange: H,
    onChange: ye,
    focusedView: ee,
    onFocusedViewChange: W
  }), ge = _e((w) => {
    we(w, null, "meridiem");
  }), {
    meridiemMode: de,
    handleMeridiemChange: ke
  } = uo(_, a, ge, "finish"), se = b.useCallback((w, x) => {
    const Y = ro(f, n), Oe = x === "hours" || x === "minutes" && ce.includes("seconds"), Re = ({
      start: j,
      end: me
    }) => !(M && Y(M, me) || C && Y(j, C) || k && Y(j, oe) || O && Y(oe, Oe ? me : j)), K = (j, me = 1) => {
      if (j % me !== 0 || S != null && S(j, x))
        return !1;
      if (g)
        switch (x) {
          case "hours":
            return !g(n.setHours(_, j), "hours");
          case "minutes":
            return !g(n.setMinutes(_, j), "minutes");
          case "seconds":
            return !g(n.setSeconds(_, j), "seconds");
          default:
            return !1;
        }
      return !0;
    };
    switch (x) {
      case "hours": {
        const j = so(w, de, a), me = n.setHours(_, j), Se = n.setSeconds(n.setMinutes(me, 0), 0), Je = n.setSeconds(n.setMinutes(me, 59), 59);
        return !Re({
          start: Se,
          end: Je
        }) || !K(j);
      }
      case "minutes": {
        const j = n.setMinutes(_, w), me = n.setSeconds(j, 0), Se = n.setSeconds(j, 59);
        return !Re({
          start: me,
          end: Se
        }) || !K(w, N);
      }
      case "seconds": {
        const j = n.setSeconds(_, w);
        return !Re({
          start: j,
          end: j
        }) || !K(w);
      }
      default:
        throw new Error("not supported");
    }
  }, [a, _, f, C, de, M, N, S, g, n, k, O, oe, ce]), te = _e((w, x) => {
    const Y = ce.indexOf(w), Oe = ce[Y + 1];
    we(x, Oe, w);
  }), ue = b.useCallback((w) => {
    switch (w) {
      case "hours":
        return {
          onChange: (x) => {
            const Y = so(x, de, a);
            te("hours", n.setHours(_, Y));
          },
          items: Cs({
            now: oe,
            value: q,
            ampm: a,
            utils: n,
            isDisabled: (x) => G || se(x, "hours"),
            timeStep: L.hours,
            resolveAriaLabel: fe.hoursClockNumberText
          })
        };
      case "minutes":
        return {
          onChange: (x) => {
            te("minutes", n.setMinutes(_, x));
          },
          items: _o({
            value: n.getMinutes(_),
            isDisabled: (x) => G || se(x, "minutes"),
            resolveLabel: (x) => n.format(n.setMinutes(oe, x), "minutes"),
            timeStep: L.minutes,
            hasValue: !!q,
            resolveAriaLabel: fe.minutesClockNumberText
          })
        };
      case "seconds":
        return {
          onChange: (x) => {
            te("seconds", n.setSeconds(_, x));
          },
          items: _o({
            value: n.getSeconds(_),
            isDisabled: (x) => G || se(x, "seconds"),
            resolveLabel: (x) => n.format(n.setSeconds(oe, x), "seconds"),
            timeStep: L.seconds,
            hasValue: !!q,
            resolveAriaLabel: fe.secondsClockNumberText
          })
        };
      case "meridiem": {
        const x = Ne(n, "am"), Y = Ne(n, "pm");
        return {
          onChange: ke,
          items: [{
            value: "am",
            label: x,
            isSelected: () => !!q && de === "am",
            ariaLabel: x
          }, {
            value: "pm",
            label: Y,
            isSelected: () => !!q && de === "pm",
            ariaLabel: Y
          }]
        };
      }
      default:
        throw new Error(`Unknown view: ${w} found.`);
    }
  }, [oe, q, a, n, L.hours, L.minutes, L.seconds, fe.hoursClockNumberText, fe.minutesClockNumberText, fe.secondsClockNumberText, de, te, _, G, se, ke]), re = b.useMemo(() => ce.reduce((w, x) => m({}, w, {
    [x]: ue(x)
  }), {}), [ce, ue]), Pe = r, I = xs(Pe);
  return /* @__PURE__ */ T(ws, m({
    ref: s,
    className: ne(I.root, U),
    ownerState: Pe,
    role: "group"
  }, B, {
    children: Object.entries(re).map(([w, x]) => /* @__PURE__ */ T(Ts, {
      items: x.items,
      onChange: x.onChange,
      active: xe === w,
      autoFocus: l ?? De === w,
      disabled: G,
      readOnly: J,
      slots: v ?? c,
      slotProps: p ?? d,
      skipDisabled: ie,
      "aria-label": fe.selectViewText(w)
    }, w))
  }));
});
process.env.NODE_ENV !== "production" && (mt.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: o.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  className: o.string,
  /**
   * Overrideable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: o.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: o.object,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the picker views and text field are disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: o.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: o.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: o.bool,
  /**
   * Controlled focused view.
   */
  focusedView: o.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: o.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: o.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: o.number,
  /**
   * Callback fired when the value changes.
   * @template TDate, TView
   * @param {TDate | null} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: o.func,
  /**
   * Callback fired on focused view change.
   * @template TView
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: o.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: o.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: o.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * If `true`, the picker views and text field are read-only.
   * @default false
   */
  readOnly: o.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid time using the validation props, except callbacks such as `shouldDisableTime`.
   */
  referenceDate: o.any,
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: o.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: o.func,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: o.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: o.object,
  /**
   * Overrideable component slots.
   * @default {}
   */
  slots: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The time steps between two time unit options.
   * For example, if `timeStep.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: o.shape({
    hours: o.number,
    minutes: o.number,
    seconds: o.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: o.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: o.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: o.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * Available views.
   */
  views: o.arrayOf(o.oneOf(["hours", "meridiem", "minutes", "seconds"]).isRequired)
});
const Ds = $("div")({
  display: "flex",
  margin: "0 auto"
});
function ks(e) {
  return Te("MuiTimeClock", e);
}
be("MuiTimeClock", ["root", "arrowSwitcher"]);
const He = 220, Ie = 36, Xe = {
  x: He / 2,
  y: He / 2
}, pt = {
  x: Xe.x,
  y: 0
}, Ss = pt.x - Xe.x, Ps = pt.y - Xe.y, Ms = (e) => e * (180 / Math.PI), ft = (e, t, s) => {
  const n = t - Xe.x, r = s - Xe.y, a = Math.atan2(Ss, Ps) - Math.atan2(n, r);
  let i = Ms(a);
  i = Math.round(i / e) * e, i %= 360;
  const l = Math.floor(i / e) || 0, c = n ** 2 + r ** 2, d = Math.sqrt(c);
  return {
    value: l,
    distance: d
  };
}, Is = (e, t, s = 1) => {
  const n = s * 6;
  let {
    value: r
  } = ft(n, e, t);
  return r = r * s % 60, r;
}, Os = (e, t, s) => {
  const {
    value: n,
    distance: r
  } = ft(30, e, t);
  let a = n || 12;
  return s ? a %= 12 : r < He / 2 - Ie && (a += 12, a %= 24), a;
};
function Rs(e) {
  return Te("MuiClockPointer", e);
}
be("MuiClockPointer", ["root", "thumb"]);
const Ns = ["className", "hasSelected", "isInner", "type", "viewValue"], Vs = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"],
    thumb: ["thumb"]
  }, Rs, t);
}, $s = $("div", {
  name: "MuiClockPointer",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => m({
  width: 2,
  backgroundColor: (e.vars || e).palette.primary.main,
  position: "absolute",
  left: "calc(50% - 1px)",
  bottom: "50%",
  transformOrigin: "center bottom 0px"
}, t.shouldAnimate && {
  transition: e.transitions.create(["transform", "height"])
})), Fs = $("div", {
  name: "MuiClockPointer",
  slot: "Thumb",
  overridesResolver: (e, t) => t.thumb
})(({
  theme: e,
  ownerState: t
}) => m({
  width: 4,
  height: 4,
  backgroundColor: (e.vars || e).palette.primary.contrastText,
  borderRadius: "50%",
  position: "absolute",
  top: -21,
  left: `calc(50% - ${Ie / 2}px)`,
  border: `${(Ie - 4) / 2}px solid ${(e.vars || e).palette.primary.main}`,
  boxSizing: "content-box"
}, t.hasSelected && {
  backgroundColor: (e.vars || e).palette.primary.main
}));
function Bs(e) {
  const t = pe({
    props: e,
    name: "MuiClockPointer"
  }), {
    className: s,
    isInner: n,
    type: r,
    viewValue: a
  } = t, i = ae(t, Ns), l = b.useRef(r);
  b.useEffect(() => {
    l.current = r;
  }, [r]);
  const c = m({}, t, {
    shouldAnimate: l.current !== r
  }), d = Vs(c);
  return /* @__PURE__ */ T($s, m({
    style: (() => {
      let u = 360 / (r === "hours" ? 12 : 60) * a;
      return r === "hours" && a > 12 && (u -= 360), {
        height: Math.round((n ? 0.26 : 0.4) * He),
        transform: `rotateZ(${u}deg)`
      };
    })(),
    className: ne(s, d.root),
    ownerState: c
  }, i, {
    children: /* @__PURE__ */ T(Fs, {
      ownerState: c,
      className: d.thumb
    })
  }));
}
function _s(e) {
  return Te("MuiClock", e);
}
be("MuiClock", ["root", "clock", "wrapper", "squareMask", "pin", "amButton", "pmButton", "meridiemText"]);
const Es = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"],
    clock: ["clock"],
    wrapper: ["wrapper"],
    squareMask: ["squareMask"],
    pin: ["pin"],
    amButton: ["amButton"],
    pmButton: ["pmButton"],
    meridiemText: ["meridiemText"]
  }, _s, t);
}, Ls = $("div", {
  name: "MuiClock",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: e.spacing(2)
})), As = $("div", {
  name: "MuiClock",
  slot: "Clock",
  overridesResolver: (e, t) => t.clock
})({
  backgroundColor: "rgba(0,0,0,.07)",
  borderRadius: "50%",
  height: 220,
  width: 220,
  flexShrink: 0,
  position: "relative",
  pointerEvents: "none"
}), js = $("div", {
  name: "MuiClock",
  slot: "Wrapper",
  overridesResolver: (e, t) => t.wrapper
})({
  "&:focus": {
    outline: "none"
  }
}), zs = $("div", {
  name: "MuiClock",
  slot: "SquareMask",
  overridesResolver: (e, t) => t.squareMask
})(({
  ownerState: e
}) => m({
  width: "100%",
  height: "100%",
  position: "absolute",
  pointerEvents: "auto",
  outline: 0,
  // Disable scroll capabilities.
  touchAction: "none",
  userSelect: "none"
}, e.disabled ? {} : {
  "@media (pointer: fine)": {
    cursor: "pointer",
    borderRadius: "50%"
  },
  "&:active": {
    cursor: "move"
  }
})), Ws = $("div", {
  name: "MuiClock",
  slot: "Pin",
  overridesResolver: (e, t) => t.pin
})(({
  theme: e
}) => ({
  width: 6,
  height: 6,
  borderRadius: "50%",
  backgroundColor: (e.vars || e).palette.primary.main,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
})), Hs = $(Jo, {
  name: "MuiClock",
  slot: "AmButton",
  overridesResolver: (e, t) => t.amButton
})(({
  theme: e,
  ownerState: t
}) => m({
  zIndex: 1,
  position: "absolute",
  bottom: 8,
  left: 8,
  paddingLeft: 4,
  paddingRight: 4,
  width: Ie
}, t.meridiemMode === "am" && {
  backgroundColor: (e.vars || e).palette.primary.main,
  color: (e.vars || e).palette.primary.contrastText,
  "&:hover": {
    backgroundColor: (e.vars || e).palette.primary.light
  }
})), Us = $(Jo, {
  name: "MuiClock",
  slot: "PmButton",
  overridesResolver: (e, t) => t.pmButton
})(({
  theme: e,
  ownerState: t
}) => m({
  zIndex: 1,
  position: "absolute",
  bottom: 8,
  right: 8,
  paddingLeft: 4,
  paddingRight: 4,
  width: Ie
}, t.meridiemMode === "pm" && {
  backgroundColor: (e.vars || e).palette.primary.main,
  color: (e.vars || e).palette.primary.contrastText,
  "&:hover": {
    backgroundColor: (e.vars || e).palette.primary.light
  }
})), Eo = $(Xo, {
  name: "MuiClock",
  slot: "meridiemText",
  overridesResolver: (e, t) => t.meridiemText
})({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
});
function qs(e) {
  const t = pe({
    props: e,
    name: "MuiClock"
  }), {
    ampm: s,
    ampmInClock: n,
    autoFocus: r,
    children: a,
    value: i,
    handleMeridiemChange: l,
    isTimeDisabled: c,
    meridiemMode: d,
    minutesStep: v = 1,
    onChange: p,
    selectedId: u,
    type: h,
    viewValue: D,
    disabled: f,
    readOnly: C,
    className: M
  } = t, k = t, O = Ee(), N = je(), S = b.useRef(!1), g = Es(k), E = c(D, h), V = !s && h === "hours" && (D < 1 || D > 12), R = (B, q) => {
    f || C || c(B, h) || p(B, q);
  }, F = (B, q) => {
    let {
      offsetX: X,
      offsetY: le
    } = B;
    if (X === void 0) {
      const oe = B.target.getBoundingClientRect();
      X = B.changedTouches[0].clientX - oe.left, le = B.changedTouches[0].clientY - oe.top;
    }
    const fe = h === "seconds" || h === "minutes" ? Is(X, le, v) : Os(X, le, !!s);
    R(fe, q);
  }, H = (B) => {
    S.current = !0, F(B, "shallow");
  }, ee = (B) => {
    S.current && (F(B, "finish"), S.current = !1);
  }, W = (B) => {
    B.buttons > 0 && F(B.nativeEvent, "shallow");
  }, U = (B) => {
    S.current && (S.current = !1), F(B.nativeEvent, "finish");
  }, G = b.useMemo(() => h === "hours" ? !0 : D % 5 === 0, [h, D]), J = h === "minutes" ? v : 1, ie = b.useRef(null);
  vo(() => {
    r && ie.current.focus();
  }, [r]);
  const Ce = (B) => {
    if (!S.current)
      switch (B.key) {
        case "Home":
          R(0, "partial"), B.preventDefault();
          break;
        case "End":
          R(h === "minutes" ? 59 : 23, "partial"), B.preventDefault();
          break;
        case "ArrowUp":
          R(D + J, "partial"), B.preventDefault();
          break;
        case "ArrowDown":
          R(D - J, "partial"), B.preventDefault();
          break;
      }
  };
  return /* @__PURE__ */ Q(Ls, {
    className: ne(M, g.root),
    children: [/* @__PURE__ */ Q(As, {
      className: g.clock,
      children: [/* @__PURE__ */ T(zs, {
        onTouchMove: H,
        onTouchEnd: ee,
        onMouseUp: U,
        onMouseMove: W,
        ownerState: {
          disabled: f
        },
        className: g.squareMask
      }), !E && /* @__PURE__ */ Q(b.Fragment, {
        children: [/* @__PURE__ */ T(Ws, {
          className: g.pin
        }), i != null && /* @__PURE__ */ T(Bs, {
          type: h,
          viewValue: D,
          isInner: V,
          hasSelected: G
        })]
      }), /* @__PURE__ */ T(js, {
        "aria-activedescendant": u,
        "aria-label": N.clockLabelText(h, i, O),
        ref: ie,
        role: "listbox",
        onKeyDown: Ce,
        tabIndex: 0,
        className: g.wrapper,
        children: a
      })]
    }), s && n && /* @__PURE__ */ Q(b.Fragment, {
      children: [/* @__PURE__ */ T(Hs, {
        onClick: C ? void 0 : () => l("am"),
        disabled: f || d === null,
        ownerState: k,
        className: g.amButton,
        title: Ne(O, "am"),
        children: /* @__PURE__ */ T(Eo, {
          variant: "caption",
          className: g.meridiemText,
          children: Ne(O, "am")
        })
      }), /* @__PURE__ */ T(Us, {
        disabled: f || d === null,
        onClick: C ? void 0 : () => l("pm"),
        ownerState: k,
        className: g.pmButton,
        title: Ne(O, "pm"),
        children: /* @__PURE__ */ T(Eo, {
          variant: "caption",
          className: g.meridiemText,
          children: Ne(O, "pm")
        })
      })]
    })]
  });
}
function Ys(e) {
  return Te("MuiClockNumber", e);
}
const eo = be("MuiClockNumber", ["root", "selected", "disabled"]), Ks = ["className", "disabled", "index", "inner", "label", "selected"], Gs = (e) => {
  const {
    classes: t,
    selected: s,
    disabled: n
  } = e;
  return he({
    root: ["root", s && "selected", n && "disabled"]
  }, Ys, t);
}, Xs = $("span", {
  name: "MuiClockNumber",
  slot: "Root",
  overridesResolver: (e, t) => [t.root, {
    [`&.${eo.disabled}`]: t.disabled
  }, {
    [`&.${eo.selected}`]: t.selected
  }]
})(({
  theme: e,
  ownerState: t
}) => m({
  height: Ie,
  width: Ie,
  position: "absolute",
  left: `calc((100% - ${Ie}px) / 2)`,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  color: (e.vars || e).palette.text.primary,
  fontFamily: e.typography.fontFamily,
  "&:focused": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  [`&.${eo.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText
  },
  [`&.${eo.disabled}`]: {
    pointerEvents: "none",
    color: (e.vars || e).palette.text.disabled
  }
}, t.inner && m({}, e.typography.body2, {
  color: (e.vars || e).palette.text.secondary
})));
function bt(e) {
  const t = pe({
    props: e,
    name: "MuiClockNumber"
  }), {
    className: s,
    disabled: n,
    index: r,
    inner: a,
    label: i,
    selected: l
  } = t, c = ae(t, Ks), d = t, v = Gs(d), p = r % 12 / 12 * Math.PI * 2 - Math.PI / 2, u = (He - Ie - 2) / 2 * (a ? 0.65 : 1), h = Math.round(Math.cos(p) * u), D = Math.round(Math.sin(p) * u);
  return /* @__PURE__ */ T(Xs, m({
    className: ne(s, v.root),
    "aria-disabled": n ? !0 : void 0,
    "aria-selected": l ? !0 : void 0,
    role: "option",
    style: {
      transform: `translate(${h}px, ${D + (He - Ie) / 2}px`
    },
    ownerState: d
  }, c, {
    children: i
  }));
}
const Js = ({
  ampm: e,
  value: t,
  getClockNumberText: s,
  isDisabled: n,
  selectedId: r,
  utils: a
}) => {
  const i = t ? a.getHours(t) : null, l = [], c = e ? 1 : 0, d = e ? 12 : 23, v = (p) => i === null ? !1 : e ? p === 12 ? i === 12 || i === 0 : i === p || i - 12 === p : i === p;
  for (let p = c; p <= d; p += 1) {
    let u = p.toString();
    p === 0 && (u = "00");
    const h = !e && (p === 0 || p > 12);
    u = a.formatNumber(u);
    const D = v(p);
    l.push(/* @__PURE__ */ T(bt, {
      id: D ? r : void 0,
      index: p,
      inner: h,
      selected: D,
      disabled: n(p),
      label: u,
      "aria-label": s(u)
    }, p));
  }
  return l;
}, Lo = ({
  utils: e,
  value: t,
  isDisabled: s,
  getClockNumberText: n,
  selectedId: r
}) => {
  const a = e.formatNumber;
  return [[5, a("05")], [10, a("10")], [15, a("15")], [20, a("20")], [25, a("25")], [30, a("30")], [35, a("35")], [40, a("40")], [45, a("45")], [50, a("50")], [55, a("55")], [0, a("00")]].map(([i, l], c) => {
    const d = i === t;
    return /* @__PURE__ */ T(bt, {
      label: l,
      id: d ? r : void 0,
      index: c + 1,
      inner: !1,
      disabled: s(i),
      selected: d,
      "aria-label": n(l)
    }, i);
  });
}, Zs = ["ampm", "ampmInClock", "autoFocus", "components", "componentsProps", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableClock", "shouldDisableTime", "showViewSwitcher", "onChange", "view", "views", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "disabled", "readOnly", "timezone"], Qs = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"],
    arrowSwitcher: ["arrowSwitcher"]
  }, ks, t);
}, er = $(mo, {
  name: "MuiTimeClock",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex",
  flexDirection: "column",
  position: "relative"
}), or = $(_t, {
  name: "MuiTimeClock",
  slot: "ArrowSwitcher",
  overridesResolver: (e, t) => t.arrowSwitcher
})({
  position: "absolute",
  right: 12,
  top: 15
}), tr = ["hours", "minutes"], ht = /* @__PURE__ */ b.forwardRef(function(t, s) {
  const n = Ee(), r = pe({
    props: t,
    name: "MuiTimeClock"
  }), {
    ampm: a = n.is12HourCycleInCurrentLocale(),
    ampmInClock: i = !1,
    autoFocus: l,
    components: c,
    componentsProps: d,
    slots: v,
    slotProps: p,
    value: u,
    defaultValue: h,
    referenceDate: D,
    disableIgnoringDatePartForTimeValidation: f = !1,
    maxTime: C,
    minTime: M,
    disableFuture: k,
    disablePast: O,
    minutesStep: N = 1,
    shouldDisableClock: S,
    shouldDisableTime: g,
    showViewSwitcher: E,
    onChange: V,
    view: R,
    views: F = tr,
    openTo: H,
    onViewChange: ee,
    focusedView: W,
    onFocusedViewChange: U,
    className: G,
    disabled: J,
    readOnly: ie,
    timezone: Ce
  } = r, B = ae(r, Zs), q = v ?? zo(c), X = p ?? d, {
    value: le,
    handleValueChange: fe,
    timezone: oe
  } = po({
    name: "TimeClock",
    timezone: Ce,
    value: u,
    defaultValue: h,
    onChange: V,
    valueManager: Ue
  }), L = xo({
    value: le,
    referenceDate: D,
    utils: n,
    props: r,
    timezone: oe
  }), _ = je(), ye = fo(oe), {
    view: ce,
    setView: xe,
    previousView: we,
    nextView: De,
    setValueAndGoToNextView: ge
  } = bo({
    view: R,
    views: F,
    openTo: H,
    onViewChange: ee,
    onChange: fe,
    focusedView: W,
    onFocusedViewChange: U
  }), {
    meridiemMode: de,
    handleMeridiemChange: ke
  } = uo(L, a, ge), se = b.useCallback((I, w) => {
    const x = ro(f, n), Y = w === "hours" || w === "minutes" && F.includes("seconds"), Oe = ({
      start: K,
      end: j
    }) => !(M && x(M, j) || C && x(K, C) || k && x(K, ye) || O && x(ye, Y ? j : K)), Re = (K, j = 1) => {
      if (K % j !== 0 || S != null && S(K, w))
        return !1;
      if (g)
        switch (w) {
          case "hours":
            return !g(n.setHours(L, K), "hours");
          case "minutes":
            return !g(n.setMinutes(L, K), "minutes");
          case "seconds":
            return !g(n.setSeconds(L, K), "seconds");
          default:
            return !1;
        }
      return !0;
    };
    switch (w) {
      case "hours": {
        const K = so(I, de, a), j = n.setHours(L, K), me = n.setSeconds(n.setMinutes(j, 0), 0), Se = n.setSeconds(n.setMinutes(j, 59), 59);
        return !Oe({
          start: me,
          end: Se
        }) || !Re(K);
      }
      case "minutes": {
        const K = n.setMinutes(L, I), j = n.setSeconds(K, 0), me = n.setSeconds(K, 59);
        return !Oe({
          start: j,
          end: me
        }) || !Re(I, N);
      }
      case "seconds": {
        const K = n.setSeconds(L, I);
        return !Oe({
          start: K,
          end: K
        }) || !Re(I);
      }
      default:
        throw new Error("not supported");
    }
  }, [a, L, f, C, de, M, N, S, g, n, k, O, ye, F]), te = Kt(), ue = b.useMemo(() => {
    switch (ce) {
      case "hours": {
        const I = (w, x) => {
          const Y = so(w, de, a);
          ge(n.setHours(L, Y), x);
        };
        return {
          onChange: I,
          viewValue: n.getHours(L),
          children: Js({
            value: le,
            utils: n,
            ampm: a,
            onChange: I,
            getClockNumberText: _.hoursClockNumberText,
            isDisabled: (w) => J || se(w, "hours"),
            selectedId: te
          })
        };
      }
      case "minutes": {
        const I = n.getMinutes(L), w = (x, Y) => {
          ge(n.setMinutes(L, x), Y);
        };
        return {
          viewValue: I,
          onChange: w,
          children: Lo({
            utils: n,
            value: I,
            onChange: w,
            getClockNumberText: _.minutesClockNumberText,
            isDisabled: (x) => J || se(x, "minutes"),
            selectedId: te
          })
        };
      }
      case "seconds": {
        const I = n.getSeconds(L), w = (x, Y) => {
          ge(n.setSeconds(L, x), Y);
        };
        return {
          viewValue: I,
          onChange: w,
          children: Lo({
            utils: n,
            value: I,
            onChange: w,
            getClockNumberText: _.secondsClockNumberText,
            isDisabled: (x) => J || se(x, "seconds"),
            selectedId: te
          })
        };
      }
      default:
        throw new Error("You must provide the type for ClockView");
    }
  }, [ce, n, le, a, _.hoursClockNumberText, _.minutesClockNumberText, _.secondsClockNumberText, de, ge, L, se, te, J]), re = r, Pe = Qs(re);
  return /* @__PURE__ */ Q(er, m({
    ref: s,
    className: ne(Pe.root, G),
    ownerState: re
  }, B, {
    children: [/* @__PURE__ */ T(qs, m({
      autoFocus: l ?? !!W,
      ampmInClock: i && F.includes("hours"),
      value: le,
      type: ce,
      ampm: a,
      minutesStep: N,
      isTimeDisabled: se,
      meridiemMode: de,
      handleMeridiemChange: ke,
      selectedId: te,
      disabled: J,
      readOnly: ie
    }, ue)), E && /* @__PURE__ */ T(or, {
      className: Pe.arrowSwitcher,
      slots: q,
      slotProps: X,
      onGoToPrevious: () => xe(we),
      isPreviousDisabled: !we,
      previousLabel: _.openPreviousView,
      onGoToNext: () => xe(De),
      isNextDisabled: !De,
      nextLabel: _.openNextView,
      ownerState: re
    })]
  }));
});
process.env.NODE_ENV !== "production" && (ht.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: o.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default false
   */
  ampmInClock: o.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  className: o.string,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: o.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: o.object,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the picker views and text field are disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: o.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: o.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: o.bool,
  /**
   * Controlled focused view.
   */
  focusedView: o.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: o.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: o.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: o.number,
  /**
   * Callback fired when the value changes.
   * @template TDate, TView
   * @param {TDate | null} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: o.func,
  /**
   * Callback fired on focused view change.
   * @template TView
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: o.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: o.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: o.oneOf(["hours", "minutes", "seconds"]),
  /**
   * If `true`, the picker views and text field are read-only.
   * @default false
   */
  readOnly: o.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid time using the validation props, except callbacks such as `shouldDisableTime`.
   */
  referenceDate: o.any,
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: o.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: o.func,
  showViewSwitcher: o.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: o.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: o.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: o.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: o.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Available views.
   */
  views: o.arrayOf(o.oneOf(["hours", "minutes", "seconds"]).isRequired)
});
function nr(e) {
  return Te("MuiDigitalClock", e);
}
const sr = be("MuiDigitalClock", ["root", "list", "item"]), rr = ["ampm", "timeStep", "autoFocus", "components", "componentsProps", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableClock", "shouldDisableTime", "onChange", "view", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "disabled", "readOnly", "views", "skipDisabled", "timezone"], ar = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"],
    list: ["list"],
    item: ["item"]
  }, nr, t);
}, ir = $(mo, {
  name: "MuiDigitalClock",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  ownerState: e
}) => ({
  overflowY: "auto",
  width: "100%",
  "@media (prefers-reduced-motion: no-preference)": {
    scrollBehavior: e.alreadyRendered ? "smooth" : "auto"
  },
  maxHeight: Wo
})), lr = $(Ko, {
  name: "MuiDigitalClock",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  padding: 0
}), cr = $(ut, {
  name: "MuiDigitalClock",
  slot: "Item",
  overridesResolver: (e, t) => t.item
})(({
  theme: e
}) => ({
  padding: "8px 16px",
  margin: "2px 4px",
  "&:first-of-type": {
    marginTop: 4
  },
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ve(e.palette.primary.main, e.palette.action.hoverOpacity)
  },
  "&.Mui-selected": {
    backgroundColor: (e.vars || e).palette.primary.main,
    color: (e.vars || e).palette.primary.contrastText,
    "&:focus-visible, &:hover": {
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  },
  "&.Mui-focusVisible": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.focusOpacity})` : Ve(e.palette.primary.main, e.palette.action.focusOpacity)
  }
})), gt = /* @__PURE__ */ b.forwardRef(function(t, s) {
  var n, r, a;
  const i = Ee(), l = b.useRef(null), c = To(s, l), d = pe({
    props: t,
    name: "MuiDigitalClock"
  }), {
    ampm: v = i.is12HourCycleInCurrentLocale(),
    timeStep: p = 30,
    autoFocus: u,
    components: h,
    componentsProps: D,
    slots: f,
    slotProps: C,
    value: M,
    defaultValue: k,
    referenceDate: O,
    disableIgnoringDatePartForTimeValidation: N = !1,
    maxTime: S,
    minTime: g,
    disableFuture: E,
    disablePast: V,
    minutesStep: R = 1,
    shouldDisableClock: F,
    shouldDisableTime: H,
    onChange: ee,
    view: W,
    openTo: U,
    onViewChange: G,
    focusedView: J,
    onFocusedViewChange: ie,
    className: Ce,
    disabled: B,
    readOnly: q,
    views: X = ["hours"],
    skipDisabled: le = !1,
    timezone: fe
  } = d, oe = ae(d, rr), {
    value: L,
    handleValueChange: _,
    timezone: ye
  } = po({
    name: "DigitalClock",
    timezone: fe,
    value: M,
    defaultValue: k,
    onChange: ee,
    valueManager: Ue
  }), ce = je(), xe = fo(ye), we = b.useMemo(() => m({}, d, {
    alreadyRendered: !!l.current
  }), [d]), De = ar(we), ge = (n = (r = f == null ? void 0 : f.digitalClockItem) != null ? r : h == null ? void 0 : h.DigitalClockItem) != null ? n : cr, de = We({
    elementType: ge,
    externalSlotProps: (a = C == null ? void 0 : C.digitalClockItem) != null ? a : D == null ? void 0 : D.digitalClockItem,
    ownerState: {},
    className: De.item
  }), ke = xo({
    value: L,
    referenceDate: O,
    utils: i,
    props: d,
    timezone: ye
  }), se = _e((I) => _(I, "finish", "hours")), {
    setValueAndGoToNextView: te
  } = bo({
    view: W,
    views: X,
    openTo: U,
    onViewChange: G,
    onChange: se,
    focusedView: J,
    onFocusedViewChange: ie
  }), ue = _e((I) => {
    te(I, "finish");
  });
  b.useEffect(() => {
    if (l.current === null)
      return;
    const I = l.current.querySelector('[role="listbox"] [role="option"][aria-selected="true"]');
    if (!I)
      return;
    const w = I.offsetTop;
    l.current.scrollTop = w - 4;
  });
  const re = b.useCallback((I) => {
    const w = ro(N, i), x = () => !(g && w(g, I) || S && w(I, S) || E && w(I, xe) || V && w(xe, I)), Y = () => i.getMinutes(I) % R !== 0 || F != null && F(i.toJsDate(I).getTime(), "hours") ? !1 : H ? !H(I, "hours") : !0;
    return !x() || !Y();
  }, [N, i, g, S, E, xe, V, R, F, H]), Pe = b.useMemo(() => {
    const I = i.startOfDay(ke);
    return [I, ...Array.from({
      length: Math.ceil(24 * 60 / p) - 1
    }, (w, x) => i.addMinutes(I, p * (x + 1)))];
  }, [ke, p, i]);
  return /* @__PURE__ */ T(ir, m({
    ref: c,
    className: ne(De.root, Ce),
    ownerState: we
  }, oe, {
    children: /* @__PURE__ */ T(lr, {
      autoFocusItem: u || !!J,
      role: "listbox",
      "aria-label": ce.timePickerToolbarTitle,
      className: De.list,
      children: Pe.map((I) => {
        if (le && re(I))
          return null;
        const w = i.isEqual(I, L);
        return /* @__PURE__ */ T(ge, m({
          onClick: () => !q && ue(I),
          selected: w,
          disabled: B || re(I),
          disableRipple: q,
          role: "option",
          "aria-disabled": q,
          "aria-selected": w
        }, de, {
          children: i.format(I, v ? "fullTime12h" : "fullTime24h")
        }), i.toISO(I));
      })
    })
  }));
});
process.env.NODE_ENV !== "production" && (gt.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: o.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  className: o.string,
  /**
   * Overrideable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: o.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: o.object,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the picker views and text field are disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: o.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: o.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: o.bool,
  /**
   * Controlled focused view.
   */
  focusedView: o.oneOf(["hours"]),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: o.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: o.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: o.number,
  /**
   * Callback fired when the value changes.
   * @template TDate, TView
   * @param {TDate | null} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: o.func,
  /**
   * Callback fired on focused view change.
   * @template TView
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: o.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: o.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: o.oneOf(["hours"]),
  /**
   * If `true`, the picker views and text field are read-only.
   * @default false
   */
  readOnly: o.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid time using the validation props, except callbacks such as `shouldDisableTime`.
   */
  referenceDate: o.any,
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: o.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: o.func,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: o.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: o.object,
  /**
   * Overrideable component slots.
   * @default {}
   */
  slots: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The time steps between two time options.
   * For example, if `timeStep = 45`, then the available time options will be `[00:00, 00:45, 01:30, 02:15, 03:00, etc.]`.
   * @default 30
   */
  timeStep: o.number,
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: o.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: o.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: o.oneOf(["hours"]),
  /**
   * Available views.
   */
  views: o.arrayOf(o.oneOf(["hours"]))
});
const Ao = ({
  view: e,
  onViewChange: t,
  focusedView: s,
  onFocusedViewChange: n,
  views: r,
  value: a,
  defaultValue: i,
  referenceDate: l,
  onChange: c,
  className: d,
  classes: v,
  disableFuture: p,
  disablePast: u,
  minTime: h,
  maxTime: D,
  shouldDisableTime: f,
  shouldDisableClock: C,
  minutesStep: M,
  ampm: k,
  ampmInClock: O,
  components: N,
  componentsProps: S,
  slots: g,
  slotProps: E,
  readOnly: V,
  disabled: R,
  sx: F,
  autoFocus: H,
  showViewSwitcher: ee,
  disableIgnoringDatePartForTimeValidation: W,
  timezone: U
}) => /* @__PURE__ */ T(ht, {
  view: e,
  onViewChange: t,
  focusedView: s && Ge(s) ? s : null,
  onFocusedViewChange: n,
  views: r.filter(Ge),
  value: a,
  defaultValue: i,
  referenceDate: l,
  onChange: c,
  className: d,
  classes: v,
  disableFuture: p,
  disablePast: u,
  minTime: h,
  maxTime: D,
  shouldDisableTime: f,
  shouldDisableClock: C,
  minutesStep: M,
  ampm: k,
  ampmInClock: O,
  components: N,
  componentsProps: S,
  slots: g,
  slotProps: E,
  readOnly: V,
  disabled: R,
  sx: F,
  autoFocus: H,
  showViewSwitcher: ee,
  disableIgnoringDatePartForTimeValidation: W,
  timezone: U
}), dr = ({
  view: e,
  onViewChange: t,
  focusedView: s,
  onFocusedViewChange: n,
  views: r,
  value: a,
  defaultValue: i,
  referenceDate: l,
  onChange: c,
  className: d,
  classes: v,
  disableFuture: p,
  disablePast: u,
  minTime: h,
  maxTime: D,
  shouldDisableTime: f,
  shouldDisableClock: C,
  minutesStep: M,
  ampm: k,
  components: O,
  componentsProps: N,
  slots: S,
  slotProps: g,
  readOnly: E,
  disabled: V,
  sx: R,
  autoFocus: F,
  disableIgnoringDatePartForTimeValidation: H,
  timeSteps: ee,
  skipDisabled: W,
  timezone: U
}) => /* @__PURE__ */ T(gt, {
  view: e,
  onViewChange: t,
  focusedView: s,
  onFocusedViewChange: n,
  views: r.filter(Ge),
  value: a,
  defaultValue: i,
  referenceDate: l,
  onChange: c,
  className: d,
  classes: v,
  disableFuture: p,
  disablePast: u,
  minTime: h,
  maxTime: D,
  shouldDisableTime: f,
  shouldDisableClock: C,
  minutesStep: M,
  ampm: k,
  components: O,
  componentsProps: N,
  slots: S,
  slotProps: g,
  readOnly: E,
  disabled: V,
  sx: R,
  autoFocus: F,
  disableIgnoringDatePartForTimeValidation: H,
  timeStep: ee == null ? void 0 : ee.minutes,
  skipDisabled: W,
  timezone: U
}), ur = ({
  view: e,
  onViewChange: t,
  focusedView: s,
  onFocusedViewChange: n,
  views: r,
  value: a,
  defaultValue: i,
  referenceDate: l,
  onChange: c,
  className: d,
  classes: v,
  disableFuture: p,
  disablePast: u,
  minTime: h,
  maxTime: D,
  shouldDisableTime: f,
  shouldDisableClock: C,
  minutesStep: M,
  ampm: k,
  components: O,
  componentsProps: N,
  slots: S,
  slotProps: g,
  readOnly: E,
  disabled: V,
  sx: R,
  autoFocus: F,
  disableIgnoringDatePartForTimeValidation: H,
  timeSteps: ee,
  skipDisabled: W,
  timezone: U
}) => /* @__PURE__ */ T(mt, {
  view: e,
  onViewChange: t,
  focusedView: s,
  onFocusedViewChange: n,
  views: r.filter(Ge),
  value: a,
  defaultValue: i,
  referenceDate: l,
  onChange: c,
  className: d,
  classes: v,
  disableFuture: p,
  disablePast: u,
  minTime: h,
  maxTime: D,
  shouldDisableTime: f,
  shouldDisableClock: C,
  minutesStep: M,
  ampm: k,
  components: O,
  componentsProps: N,
  slots: S,
  slotProps: g,
  readOnly: E,
  disabled: V,
  sx: R,
  autoFocus: F,
  disableIgnoringDatePartForTimeValidation: H,
  timeSteps: ee,
  skipDisabled: W,
  timezone: U
}), Ae = ({
  view: e,
  onViewChange: t,
  views: s,
  focusedView: n,
  onFocusedViewChange: r,
  value: a,
  defaultValue: i,
  referenceDate: l,
  onChange: c,
  className: d,
  classes: v,
  disableFuture: p,
  disablePast: u,
  minDate: h,
  minTime: D,
  maxDate: f,
  maxTime: C,
  shouldDisableDate: M,
  shouldDisableMonth: k,
  shouldDisableYear: O,
  shouldDisableTime: N,
  shouldDisableClock: S,
  reduceAnimations: g,
  minutesStep: E,
  ampm: V,
  onMonthChange: R,
  monthsPerRow: F,
  onYearChange: H,
  yearsPerRow: ee,
  defaultCalendarMonth: W,
  components: U,
  componentsProps: G,
  slots: J,
  slotProps: ie,
  loading: Ce,
  renderLoading: B,
  disableHighlightToday: q,
  readOnly: X,
  disabled: le,
  showDaysOutsideCurrentMonth: fe,
  dayOfWeekFormatter: oe,
  sx: L,
  autoFocus: _,
  fixedWeekNumber: ye,
  displayWeekNumber: ce,
  timezone: xe,
  disableIgnoringDatePartForTimeValidation: we,
  timeSteps: De,
  skipDisabled: ge,
  timeViewsCount: de,
  shouldRenderTimeInASingleColumn: ke
}) => {
  var se, te;
  const ue = !!((se = Go((te = ie == null ? void 0 : ie.actionBar) != null ? te : G == null ? void 0 : G.actionBar, {})) != null && (se = se.actions) != null && se.length), re = {
    view: Be(e) ? e : "hours",
    onViewChange: t,
    focusedView: n && Be(n) ? n : null,
    onFocusedViewChange: r,
    views: s.filter(Be),
    value: a,
    defaultValue: i,
    referenceDate: l,
    onChange: c,
    className: d,
    classes: v,
    disableFuture: p,
    disablePast: u,
    minTime: D,
    maxTime: C,
    shouldDisableTime: N,
    shouldDisableClock: S,
    minutesStep: E,
    ampm: V,
    components: U,
    componentsProps: G,
    slots: J,
    slotProps: ie,
    readOnly: X,
    disabled: le,
    autoFocus: _,
    disableIgnoringDatePartForTimeValidation: we,
    timeSteps: De,
    skipDisabled: ge,
    timezone: xe
  };
  return /* @__PURE__ */ Q(b.Fragment, {
    children: [/* @__PURE__ */ Q(Ds, {
      children: [/* @__PURE__ */ T(Et, {
        view: oo(e) ? e : "day",
        onViewChange: t,
        views: s.filter(oo),
        focusedView: n && oo(n) ? n : null,
        onFocusedViewChange: r,
        value: a,
        defaultValue: i,
        referenceDate: l,
        onChange: c,
        className: d,
        classes: v,
        disableFuture: p,
        disablePast: u,
        minDate: h,
        maxDate: f,
        shouldDisableDate: M,
        shouldDisableMonth: k,
        shouldDisableYear: O,
        reduceAnimations: g,
        onMonthChange: R,
        monthsPerRow: F,
        onYearChange: H,
        yearsPerRow: ee,
        defaultCalendarMonth: W,
        components: U,
        componentsProps: G,
        slots: J,
        slotProps: ie,
        loading: Ce,
        renderLoading: B,
        disableHighlightToday: q,
        readOnly: X,
        disabled: le,
        showDaysOutsideCurrentMonth: fe,
        dayOfWeekFormatter: oe,
        sx: L,
        autoFocus: _,
        fixedWeekNumber: ye,
        displayWeekNumber: ce,
        timezone: xe
      }), de > 0 && /* @__PURE__ */ Q(b.Fragment, {
        children: [/* @__PURE__ */ T($o, {
          orientation: "vertical"
        }), ke ? dr(m({}, re, {
          view: "hours",
          views: ["hours"],
          focusedView: n && Be(n) ? "hours" : null,
          sx: m({
            width: "auto",
            [`&.${sr.root}`]: {
              maxHeight: Lt
            }
          }, Array.isArray(L) ? L : [L])
        })) : ur(m({}, re, {
          view: Be(e) ? e : "hours",
          views: s.filter(Be),
          focusedView: n && Be(n) ? n : null,
          sx: m({
            borderBottom: 0,
            width: "auto",
            [`.${fs.root}`]: {
              maxHeight: "100%"
            }
          }, Array.isArray(L) ? L : [L])
        }))]
      })]
    }), ue && /* @__PURE__ */ T($o, {})]
  });
}, mr = ["views", "format"], pr = (e, t) => {
  let {
    views: s,
    format: n
  } = t, r = ae(t, mr);
  if (n)
    return n;
  const a = [], i = [];
  if (s.forEach((d) => {
    Ge(d) ? i.push(d) : a.push(d);
  }), i.length === 0)
    return wo(e, m({
      views: a
    }, r), !1);
  if (a.length === 0)
    return Do(e, m({
      views: i
    }, r));
  const l = Do(e, m({
    views: i
  }, r));
  return `${wo(e, m({
    views: a
  }, r), !1)} ${l}`;
}, fr = (e, t, s) => s ? t.filter((n) => !Be(n) || n === "hours") : e ? [...t, "meridiem"] : t, br = (e, t) => {
  var s, n;
  return 24 * 60 / (((s = e.hours) != null ? s : 1) * ((n = e.minutes) != null ? n : 5)) <= t;
};
function hr({
  thresholdToRenderTimeInASingleColumn: e,
  ampm: t,
  timeSteps: s,
  views: n
}) {
  const r = e ?? 24, a = m({
    hours: 1,
    minutes: 5,
    seconds: 5
  }, s), i = br(a, r);
  return {
    thresholdToRenderTimeInASingleColumn: r,
    timeSteps: a,
    shouldRenderTimeInASingleColumn: i,
    views: fr(t, n, i)
  };
}
const vt = /* @__PURE__ */ b.forwardRef(function(t, s) {
  var n, r, a, i, l, c, d;
  const v = je(), p = Ee(), u = Zn(t, "MuiDesktopDateTimePicker"), {
    shouldRenderTimeInASingleColumn: h,
    thresholdToRenderTimeInASingleColumn: D,
    views: f,
    timeSteps: C
  } = hr(u), M = !u.viewRenderers || Object.keys(u.viewRenderers).length === 0, k = (
    // we can only ensure the expected two-column layout if none of the renderers are overridden
    M ? {
      day: Ae,
      month: Ae,
      year: Ae,
      hours: Ae,
      minutes: Ae,
      seconds: Ae,
      meridiem: Ae
    } : m({
      day: lo,
      month: lo,
      year: lo,
      hours: null,
      minutes: null,
      seconds: null,
      meridiem: null
    }, u.viewRenderers)
  ), O = (n = u.ampmInClock) != null ? n : !0, N = M ? ["accept"] : [], S = m({}, u, {
    viewRenderers: k,
    format: pr(p, u),
    views: f,
    yearsPerRow: (r = u.yearsPerRow) != null ? r : 4,
    ampmInClock: O,
    timeSteps: C,
    thresholdToRenderTimeInASingleColumn: D,
    shouldRenderTimeInASingleColumn: h,
    slots: m({
      field: ot,
      openPickerIcon: At
    }, u.slots),
    slotProps: m({}, u.slotProps, {
      field: (E) => {
        var V;
        return m({}, Go((V = u.slotProps) == null ? void 0 : V.field, E), jt(u), {
          ref: s
        });
      },
      toolbar: m({
        hidden: !0,
        ampmInClock: O,
        toolbarVariant: M ? "desktop" : "mobile"
      }, (a = u.slotProps) == null ? void 0 : a.toolbar),
      tabs: m({
        hidden: !0
      }, (i = u.slotProps) == null ? void 0 : i.tabs),
      actionBar: m({
        actions: N
      }, (l = u.slotProps) == null ? void 0 : l.actionBar)
    })
  }), {
    renderPicker: g
  } = zt({
    props: S,
    valueManager: Ue,
    valueType: "date-time",
    getOpenDialogAriaText: (c = (d = S.localeText) == null ? void 0 : d.openDatePickerDialogue) != null ? c : v.openDatePickerDialogue,
    validator: et
  });
  return g();
});
vt.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: o.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: o.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: o.bool,
  /**
   * Class name applied to the root element.
   */
  className: o.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: o.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: o.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: o.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter.  Deprecated, will be removed in v7: Use `date` instead.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (_day: string, date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: o.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   */
  defaultCalendarMonth: o.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: o.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: o.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: o.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: o.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: o.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: o.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: o.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: o.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: o.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: go,
  /**
   * The label content.
   */
  label: o.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: o.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: o.object,
  /**
   * Maximal selectable date.
   */
  maxDate: o.any,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: o.any,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: o.any,
  /**
   * Minimal selectable date.
   */
  minDate: o.any,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: o.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: o.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: o.number,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: o.oneOf([3, 4]),
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: o.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: o.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: o.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: o.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: o.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: o.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: o.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: o.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: o.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: o.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: o.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: o.oneOf(["landscape", "portrait"]),
  readOnly: o.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: o.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: o.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: o.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: o.oneOfType([o.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), o.number, o.shape({
    endIndex: o.number.isRequired,
    startIndex: o.number.isRequired
  })]),
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: o.func,
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: o.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: o.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: o.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: o.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: o.bool,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: o.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: o.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Amount of time options below or at which the single column time renderer is used.
   * @default 24
   */
  thresholdToRenderTimeInASingleColumn: o.number,
  /**
   * The time steps between two time unit options.
   * For example, if `timeStep.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeStep.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: o.shape({
    hours: o.number,
    minutes: o.number,
    seconds: o.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: o.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: o.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: o.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: o.shape({
    day: o.func,
    hours: o.func,
    meridiem: o.func,
    minutes: o.func,
    month: o.func,
    seconds: o.func,
    year: o.func
  }),
  /**
   * Available views.
   */
  views: o.arrayOf(o.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 4
   */
  yearsPerRow: o.oneOf([3, 4])
};
const jr = ({
  type: e,
  label: t,
  name: s,
  value: n,
  error: r,
  disabled: a = !1,
  required: i = !1,
  onChange: l,
  onBlur: c
}) => {
  if (e !== xt.DATE_TIME)
    return null;
  const d = n ? yt(n) : null;
  return /* @__PURE__ */ T(
    Wt,
    {
      dateAdapter: Ht,
      adapterLocale: "en-US",
      children: /* @__PURE__ */ T(
        vt,
        {
          ampm: !0,
          ampmInClock: !0,
          format: "MM/DD/YYYY hh:mm a",
          label: t,
          value: d,
          disabled: a,
          onChange: (u) => {
            if (!u)
              l(null);
            else {
              const h = Dt(u);
              l(h);
            }
          },
          onAccept: c,
          viewRenderers: {
            hours: Ao,
            minutes: Ao,
            seconds: null
          },
          slotProps: {
            actionBar: {
              actions: i ? ["today"] : ["clear", "today"]
            },
            textField: (u) => ({
              ...wt(u),
              error: r,
              name: s,
              id: s,
              onBlur: c
            })
          }
        }
      )
    }
  );
};
export {
  jr as DateTimeField
};
