import React from "react";
import "../Special.scss";

export default function SpecialBox({ bgImg, title, text, img }) {
  return (
    <div className="special__box" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="special__data">
        <h3 className="special__title">{title}</h3>
        <p className="special__text">{text}</p>
      </div>
      <img src={img} alt="" className="special__img" />
    </div>
  );
}
