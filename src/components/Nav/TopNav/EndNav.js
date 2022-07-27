import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";

import Contacts from "../../Contacts";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingLeft: "0px",
  },
}));

const EndNav = (portfolioProps) => {
  const portfolioContent = portfolioProps.portfolioProps;
  // console.log(portfolioContent)
  const classes = useStyles();

  return (
    <Toolbar
      classes={{
        gutters: classes.toolbar,
      }}
    >
      <Contacts portfolioProps = {portfolioContent}/>
    </Toolbar>
  );
};

export default EndNav;
