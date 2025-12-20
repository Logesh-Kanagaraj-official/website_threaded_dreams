/**
 * @file Legal.tsx
 * @description Unified Legal pages (Privacy, Terms, Cookies)
 * @module Pages
 */

import React, { memo } from "react";

const Legal: React.FC = memo(() => {
    return (
        <main className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-background to-silk">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Header */}
                <header className="text-center mb-16">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
                        Legal Information
                    </h1>
                    <p className="text-lg text-muted-foreground text-center">
                        Transparency and trust are core to Threaded Dreams.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* Privacy Policy */}
                    <section id="privacy" className="luxury-card p-8 md:p-12 scroll-mt-24">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6">
                            Privacy Policy
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                At Threaded Dreams by Femmora, we respect your privacy and are committed to protecting the personal information you share with us.
                            </p>
                            <h3 className="font-semibold text-foreground pt-2">Information We Collect</h3>
                            <p>
                                We collect information you provide directly to us, such as when you place a custom order, or contact us for inquiries. This may include your name, email address, phone number, and shipping address.
                            </p>
                            <h3 className="font-semibold text-foreground pt-2">How We Use Your Information</h3>
                            <p>
                                We use your information to process your orders, communicate with you about your custom designs, and improve our services. We do not sell or share your personal information with third parties for marketing purposes.
                            </p>
                        </div>
                    </section>

                    {/* Terms of Service */}
                    <section id="terms" className="luxury-card p-8 md:p-12 scroll-mt-24">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6">
                            Terms of Service
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                By accessing or using the Threaded Dreams website and services, you agree to be bound by these Terms of Service.
                            </p>
                            <h3 className="font-semibold text-foreground pt-2">Custom Orders</h3>
                            <p>
                                All custom bangle and accessory orders are final once production has begun. We strive to match your requirements as closely as possible, but slight variations in color and design may occur due to the handcrafted nature of our products.
                            </p>
                            <h3 className="font-semibold text-foreground pt-2">Shipping & Delivery</h3>
                            <p>
                                Timelines for custom orders vary based on complexity. We will provide an estimated delivery date upon order confirmation. Threaded Dreams is not responsible for delays caused by shipping carriers.
                            </p>
                        </div>
                    </section>

                    {/* Cookie Policy */}
                    <section id="cookies" className="luxury-card p-8 md:p-12 scroll-mt-24">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6">
                            Cookie Policy
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                We use cookies to enhance your browsing experience and analyze our website traffic.
                            </p>
                            <h3 className="font-semibold text-foreground pt-2">What Are Cookies?</h3>
                            <p>
                                Cookies are small text files stored on your device when you visit a website. They help us remember your preferences and understand how you interact with our site.
                            </p>
                            <h3 className="font-semibold text-foreground pt-2">Managing Cookies</h3>
                            <p>
                                You can choose to disable cookies through your browser settings. However, doing so may limit some functionality of our website.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
});

Legal.displayName = "Legal";

export default Legal;
