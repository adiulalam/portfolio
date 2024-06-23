import { AppBar, useTheme } from "@mui/material";

export const NavTop = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

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
      {children}
    </AppBar>
  );
};
