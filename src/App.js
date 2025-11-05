import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePrincipal from "./pages.js/home";
import ProductsPrincipal from "./pages.js/products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePrincipal/>}></Route>
        <Route path='/products' element={<ProductsPrincipal/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
