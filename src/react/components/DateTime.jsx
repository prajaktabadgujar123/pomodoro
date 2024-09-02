import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const DateTime = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = { weekday: "long", day: "numeric", month: "long" };
      const formattedDate = now.toLocaleDateString("en-US", options);
      setDateTime(formattedDate);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000 * 60); // Update every minute

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        margin: "10px 0",
        color: "white",
        marginLeft: "25px",
        marginRight: "25px",
      }}
    >
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: "bold",
          fontFamily: "cursive",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          borderRadius: "8px",
        }}
      >
        {dateTime}
      </Typography>
    </div>
  );
};

export default DateTime;
