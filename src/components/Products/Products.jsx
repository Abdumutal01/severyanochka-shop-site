import React, { useState } from "react";
import "./Products.scss";
import { useDispatch, useSelector } from "react-redux";

import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import Container from "../../Container/Container";
import Cart from "./ProductsCart/ProductsCart";
import { shoppingAction } from "../../store/shop-slice";
import productsBonusIcon from "../../assets/img/productsBonusIcon.png";
import { Link, useNavigate } from "react-router";
import PagesHero from "../PagesHero/PagesHero";
import emtyImg from "../../assets/img/productsEmtyImg.png";

export default function Products() {
  const products = useSelector((state) => state.shop.products);
  const totalPrice = useSelector((state) => state.shop.totalPrice);
  const totalCarts = useSelector((state) => state.shop.totalCarts);

  const [alertCart, setAlertCart] = useState(false);

  console.log(products);

  const discount = 0;

  const dispatch = useDispatch();

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 52,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(25px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#65C466",
          opacity: 1,
          border: 0,
          ...theme.applyStyles("dark", {
            backgroundColor: "#2ECA45",
          }),
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: theme.palette.grey[100],
        ...theme.applyStyles("dark", {
          color: theme.palette.grey[600],
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.7,
        ...theme.applyStyles("dark", {
          opacity: 0.3,
        }),
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#E9E9EA",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
      ...theme.applyStyles("dark", {
        backgroundColor: "#39393D",
      }),
    },
  }));

  const clearProducts = () => {
    dispatch(shoppingAction.clearProducts());
  };
  const navigate = useNavigate();

  const alertOrder = () => {
    if (totalPrice < 1000) {
      setAlertCart(!alertCart);
    } else {
      navigate("/delivery");
      dispatch(shoppingAction.calculateDates());
    }
  };

  return (
    <section className="products">
      {products.length !== 0 ? (
        <Container>
          <PagesHero text="Корзина" />
          <h2 style={{ position: "relative" }} className="inner">
            Корзина
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

          <div className="products__btnBox">
            <button className="products__btn">
              <span>
                <i className="fa-solid fa-minus" />
              </span>
              Выделить всё
            </button>
            <button onClick={clearProducts} className="products__btn">
              Удалить выбранные
            </button>
          </div>

          <div className="products__general">
            <div>
              {products.map((item) => (
                <Cart key={item.id} things={item} />
              ))}
            </div>
            <div>
              <div>
                <div>
                  <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    label="Списать 200 ₽ "
                  />
                  <p className="products__text">На карте накоплено 200 ₽ </p>
                </div>

                <hr className="products__line" />
                <div>
                  <p className="products__text d-flex">
                    {totalCarts } товара : <span>{totalPrice.toFixed(2)} ₽</span>
                  </p>

                  <p className="products__text d-flex">
                    Скидка{" "}
                    <span style={{ color: "#FF6633", fontWeight: "700" }}>
                      {" "}
                      -{discount} ₽{" "}
                    </span>
                  </p>
                </div>

                <hr className="products__line" />

                <div className="d-flex">
                  <p className="products__text">Итог</p>
                  <h2 className="products__price">{totalPrice.toFixed(2)} ₽</h2>
                </div>
                <h3 className="products__bunus">
                  <img src={productsBonusIcon} alt="" />
                  Вы получяете 100 бонусов
                </h3>

                {alertCart ? (
                  <h3 className="products__alert">
                    Минимальная сумма заказа 1000р
                  </h3>
                ) : null}

                <button onClick={alertOrder} className="products__orderBtn">
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <Container>
          <PagesHero text="Корзина" />
          <h2 style={{ position: "relative" }} className="inner">
            Корзина
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

          <div className="products__emty">
            <img src={emtyImg} alt="" className="products__emty-img" />
            <h3 className="products__emty-inner">Корзина пуста</h3>
            <h3 className="products__emty-text">
              Но это никогда не поздно исправить :)
            </h3>
            <Link to="/" className="products__emty-link">
              В каталог товаров
            </Link>
          </div>
        </Container>
      )}
    </section>
  );
}
