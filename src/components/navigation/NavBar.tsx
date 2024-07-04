import { NavSide, NavTop } from ".";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { DrawerProvider } from "@/provider";

export const NavBar = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const isMaxScreenMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <DrawerProvider>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <NavTop />
        <NavSide />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            overflow: "hidden",
          }}
        >
          <Box
            sx={[
              isMaxScreenMd && {
                ...theme.mixins.toolbar,
              },
            ]}
          />
          {children}
        </Box>
      </Box>
    </DrawerProvider>
  );
};
