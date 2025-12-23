import React from "react";
import { X, CheckCircle } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  title = "Thank You!",
  message = "Thank you for your Enquiry! We'll get back to you soon. 💜",
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className="relative luxury-card max-w-md w-full p-8 animate-slideUp text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-2">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>

          <h2 className="font-serif text-3xl font-bold text-primary">
            {title}
          </h2>

          <p className="text-muted-foreground text-lg">{message}</p>

          <button
            onClick={onClose}
            className="btn-gold mt-6 w-full sm:w-auto min-w-[150px]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
