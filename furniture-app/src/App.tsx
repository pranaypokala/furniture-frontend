import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ProductsPage from "./Components/ProductsPage";
import AllProductsPage from "./Components/AllProductsPage";
import ContactUsPage from "./Components/ContactUsPage";
import Login from "./Components/Login";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/all-products" element={<AllProductsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
