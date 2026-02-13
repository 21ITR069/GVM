import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import './Preloader.css';

const Preloader = ({ loading }) => {
    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <motion.div
                        className="preloader-logo-container"
                        layoutId="main-logo-container"
                    >
                        {/* Decorative background ring */}
                        <motion.div
                            className="preloader-ring"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0, 1, 0],
                                borderwidth: ["2px", "1px", "0px"]
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                        />

                        <motion.img
                            src={logo}
                            alt="Loading..."
                            className="preloader-logo"
                            layoutId="main-logo"
                            initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
                            animate={{
                                scale: [0.5, 1.1, 1],
                                opacity: 1,
                                rotateY: [180, 0, 0], // Flip in 3D
                                y: [0, -10, 0] // Subtle float
                            }}
                            transition={{
                                duration: 2,
                                ease: "circOut",
                                times: [0, 0.6, 1]
                            }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
