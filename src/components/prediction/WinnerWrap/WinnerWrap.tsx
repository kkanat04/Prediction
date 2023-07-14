import './WinnerWrap.css';

import { useAppSelector } from 'hooks/redux';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { useEffect } from 'react';
import { useLazyGetLeaderboardQuery } from 'services/query';
import Web3 from 'web3';

import WinnerCard from '../WinnerCard/WinnerCard';

const WinnerWrap = () => {

	const {address, token} = useAppSelector(state => state.web3.user.infoUser);
	const {sort, search} = useAppSelector(state => state.leader);
	const [trigger, {data}] = useLazyGetLeaderboardQuery();
	const {width} = useWindowDimensions();

	useEffect(() => {
		trigger({address, token, sort, search});
		console.log('ds');
	}, [sort, search]);

	const renderLeaders = data?.stats && data?.stats.filter(el => width <= 576 ? el : el.place <= 3).map((el, i)=>
		<WinnerCard
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
		<section id="winnerWrap">
			<div className="row">
				{renderLeaders}
			</div>
		</section>
	);
};

export default WinnerWrap;
