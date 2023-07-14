import './CardSlider.css';

import {useCallback, useState} from 'react';

import History from '../History/History';
import CardSwiper from './CardSwiper/CardSwiper';

const CardSlider = () => {
	const [toggle, setToggle] = useState<boolean>(false);
	const changeToHistory = useCallback(() => {
		setToggle(true);
	},[toggle]);

	const changeToActive = useCallback(() => {
		setToggle(false);
	},[toggle]);

	return (
		<>
			<section id="cardSlider">
				<div className="cardSlider__buttons">
					<div
						className={!toggle ? 'cardSlider__btn cardSlider__active' : 'cardSlider__btn'}
						onClick={changeToActive}
					>
						<div
							className={`main__circle ${!toggle ? 'cardSlide__circleOne' : 'cardSlide__circleTwo'}`}

						></div>
						<p>Active predictions</p>
					</div>
					<div
						className={toggle ? 'cardSlider__btn cardSlider__active' : 'cardSlider__btn'}
						onClick={changeToHistory}
					>
						<div
							className={`main__circle ${toggle ? 'cardSlide__circleOne' : 'cardSlide__circleTwo'}`}
						>
						</div>
						<p>Finished</p>
					</div>
				</div>
			</section>

			{toggle ? <History /> : <CardSwiper/>}
		</>
	);
};

export default CardSlider;
