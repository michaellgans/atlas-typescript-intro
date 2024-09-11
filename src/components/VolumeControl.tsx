// VolumeControl Component

import { MuteIcon } from "./icons/MuteIcon";
import { VolumeIcon } from "./icons/VolumeIcon";
import { useState } from "react";

// Asset Imports

// Script Imports

// Returns a VolumeControl Component
export function VolumeControl() {
  // Define Hook
  const [sound, setSound] = useState("sound");

  const handleVolumeClick = () => {
    setSound((prev) => (prev === "sound" ? "mute" : "sound"));
  };

  return (
    <div className="volume-control-container flex">
      <button
        onClick={handleVolumeClick}
        className="volume-icon flex h-5 w-5 cursor-pointer items-center justify-center rounded-md hover:bg-hover active:bg-active"
      >
        {sound === "sound" ? <VolumeIcon /> : <MuteIcon />}
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
