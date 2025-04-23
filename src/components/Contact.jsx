// src/components/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2>Contact</h2>
            <p className="contact-text">
                Interested in my work or want to see more? Visit my main portfolio or get in touch via email.
            </p>
            <div className="contact-actions">
                <a href="https://my-portfolio-ten-rho-91.vercel.app" target="_blank" rel="noopener noreferrer" className="contact-btn">
                    View Portfolio
                </a>
                <a href="mailto:memodevstudio@gmail.com" className="contact-btn alt">
                    Send Email
                </a>
            </div>
        </section>
    );
};

export default Contact;