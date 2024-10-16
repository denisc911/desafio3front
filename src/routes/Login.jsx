import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/authSlice'

const Login = () => {
	const [formData, setFormData] = useState({ email: '', password: '' });
	const { email, password } = formData;
	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

    const dispatch = useDispatch()

	const onSubmit = (e) => {
		e.preventDefault();
		console.log('formData', formData);
        dispatch(login(formData))
	};

	return (
		<form onSubmit={onSubmit}>
            <p>Email: </p>
			<input type="email" name="email" value={email} onChange={onChange} />
			
            <p>Contraseña: </p>
            <input
				type="password"
				name="password"
				value={password}
				onChange={onChange}
			/>
            <p> <button className="btn btn-outline-success" type="submit">Login</button> </p>
			
		</form>
	);

};
export default Login;
