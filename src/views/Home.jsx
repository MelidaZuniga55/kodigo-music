import React from "react";
import CardMusic from "../components/CardMusic";

const Home = ({ setCurrentSong, setIsPlaying, library, setLibrary }) => {
  const musicList = [
    { title: "Levitating", artist: "Dua Lipa", image: "https://upload.wikimedia.org/wikipedia/en/3/3d/Dua_Lipa_Levitating_%28DaBaby_Remix%29.png" },
    { title: "Stay", artist: "Justin Bieber", image: "https://upload.wikimedia.org/wikipedia/en/0/0c/The_Kid_Laroi_and_Justin_Bieber_-_Stay.png" },
    { title: "Peaches", artist: "Justin Bieber", image: "https://upload.wikimedia.org/wikipedia/en/0/0a/Justin_Bieber_-_Peaches.png" },
    { title: "Andrea", artist: "Bad Bunny", image: "https://upload.wikimedia.org/wikipedia/en/6/60/Bad_Bunny_-_Un_Verano_Sin_Ti.png" },
    { title: "A mí", artist: "Rels B", image: "https://t2.genius.com/unsafe/567x567/https%3A%2F%2Fimages.genius.com%2F72e47b4256e8c673a9eb3610f0bc5e39.1000x1000x1.jpg" },
    { title: "Save Your Tears", artist: "The Weeknd", image: "https://upload.wikimedia.org/wikipedia/en/e/e6/Save_Your_Tears_-_Official_Fortnite_Jam_Track_Cover_Art.png" },
    { title: "Heat Waves", artist: "Glass Animals", image: "https://upload.wikimedia.org/wikipedia/en/b/b0/Glass_Animals_-_Heat_Waves.png" },
    { title: "Limon y sal", artist: "Julieta Venegas", image: "https://upload.wikimedia.org/wikipedia/en/6/60/Album_Julieta_Venegas_limon_y_sal_cover.jpg" },
    { title: "Blinding Lights", artist: "The Weeknd", image: "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png?20191127091730" },
    { title: "Amor de siempre", artist: "Cuco", image: "https://i.scdn.co/image/ab67616d0000b273b1c091e32aad5310ebbdd558" },
  ];

  return (
    <div className="home">
      <h1>Descubre tu música ✨</h1>
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