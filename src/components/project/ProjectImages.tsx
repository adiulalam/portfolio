import React, { useState } from "react";
import { Grid, Box, useTheme } from "@mui/material";
import ImageGallery from "react-image-gallery";
import { useProject } from "@/hooks";
import "react-image-gallery/styles/css/image-gallery.css";

export const ProjectImages = () => {
  const theme = useTheme();
  const { images } = useProject();
  const [startIndex, setStartIndex] = useState(0);

  const media = images!.map(({ src }) => ({
    original: src,
    thumbnail: src,
  }));

  return (
    <Grid item xs={12} lg={4}>
      <Box
        sx={{
          height: "100%",
          padding: theme.spacing(2),
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          [theme.breakpoints.up("lg")]: {
            maxWidth: 350,
          },
        }}
      >
        <ImageGallery
          startIndex={startIndex}
          onThumbnailClick={(_, index: number) => setStartIndex(index)}
          items={media}
          showThumbnails={true}
          showNav={false}
          lazyLoad={true}
          showIndex={false}
          showPlayButton={false}
        />
      </Box>
    </Grid>
  );
};
