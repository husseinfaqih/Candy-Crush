import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateUser from "./pages/User/CreateUser";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import UserList from "./pages/User/UserList";
import AllProducts from "./pages/AllProducts/AllProducts";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";
import ConfirmationPage from "./pages/Confirmation/Confirmation";
import Cart from "./pages/cart/Cart";
import ProductPage from "./pages/ProductPage/ProductPage";
import Favorite from "./pages/FavoritePage/Favorites";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/products/:category" element={<AllProducts />} />
        <Route path="/searchResult" element={<SearchResultPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </>
  );
};

export default App;
