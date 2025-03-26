import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InternshipPage from "./pages/InternshipPage";
import GraduateProgram from "./pages/GraduateProgram";
import CompColl from "./pages/CompColl";
import LoginPortal from "./pages/LoginPortal";
import InterneePage from "./pages/InterneePage";
import BackendOpp from "./pages/BackendOpp";
import AppDevOpp from "./pages/AppDevOpp";
import GraphicDesOpp from "./pages/GraphicDesOpp";
import ChatbotOpp from "./pages/ChatbotOpp";
import FrontendOpp from "./pages/FrontendOpp";
import SignupPage from "./pages/SignupPage";

function App() {
  const location = useLocation();

  
  const noHeaderFooterPages = ["/LoginPortal", "/InterneePage","/SignupPage"];
  const hideHeaderFooter = noHeaderFooterPages.includes(location.pathname);

  return (
    <div
      className={`${
        hideHeaderFooter ? "h-screen bg-gradient-to-br from-green-500 to-green-700" : "min-h-screen bg-white"
      }`}
    >
      {/* Header */}
      {!hideHeaderFooter && <Header />}
      <main className={`${hideHeaderFooter ? "h-full w-full" : "container mx-auto p-6"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/InternshipPage" element={<InternshipPage />} />
          <Route path="/GraduateProgram" element={<GraduateProgram />} />
          <Route path="/CompColl" element={<CompColl />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/LoginPortal" element={<LoginPortal />} />
          <Route path="/InterneePage" element={<InterneePage />} />
          <Route path="/BackendOpp" element={<BackendOpp />} />
          <Route path="/AppDevOpp" element={<AppDevOpp />} />
          <Route path="/GraphicDesOpp" element={<GraphicDesOpp />} />
          <Route path="/ChatbotOpp" element={<ChatbotOpp />} />
          <Route path="/FrontendOpp" element={<FrontendOpp />} />
          <Route path="/SignupPage" element={<SignupPage />} />
        </Routes>
      </main>
      {/* Footer */}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
