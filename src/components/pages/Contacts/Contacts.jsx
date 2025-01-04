import React from "react";
import "./Contacts.scss";
import Container from "../../../Container/Container";

import PagesHero from "../../PagesHero/PagesHero";
import {  House, Percent, Phone } from "lucide-react";
import OurStores from "../../Home/OurStores/OurStores";

import StoresImg1 from "../../../assets/img/contactsStoresImg1.png";
import StoresImg2 from "../../../assets/img/contactsStoresImg2.png";
import StoresImg3 from "../../../assets/img/contactsStoresImg3.png";
import StoresImg4 from "../../../assets/img/contactsStoresImg4.png";

export default function Contacts() {
  const contactArr = [
    {
      img: `${StoresImg1}`,
      homeAddress: "ул. Дорожная 10",
      telNumber: "+7 904 271 35 90",
    },
    {
      img: `${StoresImg2}`,
      homeAddress: "ул. Советская 87",
      telNumber: "+7 82140 91330",
    },
    {
      img: `${StoresImg3}`,
      homeAddress: "ул. Заводская 16",
      telNumber: "+7 82140 91101",
    },
    {
      img: `${StoresImg4}`,
      homeAddress: "ул. Рабочая 1",
      telNumber: "+7 82140 91300",
    },
  ];
  return (
    <section className="contacts">
      <Container>
        <PagesHero text="Контакты" />
        <h2 className="inner">Контакты</h2>
        <div className="contacts__box1">
          <h3 className="contacts__inners">
            <span>
              <House strokeWidth={0.5} absoluteStrokeWidth />
              Бухгалтерия, склад
            </span>{" "}
            <br />
            <a className="contacts__innerTels" href="tel:+7 82140 92619">
              +7 82140 92619
            </a>
          </h3>
          <h3 className="contacts__inners">
            <span>
              <Percent strokeWidth={0.5} absoluteStrokeWidth />
              Вопросы по системе лояльности
            </span>{" "}
            <br />
            <a className="contacts__innerTels" href="tel:+7 908 716 33 97">
              +7 908 716 33 97
            </a>
          </h3>
        </div>
        <OurStores>
          <div className="contacts__stores">
            {contactArr.map((item, index) => (
              <div key={`contactCarts` + index}>
                <div>
                  <img src={item.img} alt="" className="contacts__storeLogo" />
                </div>
                <p className="contacts__texts">
                  <House strokeWidth={0.5} absoluteStrokeWidth />
                  <span>{item.homeAddress}</span>
                </p>
                <p className="contacts__texts">
                  <Phone strokeWidth={0.5} absoluteStrokeWidth />
                  <a href={`href:${item.telNumber}`}>{item.telNumber}</a>
                </p>
              </div>
            ))}
          </div>
        </OurStores>
      </Container>
    </section>
  );
}
