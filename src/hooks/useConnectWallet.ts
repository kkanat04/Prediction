import { walletProvider } from 'coordinators/WalletAuth';
import { useAppSelector } from 'hooks/redux';
import { useCallback } from 'react';
import { web3Provider } from 'web3Provider';

import { useWeb3SigIn } from './useWeb3SigIn';

export const useConnectWallet = () => {
	const {sigIn} = useWeb3SigIn();
	const {address, token} = useAppSelector(state => state.web3.user.infoUser);
	const connectWallet = useCallback(async () => {
		await web3Provider.eth.getAccounts().then(res => {
			if (!(address && token) && !res[0]) {
				walletProvider();
			}
			else if (res[0] && !(address && token)) {
				sigIn(res[0]);
			}
			else {
				alert('Have you already connected your wallet');
			}
		});
	}, [address, token]);

	return {
		connectWallet,
	};
};