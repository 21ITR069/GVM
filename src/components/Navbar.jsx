import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Wheat, AlignRight } from 'lucide-react';
import './Navbar.css';

import logo from '../assets/logo.png';

const Navbar = () => {
    // ... existing code ...
    // Note: I will just target the specific lines for replacement to minimalize changes to existing state logic
    // But since I need to change the import at the top and the render at the bottom, I might need two chunks or just replace the file content carefully.
    // Let's do two chunks.
    // Chunk 1: Import
    // Chunk 2: Usage

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                type: "tween",
                duration: 0.3,
                when: "afterChildren"
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "tween",
                duration: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, y: 20 },
        open: { opacity: 1, y: 0 }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <div
                    className="logo"
                >
                    <img
                        src={logo}
                        alt="GVM Rice Mill"
                        className="logo-img"
                    />
                </div>

                <div className="desktop-menu">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#achievements" className="nav-link">Achievements</a>
                    <a href="#gallery" className="nav-link">Gallery</a>
                    <a href="#blog" className="nav-link">Blog</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>

                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ zIndex: 2000 }}>
                    {isOpen ? <X size={28} color="white" strokeWidth={2.5} /> : <AlignRight size={30} color="white" strokeWidth={2.5} />}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="mobile-menu"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                        >
                            <motion.a href="#home" onClick={() => setIsOpen(false)} variants={linkVariants}>Home</motion.a>
                            <motion.a href="#about" onClick={() => setIsOpen(false)} variants={linkVariants}>About</motion.a>
                            <motion.a href="#achievements" onClick={() => setIsOpen(false)} variants={linkVariants}>Achievements</motion.a>
                            <motion.a href="#gallery" onClick={() => setIsOpen(false)} variants={linkVariants}>Gallery</motion.a>
                            <motion.a href="#blog" onClick={() => setIsOpen(false)} variants={linkVariants}>Blog</motion.a>
                            <motion.a href="#contact" onClick={() => setIsOpen(false)} variants={linkVariants}>Contact</motion.a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
