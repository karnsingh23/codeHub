import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCode } from '@fortawesome/free-solid-svg-icons';
import './hero.css'
export default function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-content">

        <main className="hero-main">
          <div className="hero-text">
            <h1 className="hero-title">
              Build amazing things{' '}
              <span className="hero-highlight">with Coding Co.</span>
            </h1>
            <p className="hero-description">
              Coding Co. provides the tools and resources you need to build and deploy your applications quickly and efficiently. Our platform is designed to make coding accessible and enjoyable for everyone.
            </p>
            <div className="hero-buttons">
              <a href="#" className="hero-button hero-primary-button">
                Get Started
                <FontAwesomeIcon icon={faPlay} className="hero-button-icon" />
              </a>
              <a href="#" className="hero-button hero-outline-button">
                Learn More
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
