import React, { useEffect, useState } from 'react';
import './LandingPage.css';

const videos = [
  '/videos/video1.mp4',  // Provide paths to your video files
  '/videos/video3.mp4'
];

function LandingPage() {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
    }, 10000);  // Change video every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="app">
      {/* Video Background */}
      <div className="video-container">
        <video className="background-video" src={videos[currentVideo]} autoPlay muted loop></video>
      </div>
 
      {/* Main Content */}
      <div className="main-content">
        <div className="rating">
          <span role="img" aria-label="stars">⭐⭐⭐⭐⭐</span> 200+ brands scaled
        </div>
        <h1>Digi Agency By Sane Infotech<br/></h1>
        <div className="cta-buttons">
        {/* <button
        className="cta-button-red"
        onClick={() => window.open("https://cal.com/theskitbit/15-min", "_blank")}>
        Book a call
        </button> */}
        <a href="https://cal.com/theskitbit/15-min" target="_blank" rel="noopener noreferrer">
  <button className="cta-button-red">Book a call</button>
</a>

          <button className="cta-button-white">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
