import React from 'react'
import './HomeHero.scss'
import Container from '../../../Container/Container'
import homeHeroImg from '../../../assets/img/homeHeroImg.png'

export default function HomeHero() {
    return (
        <section className='homeHero'>
            <Container>
                <div className="homeHero__general">
                    <img
                        src={homeHeroImg}
                        alt=""
                        className="homeHero__img"
                    />
                    <h2 className="homeHero__title">
                        Доставка бесплатно от 1000 ₽
                    </h2>
                </div>
            </Container>
        </section>
    )
}
