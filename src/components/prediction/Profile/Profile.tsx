import './Profile.css';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Menu} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import arrowDown from 'assets/images/arrow-down.svg';
import balance from 'assets/images/balanceIcon.svg';
import bars from 'assets/images/Bars.svg';
import BarsTotalWin from 'assets/images/BarsTotalWin.svg';
import eth from 'assets/images/eth.svg';
import game from 'assets/images/game.svg';
import help from 'assets/images/help.svg';
import magicWallet from 'assets/images/magicWallet.svg';
import magicWallet2 from 'assets/images/magicWallet2.svg';
import metamask from 'assets/images/metamask_icon2.svg';
import totalWin from 'assets/images/totalWin.svg';
import {useState} from 'react';

import SwitchWalletModal from '../SwitchWalletModal/SwitchWalletModal';
import TopUpBalanceModal from '../TopUpBalanceModal/TopUpBalanceModal';

const Profile = () => {

	const [switchWallet, setSwitchWallet] = useState<boolean>(false);
	const [upBalance, setUpBalance] = useState<boolean>(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<section id="profile">

			<div className="profile__info">
				<div className="profile__wrap">
					<div className="profile__innerOne">
						<div className="profile__circle">
							<img src={magicWallet2} alt="toy"/>
						</div>
						<div className="profile__text">
							<p>Magic Wallet</p>
							<p>0xBAD7...E116</p>
						</div>
					</div>
					<div className="profile__innerTwo">
						<img src={help} alt={'help'}/>
						<p>What is Magic Wallet?</p>
					</div>
				</div>
				<p className="available">Available Balance</p>
				<div className="profile__price">
					<p>0.30 BNB</p>
					<p>$85.32 USD</p>
				</div>

				<div className="profile__buttons">
					<button onClick={() => setSwitchWallet(!switchWallet)}>
						<img src={balance} alt="balance"/>
						<p>Switch Wallet</p>
					</button>
					<button onClick={() => setUpBalance(true)}>Top Up Balance</button>
				</div>
			</div>


			 <div className="profile__games">
				<div>
					<img src={game} alt="game" />
					<div>
						<p>Games Played</p>
						<p>12 390</p>
					</div>
				</div>
				<img className="games__bars" src={bars} alt="bars"/>
				<MoreHorizIcon onClick={handleClick} sx={{position: 'absolute', top: 20, right: 24}}/>
			 </div>

			<div className="profile__games">
				<div>
					<img src={totalWin} alt="game" />
					<div>
						<p>Total Win</p>
						<p>0.0268 ETH</p>
					</div>
				</div>
				<img className="games__bars" src={BarsTotalWin} alt="bars"/>
				<MoreHorizIcon onClick={handleClick} sx={{position: 'absolute', top: 20, right: 24}}/>
			</div>


			<div className="profile__transfer">
				<p>Source Account</p>
				<div className="profile__wallet">
					<div className="wallet__img">
						<img src={metamask} alt="metamask"/>
						<div className="wallet__title">
							<p>Metamask</p>
							<p>0x56789...R49</p>
						</div>
					</div>
					<p>1.0367 ETH</p>
				</div>

				<div className="profile__transfer__arrow">
					<img src={arrowDown} alt="arrowDown"/>
				</div>

				<p>Destination Account</p>
				<div className="profile__wallet">
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
			{
				switchWallet ? <SwitchWalletModal setSwitchWallet={setSwitchWallet} /> : null
			}
			{
				upBalance ? <TopUpBalanceModal setUpBalance={setUpBalance}/> : null
			}
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<MenuItem sx={{background: '#EBEEF8'}} onClick={handleClose}>View History</MenuItem>
				<MenuItem sx={{background: '#EBEEF8'}} onClick={handleClose}>Reset All</MenuItem>
			</Menu>
		</section>
	);
};

export default Profile;
