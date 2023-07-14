import './SwitchWalletModal.css';

import closeIcon from 'assets/images/closeIcon.svg';
import magicWallet from 'assets/images/magicWallet.svg';
import metamask from 'assets/images/metamask_icon2.svg';
import React from 'react';

type Props = {
	setSwitchWallet: (arg: boolean) => void
}

const SwitchWalletModal = ({setSwitchWallet}: Props) => {

	const handleCloseModal = () => {
		setSwitchWallet(false);
	};
	return (
		<div onClick={handleCloseModal} className="switchWalletModal">
			<div onClick={(e) => e.stopPropagation()} className="switchWalletModal__modal">
				<div className="modal__head">
					<p>Switch Wallet</p>
					<img onClick={() => setSwitchWallet(false)} src={closeIcon} alt="closeIcon" />
				</div>
				<div className="switchWalletModal__wallet">
					<div>
						<img src={magicWallet} alt="magicWallet"/>
						<p>Magic Wallet</p>
					</div>
					<div>
						<img src={metamask} alt="magicWallet"/>
						<p>Magic Wallet</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SwitchWalletModal;
