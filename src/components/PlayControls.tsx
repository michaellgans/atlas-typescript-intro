// PlayControls Component

// Asset Imports
import { RewindIcon } from "./icons/RewindIcon";
import { PlayIcon } from "./icons/PlayIcon";
import { ForwardIcon } from "./icons/ForwardIcon";
import { ShuffleIcon } from "./icons/ShuffleIcon";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "./ContextProvider";
import { PauseIcon } from "./icons/PauseIcon";
import { ShuffleOffIcon } from "./icons/ShuffleOffIcon";

// Script Imports

// Returns a PlayControls Component
export function PlayControls() {
  // Define Hook
  const [speed, setSpeed] = useState(1);
  const [playPause, setPlayPause] = useState("play");
  const [shuffle, setShuffle] = useState("noShuffle");

  const songContext = useContext(AppContext);

  if (!songContext) {
    throw new Error();
  }

  const { songs, currentSong, setCurrentSong } = songContext;
  const length = songs.length;

  // Reset speed to 1
  useEffect(() => {
    if (speed > 3) {
      setSpeed(1);
    }
  }, [speed]);

  // Toggles Play Icon to Pause Icon
  const handlePlayClick = () => {
    setPlayPause((prev) => (prev === "play" ? "pause" : "play"));
  };

  // Toggles Shuffle Icon to No Shuffle Icon
  const handleShuffleClick = () => {
    setShuffle((prev) => (prev === "noShuffle" ? "shuffle" : "noShuffle"));
  };

  // Moves to the next song dependent on shuffle icon
  const handleNextClick = () => {
    let songIndex: number;
    if (shuffle === "shuffle") {
      songIndex = Math.floor(Math.random() * songs.length);
    } else {
      // If songIndex is greater than length, disable button
      // TODODISABLE BUTTON LOGIC
      songIndex = (currentSong + 1) % length;
    }
    setCurrentSong(songIndex);
  };

  const handlePreviousClick = () => {
    setCurrentSong(currentSong - 1);
  };

  const hasLess = currentSong === 0;
  const hasMore = currentSong < length - 1;

  return (
    <div className="controls-container mb-4 flex h-10 items-center justify-between">
      {/* Speed Button */}
      <button
        onClick={() => setSpeed(speed + 1)}
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md text-lg font-medium hover:bg-hover active:bg-active dark:hover:bg-dark-hover dark:active:bg-dark-active"
      >
        {speed}x
      </button>

      {/* Previous Button */}
      <button
        disabled={hasLess}
        onClick={handlePreviousClick}
        className={`rewind flex h-12 w-12 ${hasLess ? "cursor-not-allowed opacity-50" : "cursor-pointer"} items-center justify-center rounded-md hover:bg-hover active:bg-active disabled:opacity-50 dark:hover:bg-dark-hover dark:active:bg-dark-active`}
      >
        <RewindIcon />
      </button>

      {/* Play Button */}
      <button
        onClick={handlePlayClick}
        className="play flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border-2 hover:bg-hover active:bg-active dark:border-dark-muted-text dark:hover:bg-dark-hover dark:active:bg-dark-active"
      >
        {playPause === "play" ? <PlayIcon /> : <PauseIcon />}
      </button>

      {/* Next Button */}
      <button
        disabled={!hasMore}
        onClick={handleNextClick}
        className={`forward flex h-12 w-12 ${!hasMore ? "cursor-not-allowed opacity-50" : "cursor-pointer"} items-center justify-center rounded-md hover:bg-hover active:bg-active disabled:opacity-50 dark:hover:bg-dark-hover dark:active:bg-dark-active`}
      >
        <ForwardIcon />
      </button>

      {/* Shuffle Button */}
      <button
        onClick={handleShuffleClick}
        className="shuffle flex h-12 w-12 cursor-pointer items-center justify-center rounded-md hover:bg-hover active:bg-active dark:hover:bg-dark-hover dark:active:bg-dark-active"
      >
        {shuffle === "noShuffle" ? <ShuffleOffIcon /> : <ShuffleIcon />}
      </button>
    </div>
  );
}
