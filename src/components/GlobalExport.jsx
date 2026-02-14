
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Truck, PackageCheck } from 'lucide-react';
import worldMap from '../assets/world map.jpeg';
import './GlobalExport.css';

const GlobalExport = () => {
    // Defines coordinates in percentage: { top: Y%, left: X% }
    const centerPoint = { top: 53, left: 69.5 }; // Tamil Nadu, India

    const destinations = [
        { top: 25, left: 75, delay: 0, name: "Russia" },
        { top: 75, left: 88, delay: 0.2, name: "Australia" },
        { top: 38, left: 22, delay: 0.4, name: "USA" },
        { top: 32, left: 48, delay: 0.6, name: "UK" },
        { top: 59, left: 76, delay: 0.8, name: "Singapore" },
        { top: 68, left: 32, delay: 1.0, name: "Brazil" }
    ];

    // Helper to generate curve path
    const getCurvePath = (start, end) => {
        const sx = start.left;
        const sy = start.top;
        const ex = end.left;
        const ey = end.top;

        // Calculate control point for quadratic bezier curve
        // Offset Y to make it arch upwards
        const cx = (sx + ex) / 2;
        const cy = Math.min(sy, ey) - 20; // Arch height

        return `M${sx},${sy} Q${cx},${cy} ${ex},${ey}`;
    };

    // Generate random rice grains
    const riceGrains = React.useMemo(() => Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 4,
        size: 4 + Math.random() * 4
    })), []);

    return (
        <section className="global-export-section section-padding-y">
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

            <div className="container">
                <div className="export-header text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="subtitle-badge"
                    >
                        <Globe size={16} className="badge-icon" /> Global Reach
                    </motion.div>

                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Exporting <span className="highlight">Freshness</span> Worldwide
                    </motion.h2>

                    <motion.p
                        className="export-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        GMV Rice Millers proudly bridges cultures with the taste of tradition. Our efficient logistics and international standard packaging ensure every grain arrives fresh, preserving its authentic aroma and flavor across borders.
                    </motion.p>
                </div>
            </div>

            <div className="map-showcase-full">
                <motion.div
                    className="map-container-full"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <img src={worldMap} alt="World Map" className="world-map-img-full" />
                    <div className="map-overlay-gradient"></div>

                    {/* SVG Layer for Curves */}
                    <svg className="map-curves-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {destinations.map((dest, index) => (
                            <motion.path
                                key={index}
                                d={getCurvePath(centerPoint, dest)}
                                className="export-curve"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.5, delay: dest.delay + 0.5, ease: "easeInOut" }}
                            />
                        ))}
                    </svg>

                    {/* Center Point (Tamil Nadu) */}
                    <div
                        className="map-pin-pulse center-pin"
                        style={{ top: `${centerPoint.top}%`, left: `${centerPoint.left}%` }}
                    >
                        <div className="pin-center"></div>
                        <div className="pin-ring"></div>
                        <div className="pin-tooltip">Tamil Nadu</div>
                    </div>

                    {/* Destination Points */}
                    {destinations.map((dest, index) => (
                        <div
                            key={index}
                            className="map-pin-pulse destination-pin"
                            style={{ top: `${dest.top}%`, left: `${dest.left}%` }}
                        >
                            <div className="pin-center-small"></div>
                            <div className="pin-tooltip">{dest.name}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="container">
                <div className="export-stats" style={{ perspective: 1000 }}>
                    <motion.div
                        className="stat-item glass-stat"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.05,
                            rotateX: 5,
                            rotateY: 5,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        viewport={{ once: true }}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <motion.div
                            className="stat-icon-bg"
                            style={{ transformStyle: "preserve-3d", translateZ: 20 }}
                        >
                            <Globe size={24} />
                        </motion.div>
                        <div className="stat-info" style={{ transformStyle: "preserve-3d", translateZ: 10 }}>
                            <h4>Global</h4>
                            <p>Destinations</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="stat-item glass-stat"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.05,
                            rotateX: 5,
                            rotateY: 5,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                        viewport={{ once: true }}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <motion.div
                            className="stat-icon-bg"
                            style={{ transformStyle: "preserve-3d", translateZ: 20 }}
                        >
                            <Truck size={24} />
                        </motion.div>
                        <div className="stat-info" style={{ transformStyle: "preserve-3d", translateZ: 10 }}>
                            <h4>Efficient</h4>
                            <p>Logistics</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="stat-item glass-stat"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.05,
                            rotateX: 5,
                            rotateY: 5,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <motion.div
                            className="stat-icon-bg"
                            style={{ transformStyle: "preserve-3d", translateZ: 20 }}
                        >
                            <PackageCheck size={24} />
                        </motion.div>
                        <div className="stat-info" style={{ transformStyle: "preserve-3d", translateZ: 10 }}>
                            <h4>Premium</h4>
                            <p>Packaging</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GlobalExport;
