import './Pay.css';

import eight from '../../assets/images/eigth.svg';
import fifth from '../../assets/images/fifth.svg';
import first from '../../assets/images/first.svg';
import fourth from '../../assets/images/fourth.svg';
import ninth from '../../assets/images/ninth.svg';
import second from '../../assets/images/second.svg';
import seventh from '../../assets/images/seventh.svg';
import sixth from '../../assets/images/sixth.svg';
import third from '../../assets/images/third.svg';

const Pay = () => {
	return (
		<section id="pay">
			<div className="pay__first">
				<img src={first} alt="icon"/>
				<img src={second} alt="icon"/>
				<img src={third} alt="icon"/>
				<img src={fourth} alt="icon"/>
				<img src={fifth} alt="icon"/>
			</div>
			<div className="pay__second">
				<img src={sixth} alt="icon"/>
				<img src={seventh} alt="icon"/>
				<img src={eight} alt="icon"/>
				<img src={ninth} alt="icon"/>
			</div>
		</section>
	);
};

export default Pay;