import { _ as oe, a as h, P as a, g as De, s as Q, j as Ve, h as St } from "./styled-c6437ab8.js";
import { h as Ie } from "./moment-a2f61e40.js";
import * as f from "react";
import Bt from "react";
import { c as pe, a as Kn, u as on } from "./clsx-f0826a09.js";
import { u as me, g as ge, c as ye, b as Zn } from "./useThemeProps-7889d54e.js";
import { jsx as T, jsxs as he } from "react/jsx-runtime";
import { T as qe } from "./Typography-cd3e79a2.js";
import { u as Ge } from "./useTheme-f100ae81.js";
import { u as Oe, a as Qn, F as Jn } from "./useFormControl-a3d8b2b6.js";
import { _ as Xn, b as Le, a as _e, u as Y, c as eo, e as to } from "./TransitionGroupContext-fe4c547b.js";
import { P as no, C as oo } from "./Chip-f92e5f00.js";
import { P as so } from "./Paper-79c19457.js";
import { d as ro, T as sn, e as ao, u as ve, F as kt, G as io, h as lo, L as lt, j as _t, k as co } from "./SharedTextField-c5888703.js";
import { o as vt, i as rn, u as an } from "./FormHelperText-5a47fd9c.js";
import { I as dt } from "./IconButton-cb9cf13b.js";
import { M as rt } from "./Button-1104b2f9.js";
import { B as ln, T as cn } from "./ButtonBase-b38416c5.js";
import { c as Fe } from "./createSvgIcon-4c228bdf.js";
function uo(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function fo(e, t) {
  e.classList ? e.classList.add(t) : uo(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function Wt(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function po(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = Wt(e.className, t) : e.setAttribute("class", Wt(e.className && e.className.baseVal || "", t));
}
var ho = function(t, o) {
  return t && o && o.split(" ").forEach(function(s) {
    return fo(t, s);
  });
}, Dt = function(t, o) {
  return t && o && o.split(" ").forEach(function(s) {
    return po(t, s);
  });
}, Tt = /* @__PURE__ */ function(e) {
  Xn(t, e);
  function t() {
    for (var s, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return s = e.call.apply(e, [this].concat(r)) || this, s.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, s.onEnter = function(l, c) {
      var u = s.resolveArguments(l, c), d = u[0], v = u[1];
      s.removeClasses(d, "exit"), s.addClass(d, v ? "appear" : "enter", "base"), s.props.onEnter && s.props.onEnter(l, c);
    }, s.onEntering = function(l, c) {
      var u = s.resolveArguments(l, c), d = u[0], v = u[1], g = v ? "appear" : "enter";
      s.addClass(d, g, "active"), s.props.onEntering && s.props.onEntering(l, c);
    }, s.onEntered = function(l, c) {
      var u = s.resolveArguments(l, c), d = u[0], v = u[1], g = v ? "appear" : "enter";
      s.removeClasses(d, g), s.addClass(d, g, "done"), s.props.onEntered && s.props.onEntered(l, c);
    }, s.onExit = function(l) {
      var c = s.resolveArguments(l), u = c[0];
      s.removeClasses(u, "appear"), s.removeClasses(u, "enter"), s.addClass(u, "exit", "base"), s.props.onExit && s.props.onExit(l);
    }, s.onExiting = function(l) {
      var c = s.resolveArguments(l), u = c[0];
      s.addClass(u, "exit", "active"), s.props.onExiting && s.props.onExiting(l);
    }, s.onExited = function(l) {
      var c = s.resolveArguments(l), u = c[0];
      s.removeClasses(u, "exit"), s.addClass(u, "exit", "done"), s.props.onExited && s.props.onExited(l);
    }, s.resolveArguments = function(l, c) {
      return s.props.nodeRef ? [s.props.nodeRef.current, l] : [l, c];
    }, s.getClassNames = function(l) {
      var c = s.props.classNames, u = typeof c == "string", d = u && c ? c + "-" : "", v = u ? "" + d + l : c[l], g = u ? v + "-active" : c[l + "Active"], p = u ? v + "-done" : c[l + "Done"];
      return {
        baseClassName: v,
        activeClassName: g,
        doneClassName: p
      };
    }, s;
  }
  var o = t.prototype;
  return o.addClass = function(n, r, i) {
    var l = this.getClassNames(r)[i + "ClassName"], c = this.getClassNames("enter"), u = c.doneClassName;
    r === "appear" && i === "done" && u && (l += " " + u), i === "active" && n && ro(n), l && (this.appliedClasses[r][i] = l, ho(n, l));
  }, o.removeClasses = function(n, r) {
    var i = this.appliedClasses[r], l = i.base, c = i.active, u = i.done;
    this.appliedClasses[r] = {}, l && Dt(n, l), c && Dt(n, c), u && Dt(n, u);
  }, o.render = function() {
    var n = this.props;
    n.classNames;
    var r = oe(n, ["classNames"]);
    return /* @__PURE__ */ Bt.createElement(sn, h({}, r, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
}(Bt.Component);
Tt.defaultProps = {
  classNames: ""
};
Tt.propTypes = process.env.NODE_ENV !== "production" ? h({}, sn.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: ao,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: a.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: a.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: a.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: a.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: a.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: a.func
}) : {};
const mo = Tt, go = {
  // Year
  Y: "year",
  YY: "year",
  YYYY: {
    sectionType: "year",
    contentType: "digit",
    maxLength: 4
  },
  // Month
  M: {
    sectionType: "month",
    contentType: "digit",
    maxLength: 2
  },
  MM: "month",
  MMM: {
    sectionType: "month",
    contentType: "letter"
  },
  MMMM: {
    sectionType: "month",
    contentType: "letter"
  },
  // Day of the month
  D: {
    sectionType: "day",
    contentType: "digit",
    maxLength: 2
  },
  DD: "day",
  Do: {
    sectionType: "day",
    contentType: "digit-with-letter"
  },
  // Day of the week
  E: {
    sectionType: "weekDay",
    contentType: "digit",
    maxLength: 1
  },
  e: {
    sectionType: "weekDay",
    contentType: "digit",
    maxLength: 1
  },
  d: {
    sectionType: "weekDay",
    contentType: "digit",
    maxLength: 1
  },
  dd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  ddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  dddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  // Meridiem
  A: "meridiem",
  a: "meridiem",
  // Hours
  H: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  HH: "hours",
  h: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  hh: "hours",
  // Minutes
  m: {
    sectionType: "minutes",
    contentType: "digit",
    maxLength: 2
  },
  mm: "minutes",
  // Seconds
  s: {
    sectionType: "seconds",
    contentType: "digit",
    maxLength: 2
  },
  ss: "seconds"
}, yo = {
  year: "YYYY",
  month: "MMMM",
  monthShort: "MMM",
  dayOfMonth: "D",
  weekday: "dddd",
  weekdayShort: "ddd",
  hours24h: "HH",
  hours12h: "hh",
  meridiem: "A",
  minutes: "mm",
  seconds: "ss",
  fullDate: "ll",
  fullDateWithWeekday: "dddd, LL",
  keyboardDate: "L",
  shortDate: "MMM D",
  normalDate: "D MMMM",
  normalDateWithWeekday: "ddd, MMM D",
  monthAndYear: "MMMM YYYY",
  monthAndDate: "MMMM D",
  fullTime: "LT",
  fullTime12h: "hh:mm A",
  fullTime24h: "HH:mm",
  fullDateTime: "lll",
  fullDateTime12h: "ll hh:mm A",
  fullDateTime24h: "ll HH:mm",
  keyboardDateTime: "L LT",
  keyboardDateTime12h: "L hh:mm A",
  keyboardDateTime24h: "L HH:mm"
}, Ht = ["Missing timezone plugin", "To be able to use timezones, you have to pass the default export from `moment-timezone` to the `dateLibInstance` prop of `LocalizationProvider`", "Find more information on https://mui.com/x/react-date-pickers/timezone/#moment-and-timezone"].join(`
`);
class ci {
  constructor({
    locale: t,
    formats: o,
    instance: s
  } = {}) {
    this.isMUIAdapter = !0, this.isTimezoneCompatible = !0, this.lib = "moment", this.moment = void 0, this.locale = void 0, this.formats = void 0, this.escapedCharacters = {
      start: "[",
      end: "]"
    }, this.formatTokenMap = go, this.setLocaleToValue = (n) => {
      const r = this.getCurrentLocaleCode();
      return r === n.locale() ? n : n.locale(r);
    }, this.syncMomentLocale = (n) => {
      var r;
      const i = Ie.locale(), l = (r = this.locale) != null ? r : "en-us";
      if (i !== l) {
        Ie.locale(l);
        const c = n();
        return Ie.locale(i), c;
      }
      return n();
    }, this.hasTimezonePlugin = () => typeof this.moment.tz < "u", this.createSystemDate = (n) => {
      const r = this.moment(n).local();
      return this.locale === void 0 ? r : r.locale(this.locale);
    }, this.createUTCDate = (n) => {
      const r = this.moment.utc(n);
      return this.locale === void 0 ? r : r.locale(this.locale);
    }, this.createTZDate = (n, r) => {
      if (!this.hasTimezonePlugin())
        throw new Error(Ht);
      const i = r === "default" ? this.moment(n) : this.moment.tz(n, r);
      return this.locale === void 0 ? i : i.locale(this.locale);
    }, this.date = (n) => {
      if (n === null)
        return null;
      const r = this.moment(n);
      return r.locale(this.getCurrentLocaleCode()), r;
    }, this.dateWithTimezone = (n, r) => n === null ? null : r === "UTC" ? this.createUTCDate(n) : r === "system" || r === "default" && !this.hasTimezonePlugin() ? this.createSystemDate(n) : this.createTZDate(n, r), this.getTimezone = (n) => {
      var r, i, l;
      const c = (r = n._z) == null ? void 0 : r.name, u = n.isUTC() ? "UTC" : "system";
      return (i = c ?? ((l = this.moment.defaultZone) == null ? void 0 : l.name)) != null ? i : u;
    }, this.setTimezone = (n, r) => {
      var i, l;
      if (this.getTimezone(n) === r)
        return n;
      if (r === "UTC")
        return n.clone().utc();
      if (r === "system")
        return n.clone().local();
      if (!this.hasTimezonePlugin()) {
        if (r !== "default")
          throw new Error(Ht);
        return n;
      }
      const c = r === "default" ? (
        // @ts-ignore
        (i = (l = this.moment.defaultZone) == null ? void 0 : l.name) != null ? i : "system"
      ) : r;
      if (c === "system")
        return n.clone().local();
      const u = n.clone();
      return u.tz(c), u;
    }, this.toJsDate = (n) => n.toDate(), this.parseISO = (n) => this.moment(n, !0), this.toISO = (n) => n.toISOString(), this.parse = (n, r) => n === "" ? null : this.locale ? this.moment(n, r, this.locale, !0) : this.moment(n, r, !0), this.getCurrentLocaleCode = () => this.locale || Ie.locale(), this.is12HourCycleInCurrentLocale = () => /A|a/.test(Ie.localeData(this.getCurrentLocaleCode()).longDateFormat("LT")), this.expandFormat = (n) => {
      const r = /(\[[^[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})|./g;
      return n.match(r).map((i) => {
        const l = i[0];
        return l === "L" || l === ";" ? Ie.localeData(this.getCurrentLocaleCode()).longDateFormat(i) : i;
      }).join("");
    }, this.getFormatHelperText = (n) => this.expandFormat(n).replace(/a/gi, "(a|p)m").toLocaleLowerCase(), this.isNull = (n) => n === null, this.isValid = (n) => this.moment(n).isValid(), this.format = (n, r) => this.formatByString(n, this.formats[r]), this.formatByString = (n, r) => {
      const i = n.clone();
      return i.locale(this.getCurrentLocaleCode()), i.format(r);
    }, this.formatNumber = (n) => n, this.getDiff = (n, r, i) => n.diff(r, i), this.isEqual = (n, r) => n === null && r === null ? !0 : this.moment(n).isSame(r), this.isSameYear = (n, r) => n.isSame(r, "year"), this.isSameMonth = (n, r) => n.isSame(r, "month"), this.isSameDay = (n, r) => n.isSame(r, "day"), this.isSameHour = (n, r) => n.isSame(r, "hour"), this.isAfter = (n, r) => n.isAfter(r), this.isAfterYear = (n, r) => n.isAfter(r, "year"), this.isAfterDay = (n, r) => n.isAfter(r, "day"), this.isBefore = (n, r) => n.isBefore(r), this.isBeforeYear = (n, r) => n.isBefore(r, "year"), this.isBeforeDay = (n, r) => n.isBefore(r, "day"), this.isWithinRange = (n, [r, i]) => n.isBetween(r, i, null, "[]"), this.startOfYear = (n) => n.clone().startOf("year"), this.startOfMonth = (n) => n.clone().startOf("month"), this.startOfWeek = (n) => n.clone().startOf("week"), this.startOfDay = (n) => n.clone().startOf("day"), this.endOfYear = (n) => n.clone().endOf("year"), this.endOfMonth = (n) => n.clone().endOf("month"), this.endOfWeek = (n) => n.clone().endOf("week"), this.endOfDay = (n) => n.clone().endOf("day"), this.addYears = (n, r) => r < 0 ? n.clone().subtract(Math.abs(r), "years") : n.clone().add(r, "years"), this.addMonths = (n, r) => r < 0 ? n.clone().subtract(Math.abs(r), "months") : n.clone().add(r, "months"), this.addWeeks = (n, r) => r < 0 ? n.clone().subtract(Math.abs(r), "weeks") : n.clone().add(r, "weeks"), this.addDays = (n, r) => r < 0 ? n.clone().subtract(Math.abs(r), "days") : n.clone().add(r, "days"), this.addHours = (n, r) => r < 0 ? n.clone().subtract(Math.abs(r), "hours") : n.clone().add(r, "hours"), this.addMinutes = (n, r) => r < 0 ? n.clone().subtract(Math.abs(r), "minutes") : n.clone().add(r, "minutes"), this.addSeconds = (n, r) => r < 0 ? n.clone().subtract(Math.abs(r), "seconds") : n.clone().add(r, "seconds"), this.getYear = (n) => n.get("year"), this.getMonth = (n) => n.get("month"), this.getDate = (n) => n.get("date"), this.getHours = (n) => n.get("hours"), this.getMinutes = (n) => n.get("minutes"), this.getSeconds = (n) => n.get("seconds"), this.getMilliseconds = (n) => n.get("milliseconds"), this.setYear = (n, r) => n.clone().year(r), this.setMonth = (n, r) => n.clone().month(r), this.setDate = (n, r) => n.clone().date(r), this.setHours = (n, r) => n.clone().hours(r), this.setMinutes = (n, r) => n.clone().minutes(r), this.setSeconds = (n, r) => n.clone().seconds(r), this.setMilliseconds = (n, r) => n.clone().milliseconds(r), this.getDaysInMonth = (n) => n.daysInMonth(), this.getNextMonth = (n) => n.clone().add(1, "month"), this.getPreviousMonth = (n) => n.clone().subtract(1, "month"), this.getMonthArray = (n) => {
      const i = [this.startOfYear(n)];
      for (; i.length < 12; ) {
        const l = i[i.length - 1];
        i.push(this.getNextMonth(l));
      }
      return i;
    }, this.mergeDateAndTime = (n, r) => n.clone().hour(r.hour()).minute(r.minute()).second(r.second()), this.getWeekdays = () => this.syncMomentLocale(() => Ie.weekdaysShort(!0)), this.getWeekArray = (n) => {
      const r = this.setLocaleToValue(n), i = r.clone().startOf("month").startOf("week"), l = r.clone().endOf("month").endOf("week");
      let c = 0, u = i;
      const d = [];
      for (; u.isBefore(l); ) {
        const v = Math.floor(c / 7);
        d[v] = d[v] || [], d[v].push(u), u = u.clone().add(1, "day"), c += 1;
      }
      return d;
    }, this.getWeekNumber = (n) => n.week(), this.getYearRange = (n, r) => {
      const i = this.moment(n).startOf("year"), l = this.moment(r).endOf("year"), c = [];
      let u = i;
      for (; u.isBefore(l); )
        c.push(u), u = u.clone().add(1, "year");
      return c;
    }, this.getMeridiemText = (n) => this.is12HourCycleInCurrentLocale() ? Ie.localeData(this.getCurrentLocaleCode()).meridiem(n === "am" ? 0 : 13, 0, !1) : n === "am" ? "AM" : "PM", this.moment = s || Ie, this.locale = t, this.formats = h({}, yo, o);
  }
}
const Te = (e, t) => e.length !== t.length ? !1 : t.every((o) => e.includes(o)), ui = ({
  openTo: e,
  defaultOpenTo: t,
  views: o,
  defaultViews: s
}) => {
  const n = o ?? s;
  let r;
  if (e != null)
    r = e;
  else if (n.includes(t))
    r = t;
  else if (n.length > 0)
    r = n[0];
  else
    throw new Error("MUI: The `views` prop must contain at least one view");
  return {
    views: n,
    openTo: r
  };
}, tt = ({
  date: e,
  disableFuture: t,
  disablePast: o,
  maxDate: s,
  minDate: n,
  isDateDisabled: r,
  utils: i,
  timezone: l
}) => {
  const c = i.startOfDay(i.dateWithTimezone(void 0, l));
  o && i.isBefore(n, c) && (n = c), t && i.isAfter(s, c) && (s = c);
  let u = e, d = e;
  for (i.isBefore(e, n) && (u = n, d = null), i.isAfter(e, s) && (d && (d = s), u = null); u || d; ) {
    if (u && i.isAfter(u, s) && (u = null), d && i.isBefore(d, n) && (d = null), u) {
      if (!r(u))
        return u;
      u = i.addDays(u, 1);
    }
    if (d) {
      if (!r(d))
        return d;
      d = i.addDays(d, -1);
    }
  }
  return null;
}, bo = (e, t) => t == null || !e.isValid(t) ? null : t, Ne = (e, t, o) => t == null || !e.isValid(t) ? o : t, vo = (e, t, o) => !e.isValid(t) && t != null && !e.isValid(o) && o != null ? !0 : e.isEqual(t, o), Vt = (e, t) => {
  const s = [e.startOfYear(t)];
  for (; s.length < 12; ) {
    const n = s[s.length - 1];
    s.push(e.addMonths(n, 1));
  }
  return s;
}, Mt = (e, t, o) => {
  let s = t;
  return s = e.setHours(s, e.getHours(o)), s = e.setMinutes(s, e.getMinutes(o)), s = e.setSeconds(s, e.getSeconds(o)), s;
}, un = (e, t, o) => o === "date" ? e.startOfDay(e.dateWithTimezone(void 0, t)) : e.dateWithTimezone(void 0, t), di = (e, t) => {
  const o = e.setHours(e.date(), t === "am" ? 2 : 14);
  return e.format(o, "meridiem");
}, Do = ["year", "month", "day"], zt = (e) => Do.includes(e), fi = (e, {
  format: t,
  views: o
}, s) => {
  if (t != null)
    return t;
  const n = e.formats;
  return Te(o, ["year"]) ? n.year : Te(o, ["month"]) ? n.month : Te(o, ["day"]) ? n.dayOfMonth : Te(o, ["month", "year"]) ? `${n.month} ${n.year}` : Te(o, ["day", "month"]) ? `${n.month} ${n.dayOfMonth}` : s ? /en/.test(e.getCurrentLocaleCode()) ? n.normalDateWithWeekday : n.normalDate : n.keyboardDate;
}, wo = (e, t) => {
  const o = e.startOfWeek(t);
  return [0, 1, 2, 3, 4, 5, 6].map((s) => e.addDays(o, s));
}, dn = ["hours", "minutes", "seconds"], Co = (e) => dn.includes(e), pi = (e) => dn.includes(e) || e === "meridiem", So = (e, t) => e ? t.getHours(e) >= 12 ? "pm" : "am" : null, Mo = (e, t, o) => o && (e >= 12 ? "pm" : "am") !== t ? t === "am" ? e - 12 : e + 12 : e, xo = (e, t, o, s) => {
  const n = Mo(s.getHours(e), t, o);
  return s.setHours(e, n);
}, Yt = (e, t) => t.getHours(e) * 3600 + t.getMinutes(e) * 60 + t.getSeconds(e), Po = (e, t) => (o, s) => e ? t.isAfter(o, s) : Yt(o, t) > Yt(s, t), hi = (e, {
  format: t,
  views: o,
  ampm: s
}) => {
  if (t != null)
    return t;
  const n = e.formats;
  return Te(o, ["hours"]) ? s ? `${n.hours12h} ${n.meridiem}` : n.hours24h : Te(o, ["minutes"]) ? n.minutes : Te(o, ["seconds"]) ? n.seconds : Te(o, ["minutes", "seconds"]) ? `${n.minutes}:${n.seconds}` : Te(o, ["hours", "minutes", "seconds"]) ? s ? `${n.hours12h}:${n.minutes}:${n.seconds} ${n.meridiem}` : `${n.hours24h}:${n.minutes}:${n.seconds}` : s ? `${n.hours12h}:${n.minutes} ${n.meridiem}` : `${n.hours24h}:${n.minutes}`;
}, ke = {
  year: 1,
  month: 2,
  day: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7
}, ko = (e) => Math.max(...e.map((t) => {
  var o;
  return (o = ke[t.type]) != null ? o : 1;
})), Xe = (e, t, o) => {
  if (t === ke.year)
    return e.startOfYear(o);
  if (t === ke.month)
    return e.startOfMonth(o);
  if (t === ke.day)
    return e.startOfDay(o);
  let s = o;
  return t < ke.minutes && (s = e.setMinutes(s, 0)), t < ke.seconds && (s = e.setSeconds(s, 0)), t < ke.milliseconds && (s = e.setMilliseconds(s, 0)), s;
}, To = ({
  props: e,
  utils: t,
  granularity: o,
  timezone: s,
  getTodayDate: n
}) => {
  var r;
  let i = n ? n() : Xe(t, o, un(t, s));
  e.minDate != null && t.isAfterDay(e.minDate, i) && (i = Xe(t, o, e.minDate)), e.maxDate != null && t.isBeforeDay(e.maxDate, i) && (i = Xe(t, o, e.maxDate));
  const l = Po((r = e.disableIgnoringDatePartForTimeValidation) != null ? r : !1, t);
  return e.minTime != null && l(e.minTime, i) && (i = Xe(t, o, e.disableIgnoringDatePartForTimeValidation ? e.minTime : Mt(t, i, e.minTime))), e.maxTime != null && l(i, e.maxTime) && (i = Xe(t, o, e.disableIgnoringDatePartForTimeValidation ? e.maxTime : Mt(t, i, e.maxTime))), i;
}, It = (e, t) => {
  const o = e.formatTokenMap[t];
  if (o == null)
    throw new Error([`MUI: The token "${t}" is not supported by the Date and Time Pickers.`, "Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported."].join(`
`));
  return typeof o == "string" ? {
    type: o,
    contentType: o === "meridiem" ? "letter" : "digit",
    maxLength: void 0
  } : {
    type: o.sectionType,
    contentType: o.contentType,
    maxLength: o.maxLength
  };
}, Vo = (e) => {
  switch (e) {
    case "ArrowUp":
      return 1;
    case "ArrowDown":
      return -1;
    case "PageUp":
      return 5;
    case "PageDown":
      return -5;
    default:
      return 0;
  }
}, ft = (e, t, o) => {
  const s = [], n = e.dateWithTimezone(void 0, t), r = e.startOfWeek(n), i = e.endOfWeek(n);
  let l = r;
  for (; e.isBefore(l, i); )
    s.push(l), l = e.addDays(l, 1);
  return s.map((c) => e.formatByString(c, o));
}, fn = (e, t, o, s) => {
  switch (o) {
    case "month":
      return Vt(e, e.dateWithTimezone(void 0, t)).map((n) => e.formatByString(n, s));
    case "weekDay":
      return ft(e, t, s);
    case "meridiem": {
      const n = e.dateWithTimezone(void 0, t);
      return [e.startOfDay(n), e.endOfDay(n)].map((r) => e.formatByString(r, s));
    }
    default:
      return [];
  }
}, pn = (e, t, o) => {
  let s = t;
  for (s = Number(s).toString(); s.length < o; )
    s = `0${s}`;
  return s;
}, hn = (e, t, o, s, n) => {
  if (process.env.NODE_ENV !== "production" && n.type !== "day" && n.contentType === "digit-with-letter")
    throw new Error([`MUI: The token "${n.format}" is a digit format with letter in it.'
             This type of format is only supported for 'day' sections`].join(`
`));
  if (n.type === "day" && n.contentType === "digit-with-letter") {
    const i = e.setDate(s.longestMonth, o);
    return e.formatByString(i, n.format);
  }
  const r = o.toString();
  return n.hasLeadingZerosInInput ? pn(e, r, n.maxLength) : r;
}, Io = (e, t, o, s, n, r, i) => {
  const l = Vo(s), c = s === "Home", u = s === "End", d = o.value === "" || c || u, v = () => {
    const p = n[o.type]({
      currentDate: r,
      format: o.format,
      contentType: o.contentType
    }), C = (m) => hn(e, t, m, p, o), y = o.type === "minutes" && i != null && i.minutesStep ? i.minutesStep : 1;
    let S = parseInt(o.value, 10) + l * y;
    if (d) {
      if (o.type === "year" && !u && !c)
        return e.formatByString(e.dateWithTimezone(void 0, t), o.format);
      l > 0 || c ? S = p.minimum : S = p.maximum;
    }
    return S % y !== 0 && ((l < 0 || c) && (S += y - (y + S) % y), (l > 0 || u) && (S -= S % y)), S > p.maximum ? C(p.minimum + (S - p.maximum - 1) % (p.maximum - p.minimum + 1)) : S < p.minimum ? C(p.maximum - (p.minimum - S - 1) % (p.maximum - p.minimum + 1)) : C(S);
  }, g = () => {
    const p = fn(e, t, o.type, o.format);
    if (p.length === 0)
      return o.value;
    if (d)
      return l > 0 || c ? p[0] : p[p.length - 1];
    const y = (p.indexOf(o.value) + p.length + l) % p.length;
    return p[y];
  };
  return o.contentType === "digit" || o.contentType === "digit-with-letter" ? v() : g();
}, At = (e, t) => {
  let o = e.value || e.placeholder;
  const s = t === "non-input" ? e.hasLeadingZerosInFormat : e.hasLeadingZerosInInput;
  return t === "non-input" && e.hasLeadingZerosInInput && !e.hasLeadingZerosInFormat && (o = Number(o).toString()), ["input-rtl", "input-ltr"].includes(t) && e.contentType === "digit" && !s && o.length === 1 && (o = `${o}‎`), t === "input-rtl" && (o = `⁨${o}⁩`), o;
}, Ye = (e) => e.replace(/[\u2066\u2067\u2068\u2069]/g, ""), mn = (e, t) => {
  let o = 0, s = t ? 1 : 0;
  const n = [];
  for (let r = 0; r < e.length; r += 1) {
    const i = e[r], l = At(i, t ? "input-rtl" : "input-ltr"), c = `${i.startSeparator}${l}${i.endSeparator}`, u = Ye(c).length, d = c.length, v = Ye(l), g = s + l.indexOf(v[0]) + i.startSeparator.length, p = g + v.length;
    n.push(h({}, i, {
      start: o,
      end: o + u,
      startInInput: g,
      endInInput: p
    })), o += u, s += d;
  }
  return n;
}, Ao = (e, t, o, s, n) => {
  switch (s.type) {
    case "year":
      return o.fieldYearPlaceholder({
        digitAmount: e.formatByString(e.dateWithTimezone(void 0, t), n).length
      });
    case "month":
      return o.fieldMonthPlaceholder({
        contentType: s.contentType
      });
    case "day":
      return o.fieldDayPlaceholder();
    case "weekDay":
      return o.fieldWeekDayPlaceholder({
        contentType: s.contentType
      });
    case "hours":
      return o.fieldHoursPlaceholder();
    case "minutes":
      return o.fieldMinutesPlaceholder();
    case "seconds":
      return o.fieldSecondsPlaceholder();
    case "meridiem":
      return o.fieldMeridiemPlaceholder();
    default:
      return n;
  }
}, Ut = (e, t, o, s) => {
  if (process.env.NODE_ENV !== "production" && It(e, o).type === "weekDay")
    throw new Error("changeSectionValueFormat doesn't support week day formats");
  return e.formatByString(e.parse(t, o), s);
}, gn = (e, t, o) => e.formatByString(e.dateWithTimezone(void 0, t), o).length === 4, yn = (e, t, o, s, n) => {
  if (o !== "digit")
    return !1;
  const r = e.dateWithTimezone(void 0, t);
  switch (s) {
    case "year":
      return gn(e, t, n) ? e.formatByString(e.setYear(r, 1), n) === "0001" : e.formatByString(e.setYear(r, 2001), n) === "01";
    case "month":
      return e.formatByString(e.startOfYear(r), n).length > 1;
    case "day":
      return e.formatByString(e.startOfMonth(r), n).length > 1;
    case "weekDay":
      return e.formatByString(e.startOfWeek(r), n).length > 1;
    case "hours":
      return e.formatByString(e.setHours(r, 1), n).length > 1;
    case "minutes":
      return e.formatByString(e.setMinutes(r, 1), n).length > 1;
    case "seconds":
      return e.formatByString(e.setMinutes(r, 1), n).length > 1;
    default:
      throw new Error("Invalid section type");
  }
}, Ro = (e, t) => {
  const o = [], {
    start: s,
    end: n
  } = e.escapedCharacters, r = new RegExp(`(\\${s}[^\\${n}]*\\${n})+`, "g");
  let i = null;
  for (; i = r.exec(t); )
    o.push({
      start: i.index,
      end: r.lastIndex - 1
    });
  return o;
}, jt = (e, t, o, s, n, r, i, l) => {
  let c = "";
  const u = [], d = e.date(), v = (w) => {
    if (w === "")
      return null;
    const x = It(e, w), D = yn(e, t, x.contentType, x.type, w), E = i ? D : x.contentType === "digit", O = n != null && e.isValid(n);
    let A = O ? e.formatByString(n, w) : "", P = null;
    if (E)
      if (D)
        P = A === "" ? e.formatByString(d, w).length : A.length;
      else {
        if (x.maxLength == null)
          throw new Error(`MUI: The token ${w} should have a 'maxDigitNumber' property on it's adapter`);
        P = x.maxLength, O && (A = pn(e, A, P));
      }
    return u.push(h({}, x, {
      format: w,
      maxLength: P,
      value: A,
      placeholder: Ao(e, t, o, x, w),
      hasLeadingZeros: D,
      hasLeadingZerosInFormat: D,
      hasLeadingZerosInInput: E,
      startSeparator: u.length === 0 ? c : "",
      endSeparator: "",
      modified: !1
    })), null;
  };
  let g = 10, p = s, C = e.expandFormat(s);
  for (; C !== p; )
    if (p = C, C = e.expandFormat(p), g -= 1, g < 0)
      throw new Error("MUI: The format expansion seems to be  enter in an infinite loop. Please open an issue with the format passed to the picker component");
  const y = C, M = Ro(e, y), S = new RegExp(`^(${Object.keys(e.formatTokenMap).sort((w, x) => x.length - w.length).join("|")})`, "g");
  let m = "";
  for (let w = 0; w < y.length; w += 1) {
    const x = M.find((P) => P.start <= w && P.end >= w), D = y[w], E = x != null, O = `${m}${y.slice(w)}`, A = S.test(O);
    !E && D.match(/([A-Za-z]+)/) && A ? (m = O.slice(0, S.lastIndex), w += S.lastIndex - 1) : E && (x == null ? void 0 : x.start) === w || (x == null ? void 0 : x.end) === w || (v(m), m = "", u.length === 0 ? c += D : u[u.length - 1].endSeparator += D);
  }
  return v(m), u.map((w) => {
    const x = (D) => {
      let E = D;
      return l && E !== null && E.includes(" ") && (E = `⁩${E}⁦`), r === "spacious" && ["/", ".", "-"].includes(E) && (E = ` ${E} `), E;
    };
    return w.startSeparator = x(w.startSeparator), w.endSeparator = x(w.endSeparator), w;
  });
}, Eo = (e, t) => {
  const o = t.some((l) => l.type === "day"), s = [], n = [];
  for (let l = 0; l < t.length; l += 1) {
    const c = t[l];
    o && c.type === "weekDay" || (s.push(c.format), n.push(At(c, "non-input")));
  }
  const r = s.join(" "), i = n.join(" ");
  return e.parse(i, r);
}, Oo = (e, t) => {
  const s = e.map((n) => {
    const r = At(n, t ? "input-rtl" : "input-ltr");
    return `${n.startSeparator}${r}${n.endSeparator}`;
  }).join("");
  return t ? `⁦${s}⁩` : s;
}, Lo = (e, t) => {
  const o = e.dateWithTimezone(void 0, t), s = e.endOfYear(o), n = e.endOfDay(o), {
    maxDaysInMonth: r,
    longestMonth: i
  } = Vt(e, o).reduce((l, c) => {
    const u = e.getDaysInMonth(c);
    return u > l.maxDaysInMonth ? {
      maxDaysInMonth: u,
      longestMonth: c
    } : l;
  }, {
    maxDaysInMonth: 0,
    longestMonth: null
  });
  return {
    year: ({
      format: l
    }) => ({
      minimum: 0,
      maximum: gn(e, t, l) ? 9999 : 99
    }),
    month: () => ({
      minimum: 1,
      // Assumption: All years have the same amount of months
      maximum: e.getMonth(s) + 1
    }),
    day: ({
      currentDate: l
    }) => ({
      minimum: 1,
      maximum: l != null && e.isValid(l) ? e.getDaysInMonth(l) : r,
      longestMonth: i
    }),
    weekDay: ({
      format: l,
      contentType: c
    }) => {
      if (c === "digit") {
        const u = ft(e, t, l).map(Number);
        return {
          minimum: Math.min(...u),
          maximum: Math.max(...u)
        };
      }
      return {
        minimum: 1,
        maximum: 7
      };
    },
    hours: ({
      format: l
    }) => {
      const c = e.getHours(n);
      return e.formatByString(e.endOfDay(o), l) !== c.toString() ? {
        minimum: 1,
        maximum: Number(e.formatByString(e.startOfDay(o), l))
      } : {
        minimum: 0,
        maximum: c
      };
    },
    minutes: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of minutes
      maximum: e.getMinutes(n)
    }),
    seconds: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of seconds
      maximum: e.getSeconds(n)
    }),
    meridiem: () => ({
      minimum: 0,
      maximum: 0
    })
  };
};
let qt = !1;
const Gt = (e, t) => {
  if (process.env.NODE_ENV !== "production" && !qt) {
    const o = [];
    ["date", "date-time"].includes(t) && o.push("weekDay", "day", "month", "year"), ["time", "date-time"].includes(t) && o.push("hours", "minutes", "seconds", "meridiem");
    const s = e.find((n) => !o.includes(n.type));
    s && (console.warn(`MUI: The field component you are using is not compatible with the "${s.type} date section.`, `The supported date sections are ["${o.join('", "')}"]\`.`), qt = !0);
  }
}, No = (e, t, o, s, n) => {
  switch (o.type) {
    case "year":
      return e.setYear(n, e.getYear(s));
    case "month":
      return e.setMonth(n, e.getMonth(s));
    case "weekDay": {
      const r = ft(e, t, o.format), i = e.formatByString(s, o.format), l = r.indexOf(i), u = r.indexOf(o.value) - l;
      return e.addDays(s, u);
    }
    case "day":
      return e.setDate(n, e.getDate(s));
    case "meridiem": {
      const r = e.getHours(s) < 12, i = e.getHours(n);
      return r && i >= 12 ? e.addHours(n, -12) : !r && i < 12 ? e.addHours(n, 12) : n;
    }
    case "hours":
      return e.setHours(n, e.getHours(s));
    case "minutes":
      return e.setMinutes(n, e.getMinutes(s));
    case "seconds":
      return e.setSeconds(n, e.getSeconds(s));
    default:
      return n;
  }
}, Kt = {
  year: 1,
  month: 2,
  day: 3,
  weekDay: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  meridiem: 8
}, Zt = (e, t, o, s, n, r) => (
  // cloning sections before sort to avoid mutating it
  [...s].sort((i, l) => Kt[i.type] - Kt[l.type]).reduce((i, l) => !r || l.modified ? No(e, t, l, o, i) : i, n)
), Fo = () => navigator.userAgent.toLowerCase().indexOf("android") > -1, $o = (e, t) => {
  const o = {};
  if (!t)
    return e.forEach((c, u) => {
      const d = u === 0 ? null : u - 1, v = u === e.length - 1 ? null : u + 1;
      o[u] = {
        leftIndex: d,
        rightIndex: v
      };
    }), {
      neighbors: o,
      startIndex: 0,
      endIndex: e.length - 1
    };
  const s = {}, n = {};
  let r = 0, i = 0, l = e.length - 1;
  for (; l >= 0; ) {
    i = e.findIndex(
      // eslint-disable-next-line @typescript-eslint/no-loop-func
      (c, u) => {
        var d;
        return u >= r && ((d = c.endSeparator) == null ? void 0 : d.includes(" ")) && // Special case where the spaces were not there in the initial input
        c.endSeparator !== " / ";
      }
    ), i === -1 && (i = e.length - 1);
    for (let c = i; c >= r; c -= 1)
      n[c] = l, s[l] = c, l -= 1;
    r = i + 1;
  }
  return e.forEach((c, u) => {
    const d = n[u], v = d === 0 ? null : s[d - 1], g = d === e.length - 1 ? null : s[d + 1];
    o[u] = {
      leftIndex: v,
      rightIndex: g
    };
  }), {
    neighbors: o,
    startIndex: s[0],
    endIndex: s[e.length - 1]
  };
}, Bo = ["value", "referenceDate"], je = {
  emptyValue: null,
  getTodayValue: un,
  getInitialReferenceValue: (e) => {
    let {
      value: t,
      referenceDate: o
    } = e, s = oe(e, Bo);
    return t != null && s.utils.isValid(t) ? t : o ?? To(s);
  },
  cleanValue: bo,
  areValuesEqual: vo,
  isSameError: (e, t) => e === t,
  hasError: (e) => e != null,
  defaultErrorState: null,
  getTimezone: (e, t) => t == null || !e.isValid(t) ? null : e.getTimezone(t),
  setTimezone: (e, t, o) => o == null ? null : e.setTimezone(o, t)
}, mi = {
  updateReferenceValue: (e, t, o) => t == null || !e.isValid(t) ? o : t,
  getSectionsFromValue: (e, t, o, s, n) => !e.isValid(t) && !!o ? o : mn(n(t), s),
  getValueStrFromSections: Oo,
  getActiveDateManager: (e, t) => ({
    date: t.value,
    referenceDate: t.referenceValue,
    getSections: (o) => o,
    getNewValuesFromNewActiveDate: (o) => ({
      value: o,
      referenceValue: o == null || !e.isValid(o) ? t.referenceValue : o
    })
  }),
  parseValueStr: (e, t, o) => o(e.trim(), t)
}, _o = ["localeText"], ct = /* @__PURE__ */ f.createContext(null);
process.env.NODE_ENV !== "production" && (ct.displayName = "MuiPickersAdapterContext");
const bn = function(t) {
  var o;
  const {
    localeText: s
  } = t, n = oe(t, _o), {
    utils: r,
    localeText: i
  } = (o = f.useContext(ct)) != null ? o : {
    utils: void 0,
    localeText: void 0
  }, l = me({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: n,
    name: "MuiLocalizationProvider"
  }), {
    children: c,
    dateAdapter: u,
    dateFormats: d,
    dateLibInstance: v,
    adapterLocale: g,
    localeText: p
  } = l, C = f.useMemo(() => h({}, p, i, s), [p, i, s]), y = f.useMemo(() => {
    if (!u)
      return r || null;
    const m = new u({
      locale: g,
      formats: d,
      instance: v
    });
    if (!m.isMUIAdapter)
      throw new Error(["MUI: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`", "For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`", "More information on the installation documentation: https://mui.com/x/react-date-pickers/getting-started/#installation"].join(`
`));
    return m;
  }, [u, g, d, v, r]), M = f.useMemo(() => y ? {
    minDate: y.date("1900-01-01T00:00:00.000"),
    maxDate: y.date("2099-12-31T00:00:00.000")
  } : null, [y]), S = f.useMemo(() => ({
    utils: y,
    defaultDates: M,
    localeText: C
  }), [M, y, C]);
  return /* @__PURE__ */ T(ct.Provider, {
    value: S,
    children: c
  });
};
process.env.NODE_ENV !== "production" && (bn.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Locale for the date library you are using
   */
  adapterLocale: a.any,
  children: a.node,
  /**
   * Date library adapter class function.
   * @see See the localization provider {@link https://mui.com/x/react-date-pickers/getting-started/#setup-your-date-library-adapter date adapter setup section} for more details.
   */
  dateAdapter: a.func,
  /**
   * Formats that are used for any child pickers
   */
  dateFormats: a.shape({
    dayOfMonth: a.string,
    fullDate: a.string,
    fullDateTime: a.string,
    fullDateTime12h: a.string,
    fullDateTime24h: a.string,
    fullDateWithWeekday: a.string,
    fullTime: a.string,
    fullTime12h: a.string,
    fullTime24h: a.string,
    hours12h: a.string,
    hours24h: a.string,
    keyboardDate: a.string,
    keyboardDateTime: a.string,
    keyboardDateTime12h: a.string,
    keyboardDateTime24h: a.string,
    meridiem: a.string,
    minutes: a.string,
    month: a.string,
    monthAndDate: a.string,
    monthAndYear: a.string,
    monthShort: a.string,
    normalDate: a.string,
    normalDateWithWeekday: a.string,
    seconds: a.string,
    shortDate: a.string,
    weekday: a.string,
    weekdayShort: a.string,
    year: a.string
  }),
  /**
   * Date library instance you are using, if it has some global overrides
   * ```jsx
   * dateLibInstance={momentTimeZone}
   * ```
   */
  dateLibInstance: a.any,
  /**
   * Locale for components texts
   */
  localeText: a.object
});
const Wo = (e) => ({
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        localeText: h({}, e)
      }
    }
  }
}), vn = {
  // Calendar navigation
  previousMonth: "Previous month",
  nextMonth: "Next month",
  // View navigation
  openPreviousView: "open previous view",
  openNextView: "open next view",
  calendarViewSwitchingButtonAriaLabel: (e) => e === "year" ? "year view is open, switch to calendar view" : "calendar view is open, switch to year view",
  // DateRange placeholders
  start: "Start",
  end: "End",
  // Action bar
  cancelButtonLabel: "Cancel",
  clearButtonLabel: "Clear",
  okButtonLabel: "OK",
  todayButtonLabel: "Today",
  // Toolbar titles
  datePickerToolbarTitle: "Select date",
  dateTimePickerToolbarTitle: "Select date & time",
  timePickerToolbarTitle: "Select time",
  dateRangePickerToolbarTitle: "Select date range",
  // Clock labels
  clockLabelText: (e, t, o) => `Select ${e}. ${t === null ? "No time selected" : `Selected time is ${o.format(t, "fullTime")}`}`,
  hoursClockNumberText: (e) => `${e} hours`,
  minutesClockNumberText: (e) => `${e} minutes`,
  secondsClockNumberText: (e) => `${e} seconds`,
  // Digital clock labels
  selectViewText: (e) => `Select ${e}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Week number",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (e) => `Week ${e}`,
  calendarWeekNumberText: (e) => `${e}`,
  // Open picker labels
  openDatePickerDialogue: (e, t) => e !== null && t.isValid(e) ? `Choose date, selected date is ${t.format(e, "fullDate")}` : "Choose date",
  openTimePickerDialogue: (e, t) => e !== null && t.isValid(e) ? `Choose time, selected time is ${t.format(e, "fullTime")}` : "Choose time",
  fieldClearLabel: "Clear value",
  // Table labels
  timeTableLabel: "pick time",
  dateTableLabel: "pick date",
  // Field section placeholders
  fieldYearPlaceholder: (e) => "Y".repeat(e.digitAmount),
  fieldMonthPlaceholder: (e) => e.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (e) => e.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
}, Ho = vn;
Wo(vn);
const We = () => {
  const e = f.useContext(ct);
  if (e === null)
    throw new Error(["MUI: Can not find the date and time pickers localization context.", "It looks like you forgot to wrap your component in LocalizationProvider.", "This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package"].join(`
`));
  if (e.utils === null)
    throw new Error(["MUI: Can not find the date and time pickers adapter from its localization context.", "It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider."].join(`
`));
  const t = f.useMemo(() => h({}, Ho, e.localeText), [e.localeText]);
  return f.useMemo(() => h({}, e, {
    localeText: t
  }), [e, t]);
}, fe = () => We().utils, Rt = () => We().defaultDates, ot = () => We().localeText, st = (e) => {
  const t = fe(), o = f.useRef();
  return o.current === void 0 && (o.current = t.dateWithTimezone(void 0, e)), o.current;
};
function zo(e) {
  return De("MuiPickersToolbar", e);
}
ge("MuiPickersToolbar", ["root", "content"]);
const Yo = (e) => {
  const {
    classes: t,
    isLandscape: o
  } = e;
  return ye({
    root: ["root"],
    content: ["content"],
    penIconButton: ["penIconButton", o && "penIconButtonLandscape"]
  }, zo, t);
}, Uo = Q("div", {
  name: "MuiPickersToolbar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => h({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: e.spacing(2, 3)
}, t.isLandscape && {
  height: "auto",
  maxWidth: 160,
  padding: 16,
  justifyContent: "flex-start",
  flexWrap: "wrap"
})), jo = Q("div", {
  name: "MuiPickersToolbar",
  slot: "Content",
  overridesResolver: (e, t) => t.content
})(({
  ownerState: e
}) => {
  var t;
  return {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: e.isLandscape ? "flex-start" : "space-between",
    flexDirection: e.isLandscape ? (t = e.landscapeDirection) != null ? t : "column" : "row",
    flex: 1,
    alignItems: e.isLandscape ? "flex-start" : "center"
  };
}), gi = /* @__PURE__ */ f.forwardRef(function(t, o) {
  const s = me({
    props: t,
    name: "MuiPickersToolbar"
  }), {
    children: n,
    className: r,
    toolbarTitle: i,
    hidden: l,
    titleId: c
  } = s, u = s, d = Yo(u);
  return l ? null : /* @__PURE__ */ he(Uo, {
    ref: o,
    className: pe(d.root, r),
    ownerState: u,
    children: [/* @__PURE__ */ T(qe, {
      color: "text.secondary",
      variant: "overline",
      id: c,
      children: i
    }), /* @__PURE__ */ T(jo, {
      className: d.content,
      ownerState: u,
      children: n
    })]
  });
}), qo = (e) => {
  if (e !== void 0)
    return Object.keys(e).reduce((t, o) => h({}, t, {
      [`${o.slice(0, 1).toLowerCase()}${o.slice(1)}`]: e[o]
    }), {});
}, Go = Fe(/* @__PURE__ */ T("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), Ko = Fe(/* @__PURE__ */ T("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), "ArrowLeft"), Zo = Fe(/* @__PURE__ */ T("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), "ArrowRight"), yi = Fe(/* @__PURE__ */ T("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), "Calendar");
Fe(/* @__PURE__ */ he(f.Fragment, {
  children: [/* @__PURE__ */ T("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ T("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Clock");
const bi = Fe(/* @__PURE__ */ T("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}), "DateRange"), vi = Fe(/* @__PURE__ */ he(f.Fragment, {
  children: [/* @__PURE__ */ T("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ T("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Time"), Qo = Fe(/* @__PURE__ */ T("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Clear");
function Jo(e) {
  return De("MuiPickersArrowSwitcher", e);
}
ge("MuiPickersArrowSwitcher", ["root", "spacer", "button"]);
const Xo = ["children", "className", "slots", "slotProps", "isNextDisabled", "isNextHidden", "onGoToNext", "nextLabel", "isPreviousDisabled", "isPreviousHidden", "onGoToPrevious", "previousLabel"], es = ["ownerState"], ts = ["ownerState"], ns = Q("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex"
}), os = Q("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Spacer",
  overridesResolver: (e, t) => t.spacer
})(({
  theme: e
}) => ({
  width: e.spacing(3)
})), Qt = Q(dt, {
  name: "MuiPickersArrowSwitcher",
  slot: "Button",
  overridesResolver: (e, t) => t.button
})(({
  ownerState: e
}) => h({}, e.hidden && {
  visibility: "hidden"
})), ss = (e) => {
  const {
    classes: t
  } = e;
  return ye({
    root: ["root"],
    spacer: ["spacer"],
    button: ["button"]
  }, Jo, t);
}, rs = /* @__PURE__ */ f.forwardRef(function(t, o) {
  var s, n, r, i;
  const c = Ge().direction === "rtl", u = me({
    props: t,
    name: "MuiPickersArrowSwitcher"
  }), {
    children: d,
    className: v,
    slots: g,
    slotProps: p,
    isNextDisabled: C,
    isNextHidden: y,
    onGoToNext: M,
    nextLabel: S,
    isPreviousDisabled: m,
    isPreviousHidden: w,
    onGoToPrevious: x,
    previousLabel: D
  } = u, E = oe(u, Xo), O = u, A = ss(O), P = {
    isDisabled: C,
    isHidden: y,
    goTo: M,
    label: S
  }, $ = {
    isDisabled: m,
    isHidden: w,
    goTo: x,
    label: D
  }, I = (s = g == null ? void 0 : g.previousIconButton) != null ? s : Qt, N = ve({
    elementType: I,
    externalSlotProps: p == null ? void 0 : p.previousIconButton,
    additionalProps: {
      size: "medium",
      title: $.label,
      "aria-label": $.label,
      disabled: $.isDisabled,
      edge: "end",
      onClick: $.goTo
    },
    ownerState: h({}, O, {
      hidden: $.isHidden
    }),
    className: A.button
  }), F = (n = g == null ? void 0 : g.nextIconButton) != null ? n : Qt, k = ve({
    elementType: F,
    externalSlotProps: p == null ? void 0 : p.nextIconButton,
    additionalProps: {
      size: "medium",
      title: P.label,
      "aria-label": P.label,
      disabled: P.isDisabled,
      edge: "start",
      onClick: P.goTo
    },
    ownerState: h({}, O, {
      hidden: P.isHidden
    }),
    className: A.button
  }), b = (r = g == null ? void 0 : g.leftArrowIcon) != null ? r : Ko, W = ve({
    elementType: b,
    externalSlotProps: p == null ? void 0 : p.leftArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: void 0
  }), q = oe(W, es), B = (i = g == null ? void 0 : g.rightArrowIcon) != null ? i : Zo, U = ve({
    elementType: B,
    externalSlotProps: p == null ? void 0 : p.rightArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: void 0
  }), j = oe(U, ts);
  return /* @__PURE__ */ he(ns, h({
    ref: o,
    className: pe(A.root, v),
    ownerState: O
  }, E, {
    children: [/* @__PURE__ */ T(I, h({}, N, {
      children: c ? /* @__PURE__ */ T(B, h({}, j)) : /* @__PURE__ */ T(b, h({}, q))
    })), d ? /* @__PURE__ */ T(qe, {
      variant: "subtitle1",
      component: "span",
      children: d
    }) : /* @__PURE__ */ T(os, {
      className: A.spacer,
      ownerState: O
    }), /* @__PURE__ */ T(F, h({}, k, {
      children: c ? /* @__PURE__ */ T(b, h({}, q)) : /* @__PURE__ */ T(B, h({}, j))
    }))]
  }));
}), nt = 36, pt = 2, Et = 320, as = 280, Ot = 334, Di = 232, wi = 48;
function is(e) {
  return De("MuiPickersPopper", e);
}
ge("MuiPickersPopper", ["root", "paper"]);
function ls(e, t) {
  return Array.isArray(t) ? t.every((o) => e.indexOf(o) !== -1) : e.indexOf(t) !== -1;
}
const ut = (e = document) => {
  const t = e.activeElement;
  return t ? t.shadowRoot ? ut(t.shadowRoot) : t : null;
};
function cs(e, t, o, s, n) {
  const [r, i] = f.useState(() => n && o ? o(e).matches : s ? s(e).matches : t);
  return Le(() => {
    let l = !0;
    if (!o)
      return;
    const c = o(e), u = () => {
      l && i(c.matches);
    };
    return u(), c.addListener(u), () => {
      l = !1, c.removeListener(u);
    };
  }, [e, o]), r;
}
const Dn = f["useSyncExternalStore"];
function us(e, t, o, s, n) {
  const r = f.useCallback(() => t, [t]), i = f.useMemo(() => {
    if (n && o)
      return () => o(e).matches;
    if (s !== null) {
      const {
        matches: d
      } = s(e);
      return () => d;
    }
    return r;
  }, [r, e, s, n, o]), [l, c] = f.useMemo(() => {
    if (o === null)
      return [r, () => () => {
      }];
    const d = o(e);
    return [() => d.matches, (v) => (d.addListener(v), () => {
      d.removeListener(v);
    })];
  }, [r, o, e]);
  return Dn(c, l, i);
}
function ds(e, t = {}) {
  const o = Kn(), s = typeof window < "u" && typeof window.matchMedia < "u", {
    defaultMatches: n = !1,
    matchMedia: r = s ? window.matchMedia : null,
    ssrMatchMedia: i = null,
    noSsr: l = !1
  } = Zn({
    name: "MuiUseMediaQuery",
    props: t,
    theme: o
  });
  process.env.NODE_ENV !== "production" && typeof e == "function" && o === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
  let c = typeof e == "function" ? e(o) : e;
  c = c.replace(/^@media( ?)/m, "");
  const d = (Dn !== void 0 ? us : cs)(c, n, r, i, l);
  return process.env.NODE_ENV !== "production" && f.useDebugValue({
    query: c,
    match: d
  }), d;
}
const fs = "@media (prefers-reduced-motion: reduce)", Ue = typeof navigator < "u" && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i), Jt = Ue && Ue[1] ? parseInt(Ue[1], 10) : null, Xt = Ue && Ue[2] ? parseInt(Ue[2], 10) : null, ps = Jt && Jt < 10 || Xt && Xt < 13 || !1, wn = () => ds(fs, {
  defaultMatches: !1
}) || ps, hs = ["PaperComponent", "popperPlacement", "ownerState", "children", "paperSlotProps", "paperClasses", "onPaperClick", "onPaperTouchStart"], ms = (e) => {
  const {
    classes: t
  } = e;
  return ye({
    root: ["root"],
    paper: ["paper"]
  }, is, t);
}, gs = Q(no, {
  name: "MuiPickersPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  zIndex: e.zIndex.modal
})), ys = Q(so, {
  name: "MuiPickersPopper",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})(({
  ownerState: e
}) => h({
  outline: 0,
  transformOrigin: "top center"
}, e.placement.includes("top") && {
  transformOrigin: "bottom center"
}));
function bs(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function vs(e, t) {
  const o = f.useRef(!1), s = f.useRef(!1), n = f.useRef(null), r = f.useRef(!1);
  f.useEffect(() => {
    if (!e)
      return;
    function c() {
      r.current = !0;
    }
    return document.addEventListener("mousedown", c, !0), document.addEventListener("touchstart", c, !0), () => {
      document.removeEventListener("mousedown", c, !0), document.removeEventListener("touchstart", c, !0), r.current = !1;
    };
  }, [e]);
  const i = Y((c) => {
    if (!r.current)
      return;
    const u = s.current;
    s.current = !1;
    const d = vt(n.current);
    if (!n.current || // is a TouchEvent?
    "clientX" in c && bs(c, d))
      return;
    if (o.current) {
      o.current = !1;
      return;
    }
    let v;
    c.composedPath ? v = c.composedPath().indexOf(n.current) > -1 : v = !d.documentElement.contains(c.target) || n.current.contains(c.target), !v && !u && t(c);
  }), l = () => {
    s.current = !0;
  };
  return f.useEffect(() => {
    if (e) {
      const c = vt(n.current), u = () => {
        o.current = !0;
      };
      return c.addEventListener("touchstart", i), c.addEventListener("touchmove", u), () => {
        c.removeEventListener("touchstart", i), c.removeEventListener("touchmove", u);
      };
    }
  }, [e, i]), f.useEffect(() => {
    if (e) {
      const c = vt(n.current);
      return c.addEventListener("click", i), () => {
        c.removeEventListener("click", i), s.current = !1;
      };
    }
  }, [e, i]), [n, l, l];
}
const Ds = /* @__PURE__ */ f.forwardRef((e, t) => {
  const {
    PaperComponent: o,
    popperPlacement: s,
    ownerState: n,
    children: r,
    paperSlotProps: i,
    paperClasses: l,
    onPaperClick: c,
    onPaperTouchStart: u
    // picks up the style props provided by `Transition`
    // https://mui.com/material-ui/transitions/#child-requirement
  } = e, d = oe(e, hs), v = h({}, n, {
    placement: s
  }), g = ve({
    elementType: o,
    externalSlotProps: i,
    additionalProps: {
      tabIndex: -1,
      elevation: 8,
      ref: t
    },
    className: l,
    ownerState: v
  });
  return /* @__PURE__ */ T(o, h({}, d, g, {
    onClick: (p) => {
      var C;
      c(p), (C = g.onClick) == null || C.call(g, p);
    },
    onTouchStart: (p) => {
      var C;
      u(p), (C = g.onTouchStart) == null || C.call(g, p);
    },
    ownerState: v,
    children: r
  }));
});
function ws(e) {
  var t, o, s, n;
  const r = me({
    props: e,
    name: "MuiPickersPopper"
  }), {
    anchorEl: i,
    children: l,
    containerRef: c = null,
    shouldRestoreFocus: u,
    onBlur: d,
    onDismiss: v,
    open: g,
    role: p,
    placement: C,
    slots: y,
    slotProps: M,
    reduceAnimations: S
  } = r;
  f.useEffect(() => {
    function U(j) {
      g && (j.key === "Escape" || j.key === "Esc") && v();
    }
    return document.addEventListener("keydown", U), () => {
      document.removeEventListener("keydown", U);
    };
  }, [v, g]);
  const m = f.useRef(null);
  f.useEffect(() => {
    p === "tooltip" || u && !u() || (g ? m.current = ut(document) : m.current && m.current instanceof HTMLElement && setTimeout(() => {
      m.current instanceof HTMLElement && m.current.focus();
    }));
  }, [g, p, u]);
  const [w, x, D] = vs(g, d ?? v), E = f.useRef(null), O = _e(E, c), A = _e(O, w), P = r, $ = ms(P), I = wn(), N = S ?? I, F = (U) => {
    U.key === "Escape" && (U.stopPropagation(), v());
  }, k = ((t = y == null ? void 0 : y.desktopTransition) != null ? t : N) ? kt : io, b = (o = y == null ? void 0 : y.desktopTrapFocus) != null ? o : lo, W = (s = y == null ? void 0 : y.desktopPaper) != null ? s : ys, q = (n = y == null ? void 0 : y.popper) != null ? n : gs, B = ve({
    elementType: q,
    externalSlotProps: M == null ? void 0 : M.popper,
    additionalProps: {
      transition: !0,
      role: p,
      open: g,
      anchorEl: i,
      placement: C,
      onKeyDown: F
    },
    className: $.root,
    ownerState: r
  });
  return /* @__PURE__ */ T(q, h({}, B, {
    children: ({
      TransitionProps: U,
      placement: j
    }) => /* @__PURE__ */ T(b, h({
      open: g,
      disableAutoFocus: !0,
      disableRestoreFocus: !0,
      disableEnforceFocus: p === "tooltip",
      isEnabled: () => !0
    }, M == null ? void 0 : M.desktopTrapFocus, {
      children: /* @__PURE__ */ T(k, h({}, U, M == null ? void 0 : M.desktopTransition, {
        children: /* @__PURE__ */ T(Ds, {
          PaperComponent: W,
          ownerState: P,
          popperPlacement: j,
          ref: A,
          onPaperClick: x,
          onPaperTouchStart: D,
          paperClasses: $.paper,
          paperSlotProps: M == null ? void 0 : M.desktopPaper,
          children: l
        })
      }))
    }))
  }));
}
const Lt = ({
  timezone: e,
  value: t,
  defaultValue: o,
  onChange: s,
  valueManager: n
}) => {
  var r, i;
  const l = fe(), c = f.useRef(o), u = (r = t ?? c.current) != null ? r : n.emptyValue, d = f.useMemo(() => n.getTimezone(l, u), [l, n, u]), v = Y((y) => d == null ? y : n.setTimezone(l, d, y)), g = (i = e ?? d) != null ? i : "default", p = f.useMemo(() => n.setTimezone(l, g, u), [n, l, g, u]), C = Y((y, ...M) => {
    const S = v(y);
    s == null || s(S, ...M);
  });
  return {
    value: p,
    handleValueChange: C,
    timezone: g
  };
}, Nt = ({
  name: e,
  timezone: t,
  value: o,
  defaultValue: s,
  onChange: n,
  valueManager: r
}) => {
  const [i, l] = Oe({
    name: e,
    state: "value",
    controlled: o,
    default: s ?? r.emptyValue
  }), c = Y((u, ...d) => {
    l(u), n == null || n(u, ...d);
  });
  return Lt({
    timezone: t,
    value: i,
    defaultValue: void 0,
    onChange: c,
    valueManager: r
  });
};
function Cn(e, t, o, s) {
  const {
    value: n,
    onError: r
  } = e, i = We(), l = f.useRef(s), c = t({
    adapter: i,
    value: n,
    props: e
  });
  return f.useEffect(() => {
    r && !o(c, l.current) && r(c, n), l.current = c;
  }, [o, r, l, c, n]), c;
}
const Cs = (e) => {
  const t = fe(), o = ot(), s = We(), r = Ge().direction === "rtl", {
    valueManager: i,
    fieldValueManager: l,
    valueType: c,
    validator: u,
    internalProps: d,
    internalProps: {
      value: v,
      defaultValue: g,
      referenceDate: p,
      onChange: C,
      format: y,
      formatDensity: M = "dense",
      selectedSections: S,
      onSelectedSectionsChange: m,
      shouldRespectLeadingZeros: w = !1,
      timezone: x
    }
  } = e, {
    timezone: D,
    value: E,
    handleValueChange: O
  } = Lt({
    timezone: x,
    value: v,
    defaultValue: g,
    onChange: C,
    valueManager: i
  }), A = f.useMemo(() => Lo(t, D), [t, D]), P = f.useCallback((_, G = null) => l.getSectionsFromValue(t, _, G, r, (se) => jt(t, D, o, y, se, M, w, r)), [l, y, o, r, w, t, M, D]), $ = f.useMemo(() => l.getValueStrFromSections(P(i.emptyValue), r), [l, P, i.emptyValue, r]), [I, N] = f.useState(() => {
    const _ = P(E);
    Gt(_, c);
    const G = {
      sections: _,
      value: E,
      referenceValue: i.emptyValue,
      tempValueStrAndroid: null
    }, se = ko(_), V = i.getInitialReferenceValue({
      referenceDate: p,
      value: E,
      utils: t,
      props: d,
      granularity: se,
      timezone: D
    });
    return h({}, G, {
      referenceValue: V
    });
  }), [F, k] = Oe({
    controlled: S,
    default: null,
    name: "useField",
    state: "selectedSectionIndexes"
  }), b = (_) => {
    k(_), m == null || m(_), N((G) => h({}, G, {
      selectedSectionQuery: null
    }));
  }, W = f.useMemo(() => {
    if (F == null)
      return null;
    if (F === "all")
      return {
        startIndex: 0,
        endIndex: I.sections.length - 1,
        shouldSelectBoundarySelectors: !0
      };
    if (typeof F == "number")
      return {
        startIndex: F,
        endIndex: F
      };
    if (typeof F == "string") {
      const _ = I.sections.findIndex((G) => G.type === F);
      return {
        startIndex: _,
        endIndex: _
      };
    }
    return F;
  }, [F, I.sections]), q = ({
    value: _,
    referenceValue: G,
    sections: se
  }) => {
    N((te) => h({}, te, {
      sections: se,
      value: _,
      referenceValue: G,
      tempValueStrAndroid: null
    }));
    const V = {
      validationError: u({
        adapter: s,
        value: _,
        props: h({}, d, {
          value: _,
          timezone: D
        })
      })
    };
    O(_, V);
  }, B = (_, G) => {
    const se = [...I.sections];
    return se[_] = h({}, se[_], {
      value: G,
      modified: !0
    }), mn(se, r);
  }, U = () => {
    i.areValuesEqual(t, I.value, i.emptyValue) || q({
      value: i.emptyValue,
      referenceValue: I.referenceValue,
      sections: P(i.emptyValue)
    });
  }, j = () => {
    if (W == null)
      return;
    const _ = I.sections[W.startIndex];
    if (_.value === "")
      return;
    const G = l.getActiveDateManager(t, I, _), V = G.getSections(I.sections).filter((H) => H.value !== "").length === 1, te = B(W.startIndex, ""), ie = V ? null : t.date(/* @__PURE__ */ new Date("")), re = G.getNewValuesFromNewActiveDate(ie);
    (ie != null && !t.isValid(ie)) != (G.date != null && !t.isValid(G.date)) ? q(h({}, re, {
      sections: te
    })) : N((H) => h({}, H, re, {
      sections: te,
      tempValueStrAndroid: null
    }));
  }, X = (_) => {
    const G = (te, ie) => {
      const re = t.parse(te, y);
      if (re == null || !t.isValid(re))
        return null;
      const H = jt(t, D, o, y, re, M, w, r);
      return Zt(t, D, re, H, ie, !1);
    }, se = l.parseValueStr(_, I.referenceValue, G), V = l.updateReferenceValue(t, se, I.referenceValue);
    q({
      value: se,
      referenceValue: V,
      sections: P(se, I.sections)
    });
  }, ae = ({
    activeSection: _,
    newSectionValue: G,
    shouldGoToNextSection: se
  }) => {
    se && W && W.startIndex < I.sections.length - 1 ? b(W.startIndex + 1) : W && W.startIndex !== W.endIndex && b(W.startIndex);
    const V = l.getActiveDateManager(t, I, _), te = B(W.startIndex, G), ie = V.getSections(te), re = Eo(t, ie);
    let H, K;
    if (re != null && t.isValid(re)) {
      const L = Zt(t, D, re, ie, V.referenceDate, !0);
      H = V.getNewValuesFromNewActiveDate(L), K = !0;
    } else
      H = V.getNewValuesFromNewActiveDate(re), K = (re != null && !t.isValid(re)) != (V.date != null && !t.isValid(V.date));
    return K ? q(h({}, H, {
      sections: te
    })) : N((L) => h({}, L, H, {
      sections: te,
      tempValueStrAndroid: null
    }));
  }, le = (_) => N((G) => h({}, G, {
    tempValueStrAndroid: _
  }));
  return f.useEffect(() => {
    const _ = P(I.value);
    Gt(_, c), N((G) => h({}, G, {
      sections: _
    }));
  }, [y, t.locale]), f.useEffect(() => {
    let _ = !1;
    i.areValuesEqual(t, I.value, E) ? _ = i.getTimezone(t, I.value) !== i.getTimezone(t, E) : _ = !0, _ && N((G) => h({}, G, {
      value: E,
      referenceValue: l.updateReferenceValue(t, E, G.referenceValue),
      sections: P(E)
    }));
  }, [E]), {
    state: I,
    selectedSectionIndexes: W,
    setSelectedSections: b,
    clearValue: U,
    clearActiveSection: j,
    updateSectionValue: ae,
    updateValueFromValueStr: X,
    setTempAndroidValueStr: le,
    sectionsValueBoundaries: A,
    placeholder: $,
    timezone: D
  };
}, Ss = 5e3, He = (e) => e.saveQuery != null, Ms = ({
  sections: e,
  updateSectionValue: t,
  sectionsValueBoundaries: o,
  setTempAndroidValueStr: s,
  timezone: n
}) => {
  const r = fe(), [i, l] = f.useState(null), c = Y(() => l(null));
  f.useEffect(() => {
    var p;
    i != null && ((p = e[i.sectionIndex]) == null ? void 0 : p.type) !== i.sectionType && c();
  }, [e, i, c]), f.useEffect(() => {
    if (i != null) {
      const p = setTimeout(() => c(), Ss);
      return () => {
        window.clearTimeout(p);
      };
    }
    return () => {
    };
  }, [i, c]);
  const u = ({
    keyPressed: p,
    sectionIndex: C
  }, y, M) => {
    const S = p.toLowerCase(), m = e[C];
    if (i != null && (!M || M(i.value)) && i.sectionIndex === C) {
      const x = `${i.value}${S}`, D = y(x, m);
      if (!He(D))
        return l({
          sectionIndex: C,
          value: x,
          sectionType: m.type
        }), D;
    }
    const w = y(S, m);
    return He(w) && !w.saveQuery ? (c(), null) : (l({
      sectionIndex: C,
      value: S,
      sectionType: m.type
    }), He(w) ? null : w);
  }, d = (p) => {
    const C = (S, m, w) => {
      const x = m.filter((D) => D.toLowerCase().startsWith(w));
      return x.length === 0 ? {
        saveQuery: !1
      } : {
        sectionValue: x[0],
        shouldGoToNextSection: x.length === 1
      };
    }, y = (S, m, w, x) => {
      const D = (E) => fn(r, n, m.type, E);
      if (m.contentType === "letter")
        return C(m.format, D(m.format), S);
      if (w && x != null && It(r, w).contentType === "letter") {
        const E = D(w), O = C(w, E, S);
        return He(O) ? {
          saveQuery: !1
        } : h({}, O, {
          sectionValue: x(O.sectionValue, E)
        });
      }
      return {
        saveQuery: !1
      };
    };
    return u(p, (S, m) => {
      switch (m.type) {
        case "month": {
          const w = (x) => Ut(r, x, r.formats.month, m.format);
          return y(S, m, r.formats.month, w);
        }
        case "weekDay": {
          const w = (x, D) => D.indexOf(x).toString();
          return y(S, m, r.formats.weekday, w);
        }
        case "meridiem":
          return y(S, m);
        default:
          return {
            saveQuery: !1
          };
      }
    });
  }, v = (p) => {
    const C = (M, S) => {
      const m = +`${M}`, w = o[S.type]({
        currentDate: null,
        format: S.format,
        contentType: S.contentType
      });
      if (m > w.maximum)
        return {
          saveQuery: !1
        };
      if (m < w.minimum)
        return {
          saveQuery: !0
        };
      const x = +`${M}0` > w.maximum || M.length === w.maximum.toString().length;
      return {
        sectionValue: hn(r, n, m, w, S),
        shouldGoToNextSection: x
      };
    };
    return u(p, (M, S) => {
      if (S.contentType === "digit" || S.contentType === "digit-with-letter")
        return C(M, S);
      if (S.type === "month") {
        const m = yn(r, n, "digit", "month", "MM"), w = C(M, {
          type: S.type,
          format: "MM",
          hasLeadingZerosInFormat: m,
          hasLeadingZerosInInput: !0,
          contentType: "digit",
          maxLength: 2
        });
        if (He(w))
          return w;
        const x = Ut(r, w.sectionValue, "MM", S.format);
        return h({}, w, {
          sectionValue: x
        });
      }
      if (S.type === "weekDay") {
        const m = C(M, S);
        if (He(m))
          return m;
        const w = ft(r, n, S.format)[Number(m.sectionValue) - 1];
        return h({}, m, {
          sectionValue: w
        });
      }
      return {
        saveQuery: !1
      };
    }, (M) => !Number.isNaN(Number(M)));
  };
  return {
    applyCharacterEditing: Y((p) => {
      const C = e[p.sectionIndex], M = !Number.isNaN(Number(p.keyPressed)) ? v(p) : d(p);
      M == null ? s(null) : t({
        activeSection: C,
        newSectionValue: M.sectionValue,
        shouldGoToNextSection: M.shouldGoToNextSection
      });
    }),
    resetCharacterQuery: c
  };
}, xs = ["onClick", "onKeyDown", "onFocus", "onBlur", "onMouseUp", "onPaste", "error", "clearable", "onClear", "disabled"], Ci = (e) => {
  const t = fe(), {
    state: o,
    selectedSectionIndexes: s,
    setSelectedSections: n,
    clearValue: r,
    clearActiveSection: i,
    updateSectionValue: l,
    updateValueFromValueStr: c,
    setTempAndroidValueStr: u,
    sectionsValueBoundaries: d,
    placeholder: v,
    timezone: g
  } = Cs(e), {
    inputRef: p,
    internalProps: C,
    internalProps: {
      readOnly: y = !1,
      unstableFieldRef: M,
      minutesStep: S
    },
    forwardedProps: {
      onClick: m,
      onKeyDown: w,
      onFocus: x,
      onBlur: D,
      onMouseUp: E,
      onPaste: O,
      error: A,
      clearable: P,
      onClear: $,
      disabled: I
    },
    fieldValueManager: N,
    valueManager: F,
    validator: k
  } = e, b = oe(e.forwardedProps, xs), {
    applyCharacterEditing: W,
    resetCharacterQuery: q
  } = Ms({
    sections: o.sections,
    updateSectionValue: l,
    sectionsValueBoundaries: d,
    setTempAndroidValueStr: u,
    timezone: g
  }), B = f.useRef(null), U = _e(p, B), j = f.useRef(void 0), ae = Ge().direction === "rtl", le = f.useMemo(() => $o(o.sections, ae), [o.sections, ae]), _ = () => {
    var R;
    if (y) {
      n(null);
      return;
    }
    const z = (R = B.current.selectionStart) != null ? R : 0;
    let ne;
    z <= o.sections[0].startInInput || z >= o.sections[o.sections.length - 1].endInInput ? ne = 1 : ne = o.sections.findIndex((we) => we.startInInput - we.startSeparator.length > z);
    const de = ne === -1 ? o.sections.length - 1 : ne - 1;
    n(de);
  }, G = Y((R, ...z) => {
    R.isDefaultPrevented() || (m == null || m(R, ...z), _());
  }), se = Y((R) => {
    E == null || E(R), R.preventDefault();
  }), V = Y((...R) => {
    x == null || x(...R);
    const z = B.current;
    window.clearTimeout(j.current), j.current = setTimeout(() => {
      !z || z !== B.current || s != null || y || (// avoid selecting all sections when focusing empty field without value
      z.value.length && Number(z.selectionEnd) - Number(z.selectionStart) === z.value.length ? n("all") : _());
    });
  }), te = Y((...R) => {
    D == null || D(...R), n(null);
  }), ie = Y((R) => {
    if (O == null || O(R), y) {
      R.preventDefault();
      return;
    }
    const z = R.clipboardData.getData("text");
    if (s && s.startIndex === s.endIndex) {
      const ne = o.sections[s.startIndex], de = /^[a-zA-Z]+$/.test(z), we = /^[0-9]+$/.test(z), Ce = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(z);
      if (ne.contentType === "letter" && de || ne.contentType === "digit" && we || ne.contentType === "digit-with-letter" && Ce)
        return;
      if (de || we) {
        R.preventDefault();
        return;
      }
    }
    R.preventDefault(), q(), c(z);
  }), re = Y((R) => {
    if (y)
      return;
    const z = R.target.value, ne = R.nativeEvent.data, de = ne && ne.length > 1, we = de ? ne : z, Ce = Ye(we);
    if (s == null || de) {
      c(de ? ne : Ce);
      return;
    }
    let $e;
    if (s.startIndex === 0 && s.endIndex === o.sections.length - 1 && Ce.length === 1)
      $e = Ce;
    else {
      const Me = Ye(N.getValueStrFromSections(o.sections, ae));
      let Ke = -1, Ze = -1;
      for (let xe = 0; xe < Me.length; xe += 1)
        Ke === -1 && Me[xe] !== Ce[xe] && (Ke = xe), Ze === -1 && Me[Me.length - xe - 1] !== Ce[Ce.length - xe - 1] && (Ze = xe);
      const Re = o.sections[s.startIndex];
      if (Ke < Re.start || Me.length - Ze - 1 > Re.end)
        return;
      const Qe = Ce.length - Me.length + Re.end - Ye(Re.endSeparator || "").length;
      $e = Ce.slice(Re.start + Ye(Re.startSeparator || "").length, Qe);
    }
    if (Fo() && $e.length === 0) {
      u(we);
      return;
    }
    W({
      keyPressed: $e,
      sectionIndex: s.startIndex
    });
  }), H = Y((R) => {
    switch (w == null || w(R), !0) {
      case (R.key === "a" && (R.ctrlKey || R.metaKey)): {
        R.preventDefault(), n("all");
        break;
      }
      case R.key === "ArrowRight": {
        if (R.preventDefault(), s == null)
          n(le.startIndex);
        else if (s.startIndex !== s.endIndex)
          n(s.endIndex);
        else {
          const z = le.neighbors[s.startIndex].rightIndex;
          z !== null && n(z);
        }
        break;
      }
      case R.key === "ArrowLeft": {
        if (R.preventDefault(), s == null)
          n(le.endIndex);
        else if (s.startIndex !== s.endIndex)
          n(s.startIndex);
        else {
          const z = le.neighbors[s.startIndex].leftIndex;
          z !== null && n(z);
        }
        break;
      }
      case ["Backspace", "Delete"].includes(R.key): {
        if (R.preventDefault(), y)
          break;
        s == null || s.startIndex === 0 && s.endIndex === o.sections.length - 1 ? r() : i(), q();
        break;
      }
      case ["ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"].includes(R.key): {
        if (R.preventDefault(), y || s == null)
          break;
        const z = o.sections[s.startIndex], ne = N.getActiveDateManager(t, o, z), de = Io(t, g, z, R.key, d, ne.date, {
          minutesStep: S
        });
        l({
          activeSection: z,
          newSectionValue: de,
          shouldGoToNextSection: !1
        });
        break;
      }
    }
  });
  Le(() => {
    if (!B.current)
      return;
    if (s == null) {
      B.current.scrollLeft && (B.current.scrollLeft = 0);
      return;
    }
    const R = o.sections[s.startIndex], z = o.sections[s.endIndex];
    let ne = R.startInInput, de = z.endInInput;
    if (s.shouldSelectBoundarySelectors && (ne -= R.startSeparator.length, de += z.endSeparator.length), ne !== B.current.selectionStart || de !== B.current.selectionEnd) {
      const we = B.current.scrollTop;
      B.current === ut(document) && B.current.setSelectionRange(ne, de), B.current.scrollTop = we;
    }
  });
  const K = Cn(h({}, C, {
    value: o.value,
    timezone: g
  }), k, F.isSameError, F.defaultErrorState), L = f.useMemo(() => A !== void 0 ? A : F.hasError(K), [F, K, A]);
  f.useEffect(() => {
    !L && !s && q();
  }, [o.referenceValue, s, L]), f.useEffect(() => (B.current && B.current === document.activeElement && n("all"), () => window.clearTimeout(j.current)), []), f.useEffect(() => {
    o.tempValueStrAndroid != null && s != null && (q(), i());
  }, [o.tempValueStrAndroid]);
  const ee = f.useMemo(() => {
    var R;
    return (R = o.tempValueStrAndroid) != null ? R : N.getValueStrFromSections(o.sections, ae);
  }, [o.sections, N, o.tempValueStrAndroid, ae]), be = f.useMemo(() => s == null || o.sections[s.startIndex].contentType === "letter" ? "text" : "numeric", [s, o.sections]), ue = B.current && B.current === ut(document), Ae = F.areValuesEqual(t, o.value, F.emptyValue), Z = !ue && Ae;
  f.useImperativeHandle(M, () => ({
    getSections: () => o.sections,
    getActiveSectionIndex: () => {
      var R, z;
      const ne = (R = B.current.selectionStart) != null ? R : 0, de = (z = B.current.selectionEnd) != null ? z : 0;
      if (ne === 0 && de === 0)
        return null;
      const we = ne <= o.sections[0].startInInput ? 1 : o.sections.findIndex((Ce) => Ce.startInInput - Ce.startSeparator.length > ne);
      return we === -1 ? o.sections.length - 1 : we - 1;
    },
    setSelectedSections: (R) => n(R)
  }));
  const J = Y((R, ...z) => {
    var ne;
    R.preventDefault(), $ == null || $(R, ...z), r(), B == null || (ne = B.current) == null || ne.focus(), n(0);
  });
  return h({
    placeholder: v,
    autoComplete: "off",
    disabled: !!I
  }, b, {
    value: Z ? "" : ee,
    inputMode: be,
    readOnly: y,
    onClick: G,
    onFocus: V,
    onBlur: te,
    onPaste: ie,
    onChange: re,
    onKeyDown: H,
    onMouseUp: se,
    onClear: J,
    error: L,
    ref: U,
    clearable: !!(P && !Ae && !y && !I)
  });
}, Ps = ({
  open: e,
  onOpen: t,
  onClose: o
}) => {
  const s = f.useRef(typeof e == "boolean").current, [n, r] = f.useState(!1);
  f.useEffect(() => {
    if (s) {
      if (typeof e != "boolean")
        throw new Error("You must not mix controlling and uncontrolled mode for `open` prop");
      r(e);
    }
  }, [s, e]);
  const i = f.useCallback((l) => {
    s || r(l), l && t && t(), !l && o && o();
  }, [s, t, o]);
  return {
    isOpen: n,
    setIsOpen: i
  };
}, ks = (e) => {
  const {
    action: t,
    hasChanged: o,
    dateState: s,
    isControlled: n
  } = e, r = !n && !s.hasBeenModifiedSinceMount;
  return t.name === "setValueFromField" ? !0 : t.name === "setValueFromAction" ? r && ["accept", "today", "clear"].includes(t.pickerAction) ? !0 : o(s.lastPublishedValue) : t.name === "setValueFromView" && t.selectionState !== "shallow" || t.name === "setValueFromShortcut" ? r ? !0 : o(s.lastPublishedValue) : !1;
}, Ts = (e) => {
  const {
    action: t,
    hasChanged: o,
    dateState: s,
    isControlled: n,
    closeOnSelect: r
  } = e, i = !n && !s.hasBeenModifiedSinceMount;
  return t.name === "setValueFromAction" ? i && ["accept", "today", "clear"].includes(t.pickerAction) ? !0 : o(s.lastCommittedValue) : t.name === "setValueFromView" && t.selectionState === "finish" && r ? i ? !0 : o(s.lastCommittedValue) : t.name === "setValueFromShortcut" ? t.changeImportance === "accept" && o(s.lastCommittedValue) : !1;
}, Vs = (e) => {
  const {
    action: t,
    closeOnSelect: o
  } = e;
  return t.name === "setValueFromAction" ? !0 : t.name === "setValueFromView" ? t.selectionState === "finish" && o : t.name === "setValueFromShortcut" ? t.changeImportance === "accept" : !1;
}, Is = ({
  props: e,
  valueManager: t,
  valueType: o,
  wrapperVariant: s,
  validator: n
}) => {
  const {
    onAccept: r,
    onChange: i,
    value: l,
    defaultValue: c,
    closeOnSelect: u = s === "desktop",
    selectedSections: d,
    onSelectedSectionsChange: v,
    timezone: g
  } = e, {
    current: p
  } = f.useRef(c), {
    current: C
  } = f.useRef(l !== void 0);
  process.env.NODE_ENV !== "production" && (f.useEffect(() => {
    C !== (l !== void 0) && console.error([`MUI: A component is changing the ${C ? "" : "un"}controlled value of a picker to be ${C ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", "Decide between using a controlled or uncontrolled valuefor the lifetime of the component.", "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
  }, [l]), f.useEffect(() => {
    !C && p !== c && console.error(["MUI: A component is changing the defaultValue of an uncontrolled picker after being initialized. To suppress this warning opt to use a controlled value."].join(`
`));
  }, [JSON.stringify(p)]));
  const y = fe(), M = We(), [S, m] = Oe({
    controlled: d,
    default: null,
    name: "usePickerValue",
    state: "selectedSections"
  }), {
    isOpen: w,
    setIsOpen: x
  } = Ps(e), [D, E] = f.useState(() => {
    let V;
    return l !== void 0 ? V = l : p !== void 0 ? V = p : V = t.emptyValue, {
      draft: V,
      lastPublishedValue: V,
      lastCommittedValue: V,
      lastControlledValue: l,
      hasBeenModifiedSinceMount: !1
    };
  }), {
    timezone: O,
    handleValueChange: A
  } = Lt({
    timezone: g,
    value: l,
    defaultValue: p,
    onChange: i,
    valueManager: t
  });
  Cn(h({}, e, {
    value: D.draft,
    timezone: O
  }), n, t.isSameError, t.defaultErrorState);
  const P = Y((V) => {
    const te = {
      action: V,
      dateState: D,
      hasChanged: (K) => !t.areValuesEqual(y, V.value, K),
      isControlled: C,
      closeOnSelect: u
    }, ie = ks(te), re = Ts(te), H = Vs(te);
    if (E((K) => h({}, K, {
      draft: V.value,
      lastPublishedValue: ie ? V.value : K.lastPublishedValue,
      lastCommittedValue: re ? V.value : K.lastCommittedValue,
      hasBeenModifiedSinceMount: !0
    })), ie) {
      const L = {
        validationError: V.name === "setValueFromField" ? V.context.validationError : n({
          adapter: M,
          value: V.value,
          props: h({}, e, {
            value: V.value,
            timezone: O
          })
        })
      };
      V.name === "setValueFromShortcut" && V.shortcut != null && (L.shortcut = V.shortcut), A(V.value, L);
    }
    re && r && r(V.value), H && x(!1);
  });
  if (l !== void 0 && (D.lastControlledValue === void 0 || !t.areValuesEqual(y, D.lastControlledValue, l))) {
    const V = t.areValuesEqual(y, D.draft, l);
    E((te) => h({}, te, {
      lastControlledValue: l
    }, V ? {} : {
      lastCommittedValue: l,
      lastPublishedValue: l,
      draft: l,
      hasBeenModifiedSinceMount: !0
    }));
  }
  const $ = Y(() => {
    P({
      value: t.emptyValue,
      name: "setValueFromAction",
      pickerAction: "clear"
    });
  }), I = Y(() => {
    P({
      value: D.lastPublishedValue,
      name: "setValueFromAction",
      pickerAction: "accept"
    });
  }), N = Y(() => {
    P({
      value: D.lastPublishedValue,
      name: "setValueFromAction",
      pickerAction: "dismiss"
    });
  }), F = Y(() => {
    P({
      value: D.lastCommittedValue,
      name: "setValueFromAction",
      pickerAction: "cancel"
    });
  }), k = Y(() => {
    P({
      value: t.getTodayValue(y, O, o),
      name: "setValueFromAction",
      pickerAction: "today"
    });
  }), b = Y(() => x(!0)), W = Y(() => x(!1)), q = Y((V, te = "partial") => P({
    name: "setValueFromView",
    value: V,
    selectionState: te
  })), B = Y((V, te, ie) => P({
    name: "setValueFromShortcut",
    value: V,
    changeImportance: te ?? "accept",
    shortcut: ie
  })), U = Y((V, te) => P({
    name: "setValueFromField",
    value: V,
    context: te
  })), j = Y((V) => {
    m(V), v == null || v(V);
  }), X = {
    onClear: $,
    onAccept: I,
    onDismiss: N,
    onCancel: F,
    onSetToday: k,
    onOpen: b,
    onClose: W
  }, ae = {
    value: D.draft,
    onChange: U,
    selectedSections: S,
    onSelectedSectionsChange: j
  }, le = f.useMemo(() => t.cleanValue(y, D.draft), [y, t, D.draft]), _ = {
    value: le,
    onChange: q,
    onClose: W,
    open: w,
    onSelectedSectionsChange: j
  }, se = h({}, X, {
    value: le,
    onChange: q,
    onSelectShortcut: B,
    isValid: (V) => {
      const te = n({
        adapter: M,
        value: V,
        props: h({}, e, {
          value: V,
          timezone: O
        })
      });
      return !t.hasError(te);
    }
  });
  return {
    open: w,
    fieldProps: ae,
    viewProps: _,
    layoutProps: se,
    actions: X
  };
};
let wt = !1;
function Sn({
  onChange: e,
  onViewChange: t,
  openTo: o,
  view: s,
  views: n,
  autoFocus: r,
  focusedView: i,
  onFocusedViewChange: l
}) {
  var c, u;
  process.env.NODE_ENV !== "production" && (wt || (s != null && !n.includes(s) && (console.warn(`MUI: \`view="${s}"\` is not a valid prop.`, `It must be an element of \`views=["${n.join('", "')}"]\`.`), wt = !0), s == null && o != null && !n.includes(o) && (console.warn(`MUI: \`openTo="${o}"\` is not a valid prop.`, `It must be an element of \`views=["${n.join('", "')}"]\`.`), wt = !0)));
  const d = f.useRef(o), v = f.useRef(n), g = f.useRef(n.includes(o) ? o : n[0]), [p, C] = Oe({
    name: "useViews",
    state: "view",
    controlled: s,
    default: g.current
  }), y = f.useRef(r ? p : null), [M, S] = Oe({
    name: "useViews",
    state: "focusedView",
    controlled: i,
    default: y.current
  });
  f.useEffect(() => {
    (d.current && d.current !== o || v.current && v.current.some(($) => !n.includes($))) && (C(n.includes(o) ? o : n[0]), v.current = n, d.current = o);
  }, [o, C, p, n]);
  const m = n.indexOf(p), w = (c = n[m - 1]) != null ? c : null, x = (u = n[m + 1]) != null ? u : null, D = Y(($, I) => {
    S(I ? $ : (N) => $ === N ? null : N), l == null || l($, I);
  }), E = Y(($) => {
    $ !== p && (C($), D($, !0), t && t($));
  }), O = Y(() => {
    x && E(x), D(x, !0);
  }), A = Y(($, I, N) => {
    const F = I === "finish", k = N ? (
      // handles case like `DateTimePicker`, where a view might return a `finish` selection state
      // but we it's not the final view given all `views` -> overall selection state should be `partial`.
      n.indexOf(N) < n.length - 1
    ) : !!x;
    e($, F && k ? "partial" : I), F && O();
  }), P = Y(($, I, N) => {
    e($, I ? "partial" : "finish", N), I && (E(I), D(I, !0));
  });
  return {
    view: p,
    setView: E,
    focusedView: M,
    setFocusedView: D,
    nextView: x,
    previousView: w,
    defaultView: g.current,
    goToNextView: O,
    setValueAndGoToNextView: A,
    setValueAndGoToView: P
  };
}
const As = ["className", "sx"], Rs = ({
  props: e,
  propsFromPickerValue: t,
  additionalViewProps: o,
  inputRef: s,
  autoFocusView: n
}) => {
  const {
    onChange: r,
    open: i,
    onSelectedSectionsChange: l,
    onClose: c
  } = t, {
    views: u,
    openTo: d,
    onViewChange: v,
    disableOpenPicker: g,
    viewRenderers: p,
    timezone: C
  } = e, y = oe(e, As), {
    view: M,
    setView: S,
    defaultView: m,
    focusedView: w,
    setFocusedView: x,
    setValueAndGoToNextView: D
  } = Sn({
    view: void 0,
    views: u,
    openTo: d,
    onChange: r,
    onViewChange: v,
    autoFocus: n
  }), {
    hasUIView: E,
    viewModeLookup: O
  } = f.useMemo(() => u.reduce((k, b) => {
    let W;
    return g ? W = "field" : p[b] != null ? W = "UI" : W = "field", k.viewModeLookup[b] = W, W === "UI" && (k.hasUIView = !0), k;
  }, {
    hasUIView: !1,
    viewModeLookup: {}
  }), [g, p, u]), A = f.useMemo(() => u.reduce((k, b) => p[b] != null && Co(b) ? k + 1 : k, 0), [p, u]), P = O[M], $ = Y(() => P === "UI"), [I, N] = f.useState(P === "UI" ? M : null);
  return I !== M && O[M] === "UI" && N(M), Le(() => {
    P === "field" && i && (c(), setTimeout(() => {
      s == null || s.current.focus(), l(M);
    }));
  }, [M]), Le(() => {
    if (!i)
      return;
    let k = M;
    P === "field" && I != null && (k = I), k !== m && O[k] === "UI" && O[m] === "UI" && (k = m), k !== M && S(k), x(k, !0);
  }, [i]), {
    hasUIView: E,
    shouldRestoreFocus: $,
    layoutProps: {
      views: u,
      view: I,
      onViewChange: S
    },
    renderCurrentView: () => {
      if (I == null)
        return null;
      const k = p[I];
      return k == null ? null : k(h({}, y, o, t, {
        views: u,
        timezone: C,
        onChange: D,
        view: I,
        onViewChange: S,
        focusedView: w,
        onFocusedViewChange: x,
        showViewSwitcher: A > 1,
        timeViewsCount: A
      }));
    }
  };
};
function en() {
  return typeof window > "u" ? "portrait" : window.screen && window.screen.orientation && window.screen.orientation.angle ? Math.abs(window.screen.orientation.angle) === 90 ? "landscape" : "portrait" : window.orientation && Math.abs(Number(window.orientation)) === 90 ? "landscape" : "portrait";
}
const Es = (e, t) => {
  const [o, s] = f.useState(en);
  return Le(() => {
    const r = () => {
      s(en());
    };
    return window.addEventListener("orientationchange", r), () => {
      window.removeEventListener("orientationchange", r);
    };
  }, []), ls(e, ["hours", "minutes", "seconds"]) ? !1 : (t || o) === "landscape";
}, Os = ({
  props: e,
  propsFromPickerValue: t,
  propsFromPickerViews: o,
  wrapperVariant: s
}) => {
  const {
    orientation: n
  } = e, r = Es(o.views, n);
  return {
    layoutProps: h({}, o, t, {
      isLandscape: r,
      wrapperVariant: s,
      disabled: e.disabled,
      readOnly: e.readOnly
    })
  };
}, Ls = (e, t = "warning") => {
  let o = !1;
  const s = Array.isArray(e) ? e.join(`
`) : e;
  return () => {
    o || (o = !0, t === "error" ? console.error(s) : console.warn(s));
  };
}, Ns = Ls(["The `renderInput` prop has been removed in version 6.0 of the Date and Time Pickers.", "You can replace it with the `textField` component slot in most cases.", "For more information, please have a look at the migration guide (https://mui.com/x/migration/migration-pickers-v5/#input-renderer-required-in-v5)."]), Fs = ({
  props: e,
  valueManager: t,
  valueType: o,
  wrapperVariant: s,
  inputRef: n,
  additionalViewProps: r,
  validator: i,
  autoFocusView: l
}) => {
  process.env.NODE_ENV !== "production" && e.renderInput != null && Ns();
  const c = Is({
    props: e,
    valueManager: t,
    valueType: o,
    wrapperVariant: s,
    validator: i
  }), u = Rs({
    props: e,
    inputRef: n,
    additionalViewProps: r,
    autoFocusView: l,
    propsFromPickerValue: c.viewProps
  }), d = Os({
    props: e,
    wrapperVariant: s,
    propsFromPickerValue: c.layoutProps,
    propsFromPickerViews: u.layoutProps
  });
  return {
    // Picker value
    open: c.open,
    actions: c.actions,
    fieldProps: c.fieldProps,
    // Picker views
    renderCurrentView: u.renderCurrentView,
    hasUIView: u.hasUIView,
    shouldRestoreFocus: u.shouldRestoreFocus,
    // Picker layout
    layoutProps: d.layoutProps
  };
};
function Mn(e) {
  return De("MuiPickersLayout", e);
}
const Ct = ge("MuiPickersLayout", ["root", "landscape", "contentWrapper", "toolbar", "actionBar", "shortcuts"]);
function $s(e) {
  return De("MuiDialogActions", e);
}
ge("MuiDialogActions", ["root", "spacing"]);
const Bs = ["className", "disableSpacing"], _s = (e) => {
  const {
    classes: t,
    disableSpacing: o
  } = e;
  return ye({
    root: ["root", !o && "spacing"]
  }, $s, t);
}, Ws = Q("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.disableSpacing && t.spacing];
  }
})(({
  ownerState: e
}) => h({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto"
}, !e.disableSpacing && {
  "& > :not(style) ~ :not(style)": {
    marginLeft: 8
  }
})), xn = /* @__PURE__ */ f.forwardRef(function(t, o) {
  const s = me({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: n,
    disableSpacing: r = !1
  } = s, i = oe(s, Bs), l = h({}, s, {
    disableSpacing: r
  }), c = _s(l);
  return /* @__PURE__ */ T(Ws, h({
    className: pe(c.root, n),
    ownerState: l,
    ref: o
  }, i));
});
process.env.NODE_ENV !== "production" && (xn.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: a.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
const Hs = xn, zs = ["onAccept", "onClear", "onCancel", "onSetToday", "actions"];
function Pn(e) {
  const {
    onAccept: t,
    onClear: o,
    onCancel: s,
    onSetToday: n,
    actions: r
  } = e, i = oe(e, zs), l = ot();
  if (r == null || r.length === 0)
    return null;
  const c = r == null ? void 0 : r.map((u) => {
    switch (u) {
      case "clear":
        return /* @__PURE__ */ T(rt, {
          onClick: o,
          children: l.clearButtonLabel
        }, u);
      case "cancel":
        return /* @__PURE__ */ T(rt, {
          onClick: s,
          children: l.cancelButtonLabel
        }, u);
      case "accept":
        return /* @__PURE__ */ T(rt, {
          onClick: t,
          children: l.okButtonLabel
        }, u);
      case "today":
        return /* @__PURE__ */ T(rt, {
          onClick: n,
          children: l.todayButtonLabel
        }, u);
      default:
        return null;
    }
  });
  return /* @__PURE__ */ T(Hs, h({}, i, {
    children: c
  }));
}
process.env.NODE_ENV !== "production" && (Pn.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Ordered array of actions to display.
   * If empty, does not display that action bar.
   * @default `['cancel', 'accept']` for mobile and `[]` for desktop
   */
  actions: a.arrayOf(a.oneOf(["accept", "cancel", "clear", "today"]).isRequired),
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: a.bool,
  onAccept: a.func.isRequired,
  onCancel: a.func.isRequired,
  onClear: a.func.isRequired,
  onSetToday: a.func.isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
function Ys(e) {
  return De("MuiListItem", e);
}
const Us = ge("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]), ze = Us, js = ge("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), qs = js;
function Gs(e) {
  return De("MuiListItemSecondaryAction", e);
}
ge("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const Ks = ["className"], Zs = (e) => {
  const {
    disableGutters: t,
    classes: o
  } = e;
  return ye({
    root: ["root", t && "disableGutters"]
  }, Gs, o);
}, Qs = Q("div", {
  name: "MuiListItemSecondaryAction",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.disableGutters && t.disableGutters];
  }
})(({
  ownerState: e
}) => h({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)"
}, e.disableGutters && {
  right: 0
})), Ft = /* @__PURE__ */ f.forwardRef(function(t, o) {
  const s = me({
    props: t,
    name: "MuiListItemSecondaryAction"
  }), {
    className: n
  } = s, r = oe(s, Ks), i = f.useContext(lt), l = h({}, s, {
    disableGutters: i.disableGutters
  }), c = Zs(l);
  return /* @__PURE__ */ T(Qs, h({
    className: pe(c.root, n),
    ownerState: l,
    ref: o
  }, r));
});
process.env.NODE_ENV !== "production" && (Ft.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
Ft.muiName = "ListItemSecondaryAction";
const Js = Ft, Xs = ["className"], er = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"], tr = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.dense && t.dense, o.alignItems === "flex-start" && t.alignItemsFlexStart, o.divider && t.divider, !o.disableGutters && t.gutters, !o.disablePadding && t.padding, o.button && t.button, o.hasSecondaryAction && t.secondaryAction];
}, nr = (e) => {
  const {
    alignItems: t,
    button: o,
    classes: s,
    dense: n,
    disabled: r,
    disableGutters: i,
    disablePadding: l,
    divider: c,
    hasSecondaryAction: u,
    selected: d
  } = e;
  return ye({
    root: ["root", n && "dense", !i && "gutters", !l && "padding", c && "divider", r && "disabled", o && "button", t === "flex-start" && "alignItemsFlexStart", u && "secondaryAction", d && "selected"],
    container: ["container"]
  }, Ys, s);
}, or = Q("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: tr
})(({
  theme: e,
  ownerState: t
}) => h({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left"
}, !t.disablePadding && h({
  paddingTop: 8,
  paddingBottom: 8
}, t.dense && {
  paddingTop: 4,
  paddingBottom: 4
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, !!t.secondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}), !!t.secondaryAction && {
  [`& > .${qs.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${ze.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${ze.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${ze.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${ze.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, t.alignItems === "flex-start" && {
  alignItems: "flex-start"
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, t.button && {
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${ze.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  }
}, t.hasSecondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
})), sr = Q("li", {
  name: "MuiListItem",
  slot: "Container",
  overridesResolver: (e, t) => t.container
})({
  position: "relative"
}), kn = /* @__PURE__ */ f.forwardRef(function(t, o) {
  const s = me({
    props: t,
    name: "MuiListItem"
  }), {
    alignItems: n = "center",
    autoFocus: r = !1,
    button: i = !1,
    children: l,
    className: c,
    component: u,
    components: d = {},
    componentsProps: v = {},
    ContainerComponent: g = "li",
    ContainerProps: {
      className: p
    } = {},
    dense: C = !1,
    disabled: y = !1,
    disableGutters: M = !1,
    disablePadding: S = !1,
    divider: m = !1,
    focusVisibleClassName: w,
    secondaryAction: x,
    selected: D = !1,
    slotProps: E = {},
    slots: O = {}
  } = s, A = oe(s.ContainerProps, Xs), P = oe(s, er), $ = f.useContext(lt), I = f.useMemo(() => ({
    dense: C || $.dense || !1,
    alignItems: n,
    disableGutters: M
  }), [n, $.dense, C, M]), N = f.useRef(null);
  Le(() => {
    r && (N.current ? N.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItem whose component has not been rendered."));
  }, [r]);
  const F = f.Children.toArray(l), k = F.length && rn(F[F.length - 1], ["ListItemSecondaryAction"]), b = h({}, s, {
    alignItems: n,
    autoFocus: r,
    button: i,
    dense: I.dense,
    disabled: y,
    disableGutters: M,
    disablePadding: S,
    divider: m,
    hasSecondaryAction: k,
    selected: D
  }), W = nr(b), q = _e(N, o), B = O.root || d.Root || or, U = E.root || v.root || {}, j = h({
    className: pe(W.root, U.className, c),
    disabled: y
  }, P);
  let X = u || "li";
  return i && (j.component = u || "div", j.focusVisibleClassName = pe(ze.focusVisible, w), X = ln), k ? (X = !j.component && !u ? "div" : X, g === "li" && (X === "li" ? X = "div" : j.component === "li" && (j.component = "div")), /* @__PURE__ */ T(lt.Provider, {
    value: I,
    children: /* @__PURE__ */ he(sr, h({
      as: g,
      className: pe(W.container, p),
      ref: q,
      ownerState: b
    }, A, {
      children: [/* @__PURE__ */ T(B, h({}, U, !_t(B) && {
        as: X,
        ownerState: h({}, b, U.ownerState)
      }, j, {
        children: F
      })), F.pop()]
    }))
  })) : /* @__PURE__ */ T(lt.Provider, {
    value: I,
    children: /* @__PURE__ */ he(B, h({}, U, {
      as: X,
      ref: q
    }, !_t(B) && {
      ownerState: h({}, b, U.ownerState)
    }, j, {
      children: [F, x && /* @__PURE__ */ T(Js, {
        children: x
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (kn.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: a.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  autoFocus: a.bool,
  /**
   * If `true`, the list item is a button (using `ButtonBase`). Props intended
   * for `ButtonBase` can then be applied to `ListItem`.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  button: a.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: eo(a.node, (e) => {
    const t = f.Children.toArray(e.children);
    let o = -1;
    for (let s = t.length - 1; s >= 0; s -= 1) {
      const n = t[s];
      if (rn(n, ["ListItemSecondaryAction"])) {
        o = s;
        break;
      }
    }
    return o !== -1 && o !== t.length - 1 ? new Error("MUI: You used an element after ListItemSecondaryAction. For ListItem to detect that it has a secondary action you must pass it as the last child to ListItem.") : null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: a.shape({
    Root: a.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: a.shape({
    root: a.object
  }),
  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   * @default 'li'
   * @deprecated
   */
  ContainerComponent: to,
  /**
   * Props applied to the container component if used.
   * @default {}
   * @deprecated
   */
  ContainerProps: a.object,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: a.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  disabled: a.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: a.bool,
  /**
   * If `true`, all padding is removed.
   * @default false
   */
  disablePadding: a.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: a.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: a.string,
  /**
   * The element to display at the end of ListItem.
   */
  secondaryAction: a.node,
  /**
   * Use to apply selected styling.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  selected: a.bool,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: a.shape({
    root: a.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: a.shape({
    root: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
const rr = kn, ar = ["items", "changeImportance", "isLandscape", "onChange", "isValid"], ir = ["getValue"];
function Tn(e) {
  const {
    items: t,
    changeImportance: o,
    onChange: s,
    isValid: n
  } = e, r = oe(e, ar);
  if (t == null || t.length === 0)
    return null;
  const i = t.map((l) => {
    let {
      getValue: c
    } = l, u = oe(l, ir);
    const d = c({
      isValid: n
    });
    return {
      label: u.label,
      onClick: () => {
        s(d, o, u);
      },
      disabled: !n(d)
    };
  });
  return /* @__PURE__ */ T(co, h({
    dense: !0,
    sx: [{
      maxHeight: Ot,
      maxWidth: 200,
      overflow: "auto"
    }, ...Array.isArray(r.sx) ? r.sx : [r.sx]]
  }, r, {
    children: i.map((l) => /* @__PURE__ */ T(rr, {
      children: /* @__PURE__ */ T(oo, h({}, l))
    }, l.label))
  }));
}
process.env.NODE_ENV !== "production" && (Tn.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Importance of the change when picking a shortcut:
   * - "accept": fires `onChange`, fires `onAccept` and closes the picker.
   * - "set": fires `onChange` but do not fire `onAccept` and does not close the picker.
   * @default "accept"
   */
  changeImportance: a.oneOf(["accept", "set"]),
  className: a.string,
  component: a.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: a.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: a.bool,
  isLandscape: a.bool.isRequired,
  isValid: a.func.isRequired,
  /**
   * Ordered array of shortcuts to display.
   * If empty, does not display the shortcuts.
   * @default `[]`
   */
  items: a.arrayOf(a.shape({
    getValue: a.func.isRequired,
    label: a.string.isRequired
  })),
  onChange: a.func.isRequired,
  style: a.object,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: a.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
function lr(e) {
  return e.view !== null;
}
const cr = (e) => {
  const {
    classes: t,
    isLandscape: o
  } = e;
  return ye({
    root: ["root", o && "landscape"],
    contentWrapper: ["contentWrapper"],
    toolbar: ["toolbar"],
    actionBar: ["actionBar"],
    tabs: ["tabs"],
    landscape: ["landscape"],
    shortcuts: ["shortcuts"]
  }, Mn, t);
}, ur = (e) => {
  var t, o;
  const {
    wrapperVariant: s,
    onAccept: n,
    onClear: r,
    onCancel: i,
    onSetToday: l,
    view: c,
    views: u,
    onViewChange: d,
    value: v,
    onChange: g,
    onSelectShortcut: p,
    isValid: C,
    isLandscape: y,
    disabled: M,
    readOnly: S,
    children: m,
    components: w,
    componentsProps: x,
    slots: D,
    slotProps: E
    // TODO: Remove this "as" hack. It get introduced to mark `value` prop in PickersLayoutProps as not required.
    // The true type should be
    // - For pickers value: TDate | null
    // - For range pickers value: [TDate | null, TDate | null]
  } = e, O = D ?? qo(w), A = E ?? x, P = cr(e), $ = (t = O == null ? void 0 : O.actionBar) != null ? t : Pn, I = ve({
    elementType: $,
    externalSlotProps: A == null ? void 0 : A.actionBar,
    additionalProps: {
      onAccept: n,
      onClear: r,
      onCancel: i,
      onSetToday: l,
      actions: s === "desktop" ? [] : ["cancel", "accept"],
      className: P.actionBar
    },
    ownerState: h({}, e, {
      wrapperVariant: s
    })
  }), N = /* @__PURE__ */ T($, h({}, I)), F = O == null ? void 0 : O.toolbar, k = ve({
    elementType: F,
    externalSlotProps: A == null ? void 0 : A.toolbar,
    additionalProps: {
      isLandscape: y,
      onChange: g,
      value: v,
      view: c,
      onViewChange: d,
      views: u,
      disabled: M,
      readOnly: S,
      className: P.toolbar
    },
    ownerState: h({}, e, {
      wrapperVariant: s
    })
  }), b = lr(k) && F ? /* @__PURE__ */ T(F, h({}, k)) : null, W = m, q = O == null ? void 0 : O.tabs, B = c && q ? /* @__PURE__ */ T(q, h({
    view: c,
    onViewChange: d
  }, A == null ? void 0 : A.tabs)) : null, U = (o = O == null ? void 0 : O.shortcuts) != null ? o : Tn, j = ve({
    elementType: U,
    externalSlotProps: A == null ? void 0 : A.shortcuts,
    additionalProps: {
      isValid: C,
      isLandscape: y,
      onChange: p,
      className: P.shortcuts
    },
    ownerState: {
      isValid: C,
      isLandscape: y,
      onChange: p,
      className: P.shortcuts,
      wrapperVariant: s
    }
  }), X = c && U ? /* @__PURE__ */ T(U, h({}, j)) : null;
  return {
    toolbar: b,
    content: W,
    tabs: B,
    actionBar: N,
    shortcuts: X
  };
}, dr = ur, fr = (e) => {
  const {
    isLandscape: t,
    classes: o
  } = e;
  return ye({
    root: ["root", t && "landscape"],
    contentWrapper: ["contentWrapper"]
  }, Mn, o);
}, Vn = Q("div", {
  name: "MuiPickersLayout",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => ({
  display: "grid",
  gridAutoColumns: "max-content auto max-content",
  gridAutoRows: "max-content auto max-content",
  [`& .${Ct.toolbar}`]: t.isLandscape ? {
    gridColumn: e.direction === "rtl" ? 3 : 1,
    gridRow: "2 / 3"
  } : {
    gridColumn: "2 / 4",
    gridRow: 1
  },
  [`.${Ct.shortcuts}`]: t.isLandscape ? {
    gridColumn: "2 / 4",
    gridRow: 1
  } : {
    gridColumn: e.direction === "rtl" ? 3 : 1,
    gridRow: "2 / 3"
  },
  [`& .${Ct.actionBar}`]: {
    gridColumn: "1 / 4",
    gridRow: 3
  }
}));
Vn.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: a.elementType,
  ownerState: a.shape({
    isLandscape: a.bool.isRequired
  }).isRequired,
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
};
const pr = Q("div", {
  name: "MuiPickersLayout",
  slot: "ContentWrapper",
  overridesResolver: (e, t) => t.contentWrapper
})({
  gridColumn: 2,
  gridRow: 2,
  display: "flex",
  flexDirection: "column"
}), In = function(t) {
  const o = me({
    props: t,
    name: "MuiPickersLayout"
  }), {
    toolbar: s,
    content: n,
    tabs: r,
    actionBar: i,
    shortcuts: l
  } = dr(o), {
    sx: c,
    className: u,
    isLandscape: d,
    ref: v,
    wrapperVariant: g
  } = o, p = o, C = fr(p);
  return /* @__PURE__ */ he(Vn, {
    ref: v,
    sx: c,
    className: pe(u, C.root),
    ownerState: p,
    children: [d ? l : s, d ? s : l, /* @__PURE__ */ T(pr, {
      className: C.contentWrapper,
      children: g === "desktop" ? /* @__PURE__ */ he(f.Fragment, {
        children: [n, r]
      }) : /* @__PURE__ */ he(f.Fragment, {
        children: [r, n]
      })
    }), i]
  });
};
process.env.NODE_ENV !== "production" && (In.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  children: a.node,
  classes: a.object,
  className: a.string,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: a.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: a.object,
  disabled: a.bool,
  isLandscape: a.bool.isRequired,
  isValid: a.func.isRequired,
  onAccept: a.func.isRequired,
  onCancel: a.func.isRequired,
  onChange: a.func.isRequired,
  onClear: a.func.isRequired,
  onClose: a.func.isRequired,
  onDismiss: a.func.isRequired,
  onOpen: a.func.isRequired,
  onSelectShortcut: a.func.isRequired,
  onSetToday: a.func.isRequired,
  onViewChange: a.func.isRequired,
  /**
   * Force rendering in particular orientation.
   */
  orientation: a.oneOf(["landscape", "portrait"]),
  readOnly: a.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: a.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: a.object,
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  value: a.any,
  view: a.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  views: a.arrayOf(a.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]).isRequired).isRequired,
  wrapperVariant: a.oneOf(["desktop", "mobile"])
});
function hr(e, {
  disableFuture: t,
  maxDate: o,
  timezone: s
}) {
  const n = fe();
  return f.useMemo(() => {
    const r = n.dateWithTimezone(void 0, s), i = n.startOfMonth(t && n.isBefore(r, o) ? r : o);
    return !n.isAfter(i, e);
  }, [t, o, e, n, s]);
}
function mr(e, {
  disablePast: t,
  minDate: o,
  timezone: s
}) {
  const n = fe();
  return f.useMemo(() => {
    const r = n.dateWithTimezone(void 0, s), i = n.startOfMonth(t && n.isAfter(r, o) ? r : o);
    return !n.isBefore(i, e);
  }, [t, o, e, n, s]);
}
function Si(e, t, o, s) {
  const n = fe(), r = So(e, n), i = f.useCallback((l) => {
    const c = e == null ? null : xo(e, l, !!t, n);
    o(c, s ?? "partial");
  }, [t, e, o, s, n]);
  return {
    meridiemMode: r,
    handleMeridiemChange: i
  };
}
const xt = ["disablePast", "disableFuture", "minDate", "maxDate", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear"], Pt = ["disablePast", "disableFuture", "minTime", "maxTime", "shouldDisableClock", "shouldDisableTime", "minutesStep", "ampm", "disableIgnoringDatePartForTimeValidation"], An = ["minDateTime", "maxDateTime"], gr = [...xt, ...Pt, ...An], Mi = (e) => gr.reduce((t, o) => (e.hasOwnProperty(o) && (t[o] = e[o]), t), {}), yr = ["value", "defaultValue", "referenceDate", "format", "formatDensity", "onChange", "timezone", "readOnly", "onError", "shouldRespectLeadingZeros", "selectedSections", "onSelectedSectionsChange", "unstableFieldRef"], xi = (e, t) => {
  const o = h({}, e), s = {}, n = (r) => {
    o.hasOwnProperty(r) && (s[r] = o[r], delete o[r]);
  };
  return yr.forEach(n), t === "date" ? xt.forEach(n) : t === "time" ? Pt.forEach(n) : t === "date-time" && (xt.forEach(n), Pt.forEach(n), An.forEach(n)), {
    forwardedProps: o,
    internalProps: s
  };
}, br = ({
  props: e,
  value: t,
  adapter: o
}) => {
  if (t === null)
    return null;
  const {
    shouldDisableDate: s,
    shouldDisableMonth: n,
    shouldDisableYear: r,
    disablePast: i,
    disableFuture: l,
    timezone: c
  } = e, u = o.utils.dateWithTimezone(void 0, c), d = Ne(o.utils, e.minDate, o.defaultDates.minDate), v = Ne(o.utils, e.maxDate, o.defaultDates.maxDate);
  switch (!0) {
    case !o.utils.isValid(t):
      return "invalidDate";
    case !!(s && s(t)):
      return "shouldDisableDate";
    case !!(n && n(t)):
      return "shouldDisableMonth";
    case !!(r && r(t)):
      return "shouldDisableYear";
    case !!(l && o.utils.isAfterDay(t, u)):
      return "disableFuture";
    case !!(i && o.utils.isBeforeDay(t, u)):
      return "disablePast";
    case !!(d && o.utils.isBeforeDay(t, d)):
      return "minDate";
    case !!(v && o.utils.isAfterDay(t, v)):
      return "maxDate";
    default:
      return null;
  }
};
function vr(e) {
  return De("MuiPickersDay", e);
}
const Be = ge("MuiPickersDay", ["root", "dayWithMargin", "dayOutsideMonth", "hiddenDaySpacingFiller", "today", "selected", "disabled"]), Dr = ["autoFocus", "className", "day", "disabled", "disableHighlightToday", "disableMargin", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "onMouseEnter", "outsideCurrentMonth", "selected", "showDaysOutsideCurrentMonth", "children", "today", "isFirstVisibleCell", "isLastVisibleCell"], wr = (e) => {
  const {
    selected: t,
    disableMargin: o,
    disableHighlightToday: s,
    today: n,
    disabled: r,
    outsideCurrentMonth: i,
    showDaysOutsideCurrentMonth: l,
    classes: c
  } = e, u = i && !l;
  return ye({
    root: ["root", t && !u && "selected", r && "disabled", !o && "dayWithMargin", !s && n && "today", i && l && "dayOutsideMonth", u && "hiddenDaySpacingFiller"],
    hiddenDaySpacingFiller: ["hiddenDaySpacingFiller"]
  }, vr, c);
}, Rn = ({
  theme: e,
  ownerState: t
}) => h({}, e.typography.caption, {
  width: nt,
  height: nt,
  borderRadius: "50%",
  padding: 0,
  // explicitly setting to `transparent` to avoid potentially getting impacted by change from the overridden component
  backgroundColor: "transparent",
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.short
  }),
  color: (e.vars || e).palette.text.primary,
  "@media (pointer: fine)": {
    "&:hover": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ve(e.palette.primary.main, e.palette.action.hoverOpacity)
    }
  },
  "&:focus": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.focusOpacity})` : Ve(e.palette.primary.main, e.palette.action.focusOpacity),
    [`&.${Be.selected}`]: {
      willChange: "background-color",
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  },
  [`&.${Be.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText,
    backgroundColor: (e.vars || e).palette.primary.main,
    fontWeight: e.typography.fontWeightMedium,
    "&:hover": {
      willChange: "background-color",
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  },
  [`&.${Be.disabled}:not(.${Be.selected})`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Be.disabled}&.${Be.selected}`]: {
    opacity: 0.6
  }
}, !t.disableMargin && {
  margin: `0 ${pt}px`
}, t.outsideCurrentMonth && t.showDaysOutsideCurrentMonth && {
  color: (e.vars || e).palette.text.secondary
}, !t.disableHighlightToday && t.today && {
  [`&:not(.${Be.selected})`]: {
    border: `1px solid ${(e.vars || e).palette.text.secondary}`
  }
}), En = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, !o.disableMargin && t.dayWithMargin, !o.disableHighlightToday && o.today && t.today, !o.outsideCurrentMonth && o.showDaysOutsideCurrentMonth && t.dayOutsideMonth, o.outsideCurrentMonth && !o.showDaysOutsideCurrentMonth && t.hiddenDaySpacingFiller];
}, Cr = Q(ln, {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver: En
})(Rn), Sr = Q("div", {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver: En
})(({
  theme: e,
  ownerState: t
}) => h({}, Rn({
  theme: e,
  ownerState: t
}), {
  // visibility: 'hidden' does not work here as it hides the element from screen readers as well
  opacity: 0,
  pointerEvents: "none"
})), et = () => {
}, On = /* @__PURE__ */ f.forwardRef(function(t, o) {
  const s = me({
    props: t,
    name: "MuiPickersDay"
  }), {
    autoFocus: n = !1,
    className: r,
    day: i,
    disabled: l = !1,
    disableHighlightToday: c = !1,
    disableMargin: u = !1,
    isAnimating: d,
    onClick: v,
    onDaySelect: g,
    onFocus: p = et,
    onBlur: C = et,
    onKeyDown: y = et,
    onMouseDown: M = et,
    onMouseEnter: S = et,
    outsideCurrentMonth: m,
    selected: w = !1,
    showDaysOutsideCurrentMonth: x = !1,
    children: D,
    today: E = !1
  } = s, O = oe(s, Dr), A = h({}, s, {
    autoFocus: n,
    disabled: l,
    disableHighlightToday: c,
    disableMargin: u,
    selected: w,
    showDaysOutsideCurrentMonth: x,
    today: E
  }), P = wr(A), $ = fe(), I = f.useRef(null), N = _e(I, o);
  Le(() => {
    n && !l && !d && !m && I.current.focus();
  }, [n, l, d, m]);
  const F = (b) => {
    M(b), m && b.preventDefault();
  }, k = (b) => {
    l || g(i), m && b.currentTarget.focus(), v && v(b);
  };
  return m && !x ? /* @__PURE__ */ T(Sr, {
    className: pe(P.root, P.hiddenDaySpacingFiller, r),
    ownerState: A,
    role: O.role
  }) : /* @__PURE__ */ T(Cr, h({
    className: pe(P.root, r),
    ref: N,
    centerRipple: !0,
    disabled: l,
    tabIndex: w ? 0 : -1,
    onKeyDown: (b) => y(b, i),
    onFocus: (b) => p(b, i),
    onBlur: (b) => C(b, i),
    onMouseEnter: (b) => S(b, i),
    onClick: k,
    onMouseDown: F
  }, O, {
    ownerState: A,
    children: D || $.format(i, "dayOfMonth")
  }));
});
process.env.NODE_ENV !== "production" && (On.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: a.oneOfType([a.func, a.shape({
    current: a.shape({
      focusVisible: a.func.isRequired
    })
  })]),
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: a.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  className: a.string,
  component: a.elementType,
  /**
   * The date to show.
   */
  day: a.any.isRequired,
  /**
   * If `true`, renders as disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: a.bool,
  /**
   * If `true`, days are rendering without margin. Useful for displaying linked range of days.
   * @default false
   */
  disableMargin: a.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: a.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: a.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: a.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: a.string,
  isAnimating: a.bool,
  /**
   * If `true`, day is the first visible cell of the month.
   * Either the first day of the month or the first day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isFirstVisibleCell: a.bool.isRequired,
  /**
   * If `true`, day is the last visible cell of the month.
   * Either the last day of the month or the last day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isLastVisibleCell: a.bool.isRequired,
  onBlur: a.func,
  onDaySelect: a.func.isRequired,
  onFocus: a.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: a.func,
  onKeyDown: a.func,
  onMouseEnter: a.func,
  /**
   * If `true`, day is outside of month and will be hidden.
   */
  outsideCurrentMonth: a.bool.isRequired,
  /**
   * If `true`, renders as selected.
   * @default false
   */
  selected: a.bool,
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
  showDaysOutsideCurrentMonth: a.bool,
  style: a.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * @default 0
   */
  tabIndex: a.number,
  /**
   * If `true`, renders as today date.
   * @default false
   */
  today: a.bool,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: a.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: a.oneOfType([a.func, a.shape({
    current: a.shape({
      pulsate: a.func.isRequired,
      start: a.func.isRequired,
      stop: a.func.isRequired
    })
  })])
});
const Mr = /* @__PURE__ */ f.memo(On), xr = (e) => De("MuiPickersSlideTransition", e), Se = ge("MuiPickersSlideTransition", ["root", "slideEnter-left", "slideEnter-right", "slideEnterActive", "slideExit", "slideExitActiveLeft-left", "slideExitActiveLeft-right"]), Pr = ["children", "className", "reduceAnimations", "slideDirection", "transKey", "classes"], kr = (e) => {
  const {
    classes: t,
    slideDirection: o
  } = e, s = {
    root: ["root"],
    exit: ["slideExit"],
    enterActive: ["slideEnterActive"],
    enter: [`slideEnter-${o}`],
    exitActive: [`slideExitActiveLeft-${o}`]
  };
  return ye(s, xr, t);
}, Tr = Q(cn, {
  name: "MuiPickersSlideTransition",
  slot: "Root",
  overridesResolver: (e, t) => [t.root, {
    [`.${Se["slideEnter-left"]}`]: t["slideEnter-left"]
  }, {
    [`.${Se["slideEnter-right"]}`]: t["slideEnter-right"]
  }, {
    [`.${Se.slideEnterActive}`]: t.slideEnterActive
  }, {
    [`.${Se.slideExit}`]: t.slideExit
  }, {
    [`.${Se["slideExitActiveLeft-left"]}`]: t["slideExitActiveLeft-left"]
  }, {
    [`.${Se["slideExitActiveLeft-right"]}`]: t["slideExitActiveLeft-right"]
  }]
})(({
  theme: e
}) => {
  const t = e.transitions.create("transform", {
    duration: e.transitions.duration.complex,
    easing: "cubic-bezier(0.35, 0.8, 0.4, 1)"
  });
  return {
    display: "block",
    position: "relative",
    overflowX: "hidden",
    "& > *": {
      position: "absolute",
      top: 0,
      right: 0,
      left: 0
    },
    [`& .${Se["slideEnter-left"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      zIndex: 1
    },
    [`& .${Se["slideEnter-right"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      zIndex: 1
    },
    [`& .${Se.slideEnterActive}`]: {
      transform: "translate(0%)",
      transition: t
    },
    [`& .${Se.slideExit}`]: {
      transform: "translate(0%)"
    },
    [`& .${Se["slideExitActiveLeft-left"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      transition: t,
      zIndex: 0
    },
    [`& .${Se["slideExitActiveLeft-right"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      transition: t,
      zIndex: 0
    }
  };
});
function Vr(e) {
  const t = me({
    props: e,
    name: "MuiPickersSlideTransition"
  }), {
    children: o,
    className: s,
    reduceAnimations: n,
    transKey: r
    // extracting `classes` from `other`
  } = t, i = oe(t, Pr), l = kr(t), c = Ge();
  if (n)
    return /* @__PURE__ */ T("div", {
      className: pe(l.root, s),
      children: o
    });
  const u = {
    exit: l.exit,
    enterActive: l.enterActive,
    enter: l.enter,
    exitActive: l.exitActive
  };
  return /* @__PURE__ */ T(Tr, {
    className: pe(l.root, s),
    childFactory: (d) => /* @__PURE__ */ f.cloneElement(d, {
      classNames: u
    }),
    role: "presentation",
    children: /* @__PURE__ */ T(mo, h({
      mountOnEnter: !0,
      unmountOnExit: !0,
      timeout: c.transitions.duration.complex,
      classNames: u
    }, i, {
      children: o
    }), r)
  });
}
const Ln = ({
  shouldDisableDate: e,
  shouldDisableMonth: t,
  shouldDisableYear: o,
  minDate: s,
  maxDate: n,
  disableFuture: r,
  disablePast: i,
  timezone: l
}) => {
  const c = We();
  return f.useCallback((u) => br({
    adapter: c,
    value: u,
    props: {
      shouldDisableDate: e,
      shouldDisableMonth: t,
      shouldDisableYear: o,
      minDate: s,
      maxDate: n,
      disableFuture: r,
      disablePast: i,
      timezone: l
    }
  }) !== null, [c, e, t, o, s, n, r, i, l]);
}, Ir = (e) => De("MuiDayCalendar", e);
ge("MuiDayCalendar", ["root", "header", "weekDayLabel", "loadingContainer", "slideTransition", "monthContainer", "weekContainer", "weekNumberLabel", "weekNumber"]);
const Ar = ["parentProps", "day", "focusableDay", "selectedDays", "isDateDisabled", "currentMonthNumber", "isViewFocused"], Rr = ["ownerState"], Er = (e) => {
  const {
    classes: t
  } = e;
  return ye({
    root: ["root"],
    header: ["header"],
    weekDayLabel: ["weekDayLabel"],
    loadingContainer: ["loadingContainer"],
    slideTransition: ["slideTransition"],
    monthContainer: ["monthContainer"],
    weekContainer: ["weekContainer"],
    weekNumberLabel: ["weekNumberLabel"],
    weekNumber: ["weekNumber"]
  }, Ir, t);
}, Nn = (nt + pt * 2) * 6, Or = Q("div", {
  name: "MuiDayCalendar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Lr = Q("div", {
  name: "MuiDayCalendar",
  slot: "Header",
  overridesResolver: (e, t) => t.header
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}), Nr = Q(qe, {
  name: "MuiDayCalendar",
  slot: "WeekDayLabel",
  overridesResolver: (e, t) => t.weekDayLabel
})(({
  theme: e
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: (e.vars || e).palette.text.secondary
})), Fr = Q(qe, {
  name: "MuiDayCalendar",
  slot: "WeekNumberLabel",
  overridesResolver: (e, t) => t.weekNumberLabel
})(({
  theme: e
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: e.palette.text.disabled
})), $r = Q(qe, {
  name: "MuiDayCalendar",
  slot: "WeekNumber",
  overridesResolver: (e, t) => t.weekNumber
})(({
  theme: e
}) => h({}, e.typography.caption, {
  width: nt,
  height: nt,
  padding: 0,
  margin: `0 ${pt}px`,
  color: e.palette.text.disabled,
  fontSize: "0.75rem",
  alignItems: "center",
  justifyContent: "center",
  display: "inline-flex"
})), Br = Q("div", {
  name: "MuiDayCalendar",
  slot: "LoadingContainer",
  overridesResolver: (e, t) => t.loadingContainer
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: Nn
}), _r = Q(Vr, {
  name: "MuiDayCalendar",
  slot: "SlideTransition",
  overridesResolver: (e, t) => t.slideTransition
})({
  minHeight: Nn
}), Wr = Q("div", {
  name: "MuiDayCalendar",
  slot: "MonthContainer",
  overridesResolver: (e, t) => t.monthContainer
})({
  overflow: "hidden"
}), Hr = Q("div", {
  name: "MuiDayCalendar",
  slot: "WeekContainer",
  overridesResolver: (e, t) => t.weekContainer
})({
  margin: `${pt}px 0`,
  display: "flex",
  justifyContent: "center"
});
function zr(e) {
  var t, o, s;
  let {
    parentProps: n,
    day: r,
    focusableDay: i,
    selectedDays: l,
    isDateDisabled: c,
    currentMonthNumber: u,
    isViewFocused: d
  } = e, v = oe(e, Ar);
  const {
    disabled: g,
    disableHighlightToday: p,
    isMonthSwitchingAnimating: C,
    showDaysOutsideCurrentMonth: y,
    components: M,
    componentsProps: S,
    slots: m,
    slotProps: w,
    timezone: x
  } = n, D = fe(), E = st(x), O = i !== null && D.isSameDay(r, i), A = l.some((q) => D.isSameDay(q, r)), P = D.isSameDay(r, E), $ = (t = (o = m == null ? void 0 : m.day) != null ? o : M == null ? void 0 : M.Day) != null ? t : Mr, I = ve({
    elementType: $,
    externalSlotProps: (s = w == null ? void 0 : w.day) != null ? s : S == null ? void 0 : S.day,
    additionalProps: h({
      disableHighlightToday: p,
      showDaysOutsideCurrentMonth: y,
      role: "gridcell",
      isAnimating: C,
      // it is used in date range dragging logic by accessing `dataset.timestamp`
      "data-timestamp": D.toJsDate(r).valueOf()
    }, v),
    ownerState: h({}, n, {
      day: r,
      selected: A
    })
  }), N = oe(I, Rr), F = f.useMemo(() => g || c(r), [g, c, r]), k = f.useMemo(() => D.getMonth(r) !== u, [D, r, u]), b = f.useMemo(() => {
    const q = D.startOfMonth(D.setMonth(r, u));
    return y ? D.isSameDay(r, D.startOfWeek(q)) : D.isSameDay(r, q);
  }, [u, r, y, D]), W = f.useMemo(() => {
    const q = D.endOfMonth(D.setMonth(r, u));
    return y ? D.isSameDay(r, D.endOfWeek(q)) : D.isSameDay(r, q);
  }, [u, r, y, D]);
  return /* @__PURE__ */ T($, h({}, N, {
    day: r,
    disabled: F,
    autoFocus: d && O,
    today: P,
    outsideCurrentMonth: k,
    isFirstVisibleCell: b,
    isLastVisibleCell: W,
    selected: A,
    tabIndex: O ? 0 : -1,
    "aria-selected": A,
    "aria-current": P ? "date" : void 0
  }));
}
function Yr(e) {
  const t = me({
    props: e,
    name: "MuiDayCalendar"
  }), {
    onFocusedDayChange: o,
    className: s,
    currentMonth: n,
    selectedDays: r,
    focusedDay: i,
    loading: l,
    onSelectedDaysChange: c,
    onMonthSwitchingAnimationEnd: u,
    readOnly: d,
    reduceAnimations: v,
    renderLoading: g = () => /* @__PURE__ */ T("span", {
      children: "..."
    }),
    slideDirection: p,
    TransitionProps: C,
    disablePast: y,
    disableFuture: M,
    minDate: S,
    maxDate: m,
    shouldDisableDate: w,
    shouldDisableMonth: x,
    shouldDisableYear: D,
    dayOfWeekFormatter: E,
    hasFocus: O,
    onFocusedViewChange: A,
    gridLabelId: P,
    displayWeekNumber: $,
    fixedWeekNumber: I,
    autoFocus: N,
    timezone: F
  } = t, k = st(F), b = fe(), W = Er(t), B = Ge().direction === "rtl", U = E || ((Z, J) => b.format(J, "weekdayShort").charAt(0).toUpperCase()), j = Ln({
    shouldDisableDate: w,
    shouldDisableMonth: x,
    shouldDisableYear: D,
    minDate: S,
    maxDate: m,
    disablePast: y,
    disableFuture: M,
    timezone: F
  }), X = ot(), [ae, le] = Oe({
    name: "DayCalendar",
    state: "hasFocus",
    controlled: O,
    default: N ?? !1
  }), [_, G] = f.useState(() => i || k), se = Y((Z) => {
    d || c(Z);
  }), V = (Z) => {
    j(Z) || (o(Z), G(Z), A == null || A(!0), le(!0));
  }, te = Y((Z, J) => {
    switch (Z.key) {
      case "ArrowUp":
        V(b.addDays(J, -7)), Z.preventDefault();
        break;
      case "ArrowDown":
        V(b.addDays(J, 7)), Z.preventDefault();
        break;
      case "ArrowLeft": {
        const R = b.addDays(J, B ? 1 : -1), z = b.addMonths(J, B ? 1 : -1), ne = tt({
          utils: b,
          date: R,
          minDate: B ? R : b.startOfMonth(z),
          maxDate: B ? b.endOfMonth(z) : R,
          isDateDisabled: j,
          timezone: F
        });
        V(ne || R), Z.preventDefault();
        break;
      }
      case "ArrowRight": {
        const R = b.addDays(J, B ? -1 : 1), z = b.addMonths(J, B ? -1 : 1), ne = tt({
          utils: b,
          date: R,
          minDate: B ? b.startOfMonth(z) : R,
          maxDate: B ? R : b.endOfMonth(z),
          isDateDisabled: j,
          timezone: F
        });
        V(ne || R), Z.preventDefault();
        break;
      }
      case "Home":
        V(b.startOfWeek(J)), Z.preventDefault();
        break;
      case "End":
        V(b.endOfWeek(J)), Z.preventDefault();
        break;
      case "PageUp":
        V(b.addMonths(J, 1)), Z.preventDefault();
        break;
      case "PageDown":
        V(b.addMonths(J, -1)), Z.preventDefault();
        break;
    }
  }), ie = Y((Z, J) => V(J)), re = Y((Z, J) => {
    ae && b.isSameDay(_, J) && (A == null || A(!1));
  }), H = b.getMonth(n), K = f.useMemo(() => r.filter((Z) => !!Z).map((Z) => b.startOfDay(Z)), [b, r]), L = H, ee = f.useMemo(() => /* @__PURE__ */ f.createRef(), [L]), be = b.startOfWeek(k), ue = f.useMemo(() => {
    const Z = b.startOfMonth(n), J = b.endOfMonth(n);
    return j(_) || b.isAfterDay(_, J) || b.isBeforeDay(_, Z) ? tt({
      utils: b,
      date: _,
      minDate: Z,
      maxDate: J,
      disablePast: y,
      disableFuture: M,
      isDateDisabled: j,
      timezone: F
    }) : _;
  }, [n, M, y, _, j, b, F]), Ae = f.useMemo(() => {
    const Z = b.setTimezone(n, F), J = b.getWeekArray(Z);
    let R = b.addMonths(Z, 1);
    for (; I && J.length < I; ) {
      const z = b.getWeekArray(R), ne = b.isSameDay(J[J.length - 1][0], z[0][0]);
      z.slice(ne ? 1 : 0).forEach((de) => {
        J.length < I && J.push(de);
      }), R = b.addMonths(R, 1);
    }
    return J;
  }, [n, I, b, F]);
  return /* @__PURE__ */ he(Or, {
    role: "grid",
    "aria-labelledby": P,
    className: W.root,
    children: [/* @__PURE__ */ he(Lr, {
      role: "row",
      className: W.header,
      children: [$ && /* @__PURE__ */ T(Fr, {
        variant: "caption",
        role: "columnheader",
        "aria-label": X.calendarWeekNumberHeaderLabel,
        className: W.weekNumberLabel,
        children: X.calendarWeekNumberHeaderText
      }), wo(b, k).map((Z, J) => {
        var R;
        const z = b.format(Z, "weekdayShort").slice(0, 2);
        return /* @__PURE__ */ T(Nr, {
          variant: "caption",
          role: "columnheader",
          "aria-label": b.format(b.addDays(be, J), "weekday"),
          className: W.weekDayLabel,
          children: (R = U == null ? void 0 : U(z, Z)) != null ? R : z
        }, z + J.toString());
      })]
    }), l ? /* @__PURE__ */ T(Br, {
      className: W.loadingContainer,
      children: g()
    }) : /* @__PURE__ */ T(_r, h({
      transKey: L,
      onExited: u,
      reduceAnimations: v,
      slideDirection: p,
      className: pe(s, W.slideTransition)
    }, C, {
      nodeRef: ee,
      children: /* @__PURE__ */ T(Wr, {
        ref: ee,
        role: "rowgroup",
        className: W.monthContainer,
        children: Ae.map((Z, J) => /* @__PURE__ */ he(Hr, {
          role: "row",
          className: W.weekContainer,
          "aria-rowindex": J + 1,
          children: [$ && /* @__PURE__ */ T($r, {
            className: W.weekNumber,
            role: "rowheader",
            "aria-label": X.calendarWeekNumberAriaLabelText(b.getWeekNumber(Z[0])),
            children: X.calendarWeekNumberText(b.getWeekNumber(Z[0]))
          }), Z.map((R, z) => /* @__PURE__ */ T(zr, {
            parentProps: t,
            day: R,
            selectedDays: K,
            focusableDay: ue,
            onKeyDown: te,
            onFocus: ie,
            onBlur: re,
            onDaySelect: se,
            isDateDisabled: j,
            currentMonthNumber: H,
            isViewFocused: ae,
            "aria-colindex": z + 1
          }, R.toString()))]
        }, `week-${Z[0]}`))
      })
    }))]
  });
}
const Ur = (e, t, o) => (s, n) => {
  switch (n.type) {
    case "changeMonth":
      return h({}, s, {
        slideDirection: n.direction,
        currentMonth: n.newMonth,
        isMonthSwitchingAnimating: !e
      });
    case "finishMonthSwitchingAnimation":
      return h({}, s, {
        isMonthSwitchingAnimating: !1
      });
    case "changeFocusedDay": {
      if (s.focusedDay != null && n.focusedDay != null && o.isSameDay(n.focusedDay, s.focusedDay))
        return s;
      const r = n.focusedDay != null && !t && !o.isSameMonth(s.currentMonth, n.focusedDay);
      return h({}, s, {
        focusedDay: n.focusedDay,
        isMonthSwitchingAnimating: r && !e && !n.withoutMonthSwitchingAnimation,
        currentMonth: r ? o.startOfMonth(n.focusedDay) : s.currentMonth,
        slideDirection: n.focusedDay != null && o.isAfterDay(n.focusedDay, s.currentMonth) ? "left" : "right"
      });
    }
    default:
      throw new Error("missing support");
  }
}, jr = (e) => {
  const {
    value: t,
    referenceDate: o,
    defaultCalendarMonth: s,
    disableFuture: n,
    disablePast: r,
    disableSwitchToMonthOnDayFocus: i = !1,
    maxDate: l,
    minDate: c,
    onMonthChange: u,
    reduceAnimations: d,
    shouldDisableDate: v,
    timezone: g
  } = e, p = st(g), C = fe(), y = f.useRef(Ur(!!d, i, C)).current, M = f.useMemo(
    () => {
      let A = null;
      return o ? A = o : s && (A = C.startOfMonth(s)), je.getInitialReferenceValue({
        value: t,
        utils: C,
        timezone: g,
        props: e,
        referenceDate: A,
        granularity: ke.day
      });
    },
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), [S, m] = f.useReducer(y, {
    isMonthSwitchingAnimating: !1,
    focusedDay: t || p,
    currentMonth: C.startOfMonth(M),
    slideDirection: "left"
  }), w = f.useCallback((A) => {
    m(h({
      type: "changeMonth"
    }, A)), u && u(A.newMonth);
  }, [u]), x = f.useCallback((A) => {
    const P = A;
    C.isSameMonth(P, S.currentMonth) || w({
      newMonth: C.startOfMonth(P),
      direction: C.isAfterDay(P, S.currentMonth) ? "left" : "right"
    });
  }, [S.currentMonth, w, C]), D = Ln({
    shouldDisableDate: v,
    minDate: c,
    maxDate: l,
    disableFuture: n,
    disablePast: r,
    timezone: g
  }), E = f.useCallback(() => {
    m({
      type: "finishMonthSwitchingAnimation"
    });
  }, []), O = Y((A, P) => {
    D(A) || m({
      type: "changeFocusedDay",
      focusedDay: A,
      withoutMonthSwitchingAnimation: P
    });
  });
  return {
    referenceDate: M,
    calendarState: S,
    changeMonth: x,
    changeFocusedDay: O,
    isDateDisabled: D,
    onMonthSwitchingAnimationEnd: E,
    handleChangeMonth: w
  };
};
function qr(e) {
  return De("MuiInputAdornment", e);
}
const Gr = ge("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), tn = Gr;
var nn;
const Kr = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"], Zr = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, t[`position${St(o.position)}`], o.disablePointerEvents === !0 && t.disablePointerEvents, t[o.variant]];
}, Qr = (e) => {
  const {
    classes: t,
    disablePointerEvents: o,
    hiddenLabel: s,
    position: n,
    size: r,
    variant: i
  } = e, l = {
    root: ["root", o && "disablePointerEvents", n && `position${St(n)}`, i, s && "hiddenLabel", r && `size${St(r)}`]
  };
  return ye(l, qr, t);
}, Jr = Q("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: Zr
})(({
  theme: e,
  ownerState: t
}) => h({
  display: "flex",
  height: "0.01em",
  // Fix IE11 flexbox alignment. To remove at some point.
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (e.vars || e).palette.action.active
}, t.variant === "filled" && {
  // Styles applied to the root element if `variant="filled"`.
  [`&.${tn.positionStart}&:not(.${tn.hiddenLabel})`]: {
    marginTop: 16
  }
}, t.position === "start" && {
  // Styles applied to the root element if `position="start"`.
  marginRight: 8
}, t.position === "end" && {
  // Styles applied to the root element if `position="end"`.
  marginLeft: 8
}, t.disablePointerEvents === !0 && {
  // Styles applied to the root element if `disablePointerEvents={true}`.
  pointerEvents: "none"
})), Fn = /* @__PURE__ */ f.forwardRef(function(t, o) {
  const s = me({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: n,
    className: r,
    component: i = "div",
    disablePointerEvents: l = !1,
    disableTypography: c = !1,
    position: u,
    variant: d
  } = s, v = oe(s, Kr), g = Qn() || {};
  let p = d;
  d && g.variant && process.env.NODE_ENV !== "production" && d === g.variant && console.error("MUI: The `InputAdornment` variant infers the variant prop you do not have to provide one."), g && !p && (p = g.variant);
  const C = h({}, s, {
    hiddenLabel: g.hiddenLabel,
    size: g.size,
    disablePointerEvents: l,
    position: u,
    variant: p
  }), y = Qr(C);
  return /* @__PURE__ */ T(Jn.Provider, {
    value: null,
    children: /* @__PURE__ */ T(Jr, h({
      as: i,
      ownerState: C,
      className: pe(y.root, r),
      ref: o
    }, v, {
      children: typeof n == "string" && !c ? /* @__PURE__ */ T(qe, {
        color: "text.secondary",
        children: n
      }) : /* @__PURE__ */ he(f.Fragment, {
        children: [u === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          nn || (nn = /* @__PURE__ */ T("span", {
            className: "notranslate",
            children: "​"
          }))
        ) : null, n]
      })
    }))
  });
});
process.env.NODE_ENV !== "production" && (Fn.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the `input` on click.
   * @default false
   */
  disablePointerEvents: a.bool,
  /**
   * If children is a string then disable wrapping in a Typography component.
   * @default false
   */
  disableTypography: a.bool,
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: a.oneOf(["end", "start"]).isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The variant to use.
   * Note: If you are using the `TextField` component or the `FormControl` component
   * you do not have to set this manually.
   */
  variant: a.oneOf(["filled", "outlined", "standard"])
});
const $n = Fn, Xr = ["props", "getOpenDialogAriaText"], ea = ["ownerState"], ta = ["ownerState"], Pi = (e) => {
  var t, o, s, n, r;
  let {
    props: i,
    getOpenDialogAriaText: l
  } = e, c = oe(e, Xr);
  const {
    slots: u,
    slotProps: d,
    className: v,
    sx: g,
    format: p,
    formatDensity: C,
    timezone: y,
    label: M,
    inputRef: S,
    readOnly: m,
    disabled: w,
    autoFocus: x,
    localeText: D,
    reduceAnimations: E
  } = i, O = fe(), A = f.useRef(null), P = f.useRef(null), $ = an(), I = (t = d == null || (o = d.toolbar) == null ? void 0 : o.hidden) != null ? t : !1, {
    open: N,
    actions: F,
    hasUIView: k,
    layoutProps: b,
    renderCurrentView: W,
    shouldRestoreFocus: q,
    fieldProps: B
  } = Fs(h({}, c, {
    props: i,
    inputRef: A,
    autoFocusView: !0,
    additionalViewProps: {},
    wrapperVariant: "desktop"
  })), U = (s = u.inputAdornment) != null ? s : $n, j = ve({
    elementType: U,
    externalSlotProps: d == null ? void 0 : d.inputAdornment,
    additionalProps: {
      position: "end"
    },
    ownerState: i
  }), X = oe(j, ea), ae = (n = u.openPickerButton) != null ? n : dt, le = ve({
    elementType: ae,
    externalSlotProps: d == null ? void 0 : d.openPickerButton,
    additionalProps: {
      disabled: w || m,
      onClick: N ? F.onClose : F.onOpen,
      "aria-label": l(B.value, O),
      edge: X.position
    },
    ownerState: i
  }), _ = oe(le, ta), G = u.openPickerIcon, se = u.field, V = ve({
    elementType: se,
    externalSlotProps: d == null ? void 0 : d.field,
    additionalProps: h({}, B, I && {
      id: $
    }, {
      readOnly: m,
      disabled: w,
      className: v,
      sx: g,
      format: p,
      formatDensity: C,
      timezone: y,
      label: M,
      autoFocus: x && !i.open,
      focused: N ? !0 : void 0
    }),
    ownerState: i
  });
  k && (V.InputProps = h({}, V.InputProps, {
    ref: P,
    [`${X.position}Adornment`]: /* @__PURE__ */ T(U, h({}, X, {
      children: /* @__PURE__ */ T(ae, h({}, _, {
        children: /* @__PURE__ */ T(G, h({}, d == null ? void 0 : d.openPickerIcon))
      }))
    }))
  }));
  const te = h({
    textField: u.textField,
    clearIcon: u.clearIcon,
    clearButton: u.clearButton
  }, V.slots), ie = (r = u.layout) != null ? r : In, re = _e(A, V.inputRef, S);
  let H = $;
  I && (M ? H = `${$}-label` : H = void 0);
  const K = h({}, d, {
    toolbar: h({}, d == null ? void 0 : d.toolbar, {
      titleId: $
    }),
    popper: h({
      "aria-labelledby": H
    }, d == null ? void 0 : d.popper)
  });
  return {
    renderPicker: () => /* @__PURE__ */ he(bn, {
      localeText: D,
      children: [/* @__PURE__ */ T(se, h({}, V, {
        slots: te,
        slotProps: K,
        inputRef: re
      })), /* @__PURE__ */ T(ws, h({
        role: "dialog",
        placement: "bottom-start",
        anchorEl: P.current
      }, F, {
        open: N,
        slots: u,
        slotProps: K,
        shouldRestoreFocus: q,
        reduceAnimations: E,
        children: /* @__PURE__ */ T(ie, h({}, b, K == null ? void 0 : K.layout, {
          slots: u,
          slotProps: K,
          children: W()
        }))
      }))]
    })
  };
}, na = ["ownerState"], ki = ({
  clearable: e,
  fieldProps: t,
  InputProps: o,
  onClear: s,
  slots: n,
  slotProps: r,
  components: i,
  componentsProps: l
}) => {
  var c, u, d, v, g, p;
  const C = ot(), y = (c = (u = n == null ? void 0 : n.clearButton) != null ? u : i == null ? void 0 : i.ClearButton) != null ? c : dt, M = ve({
    elementType: y,
    externalSlotProps: (d = r == null ? void 0 : r.clearButton) != null ? d : l == null ? void 0 : l.clearButton,
    ownerState: {},
    className: "clearButton",
    additionalProps: {
      title: C.fieldClearLabel
    }
  }), S = oe(M, na), m = (v = (g = n == null ? void 0 : n.clearIcon) != null ? g : i == null ? void 0 : i.ClearIcon) != null ? v : Qo, w = ve({
    elementType: m,
    externalSlotProps: (p = r == null ? void 0 : r.clearIcon) != null ? p : l == null ? void 0 : l.clearIcon,
    ownerState: {}
  }), x = h({}, o, {
    endAdornment: e ? /* @__PURE__ */ he(f.Fragment, {
      children: [/* @__PURE__ */ T($n, {
        position: "end",
        sx: {
          marginRight: o != null && o.endAdornment ? -1 : -1.5
        },
        children: /* @__PURE__ */ T(y, h({}, S, {
          onClick: s,
          children: /* @__PURE__ */ T(m, h({
            fontSize: "small"
          }, w))
        }))
      }), o == null ? void 0 : o.endAdornment]
    }) : o == null ? void 0 : o.endAdornment
  }), D = h({}, t, {
    sx: [{
      "& .clearButton": {
        opacity: 1
      },
      "@media (pointer: fine)": {
        "& .clearButton": {
          opacity: 0
        },
        "&:hover, &:focus-within": {
          ".clearButton": {
            opacity: 1
          }
        }
      }
    }, ...Array.isArray(t.sx) ? t.sx : [t.sx]]
  });
  return {
    InputProps: x,
    fieldProps: D
  };
}, oa = (e) => De("MuiPickersFadeTransitionGroup", e);
ge("MuiPickersFadeTransitionGroup", ["root"]);
const sa = (e) => {
  const {
    classes: t
  } = e;
  return ye({
    root: ["root"]
  }, oa, t);
}, ra = Q(cn, {
  name: "MuiPickersFadeTransitionGroup",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "block",
  position: "relative"
});
function Bn(e) {
  const t = me({
    props: e,
    name: "MuiPickersFadeTransitionGroup"
  }), {
    children: o,
    className: s,
    reduceAnimations: n,
    transKey: r
  } = t, i = sa(t), l = Ge();
  return n ? o : /* @__PURE__ */ T(ra, {
    className: pe(i.root, s),
    children: /* @__PURE__ */ T(kt, {
      appear: !1,
      mountOnEnter: !0,
      unmountOnExit: !0,
      timeout: {
        appear: l.transitions.duration.enteringScreen,
        enter: l.transitions.duration.enteringScreen,
        exit: 0
      },
      children: o
    }, r)
  });
}
function aa(e) {
  return De("MuiPickersMonth", e);
}
const at = ge("MuiPickersMonth", ["root", "monthButton", "disabled", "selected"]), ia = ["autoFocus", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "aria-label", "monthsPerRow"], la = (e) => {
  const {
    disabled: t,
    selected: o,
    classes: s
  } = e;
  return ye({
    root: ["root"],
    monthButton: ["monthButton", t && "disabled", o && "selected"]
  }, aa, s);
}, ca = Q("div", {
  name: "MuiPickersMonth",
  slot: "Root",
  overridesResolver: (e, t) => [t.root]
})(({
  ownerState: e
}) => ({
  flexBasis: e.monthsPerRow === 3 ? "33.3%" : "25%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})), ua = Q("button", {
  name: "MuiPickersMonth",
  slot: "MonthButton",
  overridesResolver: (e, t) => [t.monthButton, {
    [`&.${at.disabled}`]: t.disabled
  }, {
    [`&.${at.selected}`]: t.selected
  }]
})(({
  theme: e
}) => h({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, e.typography.subtitle1, {
  margin: "8px 0",
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Ve(e.palette.action.active, e.palette.action.hoverOpacity)
  },
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Ve(e.palette.action.active, e.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${at.disabled}`]: {
    color: (e.vars || e).palette.text.secondary
  },
  [`&.${at.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText,
    backgroundColor: (e.vars || e).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  }
})), da = /* @__PURE__ */ f.memo(function(t) {
  const o = me({
    props: t,
    name: "MuiPickersMonth"
  }), {
    autoFocus: s,
    children: n,
    disabled: r,
    selected: i,
    value: l,
    tabIndex: c,
    onClick: u,
    onKeyDown: d,
    onFocus: v,
    onBlur: g,
    "aria-current": p,
    "aria-label": C
    // We don't want to forward this prop to the root element
  } = o, y = oe(o, ia), M = f.useRef(null), S = la(o);
  return Le(() => {
    if (s) {
      var m;
      (m = M.current) == null || m.focus();
    }
  }, [s]), /* @__PURE__ */ T(ca, h({
    className: S.root,
    ownerState: o
  }, y, {
    children: /* @__PURE__ */ T(ua, {
      ref: M,
      disabled: r,
      type: "button",
      role: "radio",
      tabIndex: r ? -1 : c,
      "aria-current": p,
      "aria-checked": i,
      "aria-label": C,
      onClick: (m) => u(m, l),
      onKeyDown: (m) => d(m, l),
      onFocus: (m) => v(m, l),
      onBlur: (m) => g(m, l),
      className: S.monthButton,
      ownerState: o,
      children: n
    })
  }));
});
function fa(e) {
  return De("MuiMonthCalendar", e);
}
ge("MuiMonthCalendar", ["root"]);
const pa = ["className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "autoFocus", "onMonthFocus", "hasFocus", "onFocusedViewChange", "monthsPerRow", "timezone", "gridLabelId"], ha = (e) => {
  const {
    classes: t
  } = e;
  return ye({
    root: ["root"]
  }, fa, t);
};
function ma(e, t) {
  const o = fe(), s = Rt(), n = me({
    props: e,
    name: t
  });
  return h({
    disableFuture: !1,
    disablePast: !1
  }, n, {
    minDate: Ne(o, n.minDate, s.minDate),
    maxDate: Ne(o, n.maxDate, s.maxDate)
  });
}
const ga = Q("div", {
  name: "MuiMonthCalendar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "stretch",
  padding: "0 4px",
  width: Et,
  // avoid padding increasing width over defined
  boxSizing: "border-box"
}), _n = /* @__PURE__ */ f.forwardRef(function(t, o) {
  const s = ma(t, "MuiMonthCalendar"), {
    className: n,
    value: r,
    defaultValue: i,
    referenceDate: l,
    disabled: c,
    disableFuture: u,
    disablePast: d,
    maxDate: v,
    minDate: g,
    onChange: p,
    shouldDisableMonth: C,
    readOnly: y,
    disableHighlightToday: M,
    autoFocus: S = !1,
    onMonthFocus: m,
    hasFocus: w,
    onFocusedViewChange: x,
    monthsPerRow: D = 3,
    timezone: E,
    gridLabelId: O
  } = s, A = oe(s, pa), {
    value: P,
    handleValueChange: $,
    timezone: I
  } = Nt({
    name: "MonthCalendar",
    timezone: E,
    value: r,
    defaultValue: i,
    onChange: p,
    valueManager: je
  }), N = st(I), F = on(), k = fe(), b = f.useMemo(
    () => je.getInitialReferenceValue({
      value: P,
      utils: k,
      props: s,
      timezone: I,
      referenceDate: l,
      granularity: ke.month
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), W = s, q = ha(W), B = f.useMemo(() => k.getMonth(N), [k, N]), U = f.useMemo(() => P != null ? k.getMonth(P) : M ? null : k.getMonth(b), [P, k, M, b]), [j, X] = f.useState(() => U || B), [ae, le] = Oe({
    name: "MonthCalendar",
    state: "hasFocus",
    controlled: w,
    default: S ?? !1
  }), _ = Y((H) => {
    le(H), x && x(H);
  }), G = f.useCallback((H) => {
    const K = k.startOfMonth(d && k.isAfter(N, g) ? N : g), L = k.startOfMonth(u && k.isBefore(N, v) ? N : v), ee = k.startOfMonth(H);
    return k.isBefore(ee, K) || k.isAfter(ee, L) ? !0 : C ? C(ee) : !1;
  }, [u, d, v, g, N, C, k]), se = Y((H, K) => {
    if (y)
      return;
    const L = k.setMonth(P ?? b, K);
    $(L);
  }), V = Y((H) => {
    G(k.setMonth(P ?? b, H)) || (X(H), _(!0), m && m(H));
  });
  f.useEffect(() => {
    X((H) => U !== null && H !== U ? U : H);
  }, [U]);
  const te = Y((H, K) => {
    switch (H.key) {
      case "ArrowUp":
        V((12 + K - 3) % 12), H.preventDefault();
        break;
      case "ArrowDown":
        V((12 + K + 3) % 12), H.preventDefault();
        break;
      case "ArrowLeft":
        V((12 + K + (F.direction === "ltr" ? -1 : 1)) % 12), H.preventDefault();
        break;
      case "ArrowRight":
        V((12 + K + (F.direction === "ltr" ? 1 : -1)) % 12), H.preventDefault();
        break;
    }
  }), ie = Y((H, K) => {
    V(K);
  }), re = Y((H, K) => {
    j === K && _(!1);
  });
  return /* @__PURE__ */ T(ga, h({
    ref: o,
    className: pe(q.root, n),
    ownerState: W,
    role: "radiogroup",
    "aria-labelledby": O
  }, A, {
    children: Vt(k, P ?? b).map((H) => {
      const K = k.getMonth(H), L = k.format(H, "monthShort"), ee = k.format(H, "month"), be = K === U, ue = c || G(H);
      return /* @__PURE__ */ T(da, {
        selected: be,
        value: K,
        onClick: se,
        onKeyDown: te,
        autoFocus: ae && K === j,
        disabled: ue,
        tabIndex: K === j ? 0 : -1,
        onFocus: ie,
        onBlur: re,
        "aria-current": B === K ? "date" : void 0,
        "aria-label": ee,
        monthsPerRow: D,
        children: L
      }, L);
    })
  }));
});
process.env.NODE_ENV !== "production" && (_n.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: a.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * className applied to the root element.
   */
  className: a.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: a.any,
  /**
   * If `true` picker is disabled
   */
  disabled: a.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: a.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: a.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: a.bool,
  gridLabelId: a.string,
  hasFocus: a.bool,
  /**
   * Maximal selectable date.
   */
  maxDate: a.any,
  /**
   * Minimal selectable date.
   */
  minDate: a.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: a.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @template TDate
   * @param {TDate} value The new value.
   */
  onChange: a.func,
  onFocusedViewChange: a.func,
  onMonthFocus: a.func,
  /**
   * If `true` picker is readonly
   */
  readOnly: a.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid month using the validation props, except callbacks such as `shouldDisableMonth`.
   */
  referenceDate: a.any,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: a.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: a.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: a.any
});
function ya(e) {
  return De("MuiPickersYear", e);
}
const it = ge("MuiPickersYear", ["root", "yearButton", "selected", "disabled"]), ba = ["autoFocus", "className", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "yearsPerRow"], va = (e) => {
  const {
    disabled: t,
    selected: o,
    classes: s
  } = e;
  return ye({
    root: ["root"],
    yearButton: ["yearButton", t && "disabled", o && "selected"]
  }, ya, s);
}, Da = Q("div", {
  name: "MuiPickersYear",
  slot: "Root",
  overridesResolver: (e, t) => [t.root]
})(({
  ownerState: e
}) => ({
  flexBasis: e.yearsPerRow === 3 ? "33.3%" : "25%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})), wa = Q("button", {
  name: "MuiPickersYear",
  slot: "YearButton",
  overridesResolver: (e, t) => [t.yearButton, {
    [`&.${it.disabled}`]: t.disabled
  }, {
    [`&.${it.selected}`]: t.selected
  }]
})(({
  theme: e
}) => h({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, e.typography.subtitle1, {
  margin: "6px 0",
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.focusOpacity})` : Ve(e.palette.action.active, e.palette.action.focusOpacity)
  },
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Ve(e.palette.action.active, e.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${it.disabled}`]: {
    color: (e.vars || e).palette.text.secondary
  },
  [`&.${it.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText,
    backgroundColor: (e.vars || e).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  }
})), Ca = /* @__PURE__ */ f.memo(function(t) {
  const o = me({
    props: t,
    name: "MuiPickersYear"
  }), {
    autoFocus: s,
    className: n,
    children: r,
    disabled: i,
    selected: l,
    value: c,
    tabIndex: u,
    onClick: d,
    onKeyDown: v,
    onFocus: g,
    onBlur: p,
    "aria-current": C
    // We don't want to forward this prop to the root element
  } = o, y = oe(o, ba), M = f.useRef(null), S = va(o);
  return f.useEffect(() => {
    s && M.current.focus();
  }, [s]), /* @__PURE__ */ T(Da, h({
    className: pe(S.root, n),
    ownerState: o
  }, y, {
    children: /* @__PURE__ */ T(wa, {
      ref: M,
      disabled: i,
      type: "button",
      role: "radio",
      tabIndex: i ? -1 : u,
      "aria-current": C,
      "aria-checked": l,
      onClick: (m) => d(m, c),
      onKeyDown: (m) => v(m, c),
      onFocus: (m) => g(m, c),
      onBlur: (m) => p(m, c),
      className: S.yearButton,
      ownerState: o,
      children: r
    })
  }));
});
function Sa(e) {
  return De("MuiYearCalendar", e);
}
ge("MuiYearCalendar", ["root"]);
const Ma = ["autoFocus", "className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "readOnly", "shouldDisableYear", "disableHighlightToday", "onYearFocus", "hasFocus", "onFocusedViewChange", "yearsPerRow", "timezone", "gridLabelId"], xa = (e) => {
  const {
    classes: t
  } = e;
  return ye({
    root: ["root"]
  }, Sa, t);
};
function Pa(e, t) {
  var o;
  const s = fe(), n = Rt(), r = me({
    props: e,
    name: t
  });
  return h({
    disablePast: !1,
    disableFuture: !1
  }, r, {
    yearsPerRow: (o = r.yearsPerRow) != null ? o : 3,
    minDate: Ne(s, r.minDate, n.minDate),
    maxDate: Ne(s, r.maxDate, n.maxDate)
  });
}
const ka = Q("div", {
  name: "MuiYearCalendar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  overflowY: "auto",
  height: "100%",
  padding: "0 4px",
  width: Et,
  maxHeight: as,
  // avoid padding increasing width over defined
  boxSizing: "border-box",
  position: "relative"
}), Wn = /* @__PURE__ */ f.forwardRef(function(t, o) {
  const s = Pa(t, "MuiYearCalendar"), {
    autoFocus: n,
    className: r,
    value: i,
    defaultValue: l,
    referenceDate: c,
    disabled: u,
    disableFuture: d,
    disablePast: v,
    maxDate: g,
    minDate: p,
    onChange: C,
    readOnly: y,
    shouldDisableYear: M,
    disableHighlightToday: S,
    onYearFocus: m,
    hasFocus: w,
    onFocusedViewChange: x,
    yearsPerRow: D,
    timezone: E,
    gridLabelId: O
  } = s, A = oe(s, Ma), {
    value: P,
    handleValueChange: $,
    timezone: I
  } = Nt({
    name: "YearCalendar",
    timezone: E,
    value: i,
    defaultValue: l,
    onChange: C,
    valueManager: je
  }), N = st(I), F = on(), k = fe(), b = f.useMemo(
    () => je.getInitialReferenceValue({
      value: P,
      utils: k,
      props: s,
      timezone: I,
      referenceDate: c,
      granularity: ke.year
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), W = s, q = xa(W), B = f.useMemo(() => k.getYear(N), [k, N]), U = f.useMemo(() => P != null ? k.getYear(P) : S ? null : k.getYear(b), [P, k, S, b]), [j, X] = f.useState(() => U || B), [ae, le] = Oe({
    name: "YearCalendar",
    state: "hasFocus",
    controlled: w,
    default: n ?? !1
  }), _ = Y((L) => {
    le(L), x && x(L);
  }), G = f.useCallback((L) => {
    if (v && k.isBeforeYear(L, N) || d && k.isAfterYear(L, N) || p && k.isBeforeYear(L, p) || g && k.isAfterYear(L, g))
      return !0;
    if (!M)
      return !1;
    const ee = k.startOfYear(L);
    return M(ee);
  }, [d, v, g, p, N, M, k]), se = Y((L, ee) => {
    if (y)
      return;
    const be = k.setYear(P ?? b, ee);
    $(be);
  }), V = Y((L) => {
    G(k.setYear(P ?? b, L)) || (X(L), _(!0), m == null || m(L));
  });
  f.useEffect(() => {
    X((L) => U !== null && L !== U ? U : L);
  }, [U]);
  const te = Y((L, ee) => {
    switch (L.key) {
      case "ArrowUp":
        V(ee - D), L.preventDefault();
        break;
      case "ArrowDown":
        V(ee + D), L.preventDefault();
        break;
      case "ArrowLeft":
        V(ee + (F.direction === "ltr" ? -1 : 1)), L.preventDefault();
        break;
      case "ArrowRight":
        V(ee + (F.direction === "ltr" ? 1 : -1)), L.preventDefault();
        break;
    }
  }), ie = Y((L, ee) => {
    V(ee);
  }), re = Y((L, ee) => {
    j === ee && _(!1);
  }), H = f.useRef(null), K = _e(o, H);
  return f.useEffect(() => {
    if (n || H.current === null)
      return;
    const L = H.current.querySelector('[tabindex="0"]');
    if (!L)
      return;
    const ee = L.offsetHeight, be = L.offsetTop, ue = H.current.clientHeight, Ae = H.current.scrollTop, Z = be + ee;
    ee > ue || be < Ae || (H.current.scrollTop = Z - ue / 2 - ee / 2);
  }, [n]), /* @__PURE__ */ T(ka, h({
    ref: K,
    className: pe(q.root, r),
    ownerState: W,
    role: "radiogroup",
    "aria-labelledby": O
  }, A, {
    children: k.getYearRange(p, g).map((L) => {
      const ee = k.getYear(L), be = ee === U, ue = u || G(L);
      return /* @__PURE__ */ T(Ca, {
        selected: be,
        value: ee,
        onClick: se,
        onKeyDown: te,
        autoFocus: ae && ee === j,
        disabled: ue,
        tabIndex: ee === j ? 0 : -1,
        onFocus: ie,
        onBlur: re,
        "aria-current": B === ee ? "date" : void 0,
        yearsPerRow: D,
        children: k.format(L, "year")
      }, k.format(L, "year"));
    })
  }));
});
process.env.NODE_ENV !== "production" && (Wn.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: a.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * className applied to the root element.
   */
  className: a.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: a.any,
  /**
   * If `true` picker is disabled
   */
  disabled: a.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: a.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: a.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: a.bool,
  gridLabelId: a.string,
  hasFocus: a.bool,
  /**
   * Maximal selectable date.
   */
  maxDate: a.any,
  /**
   * Minimal selectable date.
   */
  minDate: a.any,
  /**
   * Callback fired when the value changes.
   * @template TDate
   * @param {TDate} value The new value.
   */
  onChange: a.func,
  onFocusedViewChange: a.func,
  onYearFocus: a.func,
  /**
   * If `true` picker is readonly
   */
  readOnly: a.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid year using the validation props, except callbacks such as `shouldDisableYear`.
   */
  referenceDate: a.any,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: a.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: a.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: a.any,
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: a.oneOf([3, 4])
});
const Ta = (e) => De("MuiPickersCalendarHeader", e), Va = ge("MuiPickersCalendarHeader", ["root", "labelContainer", "label", "switchViewButton", "switchViewIcon"]), Ia = ["slots", "slotProps", "currentMonth", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onMonthChange", "onViewChange", "view", "reduceAnimations", "views", "labelId", "className", "timezone"], Aa = ["ownerState"], Ra = (e) => {
  const {
    classes: t
  } = e;
  return ye({
    root: ["root"],
    labelContainer: ["labelContainer"],
    label: ["label"],
    switchViewButton: ["switchViewButton"],
    switchViewIcon: ["switchViewIcon"]
  }, Ta, t);
}, Ea = Q("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex",
  alignItems: "center",
  marginTop: 16,
  marginBottom: 8,
  paddingLeft: 24,
  paddingRight: 12,
  // prevent jumping in safari
  maxHeight: 30,
  minHeight: 30
}), Oa = Q("div", {
  name: "MuiPickersCalendarHeader",
  slot: "LabelContainer",
  overridesResolver: (e, t) => t.labelContainer
})(({
  theme: e
}) => h({
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  cursor: "pointer",
  marginRight: "auto"
}, e.typography.body1, {
  fontWeight: e.typography.fontWeightMedium
})), La = Q("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Label",
  overridesResolver: (e, t) => t.label
})({
  marginRight: 6
}), Na = Q(dt, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewButton",
  overridesResolver: (e, t) => t.switchViewButton
})(({
  ownerState: e
}) => h({
  marginRight: "auto"
}, e.view === "year" && {
  [`.${Va.switchViewIcon}`]: {
    transform: "rotate(180deg)"
  }
})), Fa = Q(Go, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewIcon",
  overridesResolver: (e, t) => t.switchViewIcon
})(({
  theme: e
}) => ({
  willChange: "transform",
  transition: e.transitions.create("transform"),
  transform: "rotate(0deg)"
})), Hn = /* @__PURE__ */ f.forwardRef(function(t, o) {
  var s, n;
  const r = ot(), i = fe(), l = me({
    props: t,
    name: "MuiPickersCalendarHeader"
  }), {
    slots: c,
    slotProps: u,
    currentMonth: d,
    disabled: v,
    disableFuture: g,
    disablePast: p,
    maxDate: C,
    minDate: y,
    onMonthChange: M,
    onViewChange: S,
    view: m,
    reduceAnimations: w,
    views: x,
    labelId: D,
    className: E,
    timezone: O
  } = l, A = oe(l, Ia), P = l, $ = Ra(l), I = (s = c == null ? void 0 : c.switchViewButton) != null ? s : Na, N = ve({
    elementType: I,
    externalSlotProps: u == null ? void 0 : u.switchViewButton,
    additionalProps: {
      size: "small",
      "aria-label": r.calendarViewSwitchingButtonAriaLabel(m)
    },
    ownerState: P,
    className: $.switchViewButton
  }), F = (n = c == null ? void 0 : c.switchViewIcon) != null ? n : Fa, k = ve({
    elementType: F,
    externalSlotProps: u == null ? void 0 : u.switchViewIcon,
    ownerState: void 0,
    className: $.switchViewIcon
  }), b = oe(k, Aa), W = () => M(i.addMonths(d, 1), "left"), q = () => M(i.addMonths(d, -1), "right"), B = hr(d, {
    disableFuture: g,
    maxDate: C,
    timezone: O
  }), U = mr(d, {
    disablePast: p,
    minDate: y,
    timezone: O
  }), j = () => {
    if (!(x.length === 1 || !S || v))
      if (x.length === 2)
        S(x.find((X) => X !== m) || x[0]);
      else {
        const X = x.indexOf(m) !== 0 ? 0 : 1;
        S(x[X]);
      }
  };
  return x.length === 1 && x[0] === "year" ? null : /* @__PURE__ */ he(Ea, h({}, A, {
    ownerState: P,
    className: pe(E, $.root),
    ref: o,
    children: [/* @__PURE__ */ he(Oa, {
      role: "presentation",
      onClick: j,
      ownerState: P,
      "aria-live": "polite",
      className: $.labelContainer,
      children: [/* @__PURE__ */ T(Bn, {
        reduceAnimations: w,
        transKey: i.format(d, "monthAndYear"),
        children: /* @__PURE__ */ T(La, {
          id: D,
          ownerState: P,
          className: $.label,
          children: i.format(d, "monthAndYear")
        })
      }), x.length > 1 && !v && /* @__PURE__ */ T(I, h({}, N, {
        children: /* @__PURE__ */ T(F, h({}, b))
      }))]
    }), /* @__PURE__ */ T(kt, {
      in: m === "day",
      children: /* @__PURE__ */ T(rs, {
        slots: c,
        slotProps: u,
        onGoToPrevious: q,
        isPreviousDisabled: U,
        previousLabel: r.previousMonth,
        onGoToNext: W,
        isNextDisabled: B,
        nextLabel: r.nextMonth
      })
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Hn.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * className applied to the root element.
   */
  className: a.string,
  currentMonth: a.any.isRequired,
  disabled: a.bool,
  disableFuture: a.bool,
  disablePast: a.bool,
  labelId: a.string,
  maxDate: a.any.isRequired,
  minDate: a.any.isRequired,
  onMonthChange: a.func.isRequired,
  onViewChange: a.func,
  reduceAnimations: a.bool.isRequired,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: a.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: a.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  timezone: a.string.isRequired,
  view: a.oneOf(["day", "month", "year"]).isRequired,
  views: a.arrayOf(a.oneOf(["day", "month", "year"]).isRequired).isRequired
});
const $a = Q("div")({
  overflow: "hidden",
  width: Et,
  maxHeight: Ot,
  display: "flex",
  flexDirection: "column",
  margin: "0 auto"
}), Ba = (e) => De("MuiDateCalendar", e);
ge("MuiDateCalendar", ["root", "viewTransitionContainer"]);
const _a = ["autoFocus", "onViewChange", "value", "defaultValue", "referenceDate", "disableFuture", "disablePast", "defaultCalendarMonth", "onChange", "onYearChange", "onMonthChange", "reduceAnimations", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "view", "views", "openTo", "className", "disabled", "readOnly", "minDate", "maxDate", "disableHighlightToday", "focusedView", "onFocusedViewChange", "showDaysOutsideCurrentMonth", "fixedWeekNumber", "dayOfWeekFormatter", "components", "componentsProps", "slots", "slotProps", "loading", "renderLoading", "displayWeekNumber", "yearsPerRow", "monthsPerRow", "timezone"], Wa = (e) => {
  const {
    classes: t
  } = e;
  return ye({
    root: ["root"],
    viewTransitionContainer: ["viewTransitionContainer"]
  }, Ba, t);
};
function Ha(e, t) {
  var o, s, n, r, i, l, c;
  const u = fe(), d = Rt(), v = wn(), g = me({
    props: e,
    name: t
  });
  return h({}, g, {
    loading: (o = g.loading) != null ? o : !1,
    disablePast: (s = g.disablePast) != null ? s : !1,
    disableFuture: (n = g.disableFuture) != null ? n : !1,
    openTo: (r = g.openTo) != null ? r : "day",
    views: (i = g.views) != null ? i : ["year", "day"],
    reduceAnimations: (l = g.reduceAnimations) != null ? l : v,
    renderLoading: (c = g.renderLoading) != null ? c : () => /* @__PURE__ */ T("span", {
      children: "..."
    }),
    minDate: Ne(u, g.minDate, d.minDate),
    maxDate: Ne(u, g.maxDate, d.maxDate)
  });
}
const za = Q($a, {
  name: "MuiDateCalendar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex",
  flexDirection: "column",
  height: Ot
}), Ya = Q(Bn, {
  name: "MuiDateCalendar",
  slot: "ViewTransitionContainer",
  overridesResolver: (e, t) => t.viewTransitionContainer
})({}), zn = /* @__PURE__ */ f.forwardRef(function(t, o) {
  var s, n, r;
  const i = fe(), l = an(), c = Ha(t, "MuiDateCalendar"), {
    autoFocus: u,
    onViewChange: d,
    value: v,
    defaultValue: g,
    referenceDate: p,
    disableFuture: C,
    disablePast: y,
    defaultCalendarMonth: M,
    onChange: S,
    onYearChange: m,
    onMonthChange: w,
    reduceAnimations: x,
    shouldDisableDate: D,
    shouldDisableMonth: E,
    shouldDisableYear: O,
    view: A,
    views: P,
    openTo: $,
    className: I,
    disabled: N,
    readOnly: F,
    minDate: k,
    maxDate: b,
    disableHighlightToday: W,
    focusedView: q,
    onFocusedViewChange: B,
    showDaysOutsideCurrentMonth: U,
    fixedWeekNumber: j,
    dayOfWeekFormatter: X,
    components: ae,
    componentsProps: le,
    slots: _,
    slotProps: G,
    loading: se,
    renderLoading: V,
    displayWeekNumber: te,
    yearsPerRow: ie,
    monthsPerRow: re,
    timezone: H
  } = c, K = oe(c, _a), {
    value: L,
    handleValueChange: ee,
    timezone: be
  } = Nt({
    name: "DateCalendar",
    timezone: H,
    value: v,
    defaultValue: g,
    onChange: S,
    valueManager: je
  }), {
    view: ue,
    setView: Ae,
    focusedView: Z,
    setFocusedView: J,
    goToNextView: R,
    setValueAndGoToNextView: z
  } = Sn({
    view: A,
    views: P,
    openTo: $,
    onChange: ee,
    onViewChange: d,
    autoFocus: u,
    focusedView: q,
    onFocusedViewChange: B
  }), {
    referenceDate: ne,
    calendarState: de,
    changeFocusedDay: we,
    changeMonth: Ce,
    handleChangeMonth: $e,
    isDateDisabled: Me,
    onMonthSwitchingAnimationEnd: Ke
  } = jr({
    value: L,
    defaultCalendarMonth: M,
    referenceDate: p,
    reduceAnimations: x,
    onMonthChange: w,
    minDate: k,
    maxDate: b,
    shouldDisableDate: D,
    disablePast: y,
    disableFuture: C,
    timezone: be
  }), Ze = N && L || k, Re = N && L || b, ht = `${l}-grid-label`, Qe = Z !== null, xe = (s = (n = _ == null ? void 0 : _.calendarHeader) != null ? n : ae == null ? void 0 : ae.CalendarHeader) != null ? s : Hn, Yn = ve({
    elementType: xe,
    externalSlotProps: (r = G == null ? void 0 : G.calendarHeader) != null ? r : le == null ? void 0 : le.calendarHeader,
    additionalProps: {
      views: P,
      view: ue,
      currentMonth: de.currentMonth,
      onViewChange: Ae,
      onMonthChange: (ce, Pe) => $e({
        newMonth: ce,
        direction: Pe
      }),
      minDate: Ze,
      maxDate: Re,
      disabled: N,
      disablePast: y,
      disableFuture: C,
      reduceAnimations: x,
      timezone: be,
      labelId: ht,
      slots: _,
      slotProps: G
    },
    ownerState: c
  }), Un = Y((ce) => {
    const Pe = i.startOfMonth(ce), Je = i.endOfMonth(ce), Ee = Me(ce) ? tt({
      utils: i,
      date: ce,
      minDate: i.isBefore(k, Pe) ? Pe : k,
      maxDate: i.isAfter(b, Je) ? Je : b,
      disablePast: y,
      disableFuture: C,
      isDateDisabled: Me,
      timezone: be
    }) : ce;
    Ee ? (z(Ee, "finish"), w == null || w(Pe)) : (R(), Ce(Pe)), we(Ee, !0);
  }), jn = Y((ce) => {
    const Pe = i.startOfYear(ce), Je = i.endOfYear(ce), Ee = Me(ce) ? tt({
      utils: i,
      date: ce,
      minDate: i.isBefore(k, Pe) ? Pe : k,
      maxDate: i.isAfter(b, Je) ? Je : b,
      disablePast: y,
      disableFuture: C,
      isDateDisabled: Me,
      timezone: be
    }) : ce;
    Ee ? (z(Ee, "finish"), m == null || m(Ee)) : (R(), Ce(Pe)), we(Ee, !0);
  }), qn = Y((ce) => ee(ce && Mt(i, ce, L ?? ne), "finish"));
  f.useEffect(() => {
    L != null && i.isValid(L) && Ce(L);
  }, [L]);
  const mt = c, $t = Wa(mt), gt = {
    disablePast: y,
    disableFuture: C,
    maxDate: b,
    minDate: k
  }, yt = {
    disableHighlightToday: W,
    readOnly: F,
    disabled: N,
    timezone: be,
    gridLabelId: ht
  }, bt = f.useRef(ue);
  f.useEffect(() => {
    bt.current !== ue && (Z === bt.current && J(ue, !0), bt.current = ue);
  }, [Z, J, ue]);
  const Gn = f.useMemo(() => [L], [L]);
  return /* @__PURE__ */ he(za, h({
    ref: o,
    className: pe($t.root, I),
    ownerState: mt
  }, K, {
    children: [/* @__PURE__ */ T(xe, h({}, Yn)), /* @__PURE__ */ T(Ya, {
      reduceAnimations: x,
      className: $t.viewTransitionContainer,
      transKey: ue,
      ownerState: mt,
      children: /* @__PURE__ */ he("div", {
        children: [ue === "year" && /* @__PURE__ */ T(Wn, h({}, gt, yt, {
          value: L,
          onChange: jn,
          shouldDisableYear: O,
          hasFocus: Qe,
          onFocusedViewChange: (ce) => J("year", ce),
          yearsPerRow: ie,
          referenceDate: ne
        })), ue === "month" && /* @__PURE__ */ T(_n, h({}, gt, yt, {
          hasFocus: Qe,
          className: I,
          value: L,
          onChange: Un,
          shouldDisableMonth: E,
          onFocusedViewChange: (ce) => J("month", ce),
          monthsPerRow: re,
          referenceDate: ne
        })), ue === "day" && /* @__PURE__ */ T(Yr, h({}, de, gt, yt, {
          onMonthSwitchingAnimationEnd: Ke,
          onFocusedDayChange: we,
          reduceAnimations: x,
          selectedDays: Gn,
          onSelectedDaysChange: qn,
          shouldDisableDate: D,
          shouldDisableMonth: E,
          shouldDisableYear: O,
          hasFocus: Qe,
          onFocusedViewChange: (ce) => J("day", ce),
          showDaysOutsideCurrentMonth: U,
          fixedWeekNumber: j,
          dayOfWeekFormatter: X,
          displayWeekNumber: te,
          components: ae,
          componentsProps: le,
          slots: _,
          slotProps: G,
          loading: se,
          renderLoading: V
        }))]
      })
    })]
  }));
});
process.env.NODE_ENV !== "production" && (zn.propTypes = {
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
  autoFocus: a.bool,
  classes: a.object,
  className: a.string,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: a.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: a.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter.  Deprecated, will be removed in v7: Use `date` instead.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (_day: string, date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: a.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   */
  defaultCalendarMonth: a.any,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: a.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: a.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: a.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: a.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: a.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: a.number,
  /**
   * Controlled focused view.
   */
  focusedView: a.oneOf(["day", "month", "year"]),
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: a.bool,
  /**
   * Maximal selectable date.
   */
  maxDate: a.any,
  /**
   * Minimal selectable date.
   */
  minDate: a.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: a.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @template TDate
   * @param {TDate | null} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   */
  onChange: a.func,
  /**
   * Callback fired on focused view change.
   * @template TView
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: a.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: a.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: a.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: a.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: a.oneOf(["day", "month", "year"]),
  /**
   * Make picker read only.
   * @default false
   */
  readOnly: a.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: a.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`.
   */
  referenceDate: a.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: a.func,
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: a.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: a.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: a.func,
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
  showDaysOutsideCurrentMonth: a.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: a.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: a.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: a.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: a.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: a.oneOf(["day", "month", "year"]),
  /**
   * Available views.
   */
  views: a.arrayOf(a.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: a.oneOf([3, 4])
});
const Ti = ({
  view: e,
  onViewChange: t,
  views: o,
  focusedView: s,
  onFocusedViewChange: n,
  value: r,
  defaultValue: i,
  referenceDate: l,
  onChange: c,
  className: u,
  classes: d,
  disableFuture: v,
  disablePast: g,
  minDate: p,
  maxDate: C,
  shouldDisableDate: y,
  shouldDisableMonth: M,
  shouldDisableYear: S,
  reduceAnimations: m,
  onMonthChange: w,
  monthsPerRow: x,
  onYearChange: D,
  yearsPerRow: E,
  defaultCalendarMonth: O,
  components: A,
  componentsProps: P,
  slots: $,
  slotProps: I,
  loading: N,
  renderLoading: F,
  disableHighlightToday: k,
  readOnly: b,
  disabled: W,
  showDaysOutsideCurrentMonth: q,
  dayOfWeekFormatter: B,
  sx: U,
  autoFocus: j,
  fixedWeekNumber: X,
  displayWeekNumber: ae,
  timezone: le
}) => /* @__PURE__ */ T(zn, {
  view: e,
  onViewChange: t,
  views: o.filter(zt),
  focusedView: s && zt(s) ? s : null,
  onFocusedViewChange: n,
  value: r,
  defaultValue: i,
  referenceDate: l,
  onChange: c,
  className: u,
  classes: d,
  disableFuture: v,
  disablePast: g,
  minDate: p,
  maxDate: C,
  shouldDisableDate: y,
  shouldDisableMonth: M,
  shouldDisableYear: S,
  reduceAnimations: m,
  onMonthChange: w,
  monthsPerRow: x,
  onYearChange: D,
  yearsPerRow: E,
  defaultCalendarMonth: O,
  components: A,
  componentsProps: P,
  slots: $,
  slotProps: I,
  loading: N,
  renderLoading: F,
  disableHighlightToday: k,
  readOnly: b,
  disabled: W,
  showDaysOutsideCurrentMonth: q,
  dayOfWeekFormatter: B,
  sx: U,
  autoFocus: j,
  fixedWeekNumber: X,
  displayWeekNumber: ae,
  timezone: le
});
export {
  ci as A,
  Sn as B,
  yi as C,
  bi as D,
  Mo as E,
  rs as F,
  Co as G,
  pi as H,
  zn as I,
  hi as J,
  bn as L,
  wi as M,
  gi as P,
  ke as S,
  vi as T,
  Ot as V,
  ot as a,
  Rt as b,
  qo as c,
  Ne as d,
  ui as e,
  Ci as f,
  je as g,
  mi as h,
  ki as i,
  Ti as j,
  Mi as k,
  Pi as l,
  zo as m,
  Po as n,
  zt as o,
  Si as p,
  di as q,
  fi as r,
  xi as s,
  Di as t,
  fe as u,
  br as v,
  un as w,
  $a as x,
  Nt as y,
  st as z
};
