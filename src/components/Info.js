import React, { useContext } from "react";
import { makeStyles, Typography, Button } from "@material-ui/core/";
// import content from "../content.json";
import { grey } from "@material-ui/core/colors";
import { School, Email, LocationOn } from "@material-ui/icons";
import { portfolioContext } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    color: "white",
    padding: theme.spacing(2),
    backgroundColor: grey[900],
    [theme.breakpoints.up("sm")]: {
      width: 300,
      backgroundColor: "black",
    },
    borderRadius: 10
  },
  icon: {
    margin: theme.spacing(0.5, 1),
  },
  btn: {
    margin: theme.spacing(1),
    alignSelf: "center",
    backgroundColor: "white",
    color: "black",
    "&:hover": {
      background: "rgb(201, 163, 143)",
    },
    borderRadius: 10
  },
  title: {
    color: grey[300],
  },
}));

const Info = () => {
  const {career, email, education, location, resume} = useContext(portfolioContext);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="button" className={classes.title}>
        {career}
      </Typography>
      <div>
        <Email className={classes.icon} />
        <Typography variant="caption" className={classes.title}>
          {email}
        </Typography>
      </div>
      <div>
        <School className={classes.icon} />
        <Typography variant="caption" className={classes.title}>
          {education}
        </Typography>
      </div>
      <div>
        <LocationOn className={classes.icon} />
        <Typography variant="caption" className={classes.title}>
          {location}
        </Typography>
      </div>
      <div className={classes.btn}>
        <Button style={{ color: "inherit" }} href={resume}>
          Resume
        </Button>
      </div>
    </div>
  );
};

export default Info;
