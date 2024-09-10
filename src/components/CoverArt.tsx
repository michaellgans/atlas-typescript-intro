// CoverArt Component

// Asset Imports
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "./ContextProvider";

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
        <div className="cover-skeleton">
          <svg
            className="text-gray-200 dark:text-gray-600 h-full w-full animate-pulse"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      )}
    </div>
  );
}
