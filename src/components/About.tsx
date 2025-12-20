import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Assets
import pearlNecklace from "@/assets/pearl-necklace.webp";
import rubyPendant from "@/assets/ruby-pendant.webp";
import sapphireEarrings from "@/assets/hair-clip-enhanced.jpg";

const About: React.FC = () => {
  // Scroll animation refs
  const titleRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  const visualRef = useScrollAnimation();

  return (
    <section id="about" className="about-section py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* ---------------- TEXT CONTENT ---------------- */}
            <div ref={titleRef} className="scroll-animate">
              <p className="about-section__subtitle text-accent text-sm font-medium tracking-widest uppercase mb-4">
                OUR CRAFT
              </p>

              <h2 className="about-section__title font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                HANDMADE
                <br />
                WITH LOVE
                <br />
                BY <span className="text-primary">FEMMORA</span>
              </h2>

              <div
                ref={contentRef}
                className="scroll-animate stagger-2 space-y-6 text-lg text-muted-foreground leading-relaxed mb-8"
              >
                <p>
                  Every piece from Threaded Dreams is carefully handcrafted using
                  premium quality silk threads, creating unique bangles and accessories
                  that reflect your personal style.
                </p>
                <p>
                  As unique as you ✨ – We believe in celebrating individuality
                  through customizable designs, vibrant colors, and intricate
                  patterns that make each creation truly one-of-a-kind.
                </p>
              </div>

              <Link
                to="/contact"
                className="btn-gold text-base sm:text-lg font-medium w-full sm:w-auto"
              >
                GET IN TOUCH
              </Link>
            </div>

            {/* ---------------- VIDEO SECTION ---------------- */}
            <div ref={visualRef} className="scroll-animate stagger-4 relative">
              <div className="relative">

                {/* Main Video */}
                <div
                  className="w-full h-full overflow-hidden flex items-center justify-center rounded-lg"
                >
                  <video
                    src="/videos/Silk_Bangle_Jewelry_Showcase.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Overlay Image */}
                <div className="
                  about-section__overlay-image 
                  absolute 
                  bottom-3                   
                  right-3                    
                  w-36 h-32                  
                  md:w-52 md:h-44            
                  rounded-xl 
                  overflow-hidden 
                  shadow-2xl 
                  z-30
                  bg-gradient-to-b from-silk to-silk-dark
                ">
                  <img
                    src="images/bangle.png"
                    alt="Ruby pendant representing heritage craftsmanship"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-20">
        <div className="divider-gold max-w-xs mx-auto" aria-hidden="true" />
      </div>
    </section>
  );
};

export default memo(About);
