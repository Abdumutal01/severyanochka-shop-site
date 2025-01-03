import React, { useEffect, useState } from "react";
import "./Purchased.scss";
import Cart from "../../Cart/Cart";

import HomeTitle from "../HomeTitle/HomeTitle";
import { orders } from "../../../store/shop-slice";

function Purchased() {
  const [data, setData] = useState([]);
  const endOrder = orders;

  useEffect(() => {
    if (endOrder.length === 0) {
      return data;
    } else {
      setData(...endOrder);
    }
    data.map((item) => (item.quantity = 0));
  }, [endOrder, data]);
  console.log(data);

  return data.length !== 0 ? (
    <section className="purchased">
      <HomeTitle title="Покупали раньше" link="/" />

      <div className="general">
        {data.map((item) => (
          <Cart key={item.id} things={item} />
        ))}
      </div>
    </section>
  ) : null;
}

export default Purchased;
