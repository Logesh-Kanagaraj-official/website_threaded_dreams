/**
 * @file Newsletter.tsx
 * @description Newsletter/Launch notification signup component for homepage
 * @module Components
 */

import React, { memo, useState, useEffect } from "react";
import { Mail, Send } from "lucide-react";
import { sendNewsletterEmail, initEmailJS } from "../services/emailService";

const Newsletter: React.FC = memo(() => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    initEmailJS();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      console.log("📧 Sending newsletter signup via EmailJS...");

      // Send email via EmailJS (will send to customer AND you get copy)
      const emailResult = await sendNewsletterEmail({
        to_email: email,
        to_name: "",
        product_interest: "Newsletter Subscription",
        source: "Homepage Newsletter",
      });

      console.log("📨 EmailJS Result:", emailResult);

      if (emailResult.success) {
        console.log("✅ Email sent successfully!");
        setIsSubmitted(true);
        setEmail("");
        // Reset after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error("❌ EmailJS failed:", emailResult.error);
        setError("Failed to send email. Please try again.");
      }
    } catch (err) {
      console.error("💥 Error in newsletter submission:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="mb-8">
                <div className="inline-block px-4 py-1 bg-gradient-to-r from-accent to-primary text-white text-xs font-bold rounded-full mb-4">
                  STAY UPDATED
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
                  Be the First to Know
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Get exclusive early access to new product launches, special
                  offers, and handmade creations.
                </p>
              </div>

              {/* Newsletter Form */}
              <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-border bg-background focus:outline-none focus:border-accent transition-all text-base"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold px-8 py-4 flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span className="hidden sm:inline">Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span className="hidden sm:inline">Subscribe</span>
                        <span className="sm:hidden">Subscribe</span>
                      </>
                    )}
                  </button>
                </div>
                {error && <p className="text-sm text-red-500 mt-3">{error}</p>}
                <p className="text-xs text-muted-foreground mt-4">
                  We respect your privacy. Unsubscribe anytime. No spam, just
                  beautiful Jewellery updates.
                </p>
              </form>
            </>
          ) : (
            /* Success Message */
            <div className="py-12 animate-fade-in">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                You're subscribed!
              </h3>
              <p className="text-muted-foreground">
                Thank you! We'll keep you updated on our latest launches. ✨
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

Newsletter.displayName = "Newsletter";

export default Newsletter;
