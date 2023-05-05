import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateUser from "./pages/User/CreateUser";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import UserList from "./pages/User/UserList";
import AllProducts from "./pages/AllProducts/AllProducts";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";
import Cart from "./pages/cart/Cart";

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
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
