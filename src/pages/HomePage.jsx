import React from 'react';
import photo from '../assets/photo/PP.webp'; // Importation de l'image

export default function HomePage() {
    return (
        <section className='title_container'>
            <img src={photo} alt="Photo de Dymitri Thomas" />
            <div className='title_home'>
                <h1>Je suis Dymitri Thomas,</h1>
                <h2>Intégrateur Web.</h2>
            </div>
        </section>

    );
}
