import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, ShieldCheck, UtensilsCrossed } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
    {
        icon: <ShieldCheck size={32} />,
        title: "Purity You Can Trust",
        description: "We believe harmful chemicals have no place in your kitchen. Our rice is processed using advanced technology that ensures zero stones, dust, or impurities—just pure, wholesome grains."
    },
    {
        icon: <Leaf size={32} />,
        title: "From Farm to Family",
        description: "Reviewing our roots, we source directly from local farmers who treat their land with respect. This direct connection ensures every bag of GMV rice is fresh, ethical, and supports our farming community."
    },
    {
        icon: <UtensilsCrossed size={32} />,
        title: "The Taste of Tradition",
        description: "Rice isn't just a side dish; it's the heart of the meal. Our aging process locks in the natural aroma, ensuring that familiar, comforting fragrance fills your home every time you cook."
    },
    {
        icon: <Heart size={32} />,
        title: "Health in Every Grain",
        description: "We process our rice minimally to retain its essential nutrients. Rich in fiber and natural goodness, GMV rice is the perfect foundation for a healthy, balanced diet for your loved ones."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const WhyChooseUs = () => {
    // Generate random rice grains
    const riceGrains = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: 5 + Math.random() * 5
    }));

    return (
        <section className="why-choose-section">
            {/* Falling Rice Animation */}
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

            {/* Background Decoration */}
            <div className="decoration-rice decoration-1">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#000" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.1C93.5,11.1,82.2,26.4,71.3,39.6C60.4,52.8,49.9,63.9,37.6,71.3C25.3,78.7,11.2,82.4,-2,85.8C-15.1,89.3,-27.3,92.5,-38.3,87.6C-49.3,82.7,-59.1,69.7,-68.6,56.5C-78.1,43.3,-87.3,29.9,-89.6,15.4C-91.8,0.9,-87.1,-14.8,-79.1,-28.4C-71.1,-42,-59.8,-53.6,-47.4,-61.5C-35,-69.4,-21.5,-73.6,-7.6,-73.6C6.3,-73.6,17.6,-69.4,30.5,-83.6" />
                </svg>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="why-header">
                    <motion.span
                        className="why-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Why Families Choose Us
                    </motion.span>
                    <motion.h2
                        className="why-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        More Than Just Rice, It's a <span style={{ color: 'var(--secondary)' }}>Tradition of Trust</span>
                    </motion.h2>
                    <motion.p
                        className="why-desc"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        For decades, GMV Rice Mill has been a silent partner in your family gatherings, festive feasts, and daily meals. Here is why thousands of homes trust us.
                    </motion.p>
                </div>

                <motion.div
                    className="why-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{ perspective: 1000 }} // Enable 3D space
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="benefit-card"
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                rotateY: 5,
                                rotateX: 5,
                                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <motion.div
                                className="icon-box"
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.2 // Stagger the floating effect
                                }}
                                variants={{
                                    hover: {
                                        rotate: [0, -10, 10, -10, 0],
                                        scale: 1.1,
                                        transition: { duration: 0.5 }
                                    }
                                }}
                                style={{ transformStyle: "preserve-3d", translateZ: 20 }} // Pop out icon in 3D
                            >
                                {feature.icon}
                            </motion.div>
                            <h3 className="benefit-title" style={{ transformStyle: "preserve-3d", translateZ: 10 }}>{feature.title}</h3>
                            <p className="benefit-text" style={{ transformStyle: "preserve-3d", translateZ: 5 }}>{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
