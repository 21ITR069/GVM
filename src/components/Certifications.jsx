import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
import makeInIndia from '../assets/logos/make-in-india-logo_650x400_61433263706-removebg-preview.png';
import fssai from '../assets/logos/png-clipart-food-safety-and-standards-authority-of-india-logo-india-food-text-removebg-preview.png';
import iso from '../assets/logos/business-company-quality-international-standardize-organization-iso-9001-bronze-medal-with-red-ribbon-free-vector-removebg-preview.png';
import premium from '../assets/logos/premium-quality-golden-medal-icon-seal-sign-isolated-on-white-background-illustration-free-vector-removebg-preview.png';
import './Certifications.css';

const certifications = [
    {
        id: 1,
        name: "Make in India",
        img: makeInIndia,
        alt: "Make in India"
    },
    {
        id: 2,
        name: "FSSAI Certified",
        img: fssai,
        alt: "FSSAI Certified"
    },
    {
        id: 3,
        name: "ISO 9001:2015",
        img: iso,
        alt: "ISO 9001 Certified"
    },
    {
        id: 4,
        name: "Premium Quality",
        img: premium,
        alt: "Premium Quality"
    }
];

const Certifications = () => {
    // Generate random rice grains
    const riceGrains = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: 5 + Math.random() * 5
    }));

    return (
        <section className="certifications-section">
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

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="cert-content-wrapper">

                    {/* Logos Grid */}
                    <motion.div
                        className="cert-logos-grid"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                className="cert-logo-item"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img src={cert.img} alt={cert.alt} className="cert-img" />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        className="cert-text-content"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="cert-title">Commitment to Excellence</h3>
                        <p className="cert-description">
                            At <strong>GVM Rice Mill</strong>, quality is not just a standard—it's our heritage.
                            Proudly <strong>Made in India</strong>, our products meet the highest safety and hygiene benchmarks set by <strong>FSSAI</strong> and global ISO standards.
                            From sourcing the finest paddy to the final packaging, we ensure that every grain delivering to your home is pure, authentic, and full of flavor.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Certifications;
