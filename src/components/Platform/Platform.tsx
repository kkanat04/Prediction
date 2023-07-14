import './Platform.css';

import first from '../../assets/images/presentOne.png';
import third from '../../assets/images/presentThree.png';
import second from '../../assets/images/presentTwo.png';

const Platform = () => {
	return (
		<section id={'platform'}>
			<div className="container container-mini">
				<h2>A Platform that Works for You</h2>
				<p className="reuse-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.</p>
				<div className="row">
					<div className="col-4">
						<div className="platform__box">
							<img src={first} alt="present"/>
							<p>2.3 million users</p>
							<p>Description</p>
						</div>
					</div>
					<div className="col-4">
						<div className="platform__box">
							<img src={second} alt="present"/>
							<p>2.3 million users</p>
							<p>Description</p>
						</div>
					</div>
					<div className="col-4">
						<div className="platform__box">
							<img src={third} alt="present"/>
							<p>2.3 million users</p>
							<p>Description</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Platform;
