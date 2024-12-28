import React from "react";
import "./NewItems.scss";

import useFetch from "../../../useFetch";
import { Link } from "react-router";
import Cart from "../../Cart/Cart";

export default function NewItems() {
  const data = useFetch("http://localhost:3002/products2").data;
  console.log(data);

  return (
    <section className="newItems">
      <div className="title-box">
        <h2 className="title">Новинки</h2>
        <Link to="" className="links">
          Все акции {"  "}
          <i className="fa-solid fa-chevron-right" />
        </Link>
      </div>

      <div className="general">
        {
            data.map(item => (
                <Cart key={item.id} things={item}/>
            ))
        }
      </div>
    </section>
  );
}
