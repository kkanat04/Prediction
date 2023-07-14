import './LeaderboardPage.css';

import {useEffect} from 'react';

import Footer from '../../components/Footer/Footer';
import MainLeader from '../../components/prediction/MainLeader/MainLeader';
import Sidebar from '../../components/prediction/Sidebar/Sidebar';

const LeaderboardPage = () => {

	useEffect(()=>{
		document.body.style.overflow='hidden';
	},[]);

	return (
		<>
			<section id="leaderboardPage" className="alternativePage">
				<Sidebar/>
				<MainLeader/>
			</section>
			<div className="alternativePage__wrap">
				<Footer/>
			</div>
		</>
	);
};

export default LeaderboardPage;
