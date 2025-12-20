/**
 * @file Bangles.tsx
 * @description Bangles collection page showcasing silk thread bangles
 * @module Pages
/**
 * @file Bangles.tsx
 * @description Bangles collection page showcasing silk thread bangles
 * @module Pages
 */

import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

// Import bangle images
import bangleBlueSet from "@/assets/bangle-blue-set.jpg";
import bangleBlueStack from "@/assets/bangle-blue-stack.jpg";
import bangleRedSet from "@/assets/bangle-red-set.jpg";
import bangleGreenBlue from "@/assets/bangle-green-blue.jpg";

const Bangles: React.FC = memo(() => {
    const bangleProducts = [
        {
            image: bangleBlueSet,
            title: "Royal Blue Designer Set",
            description: "Stunning blue silk thread bangles with gold floral embellishments",
            isNewArrival: true,
        },
        {
            image: bangleBlueStack,
            title: "Blue Stone Collection",
            description: "Elegant blue bangles with intricate stone work",
            isNewArrival: true,
        },
        {
            image: bangleRedSet,
            title: "Maroon Elegance",
            description: "Rich maroon bangles with gold detailing",
            isNewArrival: false,
        },
        {
            image: bangleGreenBlue,
            title: "Green & Blue Duo",
            description: "Beautiful pair featuring emerald and sapphire designs",
            isNewArrival: false,
        },
    ];

    const newArrivals = bangleProducts.filter(p => p.isNewArrival);
    const regularProducts = bangleProducts.filter(p => !p.isNewArrival);

    return (
        <main className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-background to-silk">
            <div className="container mx-auto px-6">
                {/* Page Header */}
                <header className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Sparkles className="w-8 h-8 text-accent" />
                        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary">
                            Silk Thread Bangles
                        </h1>
                        <Sparkles className="w-8 h-8 text-accent" />
                    </div>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Explore our beautiful collection of handcrafted silk thread bangles.
                        Each piece is uniquely designed and customizable to match your style.
                    </p>
                </header>

                {/* Product Gallery */}
                <section className="mb-16">
                    {/* New Arrivals Section */}
                    {newArrivals.length > 0 && (
                        <div className="mb-12">
                            <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center flex items-center justify-center gap-3">
                                <span className="inline-block px-4 py-1 bg-gradient-to-r from-accent to-primary text-white text-sm font-bold rounded-full">NEW</span>
                                New Arrivals
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                                {newArrivals.map((product, idx) => (
                                    <div key={idx} className="luxury-card p-6 hover:scale-105 elegant-transition relative">
                                        <div className="absolute top-3 right-3 z-10">
                                            <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-500 to-accent text-white text-xs font-bold rounded-full shadow-lg">
                                                NEW
                                            </span>
                                        </div>
                                        <div className="aspect-square overflow-hidden rounded-lg mb-4">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-full h-full object-cover hover:scale-110 elegant-transition"
                                            />
                                        </div>
                                        <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                                            {product.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4">{product.description}</p>
                                        <Link
                                            to="/contact"
                                            className="text-accent hover:underline font-medium"
                                        >
                                            Enquire Now →
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Regular Products Section */}
                    {regularProducts.length > 0 && (
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">
                                Our Collection
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                                {regularProducts.map((product, idx) => (
                                    <div key={idx} className="luxury-card p-6 hover:scale-105 elegant-transition">
                                        <div className="aspect-square overflow-hidden rounded-lg mb-4">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-full h-full object-cover hover:scale-110 elegant-transition"
                                            />
                                        </div>
                                        <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                                            {product.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4">{product.description}</p>
                                        <Link
                                            to="/contact"
                                            className="text-accent hover:underline font-medium"
                                        >
                                            Enquire Now →
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </section>

                {/* Featured Section */}
                <section className="mb-16">
                    <div className="luxury-card p-8 md:p-12 text-center">
                        <h2 className="font-serif text-3xl font-bold text-primary mb-4">
                            Handmade with Love 💜
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                            Every bangle is carefully crafted using premium quality silk threads,
                            adorned with beautiful embellishments. Perfect for weddings, festivals,
                            or everyday elegance.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <div className="px-6 py-3 bg-accent/10 rounded-lg">
                                <p className="text-sm font-semibold text-accent">✨ Customizable Colors</p>
                            </div>
                            <div className="px-6 py-3 bg-accent/10 rounded-lg">
                                <p className="text-sm font-semibold text-accent">🎨 Multiple Designs</p>
                            </div>
                            <div className="px-6 py-3 bg-accent/10 rounded-lg">
                                <p className="text-sm font-semibold text-accent">💝 Perfect Gifting</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center">
                    <div className="luxury-card p-10 bg-gradient-to-br from-primary/5 to-accent/5">
                        <h2 className="font-serif text-3xl font-bold text-primary mb-4">
                            Ready to Customize?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Share your preferences, and we'll create the perfect bangles just for you!
                        </p>
                        <Link to="/contact" className="btn-gold">
                            Get in Touch
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
});

Bangles.displayName = "Bangles";

export default Bangles;
