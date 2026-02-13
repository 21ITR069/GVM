
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Clock, MapPin } from 'lucide-react';
import aboutImg from '../assets/about img.jpeg';
import './About.css';

const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, -5]);

    // Generate random rice grains
    const riceGrains = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: 5 + Math.random() * 5
    }));

    return (
        <section id="about" className="about-section section-padding" ref={ref}>
            <div className="falling-rice-container">
                {riceGrains.map((grain) => (
                    <div
                        key={grain.id}
                        className="rice-grain"
                        style={{
                            left: grain.left,
                            animationDelay: `${grain.delay}s`,
                            animationDuration: `${grain.duration}s`,
                            width: `${grain.size}px`,
                            height: `${grain.size * 5}px` // Extra long grain shape
                        }}
                    />
                ))}
            </div>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="about-grid">
                    <motion.div
                        className="about-image-wrapper"
                        initial={{ opacity: 0, x: -50, rotateY: -15 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                        viewport={{ once: true }}
                        style={{ perspective: 1000 }}
                    >
                        <motion.div
                            className="image-frame-3d"
                            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img
                                src={aboutImg}
                                alt="Rice Milling Process"
                                className="about-image"
                            />
                            <div className="experience-badge">
                                <span className="years">45+</span>
                                <span className="text">Years of<br />Legacy</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="subtitle">Our Journey</h4>
                        <h2 className="title">The Legend of <span className="highlight">GMV Rice Millers</span></h2>
                        <h3 className="pride-text">Pride of Tamil Nadu</h3>

                        <div className="text-content">
                            <p>
                                <strong>GMV Rice Millers</strong> is a renowned name in the rice milling industry, deeply rooted in the heritage of <strong>Rasipuram, Tamil Nadu</strong>. Established over 50 years ago, our family-run legacy continues to produce premium-quality rice for customers worldwide. We pride ourselves on blending traditional methods with modern techniques to ensure top-notch quality and consistency in every grain.
                            </p>
                            <p>
                                Since <strong>1980</strong>, we have been a leading processor and exporter of the finest Indian varieties, including Basmati, Sona Masoori, and Pusa. At GMV, every grain is a promise of purity. Sourced from trusted suppliers and processed with state-of-the-art technology, we meticulously monitor every step to deliver the freshest, most flavorful rice to your table. Our team is dedicated to customer satisfaction, ensuring that the GMV name remains synonymous with trust and quality.
                            </p>
                        </div>

                        <div className="features-inline">
                            <div className="feature-item">
                                <Clock className="icon" size={24} />
                                <span>Est. 1980</span>
                            </div>
                            <div className="feature-item">
                                <MapPin className="icon" size={24} />
                                <span>Rasipuram, TN</span>
                            </div>
                            <div className="feature-item">
                                <Award className="icon" size={24} />
                                <span>Premium Quality</span>
                            </div>
                        </div>

                        <button className="btn-primary mt-4">Discover More</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
