import './Person.css';
import 'swiper/css';
import 'swiper/css/pagination';

import {useAppDispatch} from 'hooks/redux';
import {useAppSelector} from 'hooks/redux';
import { useConnectWallet } from 'hooks/useConnectWallet';
import { useCallback, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import { useGetPersonQuery, useSetPersonUserMutation } from 'services/query';
import {Navigation,Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import { imgDomain } from 'utils/imgDomain';

import block from '../../assets/toys/bloc.svg';
import {getItem, openModal} from '../../redux/slicers/modalSlice';
import ChooseToy from './ChooseToy/ChooseToy';
import Oreo from './Oreo/Oreo';

const Person = () => {
	const {connectWallet} = useConnectWallet();
	const {openState, activeItem} = useAppSelector(state => state.modal);
	const {connected, infoUser} = useAppSelector(state => state.web3.user);
	const {data} = useGetPersonQuery();
	const [trigger] = useSetPersonUserMutation();
	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (connected && activeItem && infoUser.address && infoUser.token) {
			trigger({id: activeItem?.id, address: infoUser.address, token: infoUser.token}).then(() => {
				navigate('/prediction');
			});
		}
	}, [infoUser.address, infoUser.token, connected]);

	const changeModal = useCallback(() => {
		dispatch(openModal(!openState));
	}, [openState]);

	const sendItem = useCallback((item:any) =>{
		dispatch(getItem(item));
	},[]);

	return (
		<section id="person">
			<div className="container">
				<h2>Choose and customize <br/>your character</h2>
				<p className="reuse-text">Customize your skin, body type, eyes color, haircut, and more.
                    Dress your digital character up with branded clothes</p>
				<Swiper
					centeredSlides ={true}
					slidesPerView={3}
					slidesPerGroup={1}
					spaceBetween={30}
					navigation={true}
					loop={true}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination, Navigation]}
					breakpoints={{
						0: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						640: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						820: {
							slidesPerView: 1,
							spaceBetween: 40,
						},
						1200: {
							slidesPerView: 3,
							spaceBetween: 0,
						},

					}}
					className="mySwiper"
				>

					{data && data.map(el => {
						return (
							<SwiperSlide key={el.id}>
								<div className="person__box person__alt">
									<div className="person__box-wrap">
										<LazyLoadImage src={imgDomain(el.imgId)}
											alt="person"
										/>
										<img className="person__block" src={block} alt="block"/>
									</div>
									<div className="person__active">
										<p>{el.name}</p>
										<p>{el.description}</p>
										<button onClick={()=>{dispatch(openModal(!openState));sendItem(el);}}>{`Play with ${el.name.split(' ')[1]}`}</button>
									</div>
								</div>
							</SwiperSlide>
						);
					})}

				</Swiper>

				{openState && <ChooseToy changeModal={changeModal} callModal={connectWallet} sendItem={sendItem}/>}
				<Oreo/>

			</div>
		</section>
	);
};

export default Person;
