import React from "react";
import "./Home.scss";
import HomeHero from "./HomeHero/HomeHero";
import Stock from "./Stock/Stock";
import Container from "../../Container/Container";
import NewItems from "./NewItems/NewItems";
import Purchased from "./Purchased/Purchased";
import Special from "./Special/Special";
import OurStores from "./OurStores/OurStores";
import { Article } from "@mui/icons-material";
import Articles from "./Articles/Articles";


export default function Home() {
  return (
    <section className="home">
      <HomeHero />
      <Container>
        <Stock />
        <NewItems />
        {/* <Purchased  /> */}
        <Special />
        <OurStores />
        <Articles />
      </Container>
    </section>
  );
}
