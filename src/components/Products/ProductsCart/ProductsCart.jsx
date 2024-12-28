import React from "react";
import "./ProductsCart.scss";
import { useDispatch } from "react-redux";
import { shoppingAction } from "../../../store/shop-slice";

export default function ProductsCart({ things, key }) {
  const {
    discount,
    id,
    name,
    price,
    img,
    cartPirce,
    regularPrice,
    quantity,
    totalPrice,
  } = things;

  const dispatch = useDispatch();

  let testDt = false;

  if (!quantity > 0) {
    testDt = true;
  }

  const totalCart = (testId) =>{
    dispatch(shoppingAction.totalCarts({
      quantity,
      id
    }))
   }

  const addCart = () => {
    dispatch(
      shoppingAction.addProducts({
        id,
        name,
        price,
        img,
        cartPirce,
        regularPrice,
        quantity,
        totalPrice,
      })
    );
  };


  const removeCart = () => {
    dispatch(
      shoppingAction.removeProducts({
        id,
        price,
        cartPirce,
        quantity,
        totalPrice,
      })
    );
   
  };



  return (
    <div
      style={testDt ? { opacity: ".4" } : { opacity: "1" }}
      key={key}
      className="products__cart"
    >
      <div className="products__cart--smallDiv">
        <img src={img} alt="" className="products__cart--img" />
        <div className="products__cart--box">
          <h2 className="products__cart--name">{name}</h2>
          <div className="products__cart--priceD">
            {price ? (
              <p className="products__cart--price">
                {price} ₽ <span>за шт.</span>
              </p>
            ) : (
              <div className="products__cart--nextPrice">
                <p className="products__cart--cartPrice">
                  {cartPirce} ₽ <br />
                  <span>С картой</span>
                </p>
                <p className="products__cart--priceR">
                  {regularPrice} <br />
                  <span>Обычная</span>
                </p>
                <p className="products__cart--sht">за шт.</p>
              </div>
            )}
            {discount ? (
              <span className="products__cart--discount">-{discount}%</span>
            ) : null}
          </div>
        </div>
      </div>

      <div
        style={testDt ? { display: "flex" } : { display: "grid" }}
        className="products__cart--endBox"
      >
        <div
          style={testDt ? { display: "none" } : { display: "flex" }}
          className="products__cart--btnBox"
        >
          <button onClick={()=>{removeCart(); totalCart();}} className="products__cart--btns">
            <i className="fa-solid fa-minus" />
          </button>
          <button className="products__cart--btns">{quantity}</button>
          <button onClick={addCart} className="products__cart--btns">
            <i className="fa-solid fa-plus" />
          </button>
        </div>

        <h3 className="products__cart--totalPrice">
          {testDt ? (
            <p className="products__cart--name">Нет в наличии</p>
          ) : (
            `${totalPrice.toFixed(2)} ₽`
          )}
        </h3>
      </div>
    </div>
  );
}
