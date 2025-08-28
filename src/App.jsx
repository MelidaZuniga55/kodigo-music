import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Library from "./views/Library";
import Login from "./views/Login";

function App() {
  const [user, setUser] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [library, setLibrary] = useState([]);

  return (
    <div className="app d-flex flex-column min-vh-100">
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <>
          <Navbar user={user} />
          <main className="flex-fill container my-4">
            <Routes>
              <Route 
                path="/" 
                element={<Home 
                  setCurrentSong={setCurrentSong} 
                  setIsPlaying={setIsPlaying} 
                  library={library}
                  setLibrary={setLibrary}
                />} 
              />
              <Route 
                path="/library" 
                element={<Library 
                  library={library} 
                  setLibrary={setLibrary} 
                  setCurrentSong={setCurrentSong} 
                  setIsPlaying={setIsPlaying} 
                />} 
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer 
            currentSong={currentSong} 
            isPlaying={isPlaying} 
            setIsPlaying={setIsPlaying} 
          />
        </>
      )}
    </div>
  );
}

export default App;
