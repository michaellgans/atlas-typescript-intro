// ContextProvider Component

// Asset Imports
import { usePlaylistData } from "../hooks/usePlaylistData";
import React, { createContext } from "react";

// Types
type ContextProviderProps = {
  children: React.ReactNode;
};

type Song = {
  title: string;
  artist: string;
  duration: string;
  cover: string;
};

type AppContextType = {
  songs: Song[];
  currentSong: number;
  setCurrentSong: (index: number) => void;
};

// Exports
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Returns a ContextProvider Component
export function ContextProvider({ children }: ContextProviderProps) {
  // Define Hook
  const { songs, currentSong, setCurrentSong } = usePlaylistData();

  return (
    <AppContext.Provider value={{ songs, currentSong, setCurrentSong }}>
      {children}
    </AppContext.Provider>
  );
}
