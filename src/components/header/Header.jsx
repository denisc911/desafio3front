import logoDesktop from '../../assets/logo-Kutxabank.svg';
import { useState, useEffect } from 'react';
import logoMobile from '../../assets/simbolo-y-wordmark-vertical-negro.svg';
import '../../style/Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    
    // Estado local para el usuario
    const [user, setUser] = useState(null);

    // useEffect para actualizar el estado cuando cambie localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            setUser(null); // Si no hay usuario, asegurarse que el estado es null
        }
    }, []); // Solo se ejecuta al cargar el componente

    // Función para manejar el logout
    const onLogout = (e) => {
        e.preventDefault();
        // Eliminar el usuario de localStorage y actualizar el estado
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login'); // Redirigir a la página de login
    };

    // useEffect para observar cambios en localStorage (cuando el usuario inicia sesión desde otra parte)
    useEffect(() => {
        const intervalId = setInterval(() => {
            const storedUser = localStorage.getItem('user');
            if (storedUser && !user) {
                setUser(JSON.parse(storedUser));
            } else if (!storedUser && user) {
                setUser(null);
            }
        }, 1000); // Comprobación cada segundo

        return () => clearInterval(intervalId); // Limpiar intervalo al desmontar el componente
    }, [user]); // Ejecutar si el usuario cambia

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
