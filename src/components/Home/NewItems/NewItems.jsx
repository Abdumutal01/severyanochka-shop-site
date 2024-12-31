import React from "react";
import "./NewItems.scss";
// import info from '../../../../data/data.json'
import useFetch from "../../../useFetch";
import { Link } from "react-router";
import Cart from "../../Cart/Cart";

export default function NewItems() {
  const data = useFetch("https://597440ea-7b01-4e0f-847c-6ed453d5004b.mock.pstmn.io/products2").data;
  // const data =  info.products1;
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
