
import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <h2>About MemoDev Studio</h2>

            <div className="about-block">
                <h3>Mission</h3>
                <p>
                    At MemoDev Studio, I build full software solutions as if they were for a real startup,
                    using modern technologies, documenting every step, and growing as a professional developer through simulated real-world experience.
                </p>
            </div>

            <div className="about-block">
                <h3>Vision</h3>
                <p>
                    To become a reliable, full-stack developer capable of joining real-world teams,
                    with a solid technical foundation and hands-on experience through meaningful projects.
                </p>
            </div>

            <div className="about-block">
                <h3>Core Values</h3>
                <ul>
                    <li><strong>Continuous learning:</strong> Every mistake is a chance to improve.</li>
                    <li><strong>Clear documentation:</strong> What isn't documented, doesn't exist.</li>
                    <li><strong>Autonomy:</strong> Learning by doing — not waiting.</li>
                    <li><strong>Technical honesty:</strong> Showing the good, the bad, and the learning process.</li>
                    <li><strong>Consistency:</strong> Weekly progress, no matter how small.</li>
                    <li><strong>Realistic simulation:</strong> Working as if already in a real job.</li>
                </ul>
            </div>
        </section>
    );
};

export default About;