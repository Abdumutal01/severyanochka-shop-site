import React from "react";
import "./App.scss";
// import useFetch from "./useFetch";
import Header from "./Header/Header";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router";
import Products from "./components/Products/Products";
import Orders from "./components/Orders/Orders";
import Likes from "./components/Likes/Likes";
import Delivery from "./components/Delivery/Delivery";

import Footer from "./Footer/Footer";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import Contacts from "./components/pages/Contacts/Contacts";
import Vacancies from "./components/pages/Vacancies/Vacancies";
import NoPage from "./components/NoPages/NoPage";


export const userInfo = JSON.parse(localStorage.getItem('user'))

export default function App() {

  const orderTest = JSON.parse(localStorage.getItem("orders"));
  const likesTest = JSON.parse(localStorage.getItem("likes"));

  if (!orderTest && !likesTest) {
    localStorage.setItem("orders", JSON.stringify([]));
    localStorage.setItem("likes", JSON.stringify([]));
  }

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/nopages" element={<NoPage />} />
      </Routes>
      
      <Footer />
    </div>
  );

}


