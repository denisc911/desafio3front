// components/Header.js
import logoDesktop from '../assets/logo-Kutxabank.svg';  // Import the logo
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import logoMobile from '../assets/simbolo-y-wordmark-vertical-negro.svg'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Header.css'; // Убедитесь, что вы импортируете свои стили

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false); // Состояние для гамбургер-меню
    const [logoSrc, setLogoSrc] = useState(logoDesktop); // Изначально используем логотип для десктопа

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(`Searching for: ${searchTerm}`);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setLogoSrc(window.innerWidth <= 768 ? logoMobile : logoDesktop);
            if (window.innerWidth > 768) {
                setIsOpen(false); // Закрываем меню при переключении на десктоп
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Инициализация состояния при первом рендере

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container d-flex align-items-center"> {/* Выравнивание элементов по центру */}
                <a className="navbar-brand" href="/">
                    <img src={logoSrc} alt="Kutxabank Logo" />
                </a>

                {/* Кнопка для гамбургер-меню */}
                <button className="navbar-toggler" onClick={toggleMenu} aria-expanded={isOpen} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Меню навигации */}
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav d-flex flex-row me-auto"> {/* Элементы меню в одной строке */}
                        <li className="nav-item">
                            <a className="nav-link" href="#web">Erakundearen webgunea</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#oficinas">Bulegoak eta kutxazainak</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#ayuda">Laguntza</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#castellano">Castellano</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#english">English</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#cat-val">Cat/Val</a>
                        </li>
                    </ul>

                    {/* Поисковая строка */}
                    <form className="d-flex" onSubmit={handleSearch}>
                        <input
                            type="search"
                            className="form-control me-2"
                            placeholder="Bilatu" // Поисковая строка
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;