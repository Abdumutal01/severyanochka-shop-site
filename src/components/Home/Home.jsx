import React from "react";
import "./Home.scss";
import HomeHero from "./HomeHero/HomeHero";
import Stock from "./Stock/Stock";
import Container from "../../Container/Container";
import NewItems from "./NewItems/NewItems";

export default function Home() {
  return (
    <section className="home">
      <HomeHero />
      <Container>
        <Stock />
        <NewItems />
      </Container>
    </section>
  );
}
