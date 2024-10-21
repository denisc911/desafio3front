import { useState } from 'react';
import { useDispatch } from 'react-redux';
/* import { register } from '../redux/auth/authSlice'; */
//import { notification } from 'antd';

const Register = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		username: '',
		email: '',
		password: '',
		password2: '',
	});
	const { firstName, username, email, password, password2 } = formData;

	const dispatch = useDispatch();

	const onChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (password !== password2) {
			return notification.error({
				message: 'Error',
				description: 'Passwords does not match',
			});
		} else {
			notification.success({
				message: 'Success',
				description: 'User registered!',
			});
			return dispatch(register(formData));
		}
    }

		return (
			<form onSubmit={onSubmit}>
                <p>Nombre:</p>
				<input
					type="text"
					name="firstName"
					value={firstName}
					onChange={onChange}
				/>
                <p>Nombre de Usuario:</p>
				<input
					type="text"
					name="username"
					value={username}
					onChange={onChange}
				/>
                <p>Email:</p>
				<input type="email" name="email" value={email} onChange={onChange} />
				
                <p>Contraseña:</p>
                <input
					type="password"
					name="password"
					value={password}
					onChange={onChange}
				/>
                <p>Repite tu contraseña: </p>
				<input
					type="password"
					name="password2"
					value={password2}
					onChange={onChange}
				/>
				<button type="submit">Register</button>
			</form>
		);
	};

export default Register;
