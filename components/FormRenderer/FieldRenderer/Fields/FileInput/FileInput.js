import q, { jsx as r, jsxs as B } from "react/jsx-runtime";
import { useState as g, useRef as Z, useEffect as T } from "react";
import { r as H, i as N } from "../../../../../createSvgIcon-8609ef4a.js";
import { LoadingBar as U } from "../../../../LoadingBar/LoadingBar.js";
import { FIELD_TYPE as V } from "../../../FormRenderer.constants.js";
import { fileInputStyles as ee, PlaceholderBox as te, filesToUploadStyles as R } from "./FileInput.styles.js";
import { u as re } from "../../../../../useTheme-f100ae81.js";
import { M as b } from "../../../../../Box-6fc25e2b.js";
import { M as oe } from "../../../../../Button-1104b2f9.js";
import { I as ne } from "../../../../../IconButton-cb9cf13b.js";
import { M as le } from "../../../../../FormHelperText-5a47fd9c.js";
import "../../../../../styled-c6437ab8.js";
import "../../../../../createSvgIcon-4c228bdf.js";
import "../../../../../clsx-f0826a09.js";
import "../../../../../useThemeProps-7889d54e.js";
import "../../../../../TransitionGroupContext-fe4c547b.js";
import "../../../../../unsupportedProp-3dbf01f6.js";
import "../../../../../useFormControl-a3d8b2b6.js";
import "../../../../../ButtonBase-b38416c5.js";
import "../../../../../emotion-react.browser.esm-3aa427f2.js";
import "../../../../../Typography-cd3e79a2.js";
import "../../../../../extendSxProp-e33cd6d1.js";
var z = {}, ae = N;
Object.defineProperty(z, "__esModule", {
  value: !0
});
var k = z.default = void 0, ce = ae(H()), ie = q, se = (0, ce.default)(/* @__PURE__ */ (0, ie.jsx)("path", {
  d: "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"
}), "AttachFile");
k = z.default = se;
var E = {}, ue = N;
Object.defineProperty(E, "__esModule", {
  value: !0
});
var S = E.default = void 0, fe = ue(H()), pe = q, me = (0, fe.default)(/* @__PURE__ */ (0, pe.jsx)("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), "Delete");
S = E.default = me;
const h = (n) => {
  if (!n)
    return "0 Bytes";
  const o = 1024, l = 2, I = ["Bytes", "KB", "MB"], M = Math.floor(Math.log(n) / Math.log(o));
  return `${parseFloat(
    (n / Math.pow(o, M)).toFixed(l)
  )} ${I[M]}`;
}, qe = (n) => n.type !== V.FILE_UPLOAD ? null : /* @__PURE__ */ r(de, { ...n }), de = ({
  accept: n = [],
  isUploading: o = !1,
  sizeLimit: l,
  isUsingIcon: I = !0,
  placeholder: M = "Drop a file",
  multiple: j,
  onChange: u
}) => {
  const [x, a] = g(""), [v, d] = g([]), [D, f] = g(null), [p, m] = g(null), [O, F] = g(!1), P = re(), c = Z(null);
  T(() => {
    o || (f(null), m(null));
  }, [o]);
  const K = (e) => {
    e.preventDefault(), c.current && (c.current.style.backgroundColor = P.palette.background.default);
  }, L = (e) => {
    var t;
    if (c.current) {
      if (((t = e == null ? void 0 : e.relatedTarget) == null ? void 0 : t.parentNode) === c.current)
        return;
      c.current.style.backgroundColor = "";
    }
  }, w = /(image|application|text)\/.*$/, A = (e) => {
    if (!e || o)
      return;
    if (l && e.size > l) {
      a(
        `Attachment cannot be greater than ${h(
          l
        )}. (${h(e.size)})`
      ), f(e), u(void 0);
      return;
    }
    if (!w.test(e.type)) {
      a("This field contains an invalid file type."), f(e), u(void 0);
      return;
    }
    f(e), u(e);
  }, C = (e) => {
    if (e && !o) {
      d([]);
      for (let t = 0; t < e.length; ++t) {
        const i = e[t], s = v;
        if (l && i.size > l) {
          a(
            `Attachment cannot be greater than ${h(
              l
            )}. (${h(i.size)})`
          ), d(s == null ? void 0 : s.concat([t])), m(e), u(void 0);
          return;
        }
        if (!w.test(i.type)) {
          a("This field contains an invalid file type.");
          const y = s == null ? void 0 : s.concat([t]);
          d(y), m(e), u(void 0);
          return;
        }
      }
      m(e), u(e);
    }
  }, Y = (e) => {
    if (e.preventDefault(), c.current && (c.current.style.backgroundColor = ""), a(""), d([]), e.dataTransfer.files.length > 1 && (F(!0), C(e.dataTransfer.files), f(null)), e.dataTransfer.files.length <= 1) {
      F(!1), m(null);
      const t = e.dataTransfer.files[0];
      A(t);
    }
  }, G = (e) => {
    var t;
    if ((t = e.target.files) != null && t.length && (a(""), d([]), e.target.files.length > 1 && (F(!0), C(e.target.files), f(null)), e.target.files.length <= 1)) {
      F(!1), m(null);
      const i = e.target.files[0];
      A(i);
    }
  }, J = (e) => {
    e.target.value = "";
  }, _ = D ? `${D.name} (${h(D.size)})` : null, Q = (e, t) => {
    const i = p;
    if (!i)
      return;
    const s = Array.from(i).filter(
      ($) => $ !== e
    ), y = v.filter(($) => $ !== t);
    y.length <= 0 && a(""), d(y), m(s);
  }, W = () => {
    a(""), u(void 0), f(null);
  };
  return /* @__PURE__ */ B(
    b,
    {
      sx: ee,
      onDragOver: K,
      onDragLeave: L,
      onDrop: Y,
      ref: c,
      role: "document",
      children: [
        /* @__PURE__ */ r(
          "input",
          {
            id: "file-input",
            type: "file",
            onChange: G,
            onClick: J,
            hidden: !0,
            accept: n.join(", "),
            alt: "Hidden File Input",
            multiple: j
          }
        ),
        /* @__PURE__ */ r(te, { variant: "body2", error: !!x, children: !_ && (!p || (p == null ? void 0 : p.length) <= 0) ? M : "" }),
        I ? /* @__PURE__ */ r(
          ne,
          {
            component: "label",
            htmlFor: "file-input",
            disabled: o,
            size: "small",
            children: /* @__PURE__ */ r(k, { color: "info" })
          }
        ) : /* @__PURE__ */ r(
          oe,
          {
            variant: "outlined",
            component: "label",
            htmlFor: "file-input",
            color: "info",
            size: "small",
            startIcon: /* @__PURE__ */ r(k, { color: "info" }),
            disabled: o,
            children: "Choose a file"
          }
        ),
        /* @__PURE__ */ r(U, { show: o }),
        !!x && /* @__PURE__ */ r(le, { children: x }),
        p && Array.from(p).map((e, t) => /* @__PURE__ */ B(
          b,
          {
            sx: R,
            className: v != null && v.includes(t) ? "error" : "",
            children: [
              e.name,
              " ",
              h(e.size),
              /* @__PURE__ */ r("span", { className: "iconwrap", onClick: () => Q(e, t), children: /* @__PURE__ */ r(S, { fontSize: "small" }) })
            ]
          },
          e.name
        )),
        _ && !O ? /* @__PURE__ */ B(
          b,
          {
            sx: R,
            className: x !== "" ? "error" : "",
            children: [
              _,
              /* @__PURE__ */ r("span", { className: "iconwrap", onClick: W, children: /* @__PURE__ */ r(S, { fontSize: "small" }) })
            ]
          }
        ) : null
      ]
    }
  );
};
export {
  qe as FileInput,
  h as formatFileSize
};
