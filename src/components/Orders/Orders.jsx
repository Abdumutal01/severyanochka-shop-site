import React, { useEffect, useState } from "react";
import "./Orders.scss";
import Container from "../../Container/Container";
import Cart from "../Cart/Cart";
import PagesHero from "../PagesHero/PagesHero";

export default function Orders() {
  const [calendar, setCalendar] = useState(false);
  const [orderArr, setOrderArr] = useState([]);
  const [order, setOrder] = useState([]);

  const today = new Date();
  const localDate = today.toLocaleDateString();

  useEffect(() => {
    const getOrder = JSON.parse(localStorage.getItem("orders")) || [];
    setOrderArr(getOrder);
  }, []);

  useEffect(() => {
    const ordersFlat = orderArr.flatMap((item) => item.orders || []);
    setOrder(ordersFlat);
  }, [orderArr]);

  useEffect(() => {
    const days = orderArr.map((item) => item.day);
    const todayMatch = days.some((day) => day?.date === localDate);
    if (todayMatch) {
      setCalendar(true);
    }
  }, [orderArr, localDate]);

  return (
    <section className="orders">
      <Container>
         <PagesHero text="Заказы" />
      

        <h2 className="inner">Заказы</h2>

        {orderArr.length > 0 ? (
          orderArr.map((item, index) => (
            <section key={index} className="orders__boxes">
              <div className="orders__hero">
                <div className="orders__dateBox">
                  <h3 className="orders__date">
                    {item.day?.date || "Дата не указана"}
                  </h3>
                  <h3 className="orders__time">
                    {item.day?.time || "Время не указано"}
                  </h3>
                  {calendar ? (
                    <button className="orders__btnThe2">Возврат</button>
                  ) : (
                    <button className="orders__btnThe1">В процессе</button>
                  )}
                </div>

                <div className="orders__priceBox">
                  <h3 className="orders__price">
                    {(item.totalPrice || 0).toFixed(2)} ₽
                  </h3>
                  <button className="orders__calBtn">
                    <i className="fa-regular fa-calendar" />
                    Когда доставить
                  </button>
                </div>
              </div>

              <div className="general">
                {item.orders.map((items) => (
                  <Cart things={items} key={items.id} />
                ))}
              </div>
            </section>
          ))
        ) : (
          <p>Заказы отсутствуют.</p>
        )}
      </Container>
    </section>
  );
}
