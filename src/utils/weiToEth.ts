import { web3Provider } from './../web3Provider';

export const weiToEth = (num: string) => {
	return web3Provider.utils.fromWei(num, 'ether');
};