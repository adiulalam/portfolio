import React, { useContext } from "react";
import {
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core/";
import { useSelector } from "react-redux";
import Info from "../Info";
import { grey } from "@material-ui/core/colors";
import clsx from "clsx";
import Typical from "react-typical";
import Portfolio from "./Portfolio";
import { portfolioContext } from "../../App";

const HomePage = () => {
  const { backgroundImage, shortAboutMe, fullName } =
    useContext(portfolioContext);

  const backgroundImageLocation = backgroundImage
    ? backgroundImage.includes("https")
      ? backgroundImage
      : require(`./../../assets/images/${backgroundImage}`)
    : "";

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
    },
    landing: {
      padding: theme.spacing(2),
      paddingTop: theme.spacing(10),
      height: "100vh",
      width: "100%",
      backgroundImage: `url(${backgroundImageLocation})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
    },
    writer: {
      padding: theme.spacing(0.5),
      color: "white",
      backgroundColor: "black",
      display: "inline",
      fontSize: "1.5em",
    },
    content: {
      margin: theme.spacing(2),
    },
    intro: {
      fontWeight: 500,
      color: "white",
      textShadow: "1px 1px 1px rgb(0, 0, 0)",
      marginBottom: theme.spacing(1),
    },
    mobile_info: {
      padding: theme.spacing(4),
      display: "flex",
      justifyContent: "center",
      backgroundColor: grey[300],
    },
    info: {
      position: "absolute",
      bottom: theme.spacing(4),
      right: theme.spacing(4),
    },
  }));

  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.only("xs"));
  const drawerSize = useSelector(({ layout }) => layout.drawerSize);
  const inLandScapeMode = useMediaQuery(
    `(orientation: landscape) and (max-width: ${drawerSize + 900}px)`
  );

  const AboutMe = () => {
    const base = shortAboutMe?.base ? shortAboutMe.base : "";

    const writer = [];

    if (shortAboutMe?.loop) {
      shortAboutMe.loop.forEach((value) => {
        writer.push(base, 150, base + value, 150);
      });
    } else {
      writer.push(base, 150, base + "", 150);
    }

    return (
      <Typical steps={writer} loop={Infinity} className={classes.writer} />
    );
  };
  return (
    <div className={classes.root} id="home">
      <div className={classes.landing}>
        <div className={classes.content}>
          <Typography className={classes.intro} variant="h3">
            I'm {fullName},
          </Typography>
          <AboutMe />
        </div>
      </div>
      <div
        className={clsx({
          [classes.mobile_info]: isSmallScreen || inLandScapeMode,
          [classes.info]: !(isSmallScreen || inLandScapeMode),
        })}
      >
        <Info />
      </div>
      <Portfolio />
    </div>
  );
};

export default HomePage;
