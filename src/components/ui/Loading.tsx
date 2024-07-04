import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import {
  PacmanLoader,
  CircleLoader,
  BarLoader,
  MoonLoader,
} from "react-spinners";

export const Loading = () => {
  const [randNum, setRandNum] = useState(-1);
  useEffect(() => {
    setRandNum(Math.floor(Math.random() * 4));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {randNum === 0 ? (
        <PacmanLoader speedMultiplier={2} color="#ffffff" size="50px" />
      ) : randNum === 1 ? (
        <CircleLoader color="#ffffff" size="200px" />
      ) : randNum === 2 ? (
        <BarLoader color="#ffffff" height="10px" width="300px" />
      ) : randNum === 3 ? (
        <MoonLoader color="#ffffff" size="80px" />
      ) : null}
    </Box>
  );
};
