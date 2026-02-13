import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import './Preloader.css';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (minimum 2.5 seconds for effect)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="preloader-content">
                        {/* 3D Logo Container */}
                        <motion.div
                            className="logo-3d-container"
                            initial={{ scale: 0.5, rotateY: -180 }}
                            animate={{
                                scale: [0.5, 1.1, 1],
                                rotateY: [0, 360, 720],
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.6, 1]
                            }}
                        >
                            <div className="logo-3d-wrapper">
                                <img src={logo} alt="GVM Rice Mill" className="preloader-logo" />
                                <div className="logo-shadow"></div>
                            </div>
                        </motion.div>

                        {/* Loading Text */}
                        <motion.div
                            className="loading-text"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <h2>GVM Rice Millers</h2>
                            <div className="loading-dots">
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                                >.</motion.span>
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                                >.</motion.span>
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                                >.</motion.span>
                            </div>
                        </motion.div>

                        {/* Progress Bar */}
                        <motion.div
                            className="progress-bar-container"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <motion.div
                                className="progress-bar"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
