import React from "react";

const CardMusic = ({ song, setCurrentSong, setIsPlaying, library, setLibrary }) => {
  const playSong = () => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const addToLibrary = () => {
    if (!library.some(s => s.title === song.title)) {
      setLibrary([...library, song]);
    }
  };

  return (
    <div className="card-music">
      <img src={song.image} alt={song.title} className="album-art-img" />
      <div className="song-info">
        <h4>{song.title}</h4>
        <p>{song.artist}</p>
      </div>
      <div className="card-buttons">
        <button onClick={playSong}><i className="bi bi-play-fill"></i> Play</button>
        <button onClick={addToLibrary}><i className="bi bi-bookmark-plus-fill"></i> Add</button>
      </div>
    </div>
  );
};

export default CardMusic;
