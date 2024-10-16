import '../../style/chart/FooterMenu.css';
import { Link } from 'react-router-dom';

const FooterMenu = () => {
	return (
		<nav className="footer-menu">
			<Link to="/">
				<div className="menu-item">
					<i className="fas fa-home"></i>
					<p>Home</p>
				</div>
			</Link>

			<Link to='/hucha'>
				<div className="menu-item">
					<i className="fa-solid fa-piggy-bank"></i>
					<p>Hucha</p>
				</div>
			</Link>

			<Link to='/profile'>
				<div className="menu-item">
					<i className="fas fa-user"></i>
					<p>Profile</p>
				</div>
			</Link>
		</nav>
	);
};

export default FooterMenu;
