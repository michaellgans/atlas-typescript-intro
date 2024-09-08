// Music Player Component

// Asset Imports

// Script Imports

// Returns a MusicPlayer Component
export default function MusicPlayer({ children }) {
  // Define Hooks
  return (
    <div className="music-player dark:bg-dark-player-background bg-player-background flex flex-col md:flex-row max-w-4xl justify-center rounded-lg shadow-lg">
      {children}
    </div>
  );
}
