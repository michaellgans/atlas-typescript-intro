import Footer from "./components/Footer";
import MusicPlayer from "./MusicPlayer";
import { PlayList } from "./components/PlayList";
import { CurrentlyPlaying } from "./components/CurrentlyPlaying";
import { ContextProvider } from "./components/ContextProvider";
import { usePlaylistData } from "./hooks/usePlaylistData";
import { BarLoader } from "react-spinners";

function App() {
  // Hooks
  const {loading} = usePlaylistData();

  if (loading) {
    return (
      <div className="flex h-full bg-main-background dark:bg-dark-main-background min-h-screen flex-col justify-center items-center">
        <BarLoader
          color="#4fc8f8"
          height={25}
          loading
          width={500}
        />
      </div>
    );
  }

  return (
    <ContextProvider>
      <div className="flex h-full dark:text-dark-text-color bg-main-background dark:bg-dark-main-background min-h-screen flex-col justify-between items-center p-8">
        <MusicPlayer>
          <CurrentlyPlaying />
          <PlayList />
        </MusicPlayer>
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
