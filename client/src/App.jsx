import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateUser from "./pages/User/CreateUser";
import UserList from "./pages/User/UserList";
import AllProduct from "./pages/AllProduct/AllProduct";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/allProduct" element={<AllProduct />} />
      </Routes>
    </>
  );
};

export default App;
