import './LandingPage.css';

import { useAppSelector } from 'hooks/redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Cover from '../../components/Cover/Cover';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Pay from '../../components/Pay/Pay';
import Person from '../../components/Person/Person';
import Platform from '../../components/Platform/Platform';
import Social from '../../components/Social/Social';
import Start from '../../components/Start/Start';
import Works from '../../components/Works/Works';

const LandingPage = () => {
	const {address, token} = useAppSelector(state => state.web3.user.infoUser);
	const navigate = useNavigate();

	useEffect(() => {
		if (address && token) {
			navigate('/prediction');
		}
		else {
			navigate('/');
		}
	}, [address, token]);

	return (
		<>
			<Header/>
			<Cover/>
			<Pay/>
			<Person/>
			<Works/>
			<Platform/>
			<Start/>
			<Social/>
			<Footer/>
		</>
	);
};

export default LandingPage;
