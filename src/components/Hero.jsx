import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import videoBg from '../assets/rice-video.mp4';
import './Hero.css';

const textSequence = [
    { id: 1, text: "GVM", subtext: "RICE MILLERS", position: "left" },
    { id: 2, text: "Premium Products", subtext: "From the House of GMV", position: "right" },
    { id: 3, text: "A Promise of Quality", subtext: "", position: "left" }
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef(null);
    const heroRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const yVal = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacityVal = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.6;
        }
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % textSequence.length);
        }, 4000); // Change text every 4 seconds
        return () => clearInterval(timer);
    }, []);

    const currentItem = textSequence[currentIndex];
    const isLeft = currentItem.position === 'left';

    return (
        <section id="home" className="hero-section" ref={heroRef}>
            <video
                ref={videoRef}
                className="hero-video"
                src={videoBg}
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="hero-overlay"></div>

            <motion.div
                className="container hero-content-wrapper"
                style={{ y: yVal, opacity: opacityVal }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentItem.id}
                        initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`hero-text-item ${isLeft ? 'text-left' : 'text-right'}`}
                    >
                        <h1 className="hero-main-text">{currentItem.text}</h1>
                        {currentItem.subtext && <p className="hero-subtext">{currentItem.subtext}</p>}
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
