import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { grey } from "@material-ui/core/colors";
import clsx from "clsx";
import {
  List,
  makeStyles,
  useMediaQuery,
  useTheme,
  Typography,
} from "@material-ui/core";

import NavItem from "../NavItem";
import Contacts from "../../Contacts";
import { toggleDrawer } from "../../../redux/actions/layout";
import content from "../../../content.json";
// import ContentObjects from "../../../content";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import { endpoint, graphqlQuery, headers } from "../../../graphql/graphql";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  img: {
    width: 110,
    height: 110,
    borderRadius: "50%",
  },
  mainNavLinks: {
    height: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    marginTop: theme.spacing(2),
    fontWeight: 700,
    lineHeight: "1em",
  },
  subtitle: {
    color: grey[500],
  },
  contacts: {
    alignSelf: "center",
  },
  grow: {
    flexGrow: 1,
  },
}));

const MainNavMenu = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMinScreenMd = useMediaQuery(theme.breakpoints.up("md"));
  const dispatch = useDispatch();
  const handleItemClick = () => {
    if (!isMinScreenMd) {
      dispatch(toggleDrawer());
    }
  };

  // const portfolioContent  = ContentObjects();
  // console.log("test--->", ContentObjects())



  const [data, setData] = useState([]);

  const ContentObjects = async () => {
    const response = await axios({
      url: endpoint,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });

    if (response?.data) {

      const result = response.data.data.portfolio_content[0]
      console.log(result);
      // setData(result);

      return result;
    } else {
      console.log(response.errors);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const result = await ContentObjects();
      setData(result);
    }
    fetchData();
}, []);

console.log("data???---->", data)


  
  const Profile = ({ name, career }) => (
    <div className={classes.profile}>
   {(data?.profilePic) ? (
        <img
          alt="profile"
          className={classes.img}
          src={require(`./../../../assets/images/${data.profilePic}`)}
        />
      ) : (
        <Skeleton circle width="100px" height="100px" />
      )}

        {/* <img
        alt="profile"
        className={classes.img}
        src={require(`./../../../assets/images/${content.profilePic}`)}
      /> */}

      <Typography variant="h5" className={classes.title}>
        {name}
      </Typography>
      <Typography variant="button" className={clsx(classes.subtitle)}>
        {career}
      </Typography>
    </div>
  );

  

  return (
    <List className={classes.root}>
      <Profile name={content.fullName} career={content.career} />
      <div className={classes.mainNavLinks}>
        <NavItem to="home" title="Home" onClick={handleItemClick} />{" "}
        <NavItem to="portfolio" title="Portfolio" onClick={handleItemClick} />
      </div>
      <div className={classes.grow} />
      <div className={classes.contacts}>
        <Contacts />
      </div>
    </List>
  );
};

export default MainNavMenu;
