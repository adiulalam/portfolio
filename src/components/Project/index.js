import React, { useState } from "react";
import { makeStyles, Typography, Button, Grid } from "@material-ui/core/";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./overrides.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    paddingBottom: theme.spacing(2),
  },
  title: {
    paddingBottom: theme.spacing(1),
    fontWeight: 600,
  },
  details: {
    padding: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0),
    },
  },
  tag: {
    color: "black",
    background: "white",
    border: "solid 2px rgb(201, 163, 143)",
    padding: theme.spacing(0.5, 1),
    margin: theme.spacing(1),
    marginLeft: theme.spacing(0),
    display: "inline",
  },
  btn: {
    borderRadius: 10,
    color: "white",
    background: "black",
    margin: theme.spacing(1),
    "&:hover": {
      color: "inherit",
      background: "rgb(201, 163, 143)",
    },
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    margin: theme.spacing(0, 1),
  },
  media: {
    height: "100%",
    maxWidth: 350,
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const VideoItem = ({ video }) => {
  return (
    <div className="video-wrapper">
      <iframe
        width="100%"
        height="200px"
        title="video"
        src={video}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const Project = ({ project }) => {
  // console.log("project----->", project);

  const [showFullScreenButton, setFullScreenButton] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const classes = useStyles();

  const handleThumbClick = (event, index) => {
    // console.log(index);
    if (project.media[index].type === "image") {
      setFullScreenButton(true);
    } else {
      setFullScreenButton(false);
    }
    setStartIndex(index);
  };

  const media = project.media.map(({ type, src, thumbnail }) => {
    if (type === "image") {
      return {
        // original: src,
        original: src.includes("https")
          ? src
          : require(`./../../assets/images/${src}`),
        thumbnail: src.includes("https")
          ? src
          : require(`./../../assets/images/${src}`),
      };
    } else {
      return {
        renderItem: () => <VideoItem video={src} />,

        embedUrl: src,
        thumbnail: thumbnail,
        // thumbnail: "https://i.imgur.com/vlyz0a7.jpg",
      };
    }
  });
  const Tag = ({ value }) => <div className={classes.tag}>{value}</div>;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={8}>
          {" "}
          <div>
            <Typography className={classes.title} variant="h4">
              {" "}
              {project.title}
            </Typography>
            <Typography variant="body1">
              {" "}
              <strong>{project.description}</strong>
            </Typography>
            <div className={classes.details}>
              <ul>
                {project.details.map((detail, i) => (
                  <li key={i}>
                    <Typography variant="body1">{detail}</Typography>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Typography variant="caption">TECHNOLOGIES</Typography>
              <div className={classes.tags}>
                {project.technologies.map((tech, i) => (
                  <Tag key={i} value={tech} />
                ))}
              </div>
            </div>
            <div>
              <Button
                className={classes.btn}
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repo
              </Button>
              {project.application && (
                <Button
                  className={classes.btn}
                  href={project.application}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Application
                </Button>
              )}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.media}>
            <ImageGallery
              renderFullscreenButton={(onClick, isFullscreen) => {
                const GallaryButton = () => (
                  <button
                    type="button"
                    className={`image-gallery-icon image-gallery-fullscreen-button${
                      showFullScreenButton ? " active" : ""
                    }`}
                    onClick={onClick}
                    aria-label="Open Fullscreen"
                  >
                    {isFullscreen ? (
                      <FullscreenExitIcon fontSize="large" />
                    ) : (
                      <FullscreenIcon fontSize="large" />
                    )}
                  </button>
                );
                if (showFullScreenButton) return <GallaryButton />;
              }}
              startIndex={startIndex}
              onThumbnailClick={handleThumbClick}
              items={media}
              defaultImage={media[0]}
              showThumbnails={true}
              showNav={false}
              lazyLoad={true}
              showIndex={false}
              showPlayButton={false}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Project;
