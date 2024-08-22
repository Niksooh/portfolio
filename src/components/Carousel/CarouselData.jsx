// src/components/CarouselData/CarouselData.jsx
import React from 'react';
import Carousel from '../Carousel/Carousel';
import '../../styles/Components/Carousel.css';
import imgKasa from '../../assets/photo/kasa.webp';
import imgNinaCarducci from '../../assets/photo/nina_carducci.webp';
import img724Event from '../../assets/photo/724events.webp';

export default function CarouselData() {
    const cards = [
        {
            id: "kasa",
            title: "Kasa - Agence immobilière",
            cover: imgKasa,
            description: "Création d'une application web de location immobilière",
            tool: "Outils : HTML5, CSS3, JavaScript et React",
        },
        {
            id: "nina_carducci",
            title: "Nina Carducci - Photographe",
            cover: imgNinaCarducci,
            description: "Optimisation du référencement d'un site de photographe",
            tool: "Outils : HTML5, CSS3, Lighthouse, Google Rich Snippet et Wave",
        },
        {
            id: "724events",
            title: "724Events - Agence d'organisation d'événements",
            cover: img724Event,
            description: "Débuggez le site d'une agence d'événementiel",
            tool: "Outils : HTML5, CSS3, JavaScript, React et Chrome DevTools",
        }
    ];

    const items = cards.map(card => (
        <div key={card.id} className="carousel_card">
            <h2 className="carousel_card_title">{card.title}</h2>
            <img src={card.cover} alt={card.title} className="carousel_card_img" />
            <p className="carousel_card_description">{card.description}</p>
        </div>
    ));

    const title = "Carousel des projets";

    return (
        <section>
            <Carousel items={items} title={title} />
        </section>
    );
}
