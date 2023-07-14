import './Social.css';

import discord from '../../assets/images/discotd.svg';
import telegram from '../../assets/images/telegram.svg';


const Social  = () =>{

	return (
		<section id="social">
			<div className="container-mini">
				<div className="social__wrap">
					<div className="social__box social__first">
						<img src={telegram} alt="telegram"/>
						<div>
							<p>Telegram</p>
							<p>Join the our community and get current news</p>
						</div>
					</div>
					<div className="social__box social__second">
						<img src={discord} alt="telegram"/>
						<div>
							<p>Discord</p>
							<p>Join the our community and get current news</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Social;
