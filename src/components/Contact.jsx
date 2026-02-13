import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section section-padding">
            <div className="container">
                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">Get In Touch</h2>
                        <p className="contact-subtitle">Have a question or want to place a bulk order? We'd love to hear from you.</p>

                        <div className="info-item">
                            <MapPin className="icon" size={24} />
                            <div>
                                <h4>Our Location</h4>
                                <p>123 Paddy Fields Road, Rice City, RC 560001, India</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Phone className="icon" size={24} />
                            <div>
                                <h4>Phone Number</h4>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Mail className="icon" size={24} />
                            <div>
                                <h4>Email Address</h4>
                                <p>sales@gvmricemill.com</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form glass-card"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" placeholder="John Doe" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" placeholder="john@example.com" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
                        </div>

                        <button type="submit" className="btn-submit">
                            Send Message <Send size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
