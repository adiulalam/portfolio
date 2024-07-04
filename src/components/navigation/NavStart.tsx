import { Toolbar, IconButton } from "@mui/material";
import { Menu as MenuIcon, Cancel as CancelIcon } from "@mui/icons-material";
import { useDrawer } from "@/hooks";

export const NavStart = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useDrawer();

  return (
    <Toolbar>
      <IconButton
        aria-label="open drawer"
        edge="start"
        sx={{
          color: "white",
        }}
        onClick={() => setIsDrawerOpen((prev) => !prev)}
      >
        {isDrawerOpen ? <CancelIcon /> : <MenuIcon />}
      </IconButton>
    </Toolbar>
  );
};
