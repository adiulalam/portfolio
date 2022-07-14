import React from "react";
import { makeStyles, Typography } from "@material-ui/core/";
import content from "../../content.json";
import { grey } from "@material-ui/core/colors";

import Experiences from "../Experiences";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2),
    },
    backgroundColor: grey[100],
  },
  text: {
    paddingBottom: theme.spacing(2),
  },
  description: {
    padding: theme.spacing(0.5),
    display: "flex",
    color: "white",
    backgroundColor: "black",
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="portfolio">
      <Typography className={classes.text} variant="h4">
        PORTFOLIO
      </Typography>
      <div className={classes.description}>
        {" "}
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{ __html: content.description }}
        />
      </div>
      <Experiences />
    </div>
  );
};

export default Portfolio;
