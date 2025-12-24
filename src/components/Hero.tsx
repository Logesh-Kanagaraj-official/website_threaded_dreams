import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import NewArrivalModal from "@/components/NewArrivalModal";
import ComingSoonModal from "@/components/ComingSoonModal";

// Assets
import heroRing from "@/assets/hero-ring.webp";
import pearlNecklace from "@/assets/hair-clip-enhanced.jpg";
import threadBangles from "@/assets/thread-bangles-enhanced.jpg";
import sapphireEarrings from "@/assets/hair-clip-enhanced.jpg";
import rubyPendant from "@/assets/accessories-combined.jpg";
import newArrivalsHero from "@/assets/new-arrivals-hero.png";
import invisibleChainsHero from "/necklaces/invisible-chains-coming-soon.jpg";

// Team member images
import teamFounder from "@/assets/team-founder.jpg";
import teamIT from "@/assets/team-it.png";
import newArrivalBanner from "@/assets/new-arrival-banner.png";

// Instagram images
import insta2 from "@/assets/instagram/insta2.jpg";
import insta3 from "@/assets/instagram/insta3.jpg";
import insta4 from "@/assets/instagram/insta4.jpg";
import insta5 from "@/assets/instagram/insta5.jpg";
import insta6 from "@/assets/instagram/insta6.jpg";
import insta7 from "@/assets/instagram/insta7.jpg";
import insta8 from "@/assets/instagram/insta8.jpg";
import insta9 from "@/assets/instagram/insta9.jpg";

