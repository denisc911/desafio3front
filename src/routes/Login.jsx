import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../redux/auth/authSlice';
import '../../src/style/profile/login.css';
import { useNavigate } from 'react-router-dom';
import {notification} from 'antd'


const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	
	const { user, isError, isSuccess, message } = useSelector((state) => state.auth);
	useEffect(() => {
		if (isError) {
			notification.error({ message: 'Error', description: message });
		}
		if (isSuccess) {
			notification.success({ message: 'Success', description: message });
			setTimeout(() => {
				navigate('/');
			}, 500);
		}
		dispatch(reset());
	}, [isError, isSuccess, message]);

	const [formData, setFormData] = useState({ email: '', password: '' });
	const { email, password } = formData;
	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log('Email:', formData.email);
		dispatch(login(formData));
	};

	return (
		<>
			<section className="login-container">
				<h1>Te damos la bienvenida</h1>
				<p>
					Para acceder a todas las funcionalidades, por favor introduce tu email
					y contraseña.
				</p>

				<form onSubmit={onSubmit}>
					<input
						type="email"
						name="email"
						placeholder="Email"
						value={user.email}
						onChange={onChange}
					/>

					<input
						type="password"
						name="password"
						placeholder="Contraseña"
						value={user.password}
						onChange={onChange}
					/>
					<p>
						<button type="submit">Login</button>
					</p>
				</form>
			</section>
		</>
	);
};
export default Login;
