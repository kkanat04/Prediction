import './WinnerInfoWrap.css';

import {useAppSelector} from 'hooks/redux';
import { useEffect } from 'react';
import { useLazyGetLeaderboardQuery } from 'services/query';
import Web3 from 'web3';

import WinnerInfo from '../WinnerInfo/WinnerInfo';

const WinnerInfoWrap = () => {

	const {address, token} = useAppSelector(state => state.web3.user.infoUser);
	const {sort, search} = useAppSelector(state => state.leader);
	const [trigger, {data}] = useLazyGetLeaderboardQuery();

	useEffect(() => {
		trigger({address, token, sort, search});
	}, [sort, search]);

	const renderRest = data?.stats && data.stats.filter(el => el.place > 3).map((el, i)=>
		<WinnerInfo
			key={i}
			place={el.place}
			userId={`${el.address.substring(0, 6)}...${el.address.substring(el.address.length - 4, el.address.length)}`}
			img={el.imgId}
			winRate={Math.floor((el.roundsWon / el.roundsPlayed) * 100)}
			netWinning={Web3.utils.fromWei(el.netWinnings, 'ether')}
			roundsWon={el.roundsWon}
			roundsPlayed={el.roundsPlayed}
		/>);

	return (
		<section id="winnerInfoWrap">
			<div className="winnerInfo__titles">
				<p className="winner__first">No</p>
				<p className="winner__second">Player name</p>
				<p className="winner__rest">Net winnings</p>
				<p className="winner__rest">Win rate</p>
				<p className="winner__rest">Rounds won</p>
				<p className="winner__rest">Rounds played</p>
			</div>
			{renderRest}
		</section>
	);
};

export default WinnerInfoWrap;
