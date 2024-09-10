// SongTitle Component

// Asset Imports
import { useEffect, useState, useContext } from "react";
import { AppContext } from "./ContextProvider";

// Script Imports

// Type
type SongInfo = {
  title: string;
  artist: string;
};

// Returns a SongTitle Component
export function SongTitle() {
  // Define Hook
  const [songInfo, setSongInfo] = useState<SongInfo | undefined>(undefined);

  const songContext = useContext(AppContext);

  if (!songContext) {
    throw new Error();
  }

  const { songs } = songContext;

  useEffect(() => {
    if (songs.length > 0) {
      setSongInfo({ title: songs[0].title, artist: songs[0].artist });
    }
  }, [songs]);

  return (
    <div className="song-text">
      {songInfo ? (
        <>
          <h2 className="song-title mb-2 text-2xl font-bold">
            {songInfo.title}
          </h2>
          <div className="artist mb-4 text-muted-text dark:text-dark-muted-text">
            {songInfo.artist}
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
