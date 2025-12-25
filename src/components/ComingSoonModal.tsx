import React, { memo, useState, useEffect } from "react";
import type { FC } from "react";
import { Mail, Send } from "lucide-react";
import { sendInvisibleChainEmail, initEmailJS } from "../services/emailService";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoonModal: FC<ComingSoonModalProps> = memo(
  ({ isOpen, onClose }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    // Initialize EmailJS when component mounts
    useEffect(() => {
      initEmailJS();
    }, []);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setError("");

      try {
        console.log("📧 Sending Coming Soon signup via EmailJS...");

        // Send email via EmailJS with Invisible Chain template
        const emailResult = await sendInvisibleChainEmail({
          to_email: email,
          to_name: name,
          product_interest: "Invisible Chain Necklaces",
          source: "Coming Soon Modal",
        });

        console.log("📨 EmailJS Result:", emailResult);

        if (emailResult.success) {
          console.log("✅ Email sent successfully!");
          setIsSubmitted(true);
          setName("");
          setEmail("");
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

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Content */}
        <div className="relative bg-background rounded-2xl shadow-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-accent/10 transition-colors"
            aria-label="Close"
          >
            <span className="text-2xl text-muted-foreground">×</span>
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-accent to-primary text-white text-sm font-bold rounded-full mb-4">
              COMING SOON
            </div>
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">
              Invisible Chain Necklaces
            </h2>
            <p className="text-lg text-muted-foreground">
              Delicate, minimalist elegance - Launching soon! 💫
            </p>
          </div>

          {/* Product Preview */}
          <div className="mb-8">
            <div className="luxury-card p-6">
              <p className="text-center text-muted-foreground mb-6">
                We're crafting something special for you - ultra-delicate
                invisible chain necklaces with elegant pendants. These
                minimalist pieces will feature:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✨</span>
                  <span>
                    <strong className="text-primary">
                      Delicate Invisible Chains
                    </strong>{" "}
                    - So fine they seem to disappear
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">💎</span>
                  <span>
                    <strong className="text-primary">Elegant Pendants</strong> -
                    Heart, teardrop, and star designs with crystals
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">🌟</span>
                  <span>
                    <strong className="text-primary">Minimalist Beauty</strong>{" "}
                    - Perfect for everyday elegance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">💝</span>
                  <span>
                    <strong className="text-primary">Versatile Styling</strong>{" "}
                    - Layer or wear alone
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Email Form or Success Message */}
          {!isSubmitted ? (
            <div className="space-y-4">
              <p className="text-center text-sm text-muted-foreground">
                Be the first to know when they launch!
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
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
                      Notify Me When Available
                    </>
                  )}
                </button>
              </form>
              <p className="text-xs text-center text-muted-foreground">
                Expected Launch: Coming Soon
              </p>
              <p className="text-xs text-center text-muted-foreground">
                We'll only email you about this product launch
              </p>
            </div>
          ) : (
            <div className="text-center space-y-4 py-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary">
                You're on the list!
              </h3>
              <p className="text-muted-foreground">
                Thank you for your interest! We'll notify you as soon as our
                Invisible Chain Necklaces are available.
              </p>
              <button onClick={onClose} className="btn-outline mt-4">
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
);

ComingSoonModal.displayName = "ComingSoonModal";

export default ComingSoonModal;
