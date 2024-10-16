// components/FooterMenu.js
import '../style/chart/FooterMenu.css';
import { Link } from 'react-router-dom';

const FooterMenu = () => {
	return (
		<div className="footer-menu">
			<Link to="/">
				<div className="menu-item">
					<i className="fas fa-home"></i>
					<p>Resumen</p>
				</div>
			</Link>

			<Link to='/settings'>
				<div className="menu-item">
					<i className="fa-solid fa-piggy-bank"></i>
					<p>Mi hucha</p>
				</div>
			</Link>

			<Link to='/profile'>
				<div className="menu-item">
					<i className="fas fa-user"></i>
					<p>Mi Perfil</p>
				</div>
			</Link>

			{/* <div className="menu-item">
        <i className="fas fa-ellipsis-v"></i>
        <p>Más</p>
      </div> */}
		</div>
	);
};

export default FooterMenu;
