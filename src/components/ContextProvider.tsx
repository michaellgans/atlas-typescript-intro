// ContextProvider Component

// Asset Imports
import React, { createContext, useState, useEffect } from "react";

// Types
type ContextProviderProps = {
  children: React.ReactNode;
};

type Song = {
  title: string;
  artist: string;
  duration: string;
};

type AppContextType = {
  songs: Song[];
};

// Exports
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Returns a ContextProvider Component
export function ContextProvider({ children }: ContextProviderProps) {
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
    <AppContext.Provider value={{ songs }}>{children}</AppContext.Provider>
  );
}
