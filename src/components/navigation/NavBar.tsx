import { useEffect, useState } from "react";
import { NavBarMenu, NavEnd, NavSide, NavStart, NavTop } from ".";
import { Box, useMediaQuery, useTheme } from "@mui/material";

export const NavBar = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMaxScreenMd = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (isMaxScreenMd !== null) {
      setIsDrawerOpen(!isMaxScreenMd);
    }
  }, [isMaxScreenMd]);

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {isMaxScreenMd && !isDrawerOpen && (
        <NavTop>
          <NavStart
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
          />
          <Box
            sx={{
              flexGrow: 1,
            }}
          />
          <NavEnd />
        </NavTop>
      )}
      <NavSide isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}>
        <Box sx={{ ...theme.mixins.toolbar }}>
          {isMaxScreenMd && (
            <NavStart
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
            />
          )}
        </Box>
        <NavBarMenu setIsDrawerOpen={setIsDrawerOpen} />
      </NavSide>
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
              // necessary for content to be below app bar
              ...theme.mixins.toolbar,
            },
          ]}
        />
        {children}
      </Box>
    </Box>
  );
};
