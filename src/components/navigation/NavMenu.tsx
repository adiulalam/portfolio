import { useDrawer } from "@/hooks";
import { NavMenuProfile, NavMenuLink, NavMenuContacts } from ".";
import { List, useTheme, useMediaQuery, Box } from "@mui/material";

export const NavMenu = () => {
  const { setIsDrawerOpen } = useDrawer();
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
      <NavMenuProfile />
      <Box
        sx={{
          height: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <NavMenuLink to="home" title="Home" onClickHandler={handleItemClick} />
        <NavMenuLink
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
        <NavMenuContacts />
      </Box>
    </List>
  );
};
