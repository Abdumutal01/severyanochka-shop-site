import React, { useState } from "react";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { shoppingAction } from "../../store/shop-slice";

export default function Cart({ things }) {
  const {
    id,
    discount,
    cartPirce,
    img,
    like,
    name,
    regularPrice,
    quantity,
    stars,
    price,
  } = things;

  const [likes, setLikes] = useState(like);

  const dispatch = useDispatch();

  const allLikes = useSelector((state) => state.shop.likes);

  console.log(allLikes);

  const likeHandler = (testId) => {
    if (allLikes.some((item) => item.id === testId)) {
      dispatch(
        shoppingAction.removeLike({
          id,
        })
      );
      setLikes(!likes);
      console.log("remove Likes");
    } else {
      dispatch(
        shoppingAction.addLike({
          id,
          name,
          cartPirce,
          img,
          like,
          regularPrice,
          stars,
          price,
        })
      );
      console.log("add Likes");
      setLikes(!likes);
    }
  };

  const productHandler = () => {
    dispatch(
      shoppingAction.addProducts({
        discount,
        id,
        name,
        cartPirce,
        img,
        like,
        regularPrice,
        stars,
        price,
      })
    );
  };

  return (
    <div className="carts" key={id}>
      {quantity ? (
        <button className="carts__quantity">
          <i className="fa-solid fa-cart-shopping" />

          <span>{quantity}</span>
        </button>
      ) : null}
      <img src={img} alt="" className="carts__img" />
      <button onClick={() => likeHandler(id)} className="carts__likeBtn">
        <i
          className={`${likes ? "fa-solid fa-heart" : "fa-regular fa-heart"}`}
        />
      </button>
      {discount ? <span className="carts__discount">-{discount}%</span> : null}
      <div className="carts__data">
        {price ? (
          <h3 className="carts__price">{price} ₽</h3>
        ) : (
          <div className="carts__price-box">
            <h3 className="carts__price">
              {cartPirce} ₽ <br />
              <span>С картой</span>
            </h3>
            <h3 className="carts__price carts__priceR">
              {regularPrice} ₽ <br />
              <span>Обычная</span>
            </h3>
          </div>
        )}
        <h2 className="carts__name">{name}</h2>

        <div className="carts__stars">
          {stars.forEach((item, index) => (
            <i
              key={index}
              className={`${
                item.star ? "fa-solid fa-star" : "fa-regular fa-star"
              }`}
            />
          ))}
        </div>
        <button className="carts__shopBtn" onClick={productHandler}>
          В корзину
        </button>
      </div>
    </div>
  );
}
