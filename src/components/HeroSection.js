import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className="image_dc">
        <a href="/dc" className="dc_a">DC</a>
      </div>
      <div className="image_marvel">
        <a href="/marvel" className="marvel_a">Marvel</a> 
      </div>
      
      
    </div>
  );
}

export default HeroSection;
