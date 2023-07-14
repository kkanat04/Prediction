import './History.css';

import { getContract } from 'hooks/web3';
import { useEffect } from 'react';
import {allData} from 'utils/cards';
import { getLatestRound } from 'utils/getLatestRound';
import { web3Provider as web3 } from 'web3Provider';

import CardHistory from '../CardHistory/CardHistory';

const History = () => {

	const getRounds = async () => {
		const account = await web3.eth.getAccounts();
		const currentEpoch = await getContract(account[0]).methods.getCurrentEpoch().call(); //
		console.log('currentEpoch', currentEpoch);
		const getRoundsContract = await getContract(account[0]).methods.getRounds(getLatestRound(currentEpoch)).call(); // list games
		console.log(getRoundsContract);
		// console.log(weiToEth(156390435956+''));
		if (account[0]) {
			const claim = await getContract(account[0]).methods.claimable(currentEpoch, account[0]).call(); // выигрыш
			console.log(claim);
		}
	};

	useEffect(() => {
		getRounds();
	}, []);

	return (
		<section id="history">
			<div className="row">
				{allData && allData.map((el,index)=>{
					return(
						<div key={index} className="col-4 history__col">
							<CardHistory liveData={el}/>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default History;
