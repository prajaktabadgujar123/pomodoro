// src/components/Wallpaper.js

import React, { useEffect, useState } from "react";

const wallpapers = [
  "https://i.pinimg.com/736x/a0/07/12/a007122f9790a6d587189b39fe17785a.jpg",
  "https://i.pinimg.com/564x/4f/ab/36/4fab361c1fea01811759d0657dfaa138.jpg",
  "https://i.pinimg.com/564x/28/41/a6/2841a6cc992fccff7c5b900d6b3863c2.jpg",
  "https://i.pinimg.com/736x/ab/cb/1c/abcb1c62ac4a646c682b882e564a03c9.jpg",
  "https://i.pinimg.com/564x/1e/ab/ed/1eabedc8e9770d422f1c855c6658ec6c.jpg",
  "https://i.pinimg.com/564x/68/e0/cc/68e0cccd9826050516a5e58ebf04dc8b.jpg",
  "https://i.pinimg.com/564x/a8/75/1a/a8751a374b97bba69cbda223347700a0.jpg",
  "https://i.pinimg.com/736x/c0/03/03/c003037d24d530300dfffa934e66e368.jpg",

  // add more wallpaper URLs
];

const Wallpaper = () => {
  const [currentWallpaper, setCurrentWallpaper] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * wallpapers.length);
    setCurrentWallpaper(wallpapers[randomIndex]);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${currentWallpaper})`,
        backgroundColor: "gray",
        backgroundSize: "cover",
        width: "calc(100% - 20px)", // Adjusted width for border
        height: "calc(100vh - 20px)", // Adjusted height for border
        position: "absolute",
        top: "10px", // Adjusted top for border
        left: "10px", // Adjusted left for border
        zIndex: -1,
        borderRadius: "8px",
      }}
    ></div>
  );
};

export default Wallpaper;
