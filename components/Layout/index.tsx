import { Box, Grid } from "@mui/material";
import { ReactNode } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

const drawerWidth = 240;

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Grid>
      <Sidebar drawerWidth={drawerWidth}></Sidebar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          boxSizing: "border-box",
          paddingLeft: `${drawerWidth}px`,
        }}
      >
        <Header></Header>
        {children}
      </Box>
    </Grid>
  );
}
