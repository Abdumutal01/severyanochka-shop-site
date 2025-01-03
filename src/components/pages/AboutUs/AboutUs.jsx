import React from "react";
import "./AboutUs.scss";
import Container from "../../../Container/Container";
import PagesHero from "../../PagesHero/PagesHero";
import useFetch from "../../../useFetch";
import aboutUsImg from "../../../assets/img/aboutUsImg.png";
import checkImg from "../../../assets/img/aboutUsCheckImg.png";
import smallImg from '../../../assets/img/aboutUsSmallImg.png'


export default function AboutUs() {
  const test = useFetch("http://127.0.0.1:5500/data/data.json");

  console.log(test.data);

  const aboutUsArr = [
    {
      text: "Мы занимаемся розничной торговлей",
      title: "Более 20 лет.",
    },
    {
      text: "Основная миссия компании",
      title: "Максимальное качество товаров и услуг по доступной цене.",
    },
    {
      text: "Отличительная черта нашей сети",
      title:
        "Здоровая и полезная продукция местного производства внаших магазинах.",
    },
  ];

  return (
    <section className="aboutUs">
      <Container>
        <PagesHero text="О компании" />
      </Container>

      <div className="aboutUs__hero">
        <Container>
          <div className="aboutUs__box">
            <div className="aboutUs__data">
              <h2 className="inner">О компании</h2>
              <p className="aboutUs__text">
                Мы непрерывно развиваемся и работаем над совершенствованием
                сервиса, заботимся о наших клиентах, стремимся к лучшему
                будущему.
              </p>
            </div>
            <div className="aboutUs__imgBox">
              <img src={aboutUsImg} alt="" className="aboutUs__img" />
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="aboutUs__general">
          {aboutUsArr.map((item, index) => (
            <div className="aboutUs__carts" key={`aboutUsCart` + index}>
              <div>
              <img src={checkImg} alt="" className="aboutUs__checkImg" />
              </div>
              <div className="aboutUs__textBox">
                <p className="aboutUs__texts">{item.text}</p>
                <h3 className="aboutUs__inner">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="aboutUs__smallBox">
            <img src={smallImg} alt="" className="aboutUs__smallImg" />
        </div>
      </Container>
    </section>
  );
}
