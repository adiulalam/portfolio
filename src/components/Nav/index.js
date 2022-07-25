import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import clsx from "clsx";

import TopNav from "./TopNav";
import SideNav from "./SideNav";
import { setDrawer } from "../../redux/actions/layout";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    overflow: "hidden",
  },
  toolbar: {
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));
const NavBar = ({ children, portfolioProps }) => {
  // console.log("portfolioProps----->", portfolioProps )
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const isMaxScreenSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isDrawerOpen = useSelector(({ layout }) => layout.drawerSize) !== 0;

  useEffect(() => {
    if (isMaxScreenSm !== null) dispatch(setDrawer(isMaxScreenSm ? 0 : 300));
  }, [isMaxScreenSm]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={classes.root}>
      {isMaxScreenSm && !isDrawerOpen && <TopNav />}
      <SideNav portfolioProps = {portfolioProps} />
      <div className={classes.content}>
        <div className={clsx({ [classes.toolbar]: isMaxScreenSm })} />
        {children}
      </div>
    </div>
  );
};

export default NavBar;
