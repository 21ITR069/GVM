import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Sun } from 'lucide-react';
import './Products.css';

const products = [
    {
        id: 1,
        name: 'Premium Basmati Rice',
        description: 'Long-grain aromatic rice aged to perfection. Ideal for biryanis and special occasions.',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80',
        tag: 'Best Seller'
    },
    {
        id: 2,
        name: 'Sona Masoori',
        description: 'Lightweight and aromatic medium-grain rice. Perfect for daily consumption.',
        image: 'https://images.unsplash.com/photo-1626082927389-d31c6d365ef2?auto=format&fit=crop&q=80',
        tag: 'Daily Choice'
    },
    {
        id: 3,
        name: 'Steam Rice',
        description: 'Nutrient-rich steam-processed rice that cooks fluffy and separate.',
        image: 'https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?auto=format&fit=crop&q=80',
        tag: 'Healthy'
    },
    {
        id: 4,
        name: 'Idli Rice',
        description: 'Short bold grain rice specifically processed for soft idlis and crispy dosas.',
        image: 'https://images.unsplash.com/photo-1595180637175-167814b0b147?auto=format&fit=crop&q=80',
        tag: 'Traditional'
    }
];



const Products = () => {
    return (
        <section id="products" className="products-section section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Our Premium Selection</h2>
                    <p className="section-subtitle">Discover the variety of finest grains processed with care.</p>
                </div>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            className="product-card glass-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                                rotateY: 5,
                                scale: 1.02,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                            }}
                            style={{ perspective: 1000 }}
                        >
                            <div className="product-image-container">
                                <img src={product.image} alt={product.name} className="product-image" />
                                <span className="product-tag">{product.tag}</span>
                            </div>
                            <div className="product-content">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-description">{product.description}</p>
                                <div className="product-actions">
                                    <button className="btn-details">View Details</button>
                                    <button className="btn-cart">
                                        <Award size={18} /> Quality
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
