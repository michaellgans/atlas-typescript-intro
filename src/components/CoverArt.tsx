// CoverArt Component

// Asset Imports
import { useContext } from "react";
import { AppContext } from "./ContextProvider";
import imageSkeleton from "../assets/placeholder.svg";

// Script Imports

// Returns a CoverArt Component
export function CoverArt() {
  // Define Hook
  const songContext = useContext(AppContext);

  if (!songContext) {
    throw new Error();
  }

  const { currentSong, songs } = songContext;

  return (
    <div className="cover-art mb-6">
      {songs.length > 0 ? (
        <img
          src={songs[currentSong].cover}
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
