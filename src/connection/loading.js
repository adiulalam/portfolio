import React, { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import CircleLoader from "react-spinners/CircleLoader";
import BarLoader from "react-spinners/BarLoader";
import MoonLoader from "react-spinners/MoonLoader";

const Loading = () => {
  const [randNum, setRandNum] = useState(null);
  useEffect(() => {
    setRandNum(Math.floor(Math.random() * 4));
  }, []);
  return (
    (document.body.style.background = "#000000"),
    (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {randNum === 0 ? (
          <PacmanLoader speedMultiplier="2" color="#ffffff" size="50px" />
        ) : randNum === 1 ? (
          <CircleLoader color="#ffffff" size="200px" />
        ) : randNum === 2 ? (
          <BarLoader color="#ffffff" height="10px" width="300px" />
        ) : (
          <MoonLoader color="#ffffff" size="80px" />
        )}
      </div>
    )
  );
};

export default Loading;
