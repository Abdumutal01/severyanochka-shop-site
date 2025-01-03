import React from "react";
import "./Articles.scss";
import HomeTitle from "../HomeTitle/HomeTitle";
import { articlesArr } from "./articlesArr";

export default function Articles() {
  return (
    <section className="articles">
      <HomeTitle title="Статьи" link="/" />
      <div className="articles__general">
        {articlesArr.map((item, index) => (
          <div key={index} className="articles__card">
            <img src={item.img} alt="" className="articles__img" />
            <div className="articles__data">
              <p className="articles__date">{item.date}</p>
              <h2 className="articles__title">{item.title}</h2>
              <p className="articles__text">{item.text}</p>
              <button className="articles__btn">Подробнее</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
