// Music Player Component

// Asset Imports
import React from "react";
import { useContext } from "react";
import { AppContext } from "./components/ContextProvider";

// Script Imports

// Types
type MusicPlayerProps = {
  children: React.ReactNode;
};

// Returns a MusicPlayer Component
export default function MusicPlayer({ children }: MusicPlayerProps) {
  // Define Hooks
  const songContext = useContext(AppContext);

  if (!songContext) {
    throw new Error();
  }

  const { songs } = songContext;

  return (
      <div className="music-player dark:bg-dark-player-background bg-player-background flex flex-col md:flex-row max-w-4xl justify-center rounded-lg shadow-lg">
        {children}
      </div>
  );
}
