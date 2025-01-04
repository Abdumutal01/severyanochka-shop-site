import React from "react";
import "./Stock.scss";
import Cart from "../../Cart/Cart";
import HomeTitle from "../HomeTitle/HomeTitle";

import stockImg1 from "../../../assets/img/stockImg1.png";
import stockImg2 from "../../../assets/img/stockImg2.png";
import stockImg3 from "../../../assets/img/stockImg3.png";
import stockImg4 from "../../../assets/img/stockImg4.png";

export default function Stock() {
  // const data = useFetch("https://597440ea-7b01-4e0f-847c-6ed453d5004b.mock.pstmn.io/products1");

  const data = [
    {
      discount: 10,
      id: "Stock1",
      like: false,
      img: `${stockImg1}`,
      cartPirce: 44.5,
      regularPrice: 50.5,
      name: "Г/Ц Блинчики с мясом вес, Россия",
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
      discount: 10,
      id: "Stock2",
      like: false,
      img: `${stockImg2}`,
      cartPirce: 44.5,
      regularPrice: 50.5,
      name: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
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
          star: false,
        },
        {
          star: false,
        },
      ],
    },
    {
      discount: 10,
      id: "Stock3",
      like: false,
      img: `${stockImg3}`,
      cartPirce: 44.5,
      regularPrice: 50.5,
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
      discount: 10,
      id: "Stock4",
      like: false,
      img: `${stockImg4}`,
      cartPirce: 44.5,
      regularPrice: 50.5,
      name: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
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
    <section className="stock">
      <HomeTitle title="Акции" link="/" />

      <div className="general">
        {data.map((item) => (
          <Cart key={item.id} things={item} />
        ))}
      </div>
    </section>
  );
}
