// CoverArt Component

// Asset Imports
import { useState, useEffect } from "react";
import artSkeleton from "../assets/placeholder.svg";

// Script Imports

// Type
type Art = {
  cover: string;
};

// Returns a CoverArt Component
export function CoverArt() {
  // Define Hook
  const [art, setArt] = useState<Art>({ cover: artSkeleton });

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist",
    )
      .then((response) => response.json())
      .then((data) => {
        setArt({ cover: data[0].cover });
      });
  }, []);

  return (
    <div className="cover-art mb-6">
      <img
        src={art.cover || artSkeleton}
        alt="Cover Art for Current Song"
        className="cover-art-image rounded-md"
      />
    </div>
  );
}
