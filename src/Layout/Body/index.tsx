import type { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;

export const Body = ({ children }: PropsWithChildren) => (
  <Box sx={{ display: "flex" }}>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />
      {children}
    </Box>
  </Box>
);
