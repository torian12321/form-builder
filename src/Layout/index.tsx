import type { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { Body } from "./Body";

// const drawerWidth = 240;

export const ResponsiveDrawer = ({ children }: PropsWithChildren) => (
  <Box sx={{ display: "flex" }}>
    <Header />
    <SideBar />
    <Body>{children}</Body>
  </Box>
);
