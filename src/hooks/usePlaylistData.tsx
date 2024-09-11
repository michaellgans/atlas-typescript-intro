// Custom Hook for Handling the API call

// Imports
import { useState, useEffect } from "react";

// Types
type Song = {
    title: string;
    artist: string;
    duration: string;
    cover: string;
};

export function usePlaylistData() {
    // Hooks
    const [songs, setSongs] = useState<Song[]>([]);
    const [currentSong, setCurrentSong] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(
          "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist",
        )
          .then((response) => response.json())
          .then((data) => {
            setSongs(data);
            setLoading(false);
          });
      }, []);

    return {
        songs,
        currentSong,
        setCurrentSong,
        loading
    };
}
