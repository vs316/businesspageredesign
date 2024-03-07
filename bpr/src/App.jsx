import React, { useState, useEffect } from "react";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Awards from "./pages/awards/awards";
import Banks from "./pages/banks/banks";
import Contact from "./pages/contact/contact";
import NotFound from "./pages/notFound/notFound";
import Services from "./pages/services/services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import { Vortex } from "react-loader-spinner";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="spinner">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timeout = setTimeout(() => {
      setIsTransitioning(true); // Start transition
      setTimeout(() => setIsLoading(false), 500); // Wait for fade-out to complete
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <div className={`loading-screen ${isTransitioning ? "fade-out" : ""}`}>
          <LoadingScreen />
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/banks" element={<Banks />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
