// VolumeControl Component

import { VolumeIcon } from "./icons/VolumeIcon";

// Asset Imports

// Script Imports

// Returns a VolumeControl Component
export function VolumeControl() {
  // Define Hook
  return (
    <div className="volume-control-container flex">
      <button className="volume-icon flex h-5 w-5 cursor-pointer items-center justify-center rounded-md hover:bg-hover active:bg-active">
        <VolumeIcon />
      </button>
      <div className="volume-slider ms-2 w-full">
        <label htmlFor="Volume Control">
          <input
            className="w-full cursor-pointer accent-muted-text dark:accent-dark-muted-text"
            aria-label="Volume Control Slider"
            type="range"
            min="1"
            max="100"
            defaultValue="50"
          ></input>
        </label>
      </div>
    </div>
  );
}
