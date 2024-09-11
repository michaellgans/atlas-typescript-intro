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

  return (
    <div className="controls-container mb-4 flex h-10 items-center justify-between">
      <button
        onClick={() => setSpeed(speed + 1)}
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md text-lg font-medium hover:bg-hover active:bg-active dark:hover:bg-dark-hover dark:active:bg-dark-active"
      >
        {speed}x
      </button>
      <button
        onClick={handlePreviousClick}
        className="rewind flex h-12 w-12 cursor-pointer items-center justify-center rounded-md opacity-50 hover:bg-hover active:bg-active dark:text-dark-muted-text dark:opacity-100 dark:hover:bg-dark-hover dark:active:bg-dark-active"
      >
        <RewindIcon />
      </button>
      <button
        onClick={handlePlayClick}
        className="play border-black flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border-2 hover:bg-hover active:bg-active dark:border-dark-muted-text dark:hover:bg-dark-hover dark:active:bg-dark-active"
      >
        {playPause === "play" ? <PlayIcon /> : <PauseIcon />}
      </button>
      <button
        onClick={handleNextClick}
        className="forward flex h-12 w-12 cursor-pointer items-center justify-center rounded-md hover:bg-hover active:bg-active dark:hover:bg-dark-hover dark:active:bg-dark-active"
      >
        <ForwardIcon />
      </button>
      <button
        onClick={handleShuffleClick}
        className="shuffle flex h-12 w-12 cursor-pointer items-center justify-center rounded-md hover:bg-hover active:bg-active dark:hover:bg-dark-hover dark:active:bg-dark-active"
      >
        {shuffle === "noShuffle" ? <ShuffleOffIcon /> : <ShuffleIcon />}
      </button>
    </div>
  );
}
