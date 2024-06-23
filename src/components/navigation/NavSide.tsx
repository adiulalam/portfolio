import { Drawer, useMediaQuery, useTheme } from "@mui/material";
import type { Dispatch, SetStateAction } from "react";

type NavSideProps = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
};

const drawerWidth = 300;

export const NavSide = ({
  children,
  isDrawerOpen,
  setIsDrawerOpen,
}: NavSideProps) => {
  const theme = useTheme();
  const isMaxScreenMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Drawer
      variant={isMaxScreenMd ? "temporary" : "persistent"}
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      sx={[
        {
          "& .MuiDrawer-paper": {
            backgroundColor: "black",
            color: "white",
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: "nowrap",
          },
        },
        isDrawerOpen && {
          width: drawerWidth,
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
        !isDrawerOpen && {
          transition: theme.transitions.create(
            ["width", "margin", "visibility"],
            {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }
          ),
          overflowX: "hidden",
          width: 0,
        },
      ]}
    >
      {children}
    </Drawer>
  );
};
