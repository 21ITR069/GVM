import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Cpu, Users } from 'lucide-react';
import './Features.css';

const features = [
    {
        icon: <ShieldCheck size={40} />,
        title: "Quality Assured",
        description: "Every grain undergoes rigorous quality checks to meet global standards."
    },
    {
        icon: <Cpu size={40} />,
        title: "Advanced Technology",
        description: "Equipped with state-of-the-art Japanese Satake machinery for precision milling."
    },
    {
        icon: <Truck size={40} />,
        title: "Timely Delivery",
        description: "Efficient logistics network ensuring your order reaches you on time, every time."
    },
    {
        icon: <Users size={40} />,
        title: "Trusted by Many",
        description: "Serving thousands of satisfied customers and businesses across the region."
    }
];



const Features = () => {
    return (
        <section className="features-section section-padding">
            <div className="container">
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card glass-card"
                            initial={{ opacity: 0, rotateX: 90 }}
                            whileInView={{ opacity: 1, rotateX: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ perspective: 1000 }}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
