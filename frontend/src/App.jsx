import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlayerDeMusica = ({ song }) => {
  const [audio] = useState(new Audio(song.url));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <h3>{song.title}</h3>
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
};

const App = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:3001')
      .then(response => {
        setSongs(response.data);
      })
      .catch(error => {
        console.error('Error fetching songs:', error);
      });
  }, []);

  return (
    <div className='container'>
      <h1>Player de Musica</h1>
      {songs.map((song, index) => (
        <PlayerDeMusica key={index} song={song} />
      ))}
    </div>
  );
};

export default App;
