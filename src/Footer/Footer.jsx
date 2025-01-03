import React from "react";
import "./Footer.scss";
import { Link } from "react-router";
import footerLogo from "../assets/img/footerLogo.png";
import Container from "../Container/Container";
import footerIconImg1 from "../assets/img/footerIconImg1.png";
import footerIconImg2 from "../assets/img/footerIconImg2.png";
import footerIconImg3 from "../assets/img/footerIconImg3.png";
import footerIconImg4 from "../assets/img/footerIconImg4.png";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <nav className="footer__nav">
          
          <div className="footer__box1">
            <div className="footer__logoBox">
              <Link to="/">
                <img src={footerLogo} alt="" className="footer__logoImg" />
              </Link>
            </div>

            <div className="footer__listBox">
              <ul className="footer__list">
                <li className="footer__items">
                  <Link className="footer__links" to="/about">
                    О компании
                  </Link>
                </li>
                <li className="footer__items">
                  <Link className="footer__links" to="/contacts">
                    Контакты
                  </Link>
                </li>
                <li className="footer__items">
                  <Link className="footer__links" to="/vacancies">
                    Вакансии
                  </Link>
                </li>
              </ul>

              <ul className="footer__list">
                <li className="footer__items">
                  <Link className="footer__links" to="/articles">
                    Статьи
                  </Link>
                </li>
                <li className="footer__items">
                  <a href="#" className="footer__links">
                    Политика обработки персональных данных
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__endDiv">
            <div className="footer__logoBox2">
              <Link to="/">
                <img src={footerLogo} alt="" className="footer__logoImg" />
              </Link>
            </div>
            <div className="footer__box2">
              <div className="footer__iconBox">
                <li>
                  <a
                    href="https://www.instagram.com/"
                    className="footer__iconLink"
                  >
                    <img
                      src={footerIconImg1}
                      alt=""
                      className="footer__iconImg"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://vk.com/oooseveranochka"
                    className="footer__iconLink"
                  >
                    <img
                      src={footerIconImg2}
                      alt=""
                      className="footer__iconImg"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    className="footer__iconLink"
                  >
                    <img
                      src={footerIconImg3}
                      alt=""
                      className="footer__iconImg"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://m.ok.ru/" className="footer__iconLink">
                    <img
                      src={footerIconImg4}
                      alt=""
                      className="footer__iconImg"
                    />
                  </a>
                </li>
              </div>
              <div className="footer__telBox">
                <a className="footer__tel" href="tel:+8 800 777 33 33">
                  <i className="fa-solid fa-phone" />
                  <span> 8 800 777 33 33</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </footer>
  );
}
