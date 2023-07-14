import {useContext} from 'react';
import {SidebarContext} from 'utils/SidebarContext';

import HeaderSecond from '../HeaderSecond/HeaderSecond';
import Profile from '../Profile/Profile';
import Profile2 from '../Profile2/Profile2';
import ProfileBlur from '../ProfileBlur/ProfileBlur';

const MainProfile = () => {
	const {toggle} = useContext<any>(SidebarContext);

	return (
		<main className={toggle?'main__grow':''}>
			<div className="main__parent">
				<HeaderSecond myKey={'profile'}/>
				  <Profile/>
				  <ProfileBlur />
				 {/* <Profile2 />*/}
			</div>
		</main>
	);
};

export default MainProfile;
