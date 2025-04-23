// src/components/Devlog.jsx
import React from 'react';
import './Devlog.css';

const Devlog = () => {
    return (
        <section className="devlog" id="devlog">
            <h2>Devlog</h2>
            <p className="devlog-intro">
                In this section, I document my weekly progress, key decisions, technical lessons, and personal reflections as I simulate the journey of running my own software studio.
            </p>

            <div className="devlog-entry">
                <h3>Week 1 — Foundation</h3>
                <p>
                    MemoDev Studio was officially founded this week. I defined the company mission, vision, and values, created a logo, and recorded the first YouTube video. It feels exciting to build everything from scratch and treat it like a real business.
                </p>
                <p className="video-placeholder">Video link coming soon...</p>
            </div>
        </section>
    );
};

export default Devlog;