import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateUser from "./pages/User/CreateUser";
import UserList from "./pages/User/UserList";
import AllProducts from "./pages/AllProducts/AllProducts";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/searchResult" element={<SearchResultPage />} />
      </Routes>
    </>
  );
};

export default App;
