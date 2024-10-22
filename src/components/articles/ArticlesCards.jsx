import React from 'react';
import '../../style/articles/ArticlesCards.css'; // Importamos el archivo CSS

const ArticlesCards = () => {
    // Simulación de artículos de interés con título, imagen de fondo y enlace
    const articles = [
        {
            title: 'Cómo crear un presupuesto personal',
            image: 'https://images.pexels.com/photos/6963030/pexels-photo-6963030.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&dpr=1',
            link: '/articulo/presupuesto-personal'
        },
        {
            title: 'Consejos para aumentar tus ahorros',
            image: 'https://images.pexels.com/photos/4968639/pexels-photo-4968639.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&dpr=1',
            link: '/articulo/consejos-ahorros'
        },
        {
            title: 'Guía básica de inversiones',
            image: 'https://images.pexels.com/photos/7567236/pexels-photo-7567236.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&dpr=1',
            link: '/articulo/inversiones-basicas'
        },
        {
            title: 'Cómo ahorrar para tu jubilación',
            image: 'https://images.pexels.com/photos/5717755/pexels-photo-5717755.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&dpr=1',
            link: '/articulo/ahorrar-jubilacion'
        },
        {
            title: 'Planificación financiera a largo plazo',
            image: 'https://images.pexels.com/photos/7010128/pexels-photo-7010128.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&dpr=1',
            link: '/articulo/planificacion-financiera'
        }
    ];

    return (
        <div className="cards-container">
            <h3>Te puede interesar: </h3>
            {articles.map((article, index) => (
                <a key={index} href={article.link} className="card">
                    <div
                        className="card-background"
                        style={{ backgroundImage: `url(${article.image})` }}
                    >
                        <div className="card-content">
                            <h3>{article.title}</h3>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default ArticlesCards;
