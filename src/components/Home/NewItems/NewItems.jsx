import React from "react";
import "./NewItems.scss";
import useFetch from "../../../useFetch";

import Cart from "../../Cart/Cart";
import HomeTitle from "../HomeTitle/HomeTitle";
import newItemsImg1 from '../../../assets/img/newItemsImg1.png'
import newItemsImg2 from '../../../assets/img/newItemsImg2.png'
import newItemsImg3 from '../../../assets/img/newItemsImg3.png'
import newItemsImg4 from '../../../assets/img/newItemsImg4.png'

export default function NewItems() {
  // const data = useFetch("https://597440ea-7b01-4e0f-847c-6ed453d5004b.mock.pstmn.io/products2").data;
  const data = [
    {
      discount: null,
      id: "b1",
      like: false,
      img:`${newItemsImg1}`, 
      cartPirce: null,
      regularPrice: null,
      price: 599.99,
      name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      stars: [
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: false,
        },
        {
          star: false,
        },
        {
          star: false,
        },
      ],
    },
    {
      discount: null,
      id: "b2",
      like: false,
      img:`${newItemsImg2}`, 
      cartPirce: null,
      regularPrice: null,
      price: 44.5,
      name: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
      stars: [
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
      ],
    },
    {
      discount: null,
      id: "b3",
      like: false,
      img:`${newItemsImg3}`, 
      cartPirce: null,
      regularPrice: null,
      price: 159.99,
      name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      stars: [
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: false,
        },
        {
          star: false,
        },
        {
          star: false,
        },
      ],
    },
    {
      discount: null,
      id: "b4",
      like: false,
      img:`${newItemsImg4}`, 
      cartPirce: null,
      regularPrice: null,
      price: 49.39,
      name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      stars: [
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: false,
        },
        {
          star: false,
        },
        {
          star: false,
        },
      ],
    },
  ];
  console.log(data);

  return (
    <section className="newItems">
      <HomeTitle title="Новинки" link="/" />

      <div className="general">
        {data.map((item) => (
          <Cart things={item} />
        ))}
      </div>
    </section>
  );
}
