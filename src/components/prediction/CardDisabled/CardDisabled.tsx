import './CardDisabled.css';

import disabledIcon from 'assets/images/disabledIcon.svg';
import lock from 'assets/images/lock.png';

const CardDisabled = () => {
	return (
		<section id="cardDisabled" className="main__card">
			<div className="main__header">
				<div>
					<img src={disabledIcon} alt="disabledIcon"/>
					<p>Later</p>
				</div>
				<div className={'cardDisabled__head_timer'}>
					<div>01</div>
					<p>:</p>
					<div>20</div>
				</div>
			</div>
			<div className="main__main cardDisabled__main">
				<img src={lock} alt="lock"/>
			</div>
		</section>
	);
};

export default CardDisabled;
