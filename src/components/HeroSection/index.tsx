// This file contains the HeroSection component for rendering the hero text
import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const heroText = 'Welcome to My Developer Portfolio';

  return (
    <section id="hero">
      <div className="hero-text">
        {heroText}
      </div>
    </section>
  );
};

export default HeroSection;