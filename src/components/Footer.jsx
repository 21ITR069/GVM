import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, X, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-grid">
                    {/* Column 1: Brand */}
                    <motion.div
                        className="footer-brand-col"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <img src={logo} alt="GVM Rice Mill" className="footer-logo-img" />
                        <p className="footer-desc">
                            Providing majestic quality rice since 1980. Committed to excellence, processed with care and delivered with pride.
                        </p>
                    </motion.div>

                    {/* Column 2: Quick Links */}
                    <motion.div
                        className="footer-links-col"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#achievements">Achievements</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </motion.div>

                    {/* Column 4: Contact Info */}
                    <motion.div
                        className="footer-contact-col"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h4>Contact Us</h4>
                        <p>Ganapathy Muruga Vilas Rice Mill,<br />4/156, Attur - Rasipuram - Erode Rd,<br />Rasipuram, Tamil Nadu 637408, India</p>
                        <p className="contact-link">
                            <strong>Phone:</strong> <a href="tel:+919442385915">9442385915</a>, <a href="tel:+919842732246">9842732246</a>
                        </p>
                        <p className="contact-link">
                            <strong>Email:</strong> <a href="mailto:info@gvmrice.in">info@gvmrice.in</a>
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="footer-divider"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                ></motion.div>

                <motion.div
                    className="footer-bottom"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p>&copy; {new Date().getFullYear()} GVM Rice Mill. All rights reserved.</p>
                    <div className="social-icons">
                        <a href="#" className="social-icon" aria-label="Facebook"><Facebook size={18} /></a>
                        <a href="#" className="social-icon" aria-label="X"><X size={18} /></a>
                        <a href="#" className="social-icon" aria-label="Instagram"><Instagram size={18} /></a>
                        <a href="#" className="social-icon" aria-label="LinkedIn"><Linkedin size={18} /></a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
