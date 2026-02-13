import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import posterImg from '../assets/post.jpg';
import './PosterSection.css';

const PosterSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 1]);
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -20]);

    return (
        <section className="poster-section" ref={ref}>
            <div className="poster-container">
                <motion.div
                    className="poster-wrapper"
                    style={{
                        opacity,
                        y
                    }}
                >
                    <img
                        src={posterImg}
                        alt="GVM Rice Mill - Rooted in Tradition, Served with Purity"
                        className="poster-image"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default PosterSection;
