import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../redux/auth/authSlice';
import '../../src/style/profile/login.css';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const { isError, isSuccess, message } = useSelector((state) => state.auth);
    
    useEffect(() => {
        if (isError) {
            notification.error({ message: 'Error', description: message });
        }
        if (isSuccess) {
            notification.success({ message: 'Success', description: message });
            /* setTimeout(() => {
                navigate('/');
            }, 500); */
        }
        dispatch(reset());
    }, [isError, isSuccess, message]);

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
        console.log('DNI:', formData.dni);
        dispatch(login(formData));
        setTimeout(() => {
            navigate('/')
        }, 1000)
    };

    return (
        <>
            <section className="login-container">
                <h1>Te damos la bienvenida</h1>
                <p>
                    Para acceder a todas las funcionalidades, por favor introduce tu DNI
                    y contraseña.
                </p>

                <form onSubmit={onSubmit}>
                    <input
                        type= "text" 
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
        </>
    );
};
export default Login;
