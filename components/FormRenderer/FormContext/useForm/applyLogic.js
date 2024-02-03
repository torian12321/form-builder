import { mergeDeep as f } from "../../../utils/objectUtils.js";
import { isString as b } from "../../../utils/textUtils.js";
import { LOGIC_TYPES as c, LOGIC_ACTIONS as l } from "../../FormRenderer.constants.js";
const h = (e, r = []) => {
  let t = { ...e };
  return r.forEach(({ actions: i = [], condition: a }) => {
    const s = p(e, a);
    i.forEach(({ action: o, ref: n }) => {
      (b(n) ? [n] : n).forEach((A) => {
        if (!E(e, A))
          return;
        const y = f(
          t[A],
          L(o, s)
        );
        t = {
          ...t,
          [A]: y
        };
      });
    });
  }), t;
}, E = (e, r) => !!e[r], d = (e, r) => !!(e[r] && e[r].visible), v = (e) => [c.AND, c.OR].includes(e.type), p = (e, r) => {
  if (v(r)) {
    const { type: o, conditions: n = [] } = r;
    switch (o) {
      case c.OR:
        return n.some(
          (u) => p(e, u)
        );
      case c.AND:
        return n.every(
          (u) => p(e, u)
        );
      default:
        return !1;
    }
  }
  const { type: t, ref: i } = r, a = e[i].value;
  if (!E(e, i) || !d(e, i))
    return !1;
  if (r.type === c.HAS_VALUE)
    return ![void 0, null, ""].includes(a);
  const { value: s } = r;
  switch (t) {
    case c.EQUAL:
      return Array.isArray(s) ? s.includes(a) : a === s;
    case c.NOT_EQUAL:
      return Array.isArray(s) ? !s.includes(a) : a !== s;
    case c.LOWER_THAN:
      return a < s;
    case c.GREATER_THAN:
      return a > s;
    default:
      return !1;
  }
}, L = (e, r) => {
  const t = {
    validations: {}
  };
  switch (e) {
    case l.SHOW:
      t.visible = r;
      break;
    case l.HIDDE:
      t.visible = !r;
      break;
    case l.MAKE_MANDATORY:
      t.validations.required = r;
      break;
    case l.MAKE_DISABLED:
      t.disabled = r;
      break;
  }
  return t;
};
export {
  h as applyFieldLogic
};
