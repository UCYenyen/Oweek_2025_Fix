import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import About from "./pages/About/Page.tsx";
import Schedule from "./pages/Schedule/Page.tsx";
import Rules from "./pages/Rules.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
         <Route path="/rules" element={<Rules />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
