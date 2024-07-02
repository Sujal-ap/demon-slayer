import React, { useEffect, useState } from 'react';
import '../styles/Preloader.css';
import logo from '../images/demon-slayer-logo.png'; // replace with your logo path
import sound from '../images/demon-slayer-preloader.mp3'; // replace with your sound path
import cornerImage from '../images/corner-image.png'; // replace with your corner image path

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const audio = new Audio(sound);
    audio.play().catch((error) => {
      console.log('Audio play prevented:', error);
    });

    // Simulate the end of the preloader after 5 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        // This is where you would hide the preloader and show your main content
      }, 1000); // match the transition duration
    }, 5000);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
      <img src={logo} alt="Demon Slayer logo" className="preloader-logo" />
      <img src={cornerImage} alt="" className="corner-image top-left" />
      <img src={cornerImage} alt="" className="corner-image bottom-right" />
    </div>
  );
};

export default Preloader;
