import React from "react";
import "./Likes.scss";
import Container from "../../Container/Container";
import Filter from "./Filter/Filter";
import LikesBox from "./LikesBox/LikesBox";

import PagesHero from "../PagesHero/PagesHero";
import { Link } from "react-router";

export default function Likes() {
  const likesStore = JSON.parse(localStorage.getItem("likes"));
  return (
    <section className="likes">
      <Container>
        <PagesHero text="Избраное" />
        <h2 className="inner">Избраное</h2>

        {likesStore.length !== 0 ? (
          <div className="likes__general">
            <Filter />

            <LikesBox />
          </div>
        ) : (
          <div className="likes__empty">
            <h2 className="likes__empty-title">У тебя нет Избраное</h2>
            <Link className="likes__empty-link" to="/">пойти в Главная</Link>
          </div>
        )}
      </Container>
    </section>
  );
}
