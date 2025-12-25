import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import LogoLoader from "@/components/LogoLoader";
import ScrollToTop from "@/components/ScrollToTop";
import BackToTop from "@/components/BackToTop";

// Lazily load pages to improve performance
const Home = lazy(() => import("./pages/Home"));
const Bangles = lazy(() => import("./pages/Bangles"));
const Clips = lazy(() => import("./pages/Clips"));
const Accessories = lazy(() => import("./pages/Accessories"));
const Contact = lazy(() => import("./pages/Contact"));
const NotifyMe = lazy(() => import("./pages/NotifyMe"));
const Legal = lazy(() => import("./pages/Legal"));

/**
 * App
 * Root application component.
 * - Handles routing
 * - Includes lazy loading for optimal performance
 */

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Header />
    {/* Suspense fallback for lazy-loaded routes */}
    <Suspense fallback={<LogoLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bangles" element={<Bangles />} />
        <Route path="/clips" element={<Clips />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notify-me" element={<NotifyMe />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </Suspense>
    <Footer />
    <BackToTop />
  </BrowserRouter>
);

export default App;
