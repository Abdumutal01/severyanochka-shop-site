import React, { useState } from "react";
import "./Delivery.scss";
import Container from "../../Container/Container";
import { useSelector } from "react-redux";
import ProductsLeftBox from "../Products/ProductsLeftBox/ProductsLeftBox";
import DeliveryForm from "./DeliveryForm/DeliveryForm";

export default function Delivery() {
  const totalCarts = useSelector((state) => state.shop.totalCarts);

  const datesArr = useSelector((state) => state.shop.days);
  console.log(datesArr);

  return (
    <section className="delivery">
      <Container>
        <p className="urls">
          <span>Главная</span>
          <i className="fa-solid fa-chevron-right" />

          <span className="two">Корзина</span>
        </p>
        <h2 style={{ position: "relative" }} className="inner">
          Доставка
          <span
            style={{
              position: "absolute",
              padding: 8,
              background: "#FF6633",
              color: "#FFFFFF",
              borderRadius: "8px",
              top: "0",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              textAlign: "center",
            }}
          >
            {totalCarts}
          </span>
        </h2>

        <div className="delivery__general">
          <DeliveryForm />
          <ProductsLeftBox />
        </div>
      </Container>
    </section>
  );
}
