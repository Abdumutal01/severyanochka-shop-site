import React from "react";
import "../../App.scss";
import { Link } from "react-router";

export default function PagesHero({ text }) {
  return (
    <p className="urls">

        <Link className="link" to="/">Главная</Link>

      <i className="fa-solid fa-chevron-right" />

      <span className="two">{text}</span>
    </p>
  );
}
