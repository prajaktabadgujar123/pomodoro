// src/components/PomodoroTimer.js

import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    } else if (!isActive && timeLeft !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(1500); // Reset to 25 minutes
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: "bold",
          fontFamily: "cursive",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          color: "white",
          marginBottom: "20px",
        }}
      >
        {formatTime(timeLeft)}
      </Typography>
      <Button
        variant="contained"
        onClick={startTimer}
        disabled={isActive}
        sx={{
          marginRight: "10px",
          backgroundColor: "white",
          color: "black",
          fontSize: "12px",
          fontFamily: "cursive",
        }}
      >
        Start
      </Button>
      <Button
        variant="contained"
        color="white"
        sx={{
          marginRight: "10px",
          backgroundColor: "white",
          color: "black",
          fontSize: "12px",
          fontFamily: "cursive",
        }}
        onClick={resetTimer}
      >
        Reset
      </Button>
    </div>
  );
};

export default PomodoroTimer;
