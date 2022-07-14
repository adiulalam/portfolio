import React from "react";
import { makeStyles } from "@material-ui/core/";
import { LinkedIn, Email, GitHub } from "@material-ui/icons";

import content from "../content.json";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: theme.spacing(2),
  },
  icon: {
    margin: theme.spacing(0.5, 1),
    color: "white",
  },
}));

const Contacts = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <a href={"mailto:" + content.email}>
        <Email className={classes.icon} />
      </a>
      <a href={"https://github.com/" + content.github}>
        <GitHub className={classes.icon} />
      </a>
      <a href={"https://www.linkedin.com/in/" + content.linkedin}>
        <LinkedIn className={classes.icon} />
      </a>
    </div>
  );
};

export default Contacts;
