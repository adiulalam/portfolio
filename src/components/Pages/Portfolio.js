import React, { useContext } from "react";
import { makeStyles, Typography } from "@material-ui/core/";
import { grey } from "@material-ui/core/colors";
import { portfolioContext } from "../../App";

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
    padding: theme.spacing(1.5),
    display: "flex",
    color: "white",
    backgroundColor: "black",
    borderRadius: 10,
  },
}));

const Portfolio = () => {
  const { description } = useContext(portfolioContext);

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
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <Experiences />
    </div>
  );
};

export default Portfolio;
