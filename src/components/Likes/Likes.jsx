import React from "react";
import "./Likes.scss";
import Container from "../../Container/Container";
import Filter from "./Filter/Filter";
import LikesBox from "./LikesBox/LikesBox";

export default function Likes() {
  return (
    <section className="likes">
      <Container>
        <p className="urls">
          <span>Главная</span> 
          <i className="fa-solid fa-chevron-right" />

          <span className="two">Избраное</span> 
        </p>
        <h2 className="inner">Избраное</h2>
        <div className="likes__general">
          <Filter />

          <LikesBox />
        </div>
      </Container>
    </section>
  );
}
