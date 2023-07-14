import './CardSwiper.css';
import 'swiper/css';

import { useAppDispatch } from 'hooks/redux';
import { useCountdown } from 'hooks/useContentDown';
import { getContract } from 'hooks/web3';
import { useEffect } from 'react';
import { SET_MINUTE_SECONDS } from 'redux/slicers/timerSlicer';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {liveData} from 'utils/cards';
import { web3Provider as web3 } from 'web3Provider';

import CardDisabled from '../../CardDisabled/CardDisabled';
import CardLive from '../../CardLive/CardLive';
import CardNext from '../../CardNext/CardNext';


const CardSwiper = () => {
	const dispatch = useAppDispatch();
	const [minute, second] = useCountdown();

	const getCurrentRound = async () => {
		const account = await web3.eth.getAccounts();
		const currentEpoch = await getContract(account[0]).methods.getCurrentEpoch().call();
		const getRoundsContract = await getContract(account[0]).methods.getRounds([currentEpoch]).call(); // list games
		console.log(getRoundsContract);
		console.log(120000 - (Date.now() - (getRoundsContract[0].startTimestamp * 1000)));
	};
	useEffect(() => {
		getCurrentRound();
	}, []);

	useEffect(() => {
		if (minute ?? second) {
			dispatch(SET_MINUTE_SECONDS({minute, second}));
		}
	}, [minute, second]);

	return (
		<section id="cardSwiper">
			<CardNext/>
			<CardLive liveData={liveData}/>
			<CardDisabled/>
		</section>
	);
};

export default CardSwiper;
