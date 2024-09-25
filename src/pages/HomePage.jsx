import React from 'react';
import photo from '../assets/photo/PP.webp';
import '../styles/Pages/HomeStyle.css';
import CarouselData from '../components/Carousel/CarouselData';

export default function HomePage() {
    return (
        <>
            <div className="titleContainer">
                <img src={photo} alt="Votre description" className="titleImg" />
                <div className="titleHome">
                    <h1 className='H1home'>Je suis Dymitri THOMAS,</h1>
                    <p>Intégrateur Web.</p>
                </div>
            </div>
            <article className="aboutSection">
                <h2 className='H2Home'>À Propos :</h2>
                <p>
                    Je me présente je suis Dymitri. Suite à un accident de travail,
                    j'ai découvert le codage d'abord en lua pour des serveurs de jeu vidéo comme GTA V
                    puis l'HTML et le CSS3 ont attiré mon attention.
                    Grâce à ma mésaventure de santé,
                    j'ai donc dû me réorienter et quoi de mieux que de tenter de vivre de sa nouvelle passion. Je me suis donc inscrit à une formation
                    d'intégrateur web au sein du centre de formation à distance d'OpenClassRoom.
                    <br />
                    <br />
                    Quelle joie de partir de zéro et construire un site n'est ce pas ?
                    HTML, CSS, JavaScript et surtout React sont devenus l'essence même de mon bonheur quotidien.
                    Mon objectif ? prendre des idées qui vous passent par la tête et les transformer en un projet performant et dynamique !
                </p>
            </article>
            <section>
                <h1 className='projet'>Mes derniers projets</h1>
                <CarouselData />
            </section>
        </>
    );
}
