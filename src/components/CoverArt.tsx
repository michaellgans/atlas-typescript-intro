// CoverArt Component

// Asset Imports
import { useState, useEffect } from "react";

// Script Imports

// Type
type Art = {
  cover: string;
};

// Returns a CoverArt Component
export function CoverArt() {
  // Define Hook
  const [art, setArt] = useState<Art | null>(null);

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
      {art ? (
        <img
          src={art.cover}
          alt="Cover Art for Current Song"
          className="cover-art-image rounded-md"
        />
      ) : (
        // Loading Skeleton
        <div
          role="status"
          className="animate-pulse space-y-8 md:flex md:items-center md:space-x-8 md:space-y-0 rtl:space-x-reverse"
        >
          <div className="bg-gray-300 dark:bg-gray-700 flex h-48 w-full items-center justify-center rounded sm:w-96">
            <svg
              className="text-gray-200 dark:text-gray-600 h-10 w-10"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
}
