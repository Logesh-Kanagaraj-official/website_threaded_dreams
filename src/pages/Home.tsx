// File: Home.tsx
import React, { memo, Suspense } from "react";

// Lazy load non-critical sections to improve initial load performance
const Hero = React.lazy(() => import("@/components/Hero"));
const About = React.lazy(() => import("@/components/About"));
const Craftsmanship = React.lazy(() => import("@/components/Craftsmanship"));
const Newsletter = React.lazy(() => import("@/components/Newsletter"));

/**
 * Home
 * Renders the main homepage with all key sections.
 *
 * - Lazy loads sections to improve Time To Interactive (TTI)
 * - Uses semantic landmarks for accessibility
 * - Memoized for avoiding unnecessary re-renders
 */
const Home: React.FC = memo(() => {
  return (
    <main className="min-h-screen" id="home-page">
      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        {/* Hero Section */}
        <section aria-label="Hero">
          <Hero />
        </section>

        {/* Craftsmanship Section */}
        <section aria-labelledby="craftsmanship-heading">
          <Craftsmanship />
        </section>

        {/* About Section */}
        <section aria-labelledby="about-heading">
          <About />
        </section>

        {/* Newsletter Section */}
        <section aria-label="Newsletter Signup">
          <Newsletter />
        </section>
      </Suspense>
    </main>
  );
});

Home.displayName = "Home";

export default Home;
