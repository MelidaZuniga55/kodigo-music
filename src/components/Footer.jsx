import React, { useEffect, useState } from "react";

const Footer = ({ currentSong, isPlaying, setIsPlaying }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (isPlaying && currentSong) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 0;
          return prev + 1;
        });
      }, 500);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSong]);

  const togglePlay = () => {
    if (currentSong) setIsPlaying(!isPlaying);
  };

  return (
    <footer className="footer-player-container">
      {currentSong ? (
        <>
          <div className="song-info">
            <img src={currentSong.image} alt="cover" className={`album-cover ${isPlaying ? "rotate" : ""}`} />
            <div className="song-text">
              <strong>{currentSong.title}</strong>
              <p>{currentSong.artist}</p>
            </div>
          </div>
          <div className="controls">
            <button><i className="bi bi-skip-start-fill"></i></button>
            <button onClick={togglePlay}>
              {isPlaying ? <i className="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>}
            </button>
            <button><i className="bi bi-skip-end-fill"></i></button>
            <button><i className="bi bi-shuffle"></i></button>
            <button><i className="bi bi-arrow-repeat"></i></button>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
        </>
      ) : (
        <div className="song-info">
          <i className="bi bi-music-note-list"></i> No song playing
        </div>
      )}
    </footer>
  );
};

export default Footer;
