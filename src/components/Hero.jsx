import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>MemoDev Studio</h1>
                <p className="subtitle">Simulating a company. Learning like a pro.</p>
                <a href="#projects" className="hero-btn">View Projects</a>
            </div>
        </section>
    );
};

export default Hero;