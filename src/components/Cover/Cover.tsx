import './Cover.css';

import CoverFirst from './CoverFirst/CoverFirst';
import CoverSecond from './CoverSecond/CoverSecond';

const Cover = () => {
	return (
		<section id="cover">
			<div className="container" id="cover__container">
				<div className="cover__wrap">
					<CoverFirst/>
					<CoverSecond/>
				</div>
			</div>
		</section>
	);
};

export default Cover;