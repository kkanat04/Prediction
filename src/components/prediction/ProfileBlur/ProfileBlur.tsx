import './ProfileBlur.css';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import React, {useState} from 'react';

import eth from '../../../assets/images/eth.svg';
import gift from '../../../assets/images/gift.svg';
import usd from '../../../assets/images/usd.svg';
import {profileStatisticDays} from '../../../utils/constants';
import Recharts from '../Recharts/Recharts';

const ProfileBlur = () => {
	const [days, setDays] = useState<number>(0);
	const [blur, setBur] = useState<boolean>(true);

	return (
		<div id="portfolioStatistic">

			<div className={blur ? 'portfolioStatistic__blur' : 'portfolioStatistic__no__blur'}>
				<div className="profile2__info__fourth">
					<p>My Portfolio</p>
					<div className="profile2__info__fourth__body">
						<div className="profile2__info__fourth__el">
							<div>
								<div>
									<img src={eth} alt="eth"/>
								</div>
								<div>
									<p>Ethereum</p>
									<p>ETH</p>
								</div>
							</div>
							<div>
								<p>0.6542456 ETH</p>
								<p>Rp 551,241</p>
							</div>
						</div>
						<div className="profile2__info__fourth__el">
							<div>
								<div>
									<img src={eth} alt="eth"/>
								</div>
								<div>
									<p>Ethereum</p>
									<p>ETH</p>
								</div>
							</div>
							<div>
								<p>0.6542456 ETH</p>
								<p>Rp 551,241</p>
							</div>
						</div>
						<div className="profile2__info__fourth__el">
							<div>
								<div>
									<img src={eth} alt="eth"/>
								</div>
								<div>
									<p>Ethereum</p>
									<p>ETH</p>
								</div>
							</div>
							<div>
								<p>0.6542456 ETH</p>
								<p>Rp 551,241</p>
							</div>
						</div>
						<div className="profile2__info__fourth__el">
							<div>
								<div>
									<img src={eth} alt="eth"/>
								</div>
								<div>
									<p>Ethereum</p>
									<p>ETH</p>
								</div>
							</div>
							<div>
								<p>0.6542456 ETH</p>
								<p>Rp 551,241</p>
							</div>
						</div>
					</div>
				</div>

				<div className="profile2__info__fifth">
					<div className="profile2__info__fifth__head">
						<p>Statistic</p>
						<div>
							<div>
								<img src={usd} alt="usd"/>
								<p>USD</p>
								<KeyboardArrowDownIcon sx={{ml: 1}}/>
							</div>
							<div>
								<img src={eth} alt="eth"/>
								<p>ETH</p>
								<KeyboardArrowDownIcon sx={{ml: 1}}/>
							</div>
						</div>
					</div>
					<div className="profile2__info__fifth__body">
						<div className="profile2__info__fifth__body__wrap">

							<div>
								{
									profileStatisticDays.map((el, i) => (
										<div onClick={() => setDays(i)}
											className={days === i ? 'profile2__info__fifth__body__wrap__el__active' : 'profile2__info__fifth__body__wrap__el'} key={i}>
											<p>{el}
											</p>
										</div>
									))
								}
							</div>
							<div>
								<p>$28,451.02</p>
								<div>
									<p>+14.05%</p>
									<TrendingUpIcon />
								</div>
							</div>
						</div>
						<div className="profile2__info__fifth__body__recharts">
							<Recharts />
						</div>
					</div>
				</div>
			</div>
			{blur ?

				<div className="profileBlur">
					<img src={gift} alt="gift" />
					<div>
						<p>Join Magic Wallet App for free and get more benefits!</p>
						<p>10% on the balance of all winnings, savings on commissions in games and much more</p>
					</div>
					<button onClick={() => setBur(false)}>Join Magic Wallet</button>
				</div>

				: null
			}
		</div>
	);
};

export default ProfileBlur;
