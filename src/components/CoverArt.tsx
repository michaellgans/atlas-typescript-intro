// CoverArt Component

// Asset Imports
import { useEffect, useState, useContext } from "react";
import { AppContext } from "./ContextProvider";
import imageSkeleton from "../assets/placeholder.svg";

// Script Imports

// Type
type Art = {
  cover: string;
};

// Returns a CoverArt Component
export function CoverArt() {
  // Define Hook
  const [art, setArt] = useState<Art | undefined>(undefined);

  const songContext = useContext(AppContext);

  if (!songContext) {
    throw new Error();
  }

  const { songs } = songContext;

  useEffect(() => {
    if (songs.length > 0) {
      setArt({ cover: songs[0].cover });
    }
  }, [songs]);

  return (
    <div className="cover-art mb-6">
      {art ? (
        <img
          src={art.cover}
          alt="Cover Art for Current Song"
          className="cover-art-image rounded-md"
        />
      ) : (
        // Loading Skeleton
        <img
          src={imageSkeleton}
          alt="Placeholder for Loading"
          className="image-skeleton animate-pulse rounded-md"
        />
      )}
    </div>
  );
}
