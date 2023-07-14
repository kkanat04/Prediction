import { web3Provider as web3 } from 'web3Provider';

import json from '../Prediction.json';

export const getContract = (account: any) => {
	// @ts-ignore
	return new web3.eth.Contract(json.abi, process.env.REACT_APP_SMART_CONTRACT, {from: account});
};