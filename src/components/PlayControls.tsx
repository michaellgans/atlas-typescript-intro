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
  const [currentSong, setCurrentSong] = useState(0);
  const [playPause, setPlayPause] = useState("play");
  const [shuffle, setShuffle] = useState("noShuffle");

  const songContext = useContext(AppContext);

  if (!songContext) {
    throw new Error();
  }

  const { songs } = songContext;
  const length = songs.length;

  // Reset speed to 1
  useEffect(() => {
    if (speed > 3) {
      setSpeed(1);
    }
  }, [speed]);

  useEffect(() => {
    console.log(currentSong);
    if (currentSong > length || currentSong < 0) {
      setCurrentSong(0);
    }
  }, [currentSong, length]);

  const handlePlayClick = () => {
    setPlayPause((prev) => (prev === "play" ? "pause" : "play"));
  };

  const handleShuffleClick = () => {
    setShuffle((prev) => (prev === "noShuffle" ? "shuffle" : "noShuffle"));
  };

  const handleNextClick = () => {
    if (shuffle === "shuffle") {
      setCurrentSong(Math.floor(Math.random() * songs.length));
    } else {
      setCurrentSong(currentSong + 1);
    }
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
        onClick={() => setCurrentSong(currentSong - 1)}
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
