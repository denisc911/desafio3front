import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import '../../src/style/profile/login.css';

const Login = () => {
    const navigate = useNavigate();

    // Estado local con usuarios ficticios
    const predefinedUsers = [
        { dni: '12345678A', contraseña: '123', nombre: 'Juan' },
        { dni: '12345678B', contraseña: '123', nombre: 'Ana' },
        { dni: '12345678C', contraseña: '123', nombre: 'Luis' },
        { dni: '12345678D', contraseña: '123', nombre: 'Marta' },
        { dni: '12345678E', contraseña: '123', nombre: 'Carlos' }
    ];

    const [formData, setFormData] = useState({ dni: '', contraseña: '' });
    const { dni, contraseña } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
    
        const loggedUser = predefinedUsers.find(
            (user) => user.dni === dni && user.contraseña === contraseña
        );
    
        if (loggedUser) {
            // Guarda el usuario en localStorage
            localStorage.setItem('user', JSON.stringify(loggedUser));
            notification.success({ message: 'Login exitoso', description: `Bienvenido, ${loggedUser.nombre}` });
            
            // Redirige después de un tiempo para que el componente Header tenga tiempo de actualizarse
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } else {
            notification.error({ message: 'Error', description: 'DNI o contraseña incorrectos' });
        }
    };
    

    return (
        <section className="login-container">
            <h1>Te damos la bienvenida</h1>
            <p>Para acceder a todas las funcionalidades, por favor introduce tu DNI y contraseña.</p>

            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="dni"
                    placeholder="DNI"
                    value={dni}
                    onChange={onChange}
                />

                <input
                    type="password"
                    name="contraseña"
                    placeholder="Contraseña"
                    value={contraseña}
                    onChange={onChange}
                />
                <p>
                    <button type="submit">Acceder</button>
                </p>
            </form>
        </section>
    );
};

export default Login;
