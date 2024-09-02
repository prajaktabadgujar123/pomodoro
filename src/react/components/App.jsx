import React, { useState, useEffect } from "react";
import Wallpaper from "./Wallpaper.jsx";
import Quote from "./Quote.jsx";
import DateTime from "./DateTime.jsx";
import PomodoroTimer from "./PomodoroTimer.jsx";
import { Box } from "@mui/material";

const App = () => {
  return (
    <>
      <Box sx={{ height: "390px", width: "250px" }}>
        <Wallpaper />
        <Quote />
        <DateTime />
        <PomodoroTimer />
      </Box>
    </>
  );
};

export default App;
