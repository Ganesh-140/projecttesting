
// App.js
import React from 'react';
import TopNav from './components/topNav';
import Carousel from './components/carousel'; // Correct the typo here
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AllProducts from './pages/allProducts/allProducts';
import ProductsView from './pages/productView/productsView';

const App = () => {
  return (
    <BrowserRouter>
      <div className="header-section">
        <TopNav />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="body-content">
             <Link to="/product"> <Carousel /> </Link> {/* Correct the component name here */}
            </div>
          }
        />
        <Route path="/product" element={<AllProducts />} />
        <Route path="/product-view/:originalPlu" element={<ProductsView />} />        
        <Route path="*" element={<div>Not Found</div>} /> {/* Add a default route */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;