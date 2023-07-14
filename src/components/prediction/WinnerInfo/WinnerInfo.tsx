import './WinnerInfo.css';

import star from 'assets/images/star.svg';
import {randomColor} from 'utils/constants';


const WinnerInfo = (props: any) => {
	return (
		<div className="winnerInfo main__shadow">

			<div className="winner__first">
				<div className="winnerInfo__star">
					<img src={star} alt=""/>
					<p>{props.place}</p>
				</div>
			</div>

			<div className="winner__second">
				<div className="winnerInfo__name">
					<div className="winner__second-img" style={{background:'#'+randomColor()}}>
						{props.imgId && <img src={props.imgId} alt="avatar"/>}
					</div>
					<p>{props.userId}</p>
				</div>
			</div>

			<div className="winner__rest">
				<p className="winnerInfo__net">+{props.netWinning}</p>
			</div>

			<div className="winner__rest">
				<p className="winnerInfo__rate">{props.winRate}%</p>
			</div>

			<div className="winner__rest">
				<p className="winnerInfo__won">{props.roundsWon}</p>
			</div>

			<div className="winner__rest">
				<p className="winnerInfo__rounds">{props.roundsWon}</p>
			</div>

		</div>
	);
};

export default WinnerInfo;
