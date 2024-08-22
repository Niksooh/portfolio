// src/components/Carousel/Carousel.jsx
import { useState, useEffect, useCallback } from 'react';
import arrowRight from '../../assets/icons/arrow_right.png';
import arrowLeft from '../../assets/icons/arrow_left.png';
import '../../styles/Components/Carousel.css';

export default function Carousel({ items, title }) {
    const [index, setIndex] = useState(0);

    const leftClick = useCallback((e) => {
        e.preventDefault();
        setIndex(prevIndex => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    }, [items.length]);

    const rightClick = useCallback((e) => {
        e.preventDefault();
        setIndex(prevIndex => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    }, [items.length]);

    useEffect(() => {
        if (index >= items.length) {
            setIndex(0);
        }
    }, [items, index]);

    if (!items || items.length === 0) {
        console.log('Aucun élément à afficher');
        return null;
    }

    const shouldShowNavigation = items.length > 1;

    return (
        <figure className="carousel">
            <div className="carousel_content">
                {items[index]}
            </div>
            {shouldShowNavigation && (
                <NavigateCarousel
                    leftClick={leftClick}
                    rightClick={rightClick}
                    index={index + 1}
                    itemsLength={items.length}
                />
            )}
        </figure>
    );
}

function NavigateCarousel({ leftClick, rightClick, index, itemsLength }) {
    return (
        <div className="carousel_navigate">
            <button className="btn_carousel_left" onClick={leftClick}>
                <img className="img_arrow" src={arrowLeft} alt="Left Arrow" />
            </button>
            <span className="index_carousel">
                {index} / {itemsLength}
            </span>
            <button className="btn_carousel_right" onClick={rightClick}>
                <img className="img_arrow" src={arrowRight} alt="Right Arrow" />
            </button>
        </div>
    );
}