const Hero: React.FC = memo(() => {
  const titleRef = useScrollAnimation();
  const productRef = useScrollAnimation();
  const categoriesRef = useScrollAnimation();
  const [isNewArrivalModalOpen, setIsNewArrivalModalOpen] = useState(false);
  const [isComingSoonModalOpen, setIsComingSoonModalOpen] = useState(false);

  const categories = [
    {
      name: "NEW ARRIVALS",
      image: newArrivalsHero,
      route: "/new-arrival",
      isModal: true,
      modalType: "newArrival",
    },
    { name: "BANGLES", image: threadBangles, route: "/bangles" },
    { name: "CLIPS", image: sapphireEarrings, route: "/clips" },
    { name: "ACCESSORIES", image: rubyPendant, route: "/accessories" },
    {
      name: "LAUNCHING SOON",
      image: invisibleChainsHero,
      route: "/coming-soon",
      isModal: true,
      modalType: "comingSoon",
    },
  ];

  const featuredProducts = [
    {
      name: "Thread Bangles",
      subtitle: "Handmade Collection",
      image: threadBangles,
      aspect: "aspect-square",
      route: "/bangles",
    },
    {
      name: "Designer Clips",
      subtitle: "Premium Silk Thread",
      image: pearlNecklace,
      aspect: "aspect-square",
      route: "/clips",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background to-silk overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[70vh]">
          {/* Left: Title & CTA */}
          <div
            ref={titleRef}
            className="scroll-animate text-center lg:text-left space-y-6 sm:space-y-8"
          >
            <header>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
                THREADED
                <span className="block text-accent">DREAMS</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 font-light tracking-wide">
                As unique as you ✨ 🪄 Handmade · Customisation available 💌
              </p>
            </header>
            <div className="space-y-3 sm:space-y-4">
              <Link
                to="/bangles"
                className="btn-gold text-base sm:text-lg font-medium w-full sm:w-auto"
              >
                EXPLORE COLLECTION
              </Link>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Handcrafted silk thread bangles & accessories
              </p>
            </div>
          </div>

          {/* Right: Featured Products */}
          <div ref={productRef} className="scroll-animate stagger-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {featuredProducts.map((product, idx) => (
                <div
                  key={product.name}
                  className={idx === 1 ? "sm:mt-8 lg:mt-12" : ""}
                >
                  <Link to={product.route} className="block">
                    <div className="luxury-card p-4 sm:p-6 group cursor-pointer elegant-transition hover:scale-105">
                      <div
                        className={`${product.aspect} overflow-hidden rounded-lg mb-3 sm:mb-4`}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 elegant-transition"
                          fetchPriority={idx === 0 ? "high" : "auto"}
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="font-serif text-base sm:text-lg font-semibold text-primary mb-0.5 sm:mb-1">
                          {product.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {product.subtitle}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories */}
        <div
          ref={categoriesRef}
          className="scroll-animate stagger-3 mt-14 sm:mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {categories.map((cat, idx) => {
              const isModal = cat.isModal || false;
              const modalType = cat.modalType || "newArrival";

              if (isModal) {
                const handleClick = () => {
                  if (modalType === "comingSoon") {
                    setIsComingSoonModalOpen(true);
                  } else {
                    setIsNewArrivalModalOpen(true);
                  }
                };

                return (
                  <button
                    key={cat.name}
                    onClick={handleClick}
                    className={`group elegant-transition stagger-${
                      idx + 1
                    } w-full`}
                  >
                    <div className="luxury-card p-3 sm:p-4 text-center hover:scale-105 elegant-transition cursor-pointer relative">
                      {modalType === "comingSoon" && (
                        <div className="absolute top-1 right-1 z-20">
                          <span className="inline-block px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg">
                            SOON
                          </span>
                        </div>
                      )}
                      <div className="aspect-square overflow-hidden rounded-lg mb-2 sm:mb-3 relative">
                        {modalType === "newArrival" && (
                          <div className="absolute top-2 left-2 w-12 h-12 sm:w-14 sm:h-14 overflow-hidden rounded-full shadow-lg z-20">
                            <img
                              src={newArrivalBanner}
                              alt="New Arrivals"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <img
                          src={cat.image}
                          alt={`${cat.name} category`}
                          className="w-full h-full object-cover group-hover:scale-110 elegant-transition"
                        />
                      </div>
                      <h3 className="font-serif text-xs sm:text-sm font-semibold text-accent tracking-wider">
                        {cat.name}
                      </h3>
                      {cat.subtitle && (
                        <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                          {cat.subtitle}
                        </p>
                      )}
                    </div>
                  </button>
                );
              }

              return (
                <Link
                  key={cat.name}
                  to={cat.route}
                  className={`group elegant-transition stagger-${idx + 1}`}
                >
                  <div className="luxury-card p-3 sm:p-4 text-center hover:scale-105 elegant-transition">
                    <div className="aspect-square overflow-hidden rounded-lg mb-2 sm:mb-3">
                      <img
                        src={cat.image}
                        alt={`${cat.name} category`}
                        className="w-full h-full object-cover group-hover:scale-110 elegant-transition"
                      />
                    </div>
                    <h3 className="font-serif text-xs sm:text-sm font-semibold text-primary tracking-wider">
                      {cat.name}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* New Arrival Modal */}
        <NewArrivalModal
          isOpen={isNewArrivalModalOpen}
          onClose={() => setIsNewArrivalModalOpen(false)}
        />

        {/* Coming Soon Modal */}
        <ComingSoonModal
          isOpen={isComingSoonModalOpen}
          onClose={() => setIsComingSoonModalOpen(false)}
        />

        {/* Testimonials */}
        <div className="mt-20 sm:mt-28">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              Customer Love
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="luxury-card p-6 sm:p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "Absolutely beautiful bangles! The craftsmanship is amazing and
                the colors are so vibrant. I ordered a custom set for festive
                occasions and they turned out perfect. Highly recommend!"
              </p>
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-primary">Venisha</h4>
                <p className="text-sm text-muted-foreground">
                  Festive Occasions
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="luxury-card p-6 sm:p-8 text-center bg-gradient-to-br from-accent/5 to-primary/5">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "The attention to detail is incredible! Each piece is unique and
                handmade with love. I've ordered multiple times for gifts and
                everyone loves them. Great quality!"
              </p>
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-primary"> Gayathri</h4>
                <p className="text-sm text-muted-foreground">
                  {" "}
                  Regular Customer
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="luxury-card p-6 sm:p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "Love the customization options! I was able to choose my
                favorite colors and the result exceeded my expectations. The
                clips are so elegant and comfortable to wear all day."
              </p>
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-primary">
                  Raichal Livingston
                </h4>
                <p className="text-sm text-muted-foreground">
                  Designer Clips Fan
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="inline-block text-accent hover:underline font-medium"
            >
              Share Your Experience →
            </Link>
          </div>
        </div>
        {/* Meet the Team Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              OUR TEAM
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              Meet the Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Team Member 1 - Founder */}
            <div className="luxury-card p-8 text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img
                  src={teamFounder}
                  alt="Founder"
                  className="w-full h-full object-cover"
                  width="240"
                  height="240"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                Santhiya Chandru
              </h3>
              <p className="text-accent font-medium text-lg mb-4">
                Founder & CEO
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The passionate artisan and creative soul behind every
                handcrafted piece, dedicated to creating unique silk thread
                jewelry that celebrates individuality, elegance, and tradition
                with meticulous attention to detail.
              </p>
              <a
                href="https://www.linkedin.com/in/santhiyachandru/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5" />
                <span className="font-medium">Connect on LinkedIn</span>
              </a>
            </div>

            {/* Team Member 2 - IT & Delivery */}
            <div className="luxury-card p-8 text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img
                  src={teamIT}
                  alt="IT Team and Delivery"
                  className="w-full h-full object-cover"
                  width="240"
                  height="240"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                Logesh Kanagaraj
              </h3>
              <p className="text-accent font-medium text-lg mb-4">
                Co-Founder & Operations
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Handling all operational aspects including delivery logistics,
                digital marketing and promotions, and technical infrastructure -
                ensuring smooth business operations.
              </p>
              <a
                href="https://www.linkedin.com/in/logeshkanagaraj/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5" />
                <span className="font-medium">Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Instagram Section with Book Animation */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
          <h2 className="text-center font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-12">
            Follow us on Instagram
          </h2>

          <div
            className="flex gap-4 px-6 sm:px-8 overflow-x-auto no-scrollbar py-8"
            style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
          >
            {[
              insta2,
              insta3,
              insta4,
              insta5,
              insta6,
              insta7,
              insta8,
              insta9,
            ].map((img, i) => (
              <div
                key={i}
                className="instagram-book-item min-w-[140px] sm:min-w-[180px] md:min-w-[200px] rounded-xl overflow-hidden shadow-md"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <img
                  src={img}
                  alt={`Instagram post ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.instagram.com/threaded_dreamsby_femmora/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium 
             bg-gradient-to-r from-[#F5C76A] to-[#E6A93D]
             hover:opacity-90 transition-all duration-300 shadow-sm"
            >
              <FaInstagram className="w-5 h-5" />
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
