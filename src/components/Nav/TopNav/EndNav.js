import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";

import Contacts from "../../Contacts";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingLeft: "0px",
  },
}));

const EndNav = () => {
  const classes = useStyles();

  return (
    <Toolbar
      classes={{
        gutters: classes.toolbar,
      }}
    >
      <Contacts />
    </Toolbar>
  );
};

export default EndNav;
