import React from "react";
import "./Likes.scss";
import Container from "../../Container/Container";
import Filter from "./Filter/Filter";
import LikesBox from "./LikesBox/LikesBox";

import PagesHero from "../PagesHero/PagesHero";

export default function Likes() {
  return (
    <section className="likes">
      <Container>
     <PagesHero text='Избраное' />
        <h2 className="inner">Избраное</h2>
        <div className="likes__general">
          <Filter />

          <LikesBox />
        </div>
      </Container>
    </section>
  );
}
