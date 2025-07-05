import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// Lazy load components
const About = lazy(() => import("./pages/About/Page.tsx"));
const Schedule = lazy(() => import("./pages/Schedule/Page.tsx"));
const Rules = lazy(() => import("./pages/Rules.tsx"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#3F61AD]"></div>
  </div>
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="overflow-hidden">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);
