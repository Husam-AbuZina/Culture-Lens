// File: src/components/Hero/Hero.jsx
import React from 'react';
import './Hero.css'; // Importing the CSS for the Hero Section

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Welcome to Your Dream Destination</h1>
          <p>Discover the beauty of the world with us. Explore new places and cultures.</p>
          <a href="#explore" className="hero-button">Explore Now</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
