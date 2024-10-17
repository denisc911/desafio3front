// components/Header.js
import logoDesktop from '../../assets/logo-Kutxabank.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import logoMobile from '../../assets/simbolo-y-wordmark-vertical-negro.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';


const Header = () => {
	//Importantes
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	const onLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
		navigate('/login');
	};

	//
	const [searchTerm, setSearchTerm] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	const [logoSrc, setLogoSrc] = useState(logoDesktop);
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
			<div className="container d-flex align-items-center">
				<a className="navbar-brand" href="/">
					<img src={logoSrc} alt="Kutxabank Logo" />
				</a>
				{/* <button className="navbar-toggler" onClick={toggleMenu} aria-expanded={isOpen} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
				{user ? (
					<>
					<button onClick={onLogout}>Logout</button>
					</>
				) : (
					<Link to="/login">
						<button> Login </button>
					</Link>
				)}
				
                {/* <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
					<ul className="navbar-nav d-flex flex-row me-auto">
						{' '}
						{/* Элементы меню в одной строке */}
						
                        {/* <li className="nav-item">
							<a className="btn btn-outline-success" href="/login">
							</a>
						</li>
					</ul>
				</div> */}              
			</div>
		</nav>
	);
};

export default Header;
