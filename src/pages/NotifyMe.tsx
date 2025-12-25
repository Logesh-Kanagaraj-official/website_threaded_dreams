/**
 * @file NotifyMe.tsx
 * @description Dedicated page for product launch notifications
 * @module Pages
 */

import React, { memo, useState, useEffect } from "react";
import { Mail, Send, Sparkles } from "lucide-react";
import { sendNotifyMeEmail, initEmailJS } from "../services/emailService";

const NotifyMe: React.FC = memo(() => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const productCategories = [
    "Invisible Chain Necklaces",
    "Silk Thread Bangles",
    "Hair Accessories",
    "Jewelry Sets",
    "All New Arrivals",
  ];

  // Initialize EmailJS
  useEffect(() => {
    initEmailJS();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      console.log("📧 Sending NotifyMe signup via EmailJS...");

      // Send email via EmailJS
      const emailResult = await sendNotifyMeEmail({
        to_email: formData.email,
        to_name: formData.name,
        product_interest:
          formData.interests.length > 0
            ? formData.interests.join(", ")
            : "All Products",
        source: "Notify Me Page",
      });

      console.log("📨 EmailJS Result:", emailResult);

      if (emailResult.success) {
        console.log("✅ Email sent successfully!");
        setIsSubmitted(true);
        setFormData({ name: "", email: "", interests: [] });
      } else {
        console.error("❌ EmailJS failed:", emailResult.error);
        setError("Failed to send email. Please try again.");
      }
    } catch (err) {
      console.error("💥 Error in signup:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-background to-silk">
      <div className="container mx-auto px-6">
        {!isSubmitted ? (
          <>
            {/* Page Header */}
            <header className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-accent to-primary text-white text-sm font-bold rounded-full mb-6">
                COMING SOON
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
                Be the First to Know
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get exclusive early access to our new product launches. Sign up
                to receive notifications when our latest handmade creations
                become available!
              </p>
            </header>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Left: Product Teasers */}
              <div className="space-y-8">
                <div className="luxury-card p-8">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-6">
                    What's Coming Soon
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary mb-2">
                          Invisible Chain Necklaces
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Ultra-delicate chains with elegant pendants - so fine
                          they seem to disappear
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary mb-2">
                          New Bangle Collections
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Fresh designs and color combinations to complement
                          every outfit
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary mb-2">
                          Exclusive Sets
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Coordinated jewelry and accessory sets for special
                          occasions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="luxury-card p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                  <h3 className="font-serif text-xl font-bold text-primary mb-4">
                    Why Sign Up?
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✨</span>
                      Early access to new launches before anyone else
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">💌</span>
                      Exclusive launch offers and promotions
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">🎨</span>
                      First look at new designs and collections
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">🔔</span>
                      Never miss out on limited edition pieces
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right: Signup Form */}
              <div>
                <div className="luxury-card p-8 sticky top-24">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-6">
                    Get Notified
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Name{" "}
                        <span className="text-muted-foreground">
                          (Optional)
                        </span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" />
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">
                        What are you interested in?
                      </label>
                      <div className="space-y-2">
                        {productCategories.map((category) => (
                          <label
                            key={category}
                            className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-accent cursor-pointer transition-all"
                          >
                            <input
                              type="checkbox"
                              checked={formData.interests.includes(category)}
                              onChange={() => handleInterestToggle(category)}
                              className="w-4 h-4 text-accent focus:ring-accent rounded"
                            />
                            <span className="text-sm text-foreground">
                              {category}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {error && (
                      <p className="text-sm text-red-500 text-center">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold w-full flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Notify Me
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-muted-foreground">
                      We respect your privacy. Unsubscribe anytime.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Success Message */
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="luxury-card p-12">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-accent" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">
                You're on the list!
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for your interest! We'll send you an email as soon as
                new products are available. Get ready for something special! ✨
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/" className="btn-gold">
                  Back to Home
                </a>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-outline"
                >
                  Sign Up Again
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
});

NotifyMe.displayName = "NotifyMe";

export default NotifyMe;
