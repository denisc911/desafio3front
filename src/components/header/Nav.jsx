import style from '../../style/menu/Nav.module.css'
import { Link } from 'react-router-dom';

export default function Nav () {
	return (
		<nav className={style.menu}>
			<Link className={style.link} to="/">
				<div className={style.menu_item}>
					<picture>
						<img src="/icon-home.svg" alt="piggy-bank" />
					</picture>
					<p>Home</p>
				</div>
			</Link>

			<Link className={style.link} to='/hucha'>
				<div className={style.menu_item}>
					<picture>
						<img src="/piggy-bank-svgrepo-com.svg" alt="piggy-bank" />
					</picture>
					<p>Hucha</p>
				</div>
			</Link>

			<Link className={style.link} to='/profile'>
				<div className={style.menu_item}>
					<picture>
						<img src="/profile.svg" alt="piggy-bank" />
					</picture>
					<p>Profile</p>
				</div>
			</Link>
		</nav>
	);
};
