import { AppBar, Box, useMediaQuery, useTheme } from "@mui/material";
import { NavEnd, NavStart } from ".";
import { useDrawer } from "@/hooks";

export const NavTop = () => {
  const theme = useTheme();
  const isMaxScreenMd = useMediaQuery(theme.breakpoints.down("md"));
  const { isDrawerOpen } = useDrawer();

  if (!isMaxScreenMd && isDrawerOpen) return null;

  return (
    <AppBar
      elevation={0}
      position="fixed"
      sx={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "row",
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }}
    >
      <NavStart />
      <Box
        sx={{
          flexGrow: 1,
        }}
      />
      {!isDrawerOpen && <NavEnd />}
    </AppBar>
  );
};
