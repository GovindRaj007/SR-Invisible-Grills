import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import Index from "./pages/Index";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingPages from "@/components/LoadingPages";
import { locationPages } from "@/data/locationContent";

// Code-split pages that aren't needed on initial load
const ServicePage = lazy(() => import("./pages/ServicePage"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const About = lazy(() => import("./pages/About"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const locationRoutes = locationPages.map((item) => ({
  path: item.slug === "chennai" ? "/invisible-grills-chennai" : `/invisible-grills-${item.slug}`,
  slug: item.slug,
}));

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTop />
          <Navbar />
          <main className="pt-16 md:pt-20">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services/:categorySlug/:serviceSlug" element={<Suspense fallback={<LoadingPages />}><ServicePage /></Suspense>} />
              <Route path="/contact" element={<Suspense fallback={<LoadingPages />}><Contact /></Suspense>} />
              <Route path="/privacy-policy" element={<Suspense fallback={<LoadingPages />}><PrivacyPolicy /></Suspense>} />
              <Route path="/about" element={<Suspense fallback={<LoadingPages />}><About /></Suspense>} />
              {locationRoutes.map((route) => (
                <Route
                  key={route.slug}
                  path={route.path}
                  element={<Suspense fallback={<LoadingPages />}><LocationPage /></Suspense>}
                />
              ))}
              <Route path="*" element={<Suspense fallback={<LoadingPages />}><NotFound /></Suspense>} />
            </Routes>
          </main>
          <Footer />
          <FloatingCTA />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
