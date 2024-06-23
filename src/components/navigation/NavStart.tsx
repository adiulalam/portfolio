import { Toolbar, IconButton } from "@mui/material";
import { Menu as MenuIcon, Cancel as CancelIcon } from "@mui/icons-material";
import type { Dispatch, SetStateAction } from "react";

type NavStartProps = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
};

export const NavStart = ({ isDrawerOpen, setIsDrawerOpen }: NavStartProps) => {
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
