import './CoverFirst.css';

import eclipse from 'assets/images/elipse.svg';

import {useConnectWallet} from '../../../hooks/useConnectWallet';
import LetsPlayBtn from '../../LetsPlayBtn/LetsPlayBtn';

const CoverFirst = () => {
	const {connectWallet} = useConnectWallet();
	return (
		<div className="cover__first">
			<img src={eclipse} alt="eclipse" />
			<h1>Play for run.<br />Earn money.</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad.</p>
			<div className="cover__button-wrap">
				<LetsPlayBtn letsFunc={() => connectWallet()} />
				<button className="cover__button">How it works</button>
			</div>
		</div>
	);
};

export default CoverFirst;
