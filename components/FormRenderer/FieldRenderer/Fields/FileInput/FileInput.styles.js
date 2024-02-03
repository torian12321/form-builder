import { s as t } from "../../../../../styled-c6437ab8.js";
import { T as e } from "../../../../../Typography-cd3e79a2.js";
import "react";
import "../../../../../clsx-f0826a09.js";
import "../../../../../useThemeProps-7889d54e.js";
import "react/jsx-runtime";
import "../../../../../extendSxProp-e33cd6d1.js";
const m = {
  width: "100%",
  padding: "1rem",
  boxSizing: "border-box",
  border: "2px dashed  #ccc",
  textAlign: "center",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  "& .MuiButton-root, & .MuiIconButton-root": {
    position: "absolute",
    top: "0.5rem",
    right: "0.5rem"
  },
  "& .MuiLinearProgress-root": {
    position: "absolute",
    bottom: 0,
    width: "calc(100% - 2rem)"
  },
  "& .MuiFormHelperText-root": {
    position: "absolute",
    bottom: "-1.3rem",
    textAlign: "center",
    width: "calc(100% - 2rem)",
    color: "error.main"
  }
}, d = {
  display: "flex",
  width: "calc(100% - 40px)",
  fontSize: "14px",
  mt: "4px",
  "&.error": {
    color: "error.main"
  },
  "& .iconwrap": {
    display: "flex",
    height: "100%",
    cursor: "pointer",
    "&:hover": {
      color: "action.disabled"
    }
  }
}, x = t(e, {
  shouldForwardProp: (o) => !["error"].includes(o)
})(({ theme: o, error: r = !1 }) => ({
  width: "calc(100% - 40px)",
  textAlign: "left",
  color: r ? o.palette.error.main : "initial"
}));
export {
  x as PlaceholderBox,
  m as fileInputStyles,
  d as filesToUploadStyles
};
