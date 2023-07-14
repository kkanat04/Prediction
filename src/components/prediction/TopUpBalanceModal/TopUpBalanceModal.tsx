import './TopUpBalanceModal.css';

import close from 'assets/images/closeIcon.svg';
import React from 'react';

import arrowDown from '../../../assets/images/arrow-down.svg';
import eth from '../../../assets/images/eth.svg';
import magicWallet from '../../../assets/images/magicWallet.svg';
import metamask from '../../../assets/images/metamask_icon2.svg';

type Props = {
	setUpBalance: (arg: boolean) => void
}

const TopUpBalanceModal = ({setUpBalance}: Props) => {
	return (
		<div onClick={() => setUpBalance(false)} className="topUpBalanceModal">
			<div onClick={(e) => e.stopPropagation()} className="topUpBalanceModal__modal">
				<div className="topUpBalanceModal__transfer">
					<div className="topUpBalanceModal__transfer__title">
						<p>Top Up Balance</p>
						<img onClick={() => setUpBalance(false)} src={close} alt="close"/>
					</div>
					<div className="topUpBalanceModal__wallet">
						<div className="wallet__img">
							<img src={metamask} alt="metamask"/>
							<div className="wallet__title">
								<p>Metamask</p>
								<p>0x56789...R49</p>
							</div>
						</div>
						<p>1.0367 ETH</p>
					</div>

					<div className="topUpBalanceModal__transfer__arrow">
						<img src={arrowDown} alt="arrowDown"/>
					</div>

					<p>Destination Account</p>
					<div className="topUpBalanceModal__wallet">
						<div className="wallet__img">
							<img src={magicWallet} alt="magicWallet"/>
							<div className="wallet__title">
								<p>Metamask</p>
								<p>0x56789...R49</p>
							</div>
						</div>
						<p>1.0367 ETH</p>
					</div>

					<p className="amount__title">Amount</p>

					<div className="amount__input">
						<input placeholder="0.00" type="text"/>
						<div>
							<img src={eth} alt="eth" />
							<p>ETH</p>
						</div>
					</div>
					<button className="transfer_btn">Transfer</button>
				</div>
			</div>
		</div>
	);
};

export default TopUpBalanceModal;
