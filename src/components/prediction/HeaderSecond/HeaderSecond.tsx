import './HeaderSecond.css';

import drop_down from 'assets/images/drop_down.svg';
import logoOne from 'assets/images/logoIconOne.png';
import logoTwo from 'assets/images/logoIconTwo.png';
import metamask_icon from 'assets/images/metamask_icon2.svg';
import refetch from 'assets/images/refetch.svg';
import star_icon from 'assets/images/star.svg';
import fourth from 'assets/toys/4.png';


interface Keys {
	myKey: string
}

const HeaderSecond = (props: Keys) => {
	const myKey = props.myKey;
	return (
		<section id="headerSecond">
			<div className="headerSecond__start">
				{myKey === 'leader'
					? <p className="main__title">Leaderboard</p>
					: myKey === 'settings'
						? <p className="main__title">Settings</p>
						:myKey==='profile'
							?<p className="main__title">Hey! 🙌🏻</p>
							: <>
								<div>
									<img src={logoTwo} alt="logo"/>
									<img src={logoOne} alt="logo"/>
								</div>
								<div>
									<p>USD<span>ETH</span></p>
									<p>0.1863</p>
									<img className={'headerSecond__start__refetch'} src={refetch} alt=""/>
								</div>
							</>
				}

			</div>
			<div className="headerSecond__end">
				<div className="headerSecond__end__wallet">
					<div className="headerSecond__end__wallet-1">
						<img src={star_icon} alt=""/>
						<p>0.0345 ETH</p>
					</div>
					<div className="headerSecond__end__wallet-2">
						<img src={metamask_icon} alt=""/>
						<p>1.0367 ETH</p>
					</div>
				</div>
				<div className="headerSecond__end-info">
					<p className="header__second-text">0xBAD7...E116</p>
					<img src={drop_down} alt=""/>
				</div>
				<div className="header__second-avatar"><img  src={fourth} alt="headerAvatar"/></div>

			</div>
		</section>
	);
};

export default HeaderSecond;
