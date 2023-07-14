import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';
import WalletConnect from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';

import { web3Provider } from './../web3Provider';

const providerOptions = {
	binancechainwallet: {
		package: true,
	},
	walletconnect: {
		package: WalletConnect, // required
		options: {
			infuraId:  process.env.REACT_APP_INFURA_ID,// required
		},
	},
	coinbasewallet: {
		package: CoinbaseWalletSDK, // Required
		options: {
			appName: 'Coinbase', // Required
			infuraId: process.env.REACT_APP_INFURA_ID, // Required
			chainId: 4, // 4 for Rinkeby, 1 for mainnet (default)
		},
	},
};

const web3Modal = new Web3Modal({
	network: 'rinkeby',
	theme: 'light', // optional, 'dark' / 'light',
	cacheProvider: false, // optional
	providerOptions, // required
});

export const walletProvider = async () => {
	try {
		const web3ModalInstance = await web3Modal.connect();
		web3Provider.setProvider(web3ModalInstance);
		if(web3ModalInstance) {
			return web3ModalInstance;
		}
	} catch (error) {
		console.log(error);
	}
};


export const disconnectWallet = () => {
	try {
		web3Modal.clearCachedProvider();
		console.log('disconnected');
	} catch (error) {
		console.log(error);
	}
};