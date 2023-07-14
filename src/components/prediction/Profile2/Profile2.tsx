import './Profile2.css';

import CachedIcon from '@mui/icons-material/Cached';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import bar from 'assets/images/Bars.svg';
import eth from 'assets/images/eth.svg';
import wallet from 'assets/images/magicWallet.svg';
import down from 'assets/images/profile2-icon.svg';
import up from 'assets/images/profile2-icon2.svg';
import usd from 'assets/images/usd.svg';
import React, {useState} from 'react';
import {profileStatisticDays} from 'utils/constants';

import Recharts from '../Recharts/Recharts';

const Profile2 = () => {
	const [sellBuy, setSellBuy] = useState<boolean>(false);
	const [days, setDays] = useState<number>(0);

	return (
		<>
			<div id="profile2">
				<div className="profile2__info__first">

					<div className="profile2__info__first__title">
						<div className="profile2__info__first__title__user__name">
							<img src={wallet} alt="toy"/>
							<div>
								<p>Mike Cash</p>
								<p>0xBAD7...E116 <ContentCopyIcon sx={{width: 20, height: 20}} /></p>
							</div>
						</div>
						<p>Available Balance</p>
						<div className="profile2__info__first__title__user__balance">
							<p>$450,541.00</p>
							<p>336.10 ETH</p>
						</div>
					</div>

					<div className="profile2__info__first__bar__el">
						<img src={bar} alt="bar" />
						<div>
							<img src={up} alt="up" />
							<div>
								<p>$21,351.00</p>
								<p>Income</p>
							</div>
						</div>
						<button disabled className="profile2__info__first__bar__btn">Received</button>
					</div>

					<div className="profile2__info__first__bar__el">
						<img src={bar} alt="bar" />
						<div>
							<img src={down} alt="down" />
							<div>
								<p>$21,351.00</p>
								<p>Outcome</p>
							</div>
						</div>
						<button className="profile2__info__first__bar__btn">Sent</button>
					</div>
				</div>

				<div className="profile2__info__second">
					<div className="profile2__info__second__button">
						<button onClick={() => setSellBuy(false)} className={`profile2__info__second__button__el ${!sellBuy ? 'active' : ''}`}>Buy</button>
						<button onClick={() => setSellBuy(true)} className={`profile2__info__second__button__el ${sellBuy ? 'active' : ''}`}>Sell</button>
					</div>
					<div className="profile2__info__second__money">
						<p>You pay</p>
						<div className="profile2__info__second__pay__input">
							<input placeholder="0.00" type="text"/>
							<div>
								<img src={usd} alt="usd" />
								<p>USD</p>
								<KeyboardArrowDownIcon />
							</div>
						</div>
					</div>
					<div className="profile2__info__second__money">
						<p>You get</p>
						<div className="profile2__info__second__pay__input">
							<input placeholder="0.00" type="text"/>
							<div>
								<img src={eth} alt="eth" />
								<p>ETH</p>
								<KeyboardArrowDownIcon />
							</div>
						</div>
					</div>

					<div className="profile2__info__second__course">
						<p>1 USD = 0.00075 ETH</p>
						<CachedIcon />
					</div>
					<button>Buy ETH</button>
				</div>

				<div className="profile2__info__third">
					<p>My Assets</p>
					<div className="profile2__info__third__column">
						<div className="profile2__info__third__column__el">
							<div className="profile2__info__third__column__el__head">
								<div>
									<img src={eth} alt="eth"/>
									<p>Ethereum</p>
								</div>
								<div>
									<p>+0.05%</p>
									<TrendingUpIcon />
								</div>
							</div>
							<div className="profile2__info__third__column__el__body">
								<p>0.6542 BTC</p>
								<p>$48,021.04</p>
							</div>
						</div>
						<div className="profile2__info__third__column__el">
							<div className="profile2__info__third__column__el__head">
								<div>
									<img src={eth} alt="eth"/>
									<p>Ethereum</p>
								</div>
								<div>
									<p>+0.05%</p>
									<TrendingUpIcon />
								</div>
							</div>
							<div className="profile2__info__third__column__el__body">
								<p>0.6542 BTC</p>
								<p>$48,021.04</p>
							</div>
						</div>
						<div className="profile2__info__third__column__el">
							<div className="profile2__info__third__column__el__head">
								<div>
									<img src={eth} alt="eth"/>
									<p>Ethereum</p>
								</div>
								<div>
									<p>+0.05%</p>
									<TrendingUpIcon />
								</div>
							</div>
							<div className="profile2__info__third__column__el__body">
								<p>0.6542 BTC</p>
								<p>$48,021.04</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="portfolioStatistic">

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
		</>
	);
};

export default Profile2;
