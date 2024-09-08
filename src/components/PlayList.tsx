// PlayList Component

// Asset Imports
import { PlayListItem } from "./PlayListItem";

// Script Imports

// Returns a PlayList Component
export function PlayList() {
  // Define Hook
  return (
    <div className="play-list w-full p-6 md:w-1/2 md:border-l md:border-muted-text dark:md:border-dark-muted-text">
      <h3 className="play-list-title mb-4 text-xl font-semibold">
        What's On Your Vest?
      </h3>
      <div className="all-songs flex flex-col pr-4">
        <PlayListItem
          songTitle="Rainbow in the Dark"
          artist="Dio"
          playTime="4:17"
        />
        <PlayListItem
          songTitle="Wild Child"
          artist="W.A.S.P."
          playTime="5:12"
        />
        <PlayListItem
          songTitle="Breaking the Law"
          artist="Judas Priest"
          playTime="2:34"
        />
        <PlayListItem songTitle="Overkill" artist="Motorhead" playTime="5:11" />
        <PlayListItem
          songTitle="Born To Raise Hell"
          artist="Motorhead"
          playTime="5:00"
        />
        <PlayListItem
          songTitle="You've Got Another Thing Coming"
          artist="Judas Priest"
          playTime="5:10"
        />
        <PlayListItem
          songTitle="Heading Out to the Highway"
          artist="Judas Priest"
          playTime="3:46"
        />
        <PlayListItem
          songTitle="L.O.V.E. Machine"
          artist="W.A.S.P."
          playTime="3:52"
        />
        <PlayListItem
          songTitle="On Your Knees"
          artist="W.A.S.P."
          playTime="3:49"
        />
      </div>
    </div>
  );
}
