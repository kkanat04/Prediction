import './Start.css';

import kanatik from '../../assets/images/kanatik.png';
import {useConnectWallet} from '../../hooks/useConnectWallet';

const Start = () => {
	const {connectWallet} = useConnectWallet();
	return (
		<section id="start">
			<div className="container-mini">
				<div className="row start__row">
					<div className="col-6">
						<div className="start__box start__box-2">
							<img className="start__kanatik" src={kanatik} alt="kanatik"/>
						</div>
					</div>
					<div className="col-6">
						<div className="start__box">
							<h3>Start in seconds. </h3>
							<p>Connect your crypto wallet to start using the app in seconds.</p>
							<div className="start__box-button">
								<button onClick={connectWallet}>Connect Wallet</button>
								<button>How It Works</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Start;
