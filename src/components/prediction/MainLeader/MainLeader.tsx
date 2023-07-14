import {useContext} from 'react';
import { SidebarContext } from 'utils/SidebarContext';

import HeaderSecond from '../HeaderSecond/HeaderSecond';
import Winner from '../Winner/Winner';
import WinnerInfoWrap from '../WinnerInfoWrap/WinnerInfoWrap';
import WinnerWrap from '../WinnerWrap/WinnerWrap';


const MainLeader = () => {
	const {toggle} = useContext<any>(SidebarContext);
	return (
		<main className={toggle?'main__grow':''}>
			<div className="main__parent">
				<HeaderSecond myKey={'leader'}/>
				<Winner/>
				<WinnerWrap/>
				<WinnerInfoWrap/>
			</div>
		</main>
	);
};

export default MainLeader;