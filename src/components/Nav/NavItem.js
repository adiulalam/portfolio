import React from "react";
import { Link } from "react-scroll";
import { ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: grey[300],
    "&:hover": { backgroundColor: grey[400] },
  },
  icon: {
    padding: theme.spacing(0, 1),
  },
  listItem: {
    textAlign: "center",
  },
  link: {
    color: "inherit",
  },
  text: {
    fontSize: "1.3em",
    fontWeight: 100,
    "&:hover": {
      textDecoration: "underline",
    },
    cursor: "pointer",
  },
}));

const NavItem = ({ to, title, onClick }) => {
  const classes = useStyles();
  const Item = (
    <ListItem className={classes.listItem} onClick={onClick}>
      <ListItemText primary={title} classes={{ primary: classes.text }} />
    </ListItem>
  );

  return to ? (
    <Link to={to} smooth={true} duration={1000} className={classes.link}>
      {Item}
    </Link>
  ) : (
    <> {Item} </>
  );
};

export default NavItem;
