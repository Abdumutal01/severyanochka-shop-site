import React, { useState } from "react";
import "./HeaderBtns.scss";
import { Link } from "react-router";
import { useSelector } from "react-redux";

export default function HeaderBtns() {
  const likes = useSelector((state) => state.shop.totalLikes);
  const ordersArr = useSelector((state) => state.shop.orders);

  const totalQuantity = useSelector((state) => state.shop.totalQuantity);
  console.log(likes);

  return (
    <div className="header__btnBox">
      <Link to="likes">
        <button className="header__btnBox-btn">
          <i className="fa-regular fa-heart" />
          <span>{likes}</span>
          <p>Избранное</p>
        </button>
      </Link>

      <Link to="orders">
        <button className="header__btnBox-btn">
          <i className="fa-solid fa-box" />

          <p>Заказы</p>
        </button>
      </Link>
      <Link to="products">
        <button className="header__btnBox-btn">
          <i className="fa-solid fa-cart-shopping" />
          <span>{totalQuantity}</span>
          <p>Корзина</p>
        </button>
      </Link>
    </div>
  );
}
