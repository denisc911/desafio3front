import logoDesktop from '../../assets/logo-Kutxabank.svg';
import { useState, useEffect } from 'react';
import logoMobile from '../../assets/simbolo-y-wordmark-vertical-negro.svg';
import '../../style/Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    
    // Estado local para el usuario
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Obtener el usuario desde localStorage cuando se monta el componente
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []); // Se ejecuta solo una vez al montar el componente

    const onLogout = (e) => {
        e.preventDefault();
        // Eliminar el usuario de localStorage y actualizar el estado
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login'); // Redirigir a la página de login
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container d-flex align-items-center">
                <a className="navbar-brand" href="/">
                    <img src={logoMobile} alt="Kutxabank Logo" />
                </a>

                {user ? (
                    <div className="d-flex align-items-center">
                        <span className="user-name">Hola, {user.nombre}</span>
                        <button onClick={onLogout}>Logout</button>
                    </div>
                ) : (
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Header;
