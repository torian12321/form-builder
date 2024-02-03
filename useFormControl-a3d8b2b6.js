import * as e from "react";
function h({
  controlled: n,
  default: r,
  name: t,
  state: s = "value"
}) {
  const {
    current: o
  } = e.useRef(n !== void 0), [l, u] = e.useState(r), f = o ? n : l;
  if (process.env.NODE_ENV !== "production") {
    e.useEffect(() => {
      o !== (n !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${s} state of ${t} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${t} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [s, t, n]);
    const {
      current: i
    } = e.useRef(r);
    e.useEffect(() => {
      !o && i !== r && console.error([`MUI: A component is changing the default ${s} state of an uncontrolled ${t} after being initialized. To suppress this warning opt to use a controlled ${t}.`].join(`
`));
    }, [JSON.stringify(r)]);
  }
  const d = e.useCallback((i) => {
    o || u(i);
  }, []);
  return [f, d];
}
const c = /* @__PURE__ */ e.createContext(void 0);
process.env.NODE_ENV !== "production" && (c.displayName = "FormControlContext");
const a = c;
function m() {
  return e.useContext(a);
}
export {
  a as F,
  m as a,
  h as u
};
