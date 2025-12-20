import React, { memo } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Craftsmanship: React.FC = memo(() => {
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  const timelineRef = useScrollAnimation();

  return (
    <section className="py-20 sm:py-28 mt-20 sm:mt-32 bg-background relative overflow-hidden" aria-labelledby="craftsmanship-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header 
          ref={headerRef}
          className="text-center mb-16 scroll-animate"
        >
          <h2 id="craftsmanship-heading" className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Signature Craftsmanship
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Behind every piece lies a story of patience, vibrant colors, and artistic expression, handcrafted to match your unique style.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Details Cards */}
          <div ref={contentRef} className="scroll-animate space-y-8">
            
            {/* Handcrafted Excellence Card */}
            <article className="luxury-card p-8 sm:p-10 transition-transform duration-500 hover:-translate-y-2" aria-labelledby="handcrafted-excellence-title">
              <h3 id="handcrafted-excellence-title" className="font-serif text-2xl md:text-3xl font-semibold text-primary mb-4">
                Handcrafted Perfection
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
                Every bangle begins with a vision of color. We meticulously wrap high-quality silk threads around durable bases, ensuring smooth finishes and perfect shading. It’s not just jewelry; it’s a labor of love designed to complement your attire perfectly.
              </p>
              <dl className="grid grid-cols-2 gap-6 text-sm border-t border-accent/20 pt-6">
                <div className="text-center">
                  <dt className="text-3xl font-bold text-accent mb-1 font-serif">100%</dt>
                  <dd className="text-muted-foreground uppercase tracking-wider text-xs">Handmade</dd>
                </div>
                <div className="text-center border-l border-accent/20">
                  <dt className="text-3xl font-bold text-accent mb-1 font-serif">200+</dt>
                  <dd className="text-muted-foreground uppercase tracking-wider text-xs">Color Shades</dd>
                </div>
              </dl>
            </article>

            {/* Quality Materials Card */}
            <article className="luxury-card p-8 sm:p-10 transition-transform duration-500 hover:-translate-y-2" aria-labelledby="quality-materials-title">
              <h3 id="quality-materials-title" className="font-serif text-2xl md:text-3xl font-semibold text-primary mb-4">
                Premium Materials
              </h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                We use only the finest silk threads that retain their luster over time. Paired with skin-friendly, hypoallergenic bases and high-grade stone adhesive, our jewelry ensures comfort and durability without compromising on elegance.
              </p>
            </article>
          </div>

          {/* Right Column: Process Timeline */}
          <div ref={timelineRef} className="scroll-animate stagger-2 relative h-full">
            <div 
              className="luxury-card p-8 sm:p-12 h-full min-h-[750px] flex flex-col justify-center relative overflow-hidden" 
              role="list" 
              aria-label="Craftsmanship process steps"
              style={{
                backgroundImage: 'radial-gradient(circle at center, rgba(var(--gold), 0.05) 0%, transparent 70%)'
              }}
            >
              <div className="space-y-12 relative z-10">
                
                {/* Step 1: Design */}
                <div role="listitem" className="text-center group">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-accent to-gold-dark rounded-full flex items-center justify-center shadow-gold transition-transform duration-500 group-hover:scale-110">
                    <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-accent to-gold-dark rounded-full opacity-80"></div>
                    </div>
                  </div>
                  <h4 className="font-serif text-2xl font-semibold text-primary mb-2">Match</h4>
                  <p className="text-base text-muted-foreground">Color selection and outfit matching</p>
                </div>

                {/* Connector Line 1 */}
                <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent mx-auto opacity-50" aria-hidden="true"></div>

                {/* Step 2: Craft */}
                <div role="listitem" className="text-center group">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-accent to-gold-dark rounded-full flex items-center justify-center shadow-gold transition-transform duration-500 group-hover:scale-110">
                    <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-accent to-gold-dark rounded-full opacity-80"></div>
                    </div>
                  </div>
                  <h4 className="font-serif text-2xl font-semibold text-primary mb-2">Wrap</h4>
                  <p className="text-base text-muted-foreground">Precision silk thread wrapping</p>
                </div>

                {/* Connector Line 2 */}
                <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent mx-auto opacity-50" aria-hidden="true"></div>

                {/* Step 3: Perfect */}
                <div role="listitem" className="text-center group">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-accent to-gold-dark rounded-full flex items-center justify-center shadow-gold transition-transform duration-500 group-hover:scale-110">
                    <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-accent to-gold-dark rounded-full opacity-80"></div>
                    </div>
                  </div>
                  <h4 className="font-serif text-2xl font-semibold text-primary mb-2">Embellish</h4>
                  <p className="text-base text-muted-foreground">Stone setting and quality check</p>
                </div>
              
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

Craftsmanship.displayName = "Craftsmanship";

export default Craftsmanship;
