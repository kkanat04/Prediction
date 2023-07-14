import { SET_CONNECTED, SET_INFO_USER } from 'redux/slicers/Web3Slicer';
import { useLazyAuthVerifyQuery, useLazyGetAuthNonseQuery } from 'services/query';

import { web3Provider as web3 } from './../web3Provider';
import { useAppDispatch } from './redux';

export const useWeb3SigIn = () => {
	const [trigger] = useLazyAuthVerifyQuery();
	const [trigger2] = useLazyGetAuthNonseQuery();
	const dispatch = useAppDispatch();

	const sigIn = (accounts: string) => {
		trigger2(accounts).then(async res => {
			if (res.data) {
				// @ts-ignore
				web3.eth.personal.sign(web3.utils.toHex(res.data.nonce), accounts, null, (err, sign) => {
					trigger({address: accounts, token: sign}).then(verify => {
						if (sign && verify.data) {
							dispatch(SET_INFO_USER({address: accounts, token: verify?.data?.token}));
							dispatch(SET_CONNECTED(true));
						}
					},
					);
				});
			}
		});
	};
	return {
		sigIn,
	};
};