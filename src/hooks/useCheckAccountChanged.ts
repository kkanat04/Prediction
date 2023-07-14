import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useState } from 'react';
import { SET_INFO_USER } from 'redux/slicers/Web3Slicer';
import { web3Provider } from 'web3Provider';

import { useWeb3SigIn } from './useWeb3SigIn';

export const useCheckAccountChanged = () => {
	const {ethereum} = window;
	const [currentAddress, setCurrentAddress] = useState('');
	const dispatch = useAppDispatch();
	const {sigIn} = useWeb3SigIn();
	const {address} = useAppSelector(state => state.web3.user.infoUser);

	const checkChanged = () => {
		if (ethereum) {
			// @ts-ignore
			ethereum.on('accountsChanged', async (accounts: string[]) => {
				await web3Provider.eth.getAccounts().then(res => setCurrentAddress(res[0]));
				if (accounts.length && !currentAddress) {
					if (accounts[0] !== address) {
						sigIn(accounts[0]);
					}
				}
				else {
					dispatch(SET_INFO_USER({address: '', token: ''}));
				}
			});
		}
	};

	return {
		checkChanged,
	};
};