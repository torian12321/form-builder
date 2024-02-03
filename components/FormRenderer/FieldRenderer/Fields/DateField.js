import { jsx as D } from "react/jsx-runtime";
import { h as Z } from "../../../../moment-a2f61e40.js";
import { FIELD_TYPE as G } from "../../FormRenderer.constants.js";
import { getSlotPropsTextField as J, formatMomentToDate as Q } from "./Fields.utils.js";
import { P as X, u as v, a as _, r as C, b as M, c as ee, d as g, e as oe, s as te, f as ae, g as j, h as se, v as I, i as re, j as F, C as ne, k as le, l as ie, L as ue, A as ce } from "../../../../dateViewRenderers-bf92a99d.js";
import { g as de, s as $, a as i, _ as x, P as e } from "../../../../styled-c6437ab8.js";
import * as h from "react";
import { g as pe, u as k, c as fe } from "../../../../useThemeProps-7889d54e.js";
import { T as me } from "../../../../Typography-cd3e79a2.js";
import { M as be, u as Pe, r as ye } from "../../../../SharedTextField-c5888703.js";
import { r as S } from "../../../../TransitionGroupContext-fe4c547b.js";
import "../../../utils/dateUtils.js";
import "../../../../clsx-f0826a09.js";
import "../../../../useFormControl-a3d8b2b6.js";
import "../../../../FormHelperText-5a47fd9c.js";
import "../../../../useTheme-f100ae81.js";
import "../../../../Paper-79c19457.js";
import "../../../../createSvgIcon-4c228bdf.js";
import "../../../../emotion-react.browser.esm-3aa427f2.js";
import "../../../../Chip-f92e5f00.js";
import "../../../../ButtonBase-b38416c5.js";
import "../../../../unsupportedProp-3dbf01f6.js";
import "../../../../IconButton-cb9cf13b.js";
import "../../../../Button-1104b2f9.js";
import "../../../../extendSxProp-e33cd6d1.js";
function De(t) {
  return de("MuiDatePickerToolbar", t);
}
pe("MuiDatePickerToolbar", ["root", "title"]);
const he = ["value", "isLandscape", "onChange", "toolbarFormat", "toolbarPlaceholder", "views"], Te = (t) => {
  const {
    classes: s
  } = t;
  return fe({
    root: ["root"],
    title: ["title"]
  }, De, s);
}, xe = $(X, {
  name: "MuiDatePickerToolbar",
  slot: "Root",
  overridesResolver: (t, s) => s.root
})({}), ge = $(me, {
  name: "MuiDatePickerToolbar",
  slot: "Title",
  overridesResolver: (t, s) => s.title
})(({
  ownerState: t
}) => i({}, t.isLandscape && {
  margin: "auto 16px auto auto"
})), L = /* @__PURE__ */ h.forwardRef(function(s, l) {
  const a = k({
    props: s,
    name: "MuiDatePickerToolbar"
  }), {
    value: r,
    isLandscape: u,
    toolbarFormat: c,
    toolbarPlaceholder: d = "––",
    views: o
  } = a, n = x(a, he), p = v(), m = _(), f = Te(a), b = h.useMemo(() => {
    if (!r)
      return d;
    const T = C(p, {
      format: c,
      views: o
    }, !0);
    return p.formatByString(r, T);
  }, [r, c, d, p, o]), P = a;
  return /* @__PURE__ */ D(xe, i({
    ref: l,
    toolbarTitle: m.datePickerToolbarTitle,
    isLandscape: u,
    className: f.root
  }, n, {
    children: /* @__PURE__ */ D(ge, {
      variant: "h4",
      align: u ? "left" : "center",
      ownerState: P,
      className: f.title,
      children: b
    })
  }));
});
process.env.NODE_ENV !== "production" && (L.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  classes: e.object,
  /**
   * className applied to the root component.
   */
  className: e.string,
  disabled: e.bool,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: e.bool,
  isLandscape: e.bool.isRequired,
  onChange: e.func.isRequired,
  /**
   * Callback called when a toolbar is clicked
   * @template TView
   * @param {TView} view The view to open
   */
  onViewChange: e.func.isRequired,
  readOnly: e.bool,
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  titleId: e.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: e.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: e.node,
  value: e.any,
  /**
   * Currently visible picker view.
   */
  view: e.oneOf(["day", "month", "year"]).isRequired,
  views: e.arrayOf(e.oneOf(["day", "month", "year"]).isRequired).isRequired
});
function ve(t, s) {
  var l, a, r, u;
  const c = v(), d = M(), o = k({
    props: t,
    name: s
  }), n = h.useMemo(() => {
    var m;
    return ((m = o.localeText) == null ? void 0 : m.toolbarTitle) == null ? o.localeText : i({}, o.localeText, {
      datePickerToolbarTitle: o.localeText.toolbarTitle
    });
  }, [o.localeText]), p = (l = o.slots) != null ? l : ee(o.components);
  return i({}, o, {
    localeText: n
  }, oe({
    views: o.views,
    openTo: o.openTo,
    defaultViews: ["year", "day"],
    defaultOpenTo: "day"
  }), {
    disableFuture: (a = o.disableFuture) != null ? a : !1,
    disablePast: (r = o.disablePast) != null ? r : !1,
    minDate: g(c, o.minDate, d.minDate),
    maxDate: g(c, o.maxDate, d.maxDate),
    slots: i({
      toolbar: L
    }, p),
    slotProps: (u = o.slotProps) != null ? u : o.componentsProps
  });
}
const Oe = (t) => {
  var s, l, a;
  const r = v(), u = M();
  return i({}, t, {
    disablePast: (s = t.disablePast) != null ? s : !1,
    disableFuture: (l = t.disableFuture) != null ? l : !1,
    format: (a = t.format) != null ? a : r.formats.keyboardDate,
    minDate: g(r, t.minDate, u.minDate),
    maxDate: g(r, t.maxDate, u.maxDate)
  });
}, Fe = ({
  props: t,
  inputRef: s
}) => {
  const l = Oe(t), {
    forwardedProps: a,
    internalProps: r
  } = te(l, "date");
  return ae({
    inputRef: s,
    forwardedProps: a,
    internalProps: r,
    valueManager: j,
    fieldValueManager: se,
    validator: I,
    valueType: "date"
  });
}, ke = ["components", "componentsProps", "slots", "slotProps", "InputProps", "inputProps"], we = ["inputRef"], Re = ["ref", "onPaste", "onKeyDown", "inputMode", "readOnly", "clearable", "onClear"], V = /* @__PURE__ */ h.forwardRef(function(s, l) {
  var a, r, u;
  const c = k({
    props: s,
    name: "MuiDateField"
  }), {
    components: d,
    componentsProps: o,
    slots: n,
    slotProps: p,
    InputProps: m,
    inputProps: f
  } = c, b = x(c, ke), P = c, T = (a = (r = n == null ? void 0 : n.textField) != null ? r : d == null ? void 0 : d.TextField) != null ? a : be, w = Pe({
    elementType: T,
    externalSlotProps: (u = p == null ? void 0 : p.textField) != null ? u : o == null ? void 0 : o.textField,
    externalForwardedProps: b,
    ownerState: P
  }), {
    inputRef: z
  } = w, y = x(w, we);
  y.inputProps = i({}, f, y.inputProps), y.InputProps = i({}, m, y.InputProps);
  const R = Fe({
    props: y,
    inputRef: z
  }), {
    ref: N,
    onPaste: A,
    onKeyDown: E,
    inputMode: Y,
    readOnly: B,
    clearable: U,
    onClear: W
  } = R, O = x(R, Re), {
    InputProps: K,
    fieldProps: H
  } = re({
    onClear: W,
    clearable: U,
    fieldProps: O,
    InputProps: O.InputProps,
    slots: n,
    slotProps: p,
    components: d,
    componentsProps: o
  });
  return /* @__PURE__ */ D(T, i({
    ref: l
  }, H, {
    InputProps: i({}, K, {
      readOnly: B
    }),
    inputProps: i({}, O.inputProps, {
      inputMode: Y,
      onPaste: A,
      onKeyDown: E,
      ref: N
    })
  }));
});
process.env.NODE_ENV !== "production" && (V.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: e.bool,
  className: e.string,
  /**
   * If `true`, a clear button will be shown in the field allowing value clearing.
   * @default false
   */
  clearable: e.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: e.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: e.elementType,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: e.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: e.object,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: e.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: e.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: e.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: e.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: e.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: e.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: e.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: e.bool,
  /**
   * The helper text content.
   */
  helperText: e.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: e.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: e.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: e.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: e.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: e.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: S,
  /**
   * The label content.
   */
  label: e.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: e.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable date.
   */
  maxDate: e.any,
  /**
   * Minimal selectable date.
   */
  minDate: e.any,
  /**
   * Name attribute of the `input` element.
   */
  name: e.string,
  onBlur: e.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: e.func,
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear: e.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error.
   * @param {TValue} value The value associated to the error.
   */
  onError: e.func,
  onFocus: e.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: e.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   * @default false
   */
  readOnly: e.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: e.any,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: e.bool,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: e.oneOfType([e.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), e.number, e.shape({
    endIndex: e.number.isRequired,
    startIndex: e.number.isRequired
  })]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: e.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: e.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: e.func,
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
  shouldRespectLeadingZeros: e.bool,
  /**
   * The size of the component.
   */
  size: e.oneOf(["medium", "small"]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: e.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: e.object,
  style: e.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: e.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: e.oneOfType([e.func, e.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: e.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: e.oneOf(["filled", "outlined", "standard"])
});
const q = /* @__PURE__ */ h.forwardRef(function(s, l) {
  var a, r, u, c;
  const d = _(), o = v(), n = ve(s, "MuiDesktopDatePicker"), p = i({
    day: F,
    month: F,
    year: F
  }, n.viewRenderers), m = i({}, n, {
    viewRenderers: p,
    format: C(o, n, !1),
    yearsPerRow: (a = n.yearsPerRow) != null ? a : 4,
    slots: i({
      openPickerIcon: ne,
      field: V
    }, n.slots),
    slotProps: i({}, n.slotProps, {
      field: (b) => {
        var P;
        return i({}, ye((P = n.slotProps) == null ? void 0 : P.field, b), le(n), {
          ref: l
        });
      },
      toolbar: i({
        hidden: !0
      }, (r = n.slotProps) == null ? void 0 : r.toolbar)
    })
  }), {
    renderPicker: f
  } = ie({
    props: m,
    valueManager: j,
    valueType: "date",
    getOpenDialogAriaText: (u = (c = m.localeText) == null ? void 0 : c.openDatePickerDialogue) != null ? u : d.openDatePickerDialogue,
    validator: I
  });
  return f();
});
q.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: e.bool,
  /**
   * Class name applied to the root element.
   */
  className: e.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: e.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: e.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: e.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter.  Deprecated, will be removed in v7: Use `date` instead.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (_day: string, date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: e.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   */
  defaultCalendarMonth: e.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: e.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: e.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: e.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: e.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: e.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: e.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: e.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: e.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: e.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: S,
  /**
   * The label content.
   */
  label: e.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: e.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: e.object,
  /**
   * Maximal selectable date.
   */
  maxDate: e.any,
  /**
   * Minimal selectable date.
   */
  minDate: e.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: e.oneOf([3, 4]),
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: e.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: e.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: e.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: e.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: e.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: e.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: e.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: e.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: e.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: e.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: e.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: e.oneOf(["landscape", "portrait"]),
  readOnly: e.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: e.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: e.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: e.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: e.oneOfType([e.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), e.number, e.shape({
    endIndex: e.number.isRequired,
    startIndex: e.number.isRequired
  })]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: e.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: e.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: e.func,
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
  showDaysOutsideCurrentMonth: e.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: e.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: e.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: e.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: e.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: e.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: e.shape({
    day: e.func,
    month: e.func,
    year: e.func
  }),
  /**
   * Available views.
   */
  views: e.arrayOf(e.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 4
   */
  yearsPerRow: e.oneOf([3, 4])
};
const Xe = ({
  type: t,
  label: s,
  name: l,
  value: a,
  error: r,
  disabled: u = !1,
  required: c = !1,
  onChange: d,
  onBlur: o
}) => {
  if (t !== G.DATE)
    return null;
  const n = a ? Z(a) : null;
  return /* @__PURE__ */ D(
    ue,
    {
      dateAdapter: ce,
      adapterLocale: "en-US",
      children: /* @__PURE__ */ D(
        q,
        {
          format: "MM/DD/YYYY",
          label: s,
          value: n,
          disabled: u,
          onChange: (f) => {
            if (!f)
              d(null);
            else {
              const b = Q(f);
              d(b);
            }
          },
          onAccept: o,
          slotProps: {
            actionBar: {
              actions: c ? ["today"] : ["clear", "today"]
            },
            textField: (f) => ({
              ...J(f),
              error: r,
              name: l,
              id: l,
              onBlur: o
            })
          }
        }
      )
    }
  );
};
export {
  Xe as DateField
};
