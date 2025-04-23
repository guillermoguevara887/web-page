// src/components/Projects.jsx
import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>

            <div className="project-card">
                <h3>Pizzeria Database</h3>
                <p>
                    A relational database system designed to manage products, orders, and customer data for a small pizza shop.
                </p>
                <a href="#" className="project-link disabled">Link coming soon</a>
            </div>

            <div className="project-card">
                <h3>Web Ordering App</h3>
                <p>
                    A simple yet functional React frontend that allows customers to place pizza orders with real-time interaction.
                </p>
                <a href="#" className="project-link disabled">Link coming soon</a>
            </div>

            <div className="project-card">
                <h3>Rewards API</h3>
                <p>
                    An API built with Node.js and Express to handle customer reward points, consumption history, and prize redemption logic.
                </p>
                <a href="#" className="project-link disabled">Link coming soon</a>
            </div>
        </section>
    );
};

export default Projects;