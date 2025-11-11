import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { MenuProvider } from "./components/MenuContext";
import InteriorPage from "./components/InteriorPage";
import ProcessSection from "./components/ProcessSection";

function App() {
  return (
    <Router>
      <MenuProvider>
        <div className="font-sans antialiased">
          <Navbar />
          <main className="pt-20">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <AboutSection />
                    <ProcessSection />
                    <ServicesSection />
                    <ProjectsSection />
                    <ContactSection />
                  </>
                }
              />
              <Route path="/interior" element={<InteriorPage />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </MenuProvider>
    </Router>
  );
}

export default App;
