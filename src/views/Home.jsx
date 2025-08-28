import React from "react";
import CardMusic from "../components/CardMusic";

const Home = ({ setCurrentSong, setIsPlaying, library, setLibrary }) => {
  const musicList = [
    { title: "Blinding Lights", artist: "The Weeknd", image: "https://i.scdn.co/image/ab67616d0000b273c1c1c3f1a3a2b1234567890" },
    { title: "Levitating", artist: "Dua Lipa", image: "https://i.scdn.co/image/ab67616d0000b273abcdefabcdefabcdefabcdef" },
    { title: "Stay", artist: "Justin Bieber", image: "https://i.scdn.co/image/ab67616d0000b273abcdefabcdefabcdef123456" },
    { title: "Peaches", artist: "Justin Bieber", image: "https://i.scdn.co/image/ab67616d0000b273abcdef123456abcdefabcdef" },
    { title: "Save Your Tears", artist: "The Weeknd", image: "https://i.scdn.co/image/ab67616d0000b273123456abcdefabcdefabcdef" },
    { title: "Heat Waves", artist: "Glass Animals", image: "https://i.scdn.co/image/ab67616d0000b273abcdefabcdefabcdefabcdef12" },
  ];

  return (
    <div className="home">
      <h1>Discover Music</h1>
      <div className="music-grid scroll-horizontal">
        {musicList.map((song, idx) => (
          <CardMusic 
            key={idx} 
            song={song} 
            setCurrentSong={setCurrentSong} 
            setIsPlaying={setIsPlaying} 
            library={library}
            setLibrary={setLibrary}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
