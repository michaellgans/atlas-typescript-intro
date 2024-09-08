// SongTitle Component

// Asset Imports

// Script Imports

// Returns a SongTitle Component
export function SongTitle() {
  // Define Hook
  return (
    <div className="song-text">
      <h2 className="song-title mb-2 text-2xl font-bold">
        Rainbow in the Dark
      </h2>
      <div className="artist mb-4 text-muted-text dark:text-dark-muted-text">
        Dio
      </div>
    </div>
  );
}
