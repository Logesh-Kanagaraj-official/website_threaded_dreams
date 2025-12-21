/**
 * @file Clips.tsx
 * @description Clips and hair accessories collection page
 * @module Pages
 */

import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

// Import clip images
import clipFlowerPair from "@/assets/clip-flower-pair.jpg";
import clipClawCollection from "@/assets/clip-claw-collection.jpg";
import clipVarietySet from "@/assets/clip-variety-set.jpg";
import clipChainPair from "@/assets/clip-chain-pair.jpg";
import clipMallipoo from "/clips/mallipoo-clips.png";
import clipDecorativeClaws from "/clips/decorative-claw-clips.png";
import clipFlowerHairTies from "/clips/flower-hair-ties.png";
import clipPeacockPins from "/clips/peacock-hair-clips.png";
import clipPurplePinkFloral from "/clips/purple-pink-floral-clips.png";
import clipFloralPendant from "/clips/floral-pendant-clip.png";
import clipBlackGoldFlower from "/clips/black-gold-flower-clip.png";
import clipBlackTurquoiseLeaf from "/clips/black-turquoise-leaf-clip.png";
import clipBrownWhiteGold from "/clips/brown-white-gold-clip.png";

const Clips: React.FC = memo(() => {
  const clipProducts = [
    {
      image: clipMallipoo,
      title: "Mallipoo (மல்லிப்பூ) Hair Clips",
      description:
        "Traditional jasmine flower hair clips and accessories. Perfect for traditional occasions, weddings, and festive celebrations.",
      isNewArrival: true,
    },
    {
      image: clipPeacockPins,
      title: "Krishna Raadha Hair Pins",
      description:
        "Exquisite circular hair pins featuring intricate Lord Krishna figures and peacock designs with colorful enamel leaf patterns. Detailed miniature work in antique gold finish. Available in purple-black and pink-green combinations.",
      isNewArrival: true,
    },
    {
      image: clipFlowerHairTies,
      title: "Decorative Flower Hair Ties",
      description:
        "Collection of six elegant hair ties with colorful enamel flower embellishments. Features orange, purple, pink, and multicolor designs with gold metallic frames. Perfect for everyday styling.",
      isNewArrival: true,
    },
    {
      image: clipDecorativeClaws,
      title: "Decorative Claw Clips Set",
      description:
        "Beautiful decorative claw clips in pink and blue with intricate gold leaf patterns and gemstone embellishments. Perfect for everyday elegance.",
      isNewArrival: false,
    },
    {
      image: clipPurplePinkFloral,
      title: "Elegant Floral Hair Clips Duo",
      description:
        "Stunning pair of floral hair clips featuring purple and pink gemstone flowers with gold accents. Perfect for adding elegance to any hairstyle.",
      isNewArrival: true,
    },
    {
      image: clipFloralPendant,
      title: "Floral Pendant Hair Clip",
      description:
        "Ornate floral pendant clip with vibrant red, orange, and dark gemstones arranged in a beautiful flower pattern with gold setting and green accent stones.",
      isNewArrival: false,
    },
    {
      image: clipBlackGoldFlower,
      title: "Black & Gold Heart Flower Clip",
      description:
        "Elegant black curved hair clip adorned with gold-toned heart-shaped flowers and brown gemstone accents. A sophisticated choice for any occasion.",
      isNewArrival: false,
    },
    {
      image: clipBlackTurquoiseLeaf,
      title: "Turquoise Leaf Banana Clip",
      description:
        "Sleek black banana clip featuring decorative turquoise and green gemstones arranged in an elegant leaf pattern. Stylish and functional.",
      isNewArrival: false,
    },
    {
      image: clipBrownWhiteGold,
      title: "Amber Gemstone Banana Clip",
      description:
        "Transparent brown banana clip beautifully decorated with white marquise stones and gold square and round gemstones. Classic elegance meets modern style.",
      isNewArrival: false,
    },
    {
      image: clipFlowerPair,
      title: "Flower Clip Pair",
      description: "Beautiful pink and gold flower design clips",
      isNewArrival: false,
    },
    {
      image: clipClawCollection,
      title: "Designer Claw Clips",
      description: "Elegant collection with colorful stone embellishments",
      isNewArrival: false,
    },
    {
      image: clipVarietySet,
      title: "Variety Accessory Set",
      description: "Mix of pins, clips and hair accessories",
      isNewArrival: false,
    },
    {
      image: clipChainPair,
      title: "Floral Chain Clips",
      description: "Turquoise and orange clips with delicate gold chains",
      isNewArrival: false,
    },
  ];

  const newArrivals = clipProducts.filter((p) => p.isNewArrival);
  const regularProducts = clipProducts.filter((p) => !p.isNewArrival);

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-background to-silk">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-accent fill-accent" />
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary">
              Clips & Accessories
            </h1>
            <Heart className="w-8 h-8 text-accent fill-accent" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beautiful handcrafted clips and hair accessories to complement your
            style. Perfect for any occasion - from casual outings to special
            events.
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

        {/* Features Section */}
        <section className="mb-16">
          <div className="luxury-card p-8 md:p-12 bg-gradient-to-br from-accent/5 to-primary/5">
            <h2 className="font-serif text-3xl font-bold text-primary mb-6 text-center">
              Why Choose Our Clips? 💜
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">
                  Handcrafted
                </h3>
                <p className="text-sm text-muted-foreground">
                  Each piece is carefully made by hand with attention to detail
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💝</span>
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">
                  Customizable
                </h3>
                <p className="text-sm text-muted-foreground">
                  Choose your colors and designs to match your preferences
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">
                  Lightweight
                </h3>
                <p className="text-sm text-muted-foreground">
                  Comfortable to wear all day without any discomfort
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="luxury-card p-10">
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">
              Order Your Custom Clips
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let us know your style preferences, favorite colors, and occasion.
              We'll create beautiful clips just for you!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-gold">
                Contact Us
              </Link>
              <Link to="/accessories" className="btn-outline-gold">
                Browse All Accessories
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
});

Clips.displayName = "Clips";

export default Clips;
