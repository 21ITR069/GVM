import React from 'react';
import { motion } from 'framer-motion';
import sloganBg from '../assets/slogan.jpeg';
import './SloganSection.css';

const SloganSection = () => {
    return (
        <section className="slogan-section">
            <div
                className="slogan-background"
                style={{ backgroundImage: `url(${sloganBg})` }}
            >
                <div className="slogan-overlay"></div>
            </div>

            <div className="slogan-content container">
                <motion.div
                    className="slogan-text-wrapper"
                    initial={{ opacity: 0, rotateX: 90 }}
                    whileInView={{ opacity: 1, rotateX: 0 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    viewport={{ once: true }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    <motion.h2
                        className="slogan-text primary"
                        style={{ translateZ: "60px" }}
                    >
                        A Legacy Of Flavor,
                    </motion.h2>
                    <motion.h2
                        className="slogan-text secondary"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{ translateZ: "40px" }}
                    >
                        A Promise of Quality
                    </motion.h2>
                    <motion.p
                        className="slogan-subtext"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        style={{ translateZ: "20px" }}
                    >
                        From the House Of GMV
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default SloganSection;
