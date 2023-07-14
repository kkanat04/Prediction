import {useContext} from 'react';
import {SidebarContext} from 'utils/SidebarContext';

import HeaderSecond from '../HeaderSecond/HeaderSecond';
import Timezone from '../Timezone/Timezone';

const MainSettings = () => {
	const {toggle} = useContext<any>(SidebarContext);
	return (
		<main className={toggle?'main__grow':''}>
			<div className="main__parent">
				<HeaderSecond myKey={'settings'}/>
				<Timezone/>
			</div>
		</main>
	);
};

export default MainSettings;
