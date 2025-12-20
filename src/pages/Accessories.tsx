/**
 * @file Accessories.tsx
 * @description All accessories collection page
 * @module Pages
 */

import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Gift, ShoppingBag } from "lucide-react";

const Accessories: React.FC = memo(() => {
    return (
        <main className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-background to-silk">
            <div className="container mx-auto px-6">
                {/* Page Header */}
                <header className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <ShoppingBag className="w-8 h-8 text-accent" />
                        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary">
                            All Accessories
                        </h1>
                        <ShoppingBag className="w-8 h-8 text-accent" />
                    </div>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Discover our complete collection of handmade silk thread accessories.
                        Each piece is crafted with love and designed to be as unique as you ✨
                    </p>
                </header>

                {/* New Arrivals Section */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center flex items-center justify-center gap-3">
                        <span className="inline-block px-4 py-1 bg-gradient-to-r from-accent to-primary text-white text-sm font-bold rounded-full">NEW</span>
                        New Arrivals
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {/* New Arrival 1 - Bangles */}
                        <Link to="/bangles" className="luxury-card p-6 hover:scale-105 elegant-transition relative">
                            <div className="absolute top-3 right-3 z-10">
                                <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-500 to-accent text-white text-xs font-bold rounded-full shadow-lg">
                                    NEW
                                </span>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-4xl">🦚</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                                    Peacock Design Bangles
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Handcrafted with love, this unique silk thread bangle is a little piece of art to remind you how special you are. You deserve the best! 💙🦚
                                </p>
                                <span className="text-accent hover:underline font-medium">
                                    View Now →
                                </span>
                            </div>
                        </Link>

                        {/* New Arrival 2 - Clips */}
                        <Link to="/clips" className="luxury-card p-6 hover:scale-105 elegant-transition relative">
                            <div className="absolute top-3 right-3 z-10">
                                <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-500 to-accent text-white text-xs font-bold rounded-full shadow-lg">
                                    NEW
                                </span>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-4xl">✨</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                                    Krishna Clip Collection
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Add a touch of divinity to your hairstyle with our handmade Krishna clips ✨
                                </p>
                                <span className="text-accent hover:underline font-medium">
                                    Explore →
                                </span>
                            </div>
                        </Link>

                        {/* New Arrival 3 - Custom */}
                        <Link to="/contact" className="luxury-card p-6 hover:scale-105 elegant-transition relative">
                            <div className="absolute top-3 right-3 z-10">
                                <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-500 to-accent text-white text-xs font-bold rounded-full shadow-lg">
                                    NEW
                                </span>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-4xl">✨</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                                    Multi-Variety Accessory Set
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Exclusive mix of pins, clips and accessories
                                </p>
                                <span className="text-accent hover:underline font-medium">
                                    Enquire Now →
                                </span>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* All Collections Section */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">
                        All Collections
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Bangles Card */}
                        <Link to="/bangles" className="luxury-card p-6 hover:scale-105 elegant-transition">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-4xl">💜</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                                    Silk Thread Bangles
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Beautiful handcrafted bangles in various designs, colors, and styles
                                </p>
                                <span className="text-accent hover:underline font-medium">
                                    Explore Collection →
                                </span>
                            </div>
                        </Link>

                        {/* Clips Card */}
                        <Link to="/clips" className="luxury-card p-6 hover:scale-105 elegant-transition">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-4xl">🎀</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                                    Clips & Hair Accessories
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Decorative clips and hair accessories for every occasion
                                </p>
                                <span className="text-accent hover:underline font-medium">
                                    View Designs →
                                </span>
                            </div>
                        </Link>

                        {/* Chains & Pendants */}
                        <div className="luxury-card p-6">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-4xl">✨</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                                    Chains & Pendants
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Delicate silk thread chains with beautiful pendant designs
                                </p>
                                <Link to="/contact" className="text-accent hover:underline font-medium">
                                    Enquire Now →
                                </Link>
                            </div>
                        </div>

                        {/* Earrings */}
                        <div className="luxury-card p-6">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-4xl">💎</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                                    Thread Earrings
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Lightweight and elegant earrings perfect for any occasion
                                </p>
                                <Link to="/contact" className="text-accent hover:underline font-medium">
                                    Contact Us →
                                </Link>
                            </div>
                        </div>

                        {/* Necklaces */}
                        <div className="luxury-card p-6">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-4xl">🌺</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                                    Statement Necklaces
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Bold and beautiful necklace pieces for special occasions
                                </p>
                                <Link to="/contact" className="text-accent hover:underline font-medium">
                                    Get Details →
                                </Link>
                            </div>
                        </div>

                        {/* Custom Orders */}
                        <div className="luxury-card p-6 bg-gradient-to-br from-accent/10 to-primary/10">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-4xl">🪄</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                                    Custom Creations
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Have a unique design in mind? We'll bring it to life!
                                </p>
                                <Link to="/contact" className="text-accent hover:underline font-medium">
                                    Start Customizing →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gift Sets Section */}
                <section className="mb-16">
                    <div className="luxury-card p-10 bg-gradient-to-br from-primary/5 to-accent/5">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <Gift className="w-10 h-10 text-accent" />
                            <h2 className="font-serif text-3xl font-bold text-primary">
                                Gift Sets Available
                            </h2>
                        </div>
                        <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                            Looking for the perfect gift? We offer beautifully curated gift sets
                            combining bangles, clips, and other accessories. Perfect for birthdays,
                            weddings, festivals, and special occasions.
                        </p>
                        <div className="text-center">
                            <Link to="/contact" className="btn-gold">
                                Order Gift Sets
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section>
                    <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">
                        What Makes Us Special
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="luxury-card p-6 text-center">
                            <span className="text-4xl mb-3 block">🪄</span>
                            <h3 className="font-semibold text-primary mb-2">Handmade</h3>
                            <p className="text-sm text-muted-foreground">Every piece crafted with care</p>
                        </div>
                        <div className="luxury-card p-6 text-center">
                            <span className="text-4xl mb-3 block">🎨</span>
                            <h3 className="font-semibold text-primary mb-2">Customizable</h3>
                            <p className="text-sm text-muted-foreground">Colors & designs of your choice</p>
                        </div>
                        <div className="luxury-card p-6 text-center">
                            <span className="text-4xl mb-3 block">✨</span>
                            <h3 className="font-semibold text-primary mb-2">Unique</h3>
                            <p className="text-sm text-muted-foreground">As unique as you are</p>
                        </div>
                        <div className="luxury-card p-6 text-center">
                            <span className="text-4xl mb-3 block">💝</span>
                            <h3 className="font-semibold text-primary mb-2">Quality</h3>
                            <p className="text-sm text-muted-foreground">Premium materials used</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
});

Accessories.displayName = "Accessories";

export default Accessories;
