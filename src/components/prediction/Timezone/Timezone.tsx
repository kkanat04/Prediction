import './Timezone.css';

import {useCallback, useState} from 'react';

import Theme from '../Theme/Theme';
import SelectLabels from './Select/SelectLabels';


const Timezone = () => {

	const [active, setActive] = useState<boolean>(false);

	const activeFirst = useCallback(() => {
		setActive(true);
	}, [active]);

	const activeSecond = useCallback(() => {
		setActive(false);
	}, [active]);

	return (
		<section id="timezone">
			<p className="timezone__title">Language</p>
			<SelectLabels/>
			<p className="timezone__title">Timezone</p>
			<SelectLabels/>
			<p className="timezone__title">Timezone</p>
			<div className="timezone__group">
				<div onClick={activeFirst}
					className={!active ? 'timezone__switch' : 'timezone__switch timezone__active'}>
					<p>24 Hours</p>
					<div></div>
				</div>
				<div onClick={activeSecond}
					className={active ? 'timezone__switch' : 'timezone__switch timezone__active'}>
					<p>12 Hours</p>
					<div></div>
				</div>
			</div>
			<p className="timezone__title timezone__title-grow">Day and Night switch</p>
			<div className="aside__grow timezone__grow">
				<Theme check/>
			</div>
			<button className="timezone__button">Save Changes</button>

		</section>
	);
};

export default Timezone;
