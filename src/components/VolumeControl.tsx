// VolumeControl Component

// Asset Imports

// Script Imports

// Returns a VolumeControl Component
export function VolumeControl() {
  // Define Hook
  return (
    <div className="volume-control-container flex">
      <button className="volume-icon flex h-5 w-5 cursor-pointer items-center justify-center rounded-md hover:bg-hover active:bg-active">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path d="M10.5 3.75a.75.75 0 0 0-1.264-.546L5.203 7H2.667a.75.75 0 0 0-.7.48A6.985 6.985 0 0 0 1.5 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h2.535l4.033 3.796a.75.75 0 0 0 1.264-.546V3.75ZM16.45 5.05a.75.75 0 0 0-1.06 1.061 5.5 5.5 0 0 1 0 7.778.75.75 0 0 0 1.06 1.06 7 7 0 0 0 0-9.899Z" />
          <path d="M14.329 7.172a.75.75 0 0 0-1.061 1.06 2.5 2.5 0 0 1 0 3.536.75.75 0 0 0 1.06 1.06 4 4 0 0 0 0-5.656Z" />
        </svg>
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
