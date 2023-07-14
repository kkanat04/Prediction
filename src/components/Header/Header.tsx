import './Burger/Burger.css';
import './Header.css';

import { useConnectWallet } from 'hooks/useConnectWallet';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import earth from '../../assets/images/earth.svg';
import icon from '../../assets/images/logo.svg';
import Burger from './Burger/Burger';

const Header = () => {
	const [isActive, setActive] = useState<boolean>(false);
	const {connectWallet} = useConnectWallet();

	const handleToggle = useCallback(() => {
		setActive(!isActive);
	}, [isActive]);

	useEffect(() => {
		isActive ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset');
	}, [isActive]);


	return (
		<header>
			<div className="container">
				<div className="header__nav">
					<div className="header__nav-first">
						<div className="header__nav-img__wrap header__web">
							<img src={icon} alt="" />
							<p>MagicSwap</p>
						</div>
						<ul className={`nav ${isActive ? 'show-nav' : ''}`}>
							<div className="header__nav-img__wrap header__mobile">
								<img src={icon} alt="" />
								<p>MagicSwap</p>
							</div>
							<li>
								<Link to={'/'}>Win</Link>
							</li>
							<li>
								<Link to={'/'}>About Us</Link>
							</li>
							<li>
								<Link to={'/'}>Support</Link>
							</li>
						</ul>
						<Burger isActive={isActive} handleToggle={handleToggle} />
					</div>
					<div className="header__nav-second">
						<div>
							<img src={earth} alt="" />
							<p>EN</p>
						</div>
						<button onClick={connectWallet}>Connect Wallet</button>
					</div>
				</div>
			</div>
			<div onClick={handleToggle} className={isActive ? 'backdrop' : 'disappear'}></div>
		</header>
	);
};

export default Header;
