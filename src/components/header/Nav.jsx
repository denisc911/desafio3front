import '../../style/chart/FooterMenu.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FooterMenu = () => {
	const { user } = useSelector((state) => state.auth);

	return (
		<nav className="footer-menu">
			<Link to="/">
				<div className="menu-item">
					<i className="fas fa-home"></i>
					<p>Home</p>
				</div>
			</Link>

			<Link to="/hucha">
				<div className="menu-item">
					<i className="fa-solid fa-piggy-bank"></i>
					<p>Hucha</p>
				</div>
			</Link>

			{user ? (
				<>
					<Link to="/profile">
						<div className="menu-item">
							<i className="fas fa-user"></i>
							<p> Mi perfil | {user.name} </p>
						</div>
					</Link>
				</>
			) : (
				<>
					<Link to="/login">
						<div className="menu-item">
							<i className="fas fa-user"></i>
							<p>Mi perfil</p>
						</div>
					</Link>
				</>
			)}
		</nav>
	);
};

export default FooterMenu;
