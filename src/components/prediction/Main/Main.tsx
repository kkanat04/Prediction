import './Main.css';

import {useContext} from 'react';
import { SidebarContext } from 'utils/SidebarContext';

import CardSlider from '../CardSlider/CardSlider';
import Chart from '../Chart/Chart';
import HeaderSecond from '../HeaderSecond/HeaderSecond';


const Main = () => {

	const {toggle} = useContext<any>(SidebarContext);
	return (
		<main className={toggle ? 'main__grow':''}>
			<div className="main__parent">
				<HeaderSecond myKey={'prediction'}/>
				<CardSlider/>
				<Chart/>
			</div>
		</main>
	);
};

export default Main;