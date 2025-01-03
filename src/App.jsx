import React, { useEffect, useState } from "react";
import "./App.scss";
import useFetch from "./useFetch";
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

export default function App() {
  const [data, setData] = useState([]);

  const orderTest = JSON.parse(localStorage.getItem("orders"));

  if (!orderTest) {
    localStorage.setItem("orders", JSON.stringify([]));
  }

  useEffect(() => {
    fetch(
      "https://597440ea-7b01-4e0f-847c-6ed453d5004b.mock.pstmn.io/products2?id=b2"
    )
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  console.log(data);

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
      </Routes>
      <Footer />
    </div>
  );
}
