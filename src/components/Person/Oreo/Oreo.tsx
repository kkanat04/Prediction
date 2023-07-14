import './Oreo.css';

import oreo from 'assets/images/oreo.png';

import LetsPlayBtn from '../../LetsPlayBtn/LetsPlayBtn';

const Oreo = () => {
	return (
		<div className="oreo">
			<div className="oreo__wrap">
				<div className="oreo__wrap-box">
					<p>Win $100 000</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. </p>
					<LetsPlayBtn letsFunc={()=>alert('Doesnt have func')}/>
				</div>
				<img className="oreo__bg" src={oreo} alt="oreo"/>
			</div>
		</div>
	);
};

export default Oreo;
