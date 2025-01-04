import React from "react";
import "./ProductsLeftBox.scss";
import { useDispatch, useSelector } from "react-redux";
import productsBonusIcon from "../../../assets/img/productsBonusIcon.png";

import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router";
import { shoppingAction } from "../../../store/shop-slice";

export default function ProductsLeftBox() {
  const navigate = useNavigate();

  const days = useSelector((state) => state.shop.days);
  const oldProducts = useSelector((state) => state.shop.products);

  const discount = 0;

  const totalPrice = useSelector((state) => state.shop.totalPrice);
  const totalCarts = useSelector((state) => state.shop.totalCarts);

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

  const newProducts = Array.isArray(oldProducts) ? [...oldProducts] : [];
  console.log(newProducts);

  const dispatch = useDispatch();

  const pushOrder = () => {
    const copyDays = [...days];
    const endDay = copyDays.pop();
    dispatch(
      shoppingAction.addOrder({
        orders: newProducts,
        endDay,
      })
    );
    navigate('/orders')
    dispatch(shoppingAction.clearProducts())
  };

  return (
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
          {totalCarts}товара : <span>{(totalPrice || 0).toFixed(2)} ₽</span>
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
        <h2 className="products__price">{(totalPrice || 0).toFixed(2)} ₽</h2>
      </div>
      <h3 className="products__bunus">
        <img src={productsBonusIcon} alt="" />
        Вы получяете 100 бонусов
      </h3>

      <button onClick={pushOrder} className="products__orderBtn">
        Оплатить на сайте
      </button>

      <button className="products__payBtn2">Оплатить при получении</button>
    </div>
  );
}
