import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Products from "./pages/Products"; // Assuming you have a Products page

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

