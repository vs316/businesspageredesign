import Home from "./pages/home/home";
import About from "./pages/about/about";
import Awards from "./pages/awards/awards";
import Banks from "./pages/banks/banks";
import Contact from "./pages/contact/contact";
import NotFound from "./pages/notFound/notFound";
import Services from "./pages/services/services";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
