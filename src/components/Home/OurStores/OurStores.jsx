import React from "react";
import "./OurStores.scss";

export default function OurStores({ children }) {
  return (
    <section className="ourStores">
      <h2 className="title">Наши магазины</h2>
      <nav className="ourStores__nav">
        <button className="ourStores__btns">п.Щельяюр</button>
        <button className="ourStores__btns">д.Вертеп</button>
        <button className="ourStores__btns">с.Краснобор</button>
        <button className="ourStores__btns">д.Диюр</button>
      </nav>
      {children ? <div>{children}</div> : null}
      <div className="ourStores__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
          width="100%"
          height="100%"
          frameborder="0"
          style={{ border: "0" }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </section>
  );
}
