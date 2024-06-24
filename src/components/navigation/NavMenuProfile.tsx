import Image from "next/image";
import { Box, useTheme, Typography } from "@mui/material";

export const NavMenuProfile = () => {
  const theme = useTheme();
  const name = "NAME";
  const career = "CARRER";
  const src = "https://i.imgur.com/fgzbMqg.jpg";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image
        alt="profile"
        height={100}
        width={100}
        style={{
          width: 110,
          height: 110,
          borderRadius: "50%",
        }}
        src={src}
      />
      <Typography
        variant="h5"
        sx={{
          marginTop: theme.spacing(2),
          fontWeight: 700,
          lineHeight: "1em",
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="button"
        sx={{
          color: theme.palette.grey[500],
        }}
      >
        {career}
      </Typography>
    </Box>
  );
};
