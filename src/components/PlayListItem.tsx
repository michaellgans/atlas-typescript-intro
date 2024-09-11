// PlayListItem Component

// Asset Imports
import { useContext } from "react";
import { AppContext } from "./ContextProvider";

// Script Imports

// Types
type PlayListItemProps = {
  songTitle: string;
  artist: string;
  playTime: string;
};

// Returns a PlayListItem Component
export function PlayListItem({
  songTitle,
  artist,
  playTime,
}: PlayListItemProps) {
  // Define Hook

  const songContext = useContext(AppContext);

  if (!songContext) {
    throw new Error();
  }

  const { songs, currentSong, setCurrentSong } = songContext;

  const handleSongClick = () => {
    const songIndex = songs.findIndex((song) => song.title === songTitle);
    setCurrentSong(songIndex);
  };

  return (
    <div
      onClick={handleSongClick}
      className={`{currentplay-list-item mb-1 flex h-10 cursor-pointer items-center justify-between rounded-md text-sm font-medium ${songs[currentSong].title === songTitle ? "bg-hover dark:bg-dark-hover" : "hover:bg-hover dark:hover:bg-dark-hover"} active:bg-active dark:hover:bg-dark-hover dark:active:bg-dark-active`}
    >
      <div className="song-info">
        <div className="song-title pb-0.5">{songTitle}</div>
        <div className="genre text-muted-text dark:text-dark-muted-text">
          {artist}
        </div>
      </div>
      <div className="play-time text-muted-text dark:text-dark-muted-text">
        {playTime}
      </div>
    </div>
  );
}
