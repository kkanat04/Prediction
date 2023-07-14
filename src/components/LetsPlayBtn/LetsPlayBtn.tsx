import './LetsPlayBtn.css';

import arrow from '../../assets/images/coverArrow.svg';

type Props = {
	letsFunc: () => void
}

const LetsPlayBtn = ({letsFunc}:Props) => {
	return (
		<div className="letsPlayHead">
			<button
				className="letsPlayBtn"
				onClick={letsFunc}
			>
				<p>Let’s play</p>
				<div><img src={arrow} alt="arrow"/></div>
			</button>
		</div>
	);

};
export default LetsPlayBtn;
