import Footer from "./components/Footer";
import MusicPlayer from "./MusicPlayer";
import { PlayList } from "./components/PlayList";
import { CurrentlyPlaying } from "./components/CurrentlyPlaying";
import { ContextProvider } from "./components/ContextProvider";

function App() {
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
