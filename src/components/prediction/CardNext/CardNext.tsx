import './CardNext.css';

import arrow_btn from 'assets/images/arrow_btn.svg';
import eth_icon from 'assets/images/Icon_ethereum.svg';
import metamask_icon from 'assets/images/metamask.svg';
import reword_icon from 'assets/images/Reward_icon.svg';
import star_icon from 'assets/images/star.svg';
import zig from 'assets/images/zig.svg';
import {getContract} from 'hooks/web3';
import {useState} from 'react';
import {web3Provider as web3} from 'web3Provider';

const CardNext = () => {
	const [wallet, setWallet] = useState(false);
	const [bet, setBet] = useState(1);
	const up = async () => {
		const account = await web3.eth.getAccounts();
		const currentEpoch = await getContract(account[0]).methods.getCurrentEpoch().call(); //
		console.log('currentEpoch', currentEpoch);

		const betBull = await getContract(account[0]).methods.betBull(currentEpoch).call({
			value: web3.utils.toWei('0.1', 'ether'),
		});

		console.log(betBull);
	};

	const down = async () => {
		const account = await web3.eth.getAccounts();
		const currentEpoch = await getContract(account[0]).methods.getCurrentEpoch().call(); //
		console.log('currentEpoch', currentEpoch);

		const betBear = await getContract(account[0]).methods.betBear(currentEpoch).call({
			value: web3.utils.toWei('0.01', 'ether'),
		});
		console.log(betBear);
	};

	return (
		<section id="cardNext" className="main__card">
			<div className="main__header">
				<div>
					<img src={zig} alt="zig"/>
					<p>Next</p>
				</div>
				<div className={'cardNext__head__timer'}>
					<div>01</div>
					<p className={'cardNext__head__timer_text'}>:</p>
					<div>20</div>
				</div>
			</div>
			<div  className="main__card__info">
				<div className="main__card__info__head">
					<div className="main__card__info__head__1">
						<img   className="main__card__info__head__1__img" src={reword_icon}/>
						<p>Reward</p>
					</div>
					<div className="main__card__info__head__2">
						<img src={eth_icon}/>
						<p className="main__card__info__head__2__p">23.890</p>
					</div>
				</div>
				<div className="wallet__div">
					<div onClick={() => setWallet(false)}
						className={`wallet__content__1 ${!wallet ? 'wallet__content__active': null}`}>
						<img src={star_icon}/>
						<p>0.0345 ETH</p>
						<div
							className={`wallet__content__circle ${!wallet ? 'wallet__content__circle__active' : null}`}
						></div>
					</div>
					<div onClick={() => setWallet(true)}
						className={`wallet__content__2 ${wallet ? 'wallet__content__active' : null}`}>
						<img src={metamask_icon}/>
						<p>1.0367 ETH</p>
						<div
							className={`wallet__content__circle ${wallet ? 'wallet__content__circle__active' : null}`}
						></div>
					</div>
				</div>
				<div className="cart__inp">
					<input placeholder="0"/>
					<p>ETH</p>
				</div>
				<div className="cart__size">
					<div className={`${bet === 5 ? 'cart__size__active' : null}`} onClick={() => setBet(5)}>
						<p>5x</p>
					</div>
					<div className={`${bet === 10 ? 'cart__size__active' : null}`} onClick={() => setBet(10)}>
						<p>10x</p>
					</div>
					<div className={`${bet === 25 ? 'cart__size__active' : null}`} onClick={() => setBet(25)}>
						<p>25x</p>
					</div>
					<div className={`${bet === 50 ? 'cart__size__active' : null}`} onClick={() => setBet(50)}>
						<p>50x</p>
					</div>
				</div>
				<div className="cart__available">
					<p>Commit</p>
					<p>Available: 0.0345</p>
				</div>
			</div>

			<div className="cardNext__main-buttons">
				<button onClick={up} >UP <img src={arrow_btn}/></button>
				<button onClick={down}>DOWN <img src={arrow_btn}/></button>
			</div>

		</section>
	);
};

export default CardNext;
