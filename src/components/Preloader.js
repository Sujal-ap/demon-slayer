import React, { useEffect } from 'react';
import '../styles/Preloader.css';
import logo from '../images/demon-slayer-logo2.png'; // replace with your logo path
import sound from '../images/demon-slayer-preloader.mp3'; // replace with your sound path

const Preloader = () => {
  useEffect(() => {
    const audio = new Audio(sound);
    audio.play().catch((error) => {
      console.log('Audio play prevented:', error);
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="preloader">
      <img src={logo} alt="Demon Slayer Logo" className="preloader-logo" />
    </div>
  );
};

export default Preloader;
