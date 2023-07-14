import './CardLive.css';

import arr from 'assets/images/arr.svg';
import cloud from 'assets/images/Cancelled.svg';
import cancelIcon from 'assets/images/headerCancelIcon.svg';
import finishedIcon from 'assets/images/headerFinishedIcon.svg';
import pyramid from 'assets/images/pyramid.svg';
import {ReactComponent as ArrowIcon} from 'assets/images/verticalArrowUp.svg';
import { useAppSelector } from 'hooks/redux';
import { useEffect, useState } from 'react';

import {Props} from './types';

const CardLive = ({liveData}: Props) => {
	const [timerClient, setTimerClient] = useState(0);
	const {minutes, seconds, timer} = useAppSelector(state => state.timer);
	const positive = {fill: liveData.betPrice && liveData.betPrice > 0 ? '#E2FE53' : '#F4F7FF'};
	const negative = {fill: liveData.betPrice && liveData.betPrice < 0 ? '#FF3767' : '#F4F7FF'};
	const valBtn = {
		background: liveData.betPrice && liveData.betPrice > 0 ? '#E2FE53' : '#FF3767',
		color: liveData.betPrice && liveData.betPrice > 0 ? '#1A1C23' : '#FFFFFF',
	};
	useEffect(() => {
		if (!timerClient) {
			setTimerClient(timer);
		}
	}, [timer]);
	const valGradient = liveData.betPrice && liveData.betPrice > 0 ? 'cardLive__wrap cardLive__gradient' : 'cardLive__wrap';
	return (
		<section id="cardLive">
			<div
				className={`cardLive__first ${liveData.status === 'Finished'
					? 'cardLive__bg-finished'
					: liveData.status === 'Cancelled'
						? 'cardLive__bg-cancel'
						: null
				}`}>
				<div
					className="cardLive__live"
				>
					{liveData.status === 'Live'
						? <div className="cardLive__head">
							  <div className="cardLive__green"></div>
							  <p>{liveData.status}</p>
						</div>
						:
						<div className="cardLive__head">
							<img src={liveData.status === 'Cancelled' ? cancelIcon : finishedIcon}
								alt="finishedIcon"/>
							<p>{liveData.status}</p>
						</div>
					}

				</div>
				<div className={'cardLive__head_timer'}>
					<div>01</div>
					<p>:</p>
					<div>20</div>
				</div>
			</div>

			<div className={valGradient}>
				<div
					className={liveData.status !== 'Cancelled' ? 'cardLive__parent' : 'cardLive__parent cardLive__parent-alt'}>
					{liveData.status !== 'Cancelled'
						? <div className="cardLive__second">

							<div className="cardLive__second-button cardLive__second-box">
								<div className="cardLive__second-button__title__colum">
									<span className="cardLive__second-title">Last Price</span>
									<p>${liveData.lastPrice}<span>${liveData.betPrice}</span></p>
								</div>
								<div className={'cardLive__second-button__change'} style={valBtn}><img src={arr} alt=""/></div>
							</div>

							<div className="cardLive__second-locked cardLive__second-box">
								<p className="cardLive__second-title">Locked Price</p>
								<p>${liveData.lockedPrice}</p>
							</div>

							<div className="cardLive__second-pyramid cardLive__second-box">
								<p className="cardLive__second-title">Reward</p>
								<div>
									<img src={pyramid} alt="pyramid"/>
									<p>{liveData.prizePool}</p>
								</div>
							</div>
						</div>
						: <div className="cardLive__cancelled">
							<img src={cloud} alt="cloud"/>
							<p>Round Cancelled</p>
						</div>
					}

					<ArrowIcon
						className="cardLive__up cardLive__absolute"
						style={positive}
					/>
					<ArrowIcon
						className="cardLive__down cardLive__absolute"
						style={negative}
					/>

				</div>
			</div>
		</section>
	);
};

export default CardLive;
