// Music Player Component

import React from "react";

// Asset Imports

// Script Imports

// Types
type MusicPlayerProps = {
  children: React.ReactNode;
};

// Returns a MusicPlayer Component
export default function MusicPlayer({ children }: MusicPlayerProps) {
  // Define Hooks
  return (
    <div className="music-player dark:bg-dark-player-background bg-player-background flex flex-col md:flex-row max-w-4xl justify-center rounded-lg shadow-lg">
      {children}
    </div>
  );
}
