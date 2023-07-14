import './Theme.css';
import '../Sidebar/Sidebar.css';

import moon from 'assets/images/moon.svg';
import sun from 'assets/images/sun.svg';


const Theme = ({bubbling,check}:any) => {
	return (
		<div onClick={bubbling} className="aside__day">
			<div className="aside__day-active">
				<img src={sun} alt="sun"/>
				<p>Light</p>
			</div>
			<div>
				<img src={moon} alt="moon"/>
				<p>Dark</p>
			</div>
		</div>
	);
};

export default Theme;
