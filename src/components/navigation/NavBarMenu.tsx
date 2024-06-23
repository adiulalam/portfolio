import { NavBarProfile, NavBarLink, NavBarContacts } from ".";
import { List, useTheme, useMediaQuery, Box } from "@mui/material";
import type { Dispatch, SetStateAction } from "react";

export const NavBarMenu = ({
  setIsDrawerOpen,
}: {
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const theme = useTheme();
  const isMinScreenMd = useMediaQuery(theme.breakpoints.up("md"));
  const handleItemClick = () => {
    if (!isMinScreenMd) {
      setIsDrawerOpen((prev) => !prev);
    }
  };

  return (
    <List
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBarProfile />
      <Box
        sx={{
          height: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <NavBarLink to="home" title="Home" onClickHandler={handleItemClick} />
        <NavBarLink
          to="portfolio"
          title="Portfolio"
          onClickHandler={handleItemClick}
        />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
        }}
      />

      <Box
        sx={{
          alignSelf: "center",
        }}
      >
        <NavBarContacts />
      </Box>
    </List>
  );
};
