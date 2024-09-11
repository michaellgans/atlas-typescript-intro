// SongTitle Component

// Asset Imports
import { useContext } from "react";
import { AppContext } from "./ContextProvider";

// Script Imports

// Returns a SongTitle Component
export function SongTitle() {
  // Define Hook
  const songContext = useContext(AppContext);

  if (!songContext) {
    throw new Error();
  }

  const { currentSong, songs } = songContext;

  return (
    <div className="song-text">
      {songs.length > 0 ? (
        <>
          <h2 className="song-title mb-2 text-2xl font-bold">
            {songs[currentSong].title}
          </h2>
          <div className="artist mb-4 text-muted-text dark:text-dark-muted-text">
            {songs[currentSong].artist}
          </div>
        </>
      ) : (
        <>
          <h2 className="loading-title mb-2 text-2xl font-bold">Loading...</h2>
          <div className="loading-artist mb-4 text-muted-text dark:text-dark-muted-text">
            Loading...
          </div>
        </>
      )}
    </div>
  );
}
