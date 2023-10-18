import type { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { Body } from "./Body";

export const ResponsiveDrawer = ({ children }: PropsWithChildren) => (
  <Box sx={{ display: "flex" }}>
    <Header />
    <SideBar />
    <Body>{children}</Body>
  </Box>
);
