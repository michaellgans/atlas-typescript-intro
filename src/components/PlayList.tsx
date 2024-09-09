// PlayList Component

// Asset Imports
import { PlayListItem } from "./PlayListItem";
import { useState, useEffect } from "react";

// Script Imports

// Type
type Song = {
  title: string;
  artist: string;
  duration: string;
};

// Returns a PlayList Component
export function PlayList() {
  // Define Hook
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist",
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSongs(data);
      });
  }, []);

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
