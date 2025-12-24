import React, { memo } from "react";
import type { FC } from "react";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoonModal: FC<ComingSoonModalProps> = memo(
  ({ isOpen, onClose }) => {
    if (!isOpen) return null;

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

          {/* Call to Action */}
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Be the first to know when they launch!
            </p>
            <a
              href="/contact"
              onClick={onClose}
              className="btn-gold inline-block"
            >
              Notify Me When Available
            </a>
            <p className="text-xs text-muted-foreground">
              Expected Launch: Coming Soon
            </p>
          </div>
        </div>
      </div>
    );
  }
);

ComingSoonModal.displayName = "ComingSoonModal";

export default ComingSoonModal;
