import './App.css';

import { useCheckAccountChanged } from 'hooks/useCheckAccountChanged';
import { useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {SidebarContext} from 'utils/SidebarContext';

import {useAppSelector} from './hooks/redux';
import LandingPage from './pages/LandingPage/LandingPage';
import LeaderboardPage from './pages/LeaderboardPage/LeaderboardPage';
import PredictionPage from './pages/PredictionPage/PredictionPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SettingsPage from './pages/SettingsPage/SettingsPage';

const App = () => {
	const [toggle, setToggle] = useState<boolean>(false);
	const { checkChanged } = useCheckAccountChanged();
	const {address, token} = useAppSelector(state => state.web3.user.infoUser);

	const toggleFunc = () => {
		setToggle(prev => !prev);
	};

	useEffect(() => {
		checkChanged();
	}, []);

	return (
		<SidebarContext.Provider value={{toggle, toggleFunc}}>
			{
				address && token ?
					<Routes>
						<Route path={'/'} element={<PredictionPage/>}/>
						<Route path={'/leaderboard'} element={<LeaderboardPage/>}/>
						<Route path={'/profile'} element={<ProfilePage/>}/>
						<Route path={'/settings'} element={<SettingsPage/>}/>
					</Routes>
					:
					<Routes>
						<Route path={'/'} element={<LandingPage/>}/>
					</Routes>
			}
		</SidebarContext.Provider>
	);
};

export default App;
