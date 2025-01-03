import React from "react";
import "../../../App.scss";
import { Link } from "react-router";

export default function HomeTitle({ title, link }) {
  return (
    <div className="title-box">
      <h2 className="title">{title}</h2>
      <Link to={link} className="links">
        Все статьи{"  "}
        <i className="fa-solid fa-chevron-right" />
      </Link>
    </div>
  );
}
