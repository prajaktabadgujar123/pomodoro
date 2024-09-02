import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
  },
  {
    quote:
      "Success is not how high you have climbed, but how you make a positive difference to the world.",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
  },
  {
    quote: "The best revenge is massive success.",
  },

  {
    quote:
      "You’re braver than you believe, and stronger than you seem, and smarter than you think.",
  },
  {
    quote:
      "You don't have to be great to start, but you have to start to be great.",
  },
  {
    quote:
      "Always go with your passions. Never ask yourself if it’s realistic or not.",
  },
  {
    quote: "Always do your best. What you plant now, you will harvest later",
  },
  {
    quote: "The best way to predict your future is to create it",
  },
  {
    quote:
      "Don’t settle for what life gives you; make life better and build something",
  },
];

const Quote = () => {
  const [currentQuote, setCurrentQuote] = useState({});

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }, []);

  return (
    <div
      style={{
        color: "white",
        textAlign: "center",
        margin: "25px",
        marginTop: "20%",
        height: "220px",
      }}
    >
      <Typography
        sx={{
          fontSize: "23px",
          fontWeight: "bold",
          fontFamily: "cursive",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          borderRadius: "8px",
        }}
      >
        {currentQuote.quote}
      </Typography>
    </div>
  );
};

export default Quote;
