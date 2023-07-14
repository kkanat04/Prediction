import './PredictionPage.css';

import React,{useEffect} from 'react';

import Footer from '../../components/Footer/Footer';
import Main from '../../components/prediction/Main/Main';
import Sidebar from '../../components/prediction/Sidebar/Sidebar';


const PredictionPage = () => {

	useEffect(()=>{
		document.body.style.overflow='hidden';
	},[]);

	return (
		<>
			<section id="predictionPage" className="alternativePage">
				<Sidebar/>
				<Main/>
			</section>
			<div className="alternativePage__wrap">
				<Footer/>
			</div>
		</>
	);
};

export default PredictionPage;