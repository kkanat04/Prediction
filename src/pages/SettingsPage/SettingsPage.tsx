import '../PredictionPage/PredictionPage.css';

import React from 'react';

import Footer from '../../components/Footer/Footer';
import MainSettings from '../../components/prediction/MainSettings/MainSettings';
import Sidebar from '../../components/prediction/Sidebar/Sidebar';

const SettingsPage = () => {
	return (
		<>
			<section id="predictionPage" className="alternativePage">
				<Sidebar/>
				<MainSettings/>
			</section>
			<div className="alternativePage__wrap">
				<Footer/>
			</div>
		</>
	);
};

export default SettingsPage;
