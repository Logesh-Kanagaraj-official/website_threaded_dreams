import React from "react";

const LogoLoader: React.FC = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
            <div className="relative flex flex-col items-center">
                {/* Logo Container with Pulse Animation */}
                <div className="relative w-24 h-24 mb-6 animate-pulse">
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
                    <img
                        src="/images/logo-new.jpg"
                        alt="Threaded Dreams"
                        className="relative w-full h-full object-contain drop-shadow-lg"
                    />
                </div>

                {/* Loading Text */}
                <div className="space-y-2 text-center">
                    <h2 className="font-serif text-2xl font-bold text-primary tracking-wide animate-fade-in-up mb-8">
                        THREADED DREAMS
                    </h2>
                    <p className="text-sm text-accent font-medium tracking-[0.2em] uppercase animate-pulse">
                        Loading Luxury
                    </p>
                </div>

                {/* Decorative Line */}
                <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
            </div>
        </div>
    );
};

export default LogoLoader;
