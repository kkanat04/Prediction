import './CardHistory.css';

import arr from 'assets/images/arr.svg';
import cloud from 'assets/images/Cancelled.svg';
import cancelIcon from 'assets/images/headerCancelIcon.svg';
import finishedIcon from 'assets/images/headerFinishedIcon.svg';
import pyramid from 'assets/images/pyramid.svg';
import {ReactComponent as ArrowIcon} from 'assets/images/verticalArrowUp.svg';
import { useAppSelector } from 'hooks/redux';
import { useEffect, useState } from 'react';

import {Props} from './types';

const CardHistory = ({liveData}: Props) => {
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
	const valGradient = liveData.betPrice && liveData.betPrice > 0 ? 'cardHistory__wrap cardHistory__gradient' : 'cardHistory__wrap';
	return (
		<section id="cardHistory">
			<div
				className={`cardHistory__first ${liveData.status === 'Finished'
					? 'cardHistory__bg-finished'
					: liveData.status === 'Cancelled'
						? 'cardHistory__bg-cancel'
						: null
				}`}>
				<div
					className="cardHistory__live"
				>
					{liveData.status === 'Live'
						? <div className="cardHistory__head">
							<div className="cardHistory__green"></div>
							<p>{liveData.status}</p>
						</div>
						:
						<div className="cardHistory__head">
							<img src={liveData.status === 'Cancelled' ? cancelIcon : finishedIcon}
								alt="finishedIcon"/>
							<p>{liveData.status}</p>
						</div>
					}

				</div>
				{liveData.status === 'Live' ?
					<div className={'cardHistory__head_timer'}>
						<div>01</div>
						<p>:</p>
						<div>20</div>
					</div> : <p>{liveData.cardId}</p>
				}
			</div>

			<div className={valGradient}>
				<div
					className={liveData.status !== 'Cancelled' ? 'cardHistory__parent' : 'cardHistory__parent cardHistory__parent-alt'}>
					{liveData.status !== 'Cancelled'
						? <div className="cardHistory__second">

							<div className="cardHistory__second-button cardHistory__second-box">
								<div className="cardHistory__second-button__title__colum">
									<span className="cardHistory__second-title">Last Price</span>
									<p>${liveData.lastPrice}<span>${liveData.betPrice}</span></p>
								</div>
								<div className={'cardHistory__second-button__change'} style={valBtn}><img src={arr} alt=""/></div>
							</div>

							<div className="cardHistory__second-locked cardHistory__second-box">
								<p className="cardHistory__second-title">Locked Price</p>
								<p>${liveData.lockedPrice}</p>
							</div>

							<div className="cardHistory__second-pyramid cardHistory__second-box">
								<p className="cardHistory__second-title">Reward</p>
								<div>
									<img src={pyramid} alt="pyramid"/>
									<p>{liveData.prizePool}</p>
								</div>
							</div>
						</div>
						: <div className="cardHistory__cancelled">
							<img src={cloud} alt="cloud"/>
							<p>Round Cancelled</p>
						</div>
					}

					<ArrowIcon
						className="cardHistory__up cardHistory__absolute"
						style={positive}
					/>
					<ArrowIcon
						className="cardHistory__down cardHistory__absolute"
						style={negative}
					/>

				</div>
			</div>
		</section>
	);
};

export default CardHistory;
