// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} MemoDev Studio. Built with passion and purpose.</p>
        </footer>
    );
};

export default Footer;