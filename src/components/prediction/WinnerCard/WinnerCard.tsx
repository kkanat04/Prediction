
import './WinnerCardNew.css';

import belt from 'assets/images/belt.svg';
import grass from 'assets/images/grass.svg';
import star from 'assets/images/star.svg';
import {randomColor} from 'utils/constants';


const WinnerCard = (props: any) => {

	return (
		<div className="col-4 winnerCard__col">
			<div className="winnerCard main__shadow">

				<div className="winnerCard__imageBox">
					<div className="winnerCard__circle" style={{background:'#'+randomColor()}}>
						<img src={props.img} alt=""/>
					</div>
					<img className="winnerCard__grass" src={grass} alt=""/>
					<div className="winnerCard__number">
						<img className="winnerCard__belt" src={belt} alt=""/>
						<p>{props.place}</p>
					</div>
				</div>

				<div className="winnerCard__alt">
					<div className="winnerCard__star">
						<img src={star} alt=""/>
						<p>{props.id}</p>
					</div>
					<div className="winnerCard__alt-circle" style={{background:'#'+randomColor()}}>
						<img src={props.img} alt=""/>
					</div>
					<p className="winnerCard__alt-text">{props.userId}</p>
				</div>

				<p className="winner__userId">{props.userId}</p>
				<div className="winnerCard__details">
					<div>
						<p className="main__text">Win rate</p>
						<p className="winnerCard__details-percentage">{props.winRate}%</p>
					</div>
					<div>
						<p className="main__text">Net winnings</p>
						<p className="winnerCard__details-net">{props.netWinning}</p>
					</div>
					<div>
						<p className="main__text">Rounds won</p>
						<p className="winnerCard__details-won">{`${props.roundsWon} (${props.roundsPlayed})`}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WinnerCard;
