// PlayList Component

// Asset Imports
import { PlayListItem } from "./PlayListItem";
import { useContext } from "react";
import { AppContext } from "./ContextProvider";

// Script Imports

// Type

// Returns a PlayList Component
export function PlayList() {
  // Define Hook
  const songContext = useContext(AppContext);

  if (!songContext) {
    throw new Error();
  }

  const { songs } = songContext;

  return (
    <div className="play-list w-full p-6 md:w-1/2 md:border-l md:border-muted-text dark:md:border-dark-muted-text">
      <h3 className="play-list-title mb-4 text-xl font-semibold">Playlist</h3>
      <div className="all-songs flex flex-col pr-4">
        {songs.map((song, index) => (
          <PlayListItem
            key={index}
            songTitle={song.title}
            artist={song.artist}
            playTime={song.duration}
          />
        ))}
      </div>
    </div>
  );
}
