import React from 'react';
import photo from '../assets/photo/PP.webp'; // Importation de l'image
import '../styles/Pages/HomeStyle.css';

export default function HomePage() {
    return (
        <>
            <div className="titleContainer">
                <img src={photo} alt="Votre description" className="titleImg" />
                <div className="titleHome">
                    <h1>Je suis Dymitri Thomas,</h1>
                    <p>Intégrateur Web.</p>
                </div>
            </div>
            <article className="aboutSection">
                <h2>À Propos :</h2>
                <p>
                    Je me présente je suis Dymitri passionné par le code depuis quelques années.
                    Après l'obtention de mon bac pro dans le domaine de l'exploitation des transports, j'ai passé le concours
                    de gendarme adjoint volontaire. Durant 6 ans j'ai donc servi au sein de la gendarmerie.<br />
                    D'abord en peloton de surveillance et d'intervention puis en peloton autoroute. Je finirai mon service au
                    grade de Maréchal des Logis.<br />
                    <br />
                    Après cela, j'ai pris la décision de prendre une année sabbatique pour découvrir l'endroit d'où vient ma femme, l'Île de la Réunion.<br />
                    <br />
                    À notre retour, en plein COVID, je trouve un emploi en grande surface. Malheureusement j'aurais un accident de travail,
                    m'octroyant un status de travailleur handicapé. <br />
                    <br />
                    J'ai donc dû me réorienter et quoi de mieux que de tenter de vivre de sa passion. Je me suis donc inscrit à une formation
                    d'intégrateur web au sein du centre de formation à distance d'OpenClassRoom. Quelle joie de partir de zéro et construire un site n'est ce pas ?
                    HTML, CSS, JavaScript et surtout React sont devenus l'essence même de mon bonheur quotidien.
                </p>
            </article>
        </>
    );
}
