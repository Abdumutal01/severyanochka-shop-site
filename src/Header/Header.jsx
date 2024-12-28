import React, { useState } from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router";

import headerLogoImg from "../assets/img/headerLogo.png";
import headerLogoImg2 from "../assets/img/headerLogo2.png";
import HeaderForm from "./HeaderForm/HeaderForm";
import HeaderBtns from "./HeaderBtns/HeaderBtns";
import HeaderUser from "./HeaderUser/HeaderUser";
import Container from "../Container/Container";

import { headerArreys } from "./headerArreys/headerArreys";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHendler = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <Container>
        <div className="header__general">
          <div className="header__logoBox">
            <Link className="header__logo-link" to="/">
              <img src={headerLogoImg} alt="" className="header__logo-img" />
              <img src={headerLogoImg2} alt="" className="header__logo-img2" />
            </Link>
          </div>
          <button className="header__btnKatalogiya" onClick={toggleHendler}>
            <i className="fa-solid fa-bars" />

            <span> Каталог</span>
          </button>
          <HeaderForm />

          <div className="box">
            <HeaderBtns />
            <HeaderUser />
          </div>
        </div>

        <div
          className={`header__catalog ${isOpen ? "header__catalog--open" : ""}`}
        >
          <ul className="header__catalog-list">
            {headerArreys.item1.map((item, i) => (
              <li key={i} className="header__catalog-item">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  {item.inner}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="header__catalog-list">
            {headerArreys.item2.map((item, i) => (
              <li key={i} className="header__catalog-item">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  {item.inner}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="header__catalog-list">
            {headerArreys.item3.map((item, i) => (
              <li key={i} className="header__catalog-item">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  {item.inner}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="header__catalog-list">
            {headerArreys.item4.map((item, i) => (
              <li key={i} className="header__catalog-item">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  {item.inner}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="mobila">
          <div className="mobila__general">
            <button className="mobila__btnKatalogiya" onClick={toggleHendler}>
              <i className="fa-solid fa-bars" />
              <br />
              <p> Каталог</p>
            </button>
            <HeaderBtns />
            <HeaderUser />
          </div>
        </div>
      </Container>
    </header>
  );
}
