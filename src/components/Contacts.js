import React from "react";
import { makeStyles } from "@material-ui/core/";
import { LinkedIn, Email, GitHub } from "@material-ui/icons";

// import content from "../content.json";

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

const Contacts = (portfolioProps) => {
  const portfolioContent = portfolioProps.portfolioProps;
  // console.log("portfolioContent----->", portfolioContent )

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <a href={`mailto: ${portfolioContent.email}`} 
      
      target="_blank" rel="noopener noreferrer">
        <Email className={classes.icon} />
      </a>
      <a href={`https://github.com/${portfolioContent.github}`} target="_blank" rel="noopener noreferrer">
        <GitHub className={classes.icon} />
      </a>
      <a href={`https://www.linkedin.com/in/${portfolioContent.linkedin}`} target="_blank" rel="noopener noreferrer">
        <LinkedIn className={classes.icon} />
      </a>
    </div>
  );
};

export default Contacts;
