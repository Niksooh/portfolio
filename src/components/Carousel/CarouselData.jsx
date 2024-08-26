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
        },
        {
            id: "nina_carducci",
            title: "Nina Carducci - Photographe",
            cover: imgNinaCarducci,
        },
        {
            id: "724events",
            title: "724Events - Organisation d'événements",
            cover: img724Event,
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
