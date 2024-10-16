import '../../style/chart/FooterMenu.css';
import { Link } from 'react-router-dom';

export default function Nav () {
	return (
		<nav className="footer-menu">
			<Link to="/">
				<div className="menu-item">
					<picture>
						<i className="fas fa-home"></i>
					</picture>
					<p>Home</p>
				</div>
			</Link>

			<Link to='/hucha'>
				<div className="menu-item">
					<picture>
						<i className="fa-solid fa-piggy-bank"></i>
					</picture>
					<p>Hucha</p>
				</div>
			</Link>

			<Link to='/profile'>
				<div className="menu-item">
					<picture>
						<i className="fas fa-user"></i>
					</picture>
					<p>Profile</p>
				</div>
			</Link>
		</nav>
	);
};
