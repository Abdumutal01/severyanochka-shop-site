import React from "react";
import "./Stock.scss";
import useFetch from "../../../useFetch";
import Cart from "../../Cart/Cart";
import { Link } from "react-router";
export default function Stock() {
  const data = useFetch("http://localhost:3002/products1");

  console.log(data.data);

  return (
    <section className="stock">
      <div className="title-box">
        <h2 className="title">Акции</h2>
        <Link to="" className="links">
          Все акции {"  "}
          <i className="fa-solid fa-chevron-right" />
        </Link>
      </div>
      <div className="general">
        {data.data.map((item) => (
          <Cart key={item.id} things={item} />
        ))}
      </div>
    </section>
  );
}
