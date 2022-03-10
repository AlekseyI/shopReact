import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "../../pages/products";
import ErrorPage from "../../pages/error";
import CartPage from "../../pages/cart";
import ProductPage from "../../pages/product";
import AddProductPage from "../../pages/addProduct";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exat path="products/:id" element={<ProductPage />} />
      <Route exat path="add-product" element={<AddProductPage />} />
      <Route exat path="products" element={<ProductsPage />} />
      <Route exat path="cart" element={<CartPage />} />
      <Route exat path="/" element={<ProductsPage />} />
      <Route path="*" element={<ErrorPage error={"404 Not Found"} />} />
    </Routes>
  );
};

export default AppRoutes;