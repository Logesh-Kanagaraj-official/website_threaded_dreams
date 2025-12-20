import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface NewArrivalModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const NewArrivalModal: React.FC<NewArrivalModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const categories = [
        {
            name: "Bangles",
            description: "Handcrafted silk thread bangles",
            route: "/bangles",
            gradient: "from-accent/20 to-primary/20",
        },
        {
            name: "Clips & Accessories",
            description: "Elegant hair clips & decorative pieces",
            route: "/clips",
            gradient: "from-primary/20 to-accent/20",
        },
        {
            name: "All Accessories",
            description: "Complete collection of accessories",
            route: "/accessories",
            gradient: "from-accent/10 to-primary/10",
        },
    ];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal Content */}
            <div
                className="relative luxury-card max-w-2xl w-full p-8 animate-slideUp"
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

                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-2">
                        New Arrivals
                    </h2>
                    <p className="text-muted-foreground">
                        Explore our latest handcrafted collections
                    </p>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            to={category.route}
                            onClick={onClose}
                            className="group"
                        >
                            <div
                                className={`p-6 rounded-lg border border-border bg-gradient-to-br ${category.gradient} 
                hover:border-accent hover:shadow-lg transition-all duration-300 text-center`}
                            >
                                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                                    {category.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {category.description}
                                </p>
                                <div className="mt-4 inline-flex items-center text-sm font-medium">
                                    View Collection
                                    <svg
                                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewArrivalModal;
