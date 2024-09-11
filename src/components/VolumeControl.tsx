// VolumeControl Component

import { MuteIcon } from "./icons/MuteIcon";
import { VolumeIcon } from "./icons/VolumeIcon";
import { useEffect, useState } from "react";

// Asset Imports

// Script Imports

// Returns a VolumeControl Component
export function VolumeControl() {
  // Define Hook
  const [sound, setSound] = useState("sound");
  const [volume, setVolume] = useState(50);

  const handleVolumeClick = () => {
    setSound((prev) => (prev === "sound" ? "mute" : "sound"));
  };

  useEffect(() => {
    if (sound === "mute") {
      setVolume(0);
    } else {
      setVolume(50);
    }
  }, [volume, sound]);

  return (
    <div className="volume-control-container flex">
      <button
        aria-label="Mute Button"
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
            defaultValue={volume}
          ></input>
        </label>
      </div>
    </div>
  );
}
