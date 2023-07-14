import './Chart.css';

import diagram from 'assets/images/diagram.png';

const Chart = () => {
	return (
		<section id="chart" className="main__padding-container">
			<p className="main__title chart__title">Chart</p>
			<div className="chart__wrap">
				<div className="chart__wrap-buttons">
					<div className="chart__active">TradingView Chart</div>
					<div>Chainlink Chart</div>
				</div>
				<div className="chart__diagram">
					<img src={diagram} alt="diagram"/>
				</div>
			</div>
		</section>
	);
};

export default Chart;
