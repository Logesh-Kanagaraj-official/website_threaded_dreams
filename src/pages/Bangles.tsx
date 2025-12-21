/**
 * @file Bangles.tsx
 * @description Bangles collection page showcasing silk thread bangles
 * @module Pages
/**
 * @file Bangles.tsx
 * @description Bangles collection page showcasing silk thread bangles
 * @module Pages
 */

import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

// Import bangle images
import bangleBlueSet from "@/assets/bangle-blue-set.jpg";
import bangleBlueStack from "@/assets/bangle-blue-stack.jpg";
import bangleRedSet from "@/assets/bangle-red-set.jpg";
import bangleGreenBlue from "@/assets/bangle-green-blue.jpg";
import bangleGoldTraditional from "@/assets/bangle-gold-traditional.jpg";
import banglePinkLotus from "/bangles/pink-lotus-bangles.png";
import banglePurpleLotus from "/bangles/purple-lotus-bangles.png";
import bangleGreenPeacock from "/bangles/green-peacock-bangles.png";
import banglePinkLeaf from "/bangles/pink-leaf-bangles.png";
import bangleGreenLeaf from "/bangles/green-leaf-bangles.png";
import bangleColorfulEnamel from "/bangles/colorful-enamel-bangles.png";
import setGreenJewelry from "/sets/green-jewelry-set.png";
import setPinkJewelry from "/sets/pink-jewelry-set.png";

