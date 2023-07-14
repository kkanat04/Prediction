import './Sidebar.css';

import goblet from 'assets/images/gablet.svg';
import logo from 'assets/images/logo.svg';
import present from 'assets/images/present.png';
import rocket from 'assets/images/rocket.svg';
import settings from 'assets/images/setting-2.svg';
import user from 'assets/images/user-octagon.svg';
import {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import { SidebarContext } from 'utils/SidebarContext';

import Theme from '../Theme/Theme';


const Sidebar = () => {

	const {toggle, toggleFunc} = useContext(SidebarContext);

	const bubbling = (e: { stopPropagation: () => void; }) => {
		e.stopPropagation();
	};

	const navActive:any = (({isActive}: any) => (isActive ?'aside__active': ''));

	return (
		<aside onClick={toggleFunc} className={toggle ? 'aside__grow' : ''}>
			<NavLink
				className={navActive}
				onClick={bubbling}
				to="/">
				<div className="aside__logo-wrap">
					<img className="aside__logo" src={logo} alt="logo"/>
					<p>MagicSwap</p>
				</div>
			</NavLink>
			<div className="aside__wrap">
				<NavLink
					className={navActive}
					onClick={bubbling}
					to="/"
				>
					<img src={rocket} alt="nav"/>
					<p>Prediction</p>
				</NavLink>
				<NavLink
					className={navActive}
					onClick={bubbling}
					to="/leaderboard"
				>
					<img src={goblet} alt="nav"/>
					<p>Leaderboard</p>
				</NavLink>
				<NavLink
					className={navActive}
					onClick={bubbling}
					to="/profile"
				>
					<img src={user} alt="nav"/>
					<p>My&nbsp;profile</p>
				</NavLink>
				<NavLink
					className={navActive}
					onClick={bubbling}
					to="/settings"
				>
					<img src={settings} alt="nav"/>
					<p>Settings</p>
				</NavLink>
			</div>
			<div
				className="aside__present"
				onClick={bubbling}
			>
				<img src={present} alt="present"/>
				<p>More ways to earn!</p>
				<p>Join the referral program. Invite friends to earn.</p>
			</div>
	    <Theme bubbling={bubbling}/>
		</aside>
	);
};

export default Sidebar;
