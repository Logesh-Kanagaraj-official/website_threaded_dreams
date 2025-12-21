/**
 * @file Contact.tsx
 * @description Contact page for inquiries and custom orders
 * @module Pages
 */

import React, { memo, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import SuccessModal from "../components/SuccessModal";

const Contact: React.FC = memo(() => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const accessKeys = [
                "63361e00e50748f484878d8a7d32a162",
                "c255be6cd1264b058ccb053b17367b42",
                "32957c2caac041dd8550ae707c07b605"
            ];

            // Create submission promises for parallel execution
            const submissionPromises = accessKeys.map(key => {
                const data = new FormData();
                data.append("access_key", key);
                data.append("name", formData.name);
                data.append("email", formData.email);
                data.append("phone", formData.phone);
                data.append("message", formData.message);

                return fetch("https://formly.email/submit", {
                    method: "POST",
                    body: data
                }).then(res => ({ key, ok: res.ok, status: res.status }));
            });

            const results = await Promise.all(submissionPromises);

            // Check if at least one submission succeeded
            if (results.some(r => r.ok)) {
                setShowSuccessModal(true);
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                console.error("All form submissions failed", results);
                alert("Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Something went wrong. Please try again later.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <main className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-background to-silk">
            <div className="container mx-auto px-6">
                {/* Page Header */}
                <header className="text-center mb-16">
                    <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Have a question or want to place a custom order? We'd love to hear from you!
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="luxury-card p-8">
                        <h2 className="font-serif text-2xl font-bold text-primary mb-6">
                            Send us a Message
                        </h2>
                        <form 
                            onSubmit={handleSubmit} 
                            className="space-y-6"
                            encType="multipart/form-data"
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                    Your Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                                    placeholder="Tell us about your requirements, preferred colors, designs, or any questions..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-gold w-full flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Contact Details */}
                        <div className="luxury-card p-8">
                            <h2 className="font-serif text-2xl font-bold text-primary mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Address</h3>
                                        <p className="text-muted-foreground">
                                            Tirupur, Tamil Nadu<br />
                                            641607
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                                        <a href="tel:+919876543210" className="text-muted-foreground hover:text-accent transition-colors">
                                            +91 98765 43210
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                                        <a href="mailto:santhiyalogesh02@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                                            santhiyalogesh02@gmail.com                                       
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <FaInstagram className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Instagram</h3>
                                        <a
                                            href="https://www.instagram.com/threaded_dreamsby_femmora/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-accent transition-colors"
                                        >
                                            @threaded_dreamsby_femmora
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="luxury-card p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                            <h2 className="font-serif text-2xl font-bold text-primary mb-6">
                                Working Hours
                            </h2>
                            <div className="space-y-3 text-muted-foreground">
                                <div className="flex justify-between">
                                    <span>Monday - Saturday</span>
                                    <span className="font-semibold text-foreground">9:00 AM - 7:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span className="font-semibold text-foreground">10:00 AM - 5:00 PM</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Info */}
                        <div className="luxury-card p-8">
                            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                                Why Choose Us?
                            </h2>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-accent">✨</span>
                                    100% Handmade with premium materials
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent">💜</span>
                                    Customization available for all products
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent">🎨</span>
                                    Wide variety of colors and designs
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent">💝</span>
                                    Perfect for gifting on special occasions
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent">🚚</span>
                                    Timely delivery and bulk orders accepted
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <SuccessModal 
                isOpen={showSuccessModal} 
                onClose={() => setShowSuccessModal(false)} 
            />
        </main>
    );
});

Contact.displayName = "Contact";

export default Contact;
