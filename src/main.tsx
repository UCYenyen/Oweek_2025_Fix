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
  <div className="fixed inset-0 bg-[#B2D5F1] bg-cover bg-[url('/elements/real-background.svg')] flex items-center justify-center z-50">
    <div className="relative flex flex-col items-center gap-8 p-8">
      {/* Main spinner container */}
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="w-32 h-32 rounded-full border-8 border-transparent bg-gradient-to-r from-[#3F61AD] via-[#75ABDC] to-[#B2D5F1] animate-spin">
          <div className="w-full h-full rounded-full border-8 border-[#B2D5F1] border-t-transparent"></div>
        </div>
        
        {/* Inner spinning ring */}
        <div className="absolute inset-4 w-24 h-24 rounded-full border-6 border-transparent bg-gradient-to-r from-[#FFD054] via-[#FFF0B8] to-[#F5AC01] animate-spin animate-reverse">
          <div className="w-full h-full rounded-full border-6 border-[#B2D5F1] border-b-transparent"></div>
        </div>
        
        {/* Center logo/icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#3F61AD] to-[#75ABDC] rounded-full flex items-center justify-center animate-pulse">
            <div className="w-8 h-8 bg-gradient-to-br from-[#FFF0B8] to-[#FFD054] rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Loading text */}
      <div className="text-center">
        <h2 className="font-lettertype text-4xl bg-gradient-to-b from-[#263a65] to-[#3481c9] bg-clip-text text-transparent mb-2 animate-pulse">
          LUMINATE
        </h2>
        <p className="text-[#263a65] font-roboto text-lg animate-pulse delay-300">
          OWEEK 2025
        </p>
      </div>
    </div>
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
