import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { GlobalStyle } from './styles/globalStyles';
import Home from './pages/home';
import Shop from './pages/shop';
import Product from './pages/product';
import Blog from './pages/blog';
import Pages from './pages/pages';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product" element={<Product />} />
          <Route path="blog" element={<Blog />} />
          <Route path="pages" element={<Pages />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </>
)
