import React from "react";
import CardMusic from "../components/CardMusic";

const Library = ({ library, setLibrary, setCurrentSong, setIsPlaying }) => {
  const removeSong = (title) => {
    setLibrary(library.filter(song => song.title !== title));
  };

  return (
    <div className="library">
      <h1>Tu librería 🎶</h1>
      {library.length === 0 ? <p>No songs in your library yet.</p> : null}
      <div className="music-grid">
        {library.map((song, idx) => (
          <div key={idx} className="card-library">
            <CardMusic 
              song={song} 
              setCurrentSong={setCurrentSong} 
              setIsPlaying={setIsPlaying} 
              library={library} 
              setLibrary={setLibrary} 
              inLibrary={true} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;