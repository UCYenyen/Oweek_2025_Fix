import { StrictMode, lazy, Suspense, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// Lazy load components
const App = lazy(() => import("./App.tsx"));
const About = lazy(() => import("./pages/About/Page.tsx"));
const Schedule = lazy(() => import("./pages/Schedule/Page.tsx"));
const Rules = lazy(() => import("./pages/Rules.tsx"));

// Loading component
const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-[#3F61AD] via-[#75ABDC] to-[#B2D5F1] flex items-center justify-center z-50">
    <div className="relative flex flex-col items-center gap-8 p-8">
      {/* Main spinner container */}
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="w-32 h-32 rounded-full border-8 border-transparent bg-gradient-to-r from-[#3F61AD] via-[#75ABDC] to-[#B2D5F1] animate-spin">
          <div className="w-full h-full rounded-full border-8 border-[#B2D5F1] border-t-transparent"></div>
        </div>
        
        {/* Center logo - Luminate SVG (not spinning) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/luminate.svg" 
            className="w-[90%] h-auto animate-pulse" 
            alt="Luminate Logo"
          />
        </div>
      </div>
      
      {/* Loading text */}
      <div className="text-center">
        <h2 className="font-lettertype text-4xl bg-gradient-to-b from-[#1e2d4e] to-[#2f69a0] bg-clip-text text-transparent mb-2 animate-pulse">
          LUMINATE
        </h2>
        <p className="text-[#263a65] font-roboto text-xl font-semibold animate-pulse delay-300 tracking-wider">
            OWEEK 2025
        </p>
        <div className="mt-2 h-1 bg-gradient-to-r from-transparent via-[#293e83] to-transparent animate-pulse delay-500"></div>
      </div>
      
    </div>
     <div className="absolute inset-0 bg-[url('/elements/real-background.svg')] opacity-15 bg-cover bg-center"></div>
  </div>
);

// Route transition handler
const RouteTransitionHandler = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    
    // Show loading for at least 500ms for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
};

// Layout component
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="overflow-hidden">
    <Navbar />
    <RouteTransitionHandler>
      {children}
    </RouteTransitionHandler>
    <Footer />
  </div>
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Layout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </Layout>
      </Suspense>
    </HashRouter>
  </StrictMode>
);
