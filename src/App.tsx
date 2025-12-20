import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import LogoLoader from "@/components/LogoLoader";

// Lazily load pages to improve performance
const Home = lazy(() => import("./pages/Home"));
const Bangles = lazy(() => import("./pages/Bangles"));
const Clips = lazy(() => import("./pages/Clips"));
const Accessories = lazy(() => import("./pages/Accessories"));
const Contact = lazy(() => import("./pages/Contact"));
const Legal = lazy(() => import("./pages/Legal"));

/** React Query client with recommended defaults */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60, // 1 minute
    },
  },
});

/**
 * App
 * Root application component.
 * - Provides global query caching
 * - Handles routing
 * - Includes global tooltips and toast notifications
 */

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Header />
        {/* Suspense fallback for lazy-loaded routes */}
        <Suspense fallback={<LogoLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bangles" element={<Bangles />} />
            <Route path="/clips" element={<Clips />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
