import '../PredictionPage/PredictionPage.css';

import Footer from '../../components/Footer/Footer';
import MainProfile from '../../components/prediction/MainProfile/MainProfile';
import ProfileBlur from '../../components/prediction/ProfileBlur/ProfileBlur';
import Sidebar from '../../components/prediction/Sidebar/Sidebar';


const ProfilePage = () => {
	return (
		<>
			<section id="predictionPage" className="alternativePage">
				<Sidebar/>
				<MainProfile/>
			</section>
			<div className="alternativePage__wrap">
				<Footer/>
			</div>
		</>
	);
};

export default ProfilePage;