const Bangles: React.FC = memo(() => {
  const bangleProducts = [
    {
      image: bangleGoldTraditional,
      title: "Traditional Divine Krishna & Lotus Silk Bangles",
      description:
        "Exquisite traditional gold bangles featuring intricate golden Lord Krishna figures, pristine white stone lotus motifs, and delicate green enamel accents.",
      isNewArrival: true,
    },
    {
      image: banglePinkLotus,
      title: "Peach Lotus Silk Thread Bangles",
      description:
        "Beautiful Peach silk thread bangles adorned with intricate gold lotus petal designs, green enamel accents, and sparkling golden rhinestones. Perfect for traditional and festive occasions.",
      isNewArrival: true,
    },
    {
      image: banglePurpleLotus,
      title: "Purple Lotus Silk Thread Bangles",
      description:
        "Stunning magenta-purple silk thread bangles with intricate gold lotus petal designs and green enamel accents. A perfect blend of elegance and tradition.",
      isNewArrival: true,
    },
    {
      image: bangleGreenPeacock,
      title: "Emerald Green Peacock Silk Thread Bangles",
      description:
        "Vibrant emerald green silk thread bangles adorned with intricate gold leaf patterns, heart-shaped stones, and ornate peacock motifs. A stunning statement piece for any occasion.",
      isNewArrival: true,
    },
    {
      image: setGreenJewelry,
      title: "Emerald Green Jewelry Set",
      description:
        "Complete jewelry set featuring emerald green silk thread bangles, pearl necklace with lotus pendant, and matching peacock earrings. Perfect for traditional occasions.",
      isNewArrival: true,
    },
    {
      image: setPinkJewelry,
      title: "Pink Lotus Jewelry Set",
      description:
        "Stunning pink-magenta jewelry set with silk thread bangles, pearl necklace with lotus pendant, and matching lotus earrings. A complete ensemble for special celebrations.",
      isNewArrival: true,
    },

    {
      image: bangleGreenLeaf,
      title: "Green Multi-Color Leaf Silk Thread Bangles",
      description:
        "Stunning emerald green silk thread bangles adorned with colorful enamel leaf patterns in green, red, and gold. A vibrant addition to any ethnic ensemble.",
      isNewArrival: false,
    },

    {
      image: bangleBlueSet,
      title: "Royal Blue Designer Set",
      description:
        "Stunning blue silk thread bangles with gold floral embellishments",
      isNewArrival: false,
    },
    {
      image: bangleBlueStack,
      title: "Blue Stone Collection",
      description: "Elegant blue bangles with intricate stone work",
      isNewArrival: false,
    },
    {
      image: bangleRedSet,
      title: "Maroon Elegance",
      description: "Rich maroon bangles with gold detailing",
      isNewArrival: false,
    },
    {
      image: bangleColorfulEnamel,
      title: "Colorful Enamel Bangle Set",
      description:
        "Vibrant four-piece bangle set featuring golden-yellow with blue gemstones, copper-brown with leaf patterns, pink-magenta with floral vine and pearls, and royal blue with multicolor enamel. A stunning multicolor collection.",
      isNewArrival: false,
    },
    {
      image: banglePinkLeaf,
      title: "Pink Leaf Pattern Silk Thread Bangles",
      description:
        "Elegant pink-magenta silk thread bangles with intricate gold leaf patterns, purple gemstones, and pearl embellishments. Perfect for weddings and special occasions.",
      isNewArrival: false,
    },
    {
      image: bangleGreenBlue,
      title: "Green & Blue Duo",
      description: "Beautiful pair featuring emerald and sapphire designs",
      isNewArrival: false,
    },
  ];

  const newArrivals = bangleProducts.filter((p) => p.isNewArrival);
  const regularProducts = bangleProducts.filter((p) => !p.isNewArrival);

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-background to-silk">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-accent" />
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary">
              Silk Thread Bangles
            </h1>
            <Sparkles className="w-8 h-8 text-accent" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our beautiful collection of handcrafted silk thread bangles.
            Each piece is uniquely designed and customizable to match your
            style.
          </p>
        </header>

        {/* Product Gallery */}
        <section className="mb-16">
          {/* New Arrivals Section */}
          {newArrivals.length > 0 && (
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center flex items-center justify-center gap-3">
                <span className="inline-block px-4 py-1 bg-gradient-to-r from-accent to-primary text-white text-sm font-bold rounded-full">
                  NEW
                </span>
                New Arrivals
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {newArrivals.map((product, idx) => (
                  <div
                    key={idx}
                    className="luxury-card p-6 hover:scale-105 elegant-transition relative"
                  >
                    <div className="absolute top-3 right-3 z-10">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-500 to-accent text-white text-xs font-bold rounded-full shadow-lg">
                        NEW
                      </span>
                    </div>
                    <div className="aspect-square overflow-hidden rounded-lg mb-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover hover:scale-110 elegant-transition"
                      />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    <Link
                      to="/contact"
                      className="text-accent hover:underline font-medium"
                    >
                      Enquire Now →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Regular Products Section */}
          {regularProducts.length > 0 && (
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">
                Our Collection
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {regularProducts.map((product, idx) => (
                  <div
                    key={idx}
                    className="luxury-card p-6 hover:scale-105 elegant-transition"
                  >
                    <div className="aspect-square overflow-hidden rounded-lg mb-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover hover:scale-110 elegant-transition"
                      />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    <Link
                      to="/contact"
                      className="text-accent hover:underline font-medium"
                    >
                      Enquire Now →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Featured Section */}
        <section className="mb-16">
          <div className="luxury-card p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">
              Handmade with Love 💜
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every bangle is carefully crafted using premium quality silk
              threads, adorned with beautiful embellishments. Perfect for
              weddings, festivals, or everyday elegance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="px-6 py-3 bg-accent/10 rounded-lg">
                <p className="text-sm font-semibold text-accent">
                  ✨ Customizable Colors
                </p>
              </div>
              <div className="px-6 py-3 bg-accent/10 rounded-lg">
                <p className="text-sm font-semibold text-accent">
                  🎨 Multiple Designs
                </p>
              </div>
              <div className="px-6 py-3 bg-accent/10 rounded-lg">
                <p className="text-sm font-semibold text-accent">
                  💝 Perfect Gifting
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="luxury-card p-10 bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">
              Ready to Customize?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Share your preferences, and we'll create the perfect bangles just
              for you!
            </p>
            <Link to="/contact" className="btn-gold">
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
});

Bangles.displayName = "Bangles";

export default Bangles;
