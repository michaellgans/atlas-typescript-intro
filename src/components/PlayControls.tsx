// PlayControls Component

// Asset Imports
import { RewindIcon } from "./icons/RewindIcon";
import { PlayIcon } from "./icons/PlayIcon";
import { ForwardIcon } from "./icons/ForwardIcon";
import { ShuffleIcon } from "./icons/ShuffleIcon";

// Script Imports

// Returns a PlayControls Component
export function PlayControls() {
  // Define Hook
  return (
    <div className="controls-container mb-4 flex h-10 items-center justify-between">
      <button className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md text-lg font-medium hover:bg-hover active:bg-active dark:hover:bg-dark-hover dark:active:bg-dark-active">
        1x
      </button>
      <button className="rewind flex h-12 w-12 cursor-pointer items-center justify-center rounded-md opacity-50 hover:bg-hover active:bg-active dark:text-dark-muted-text dark:opacity-100 dark:hover:bg-dark-hover dark:active:bg-dark-active">
        <RewindIcon />
      </button>
      <button className="play border-black flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border-2 hover:bg-hover active:bg-active dark:border-dark-muted-text dark:hover:bg-dark-hover dark:active:bg-dark-active">
        <PlayIcon />
      </button>
      <button className="forward flex h-12 w-12 cursor-pointer items-center justify-center rounded-md hover:bg-hover active:bg-active dark:hover:bg-dark-hover dark:active:bg-dark-active">
        <ForwardIcon />
      </button>
      <button className="shuffle flex h-12 w-12 cursor-pointer items-center justify-center rounded-md hover:bg-hover active:bg-active dark:hover:bg-dark-hover dark:active:bg-dark-active">
        <ShuffleIcon />
      </button>
    </div>
  );
}
