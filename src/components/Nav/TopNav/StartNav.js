import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

import { toggleDrawer } from "../../../redux/actions/layout";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: "0px",
  },
  iconButton: {
    color: "white",
  },
}));

const StartNav = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Toolbar
      classes={{
        gutters: classes.toolbar,
      }}
    >
      <IconButton
        aria-label="open drawer"
        edge="start"
        className={classes.iconButton}
        onClick={() => dispatch(toggleDrawer())}
      >
        <MenuIcon />
      </IconButton>
    </Toolbar>
  );
};

export default StartNav;
