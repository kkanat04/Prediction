import './ChooseToy.css';

import exit from 'assets/images/reject.png';
import block from 'assets/toys/bloc.svg';
import {useAppSelector} from 'hooks/redux';
import {useEffect} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useGetPersonQuery } from 'services/query';
import { imgDomain } from 'utils/imgDomain';

import LetsPlayBtn from '../../LetsPlayBtn/LetsPlayBtn';


type Props = {
	callModal: () => void
	sendItem: (item: any) => void
	changeModal: () => void
}

const ChooseToy = ({callModal, sendItem, changeModal}: Props) => {

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, []);

	const {data} = useGetPersonQuery();

	const {activeItem} = useAppSelector(state => state.modal);


	return (
		<div onClick={changeModal} className="chooseToy backdrop">
			<div onClick={e => e.stopPropagation()} className="modal">

				<p className="chooseToy__title">Select Your Character</p>
				<img
					onClick={changeModal}
					src={exit} alt="exit"
					className="chooseToy__exit"
				/>
				<div className="row chooseToy__row">

					<div className="col-4 chooseToy__col-overflow chooseToy__col-1">
						<div className="row chooseToy__box-first">
							{data && data.map(el => {
								return (
									<div className="col-6" key={el.id}>
										<div
											onClick={() => sendItem(el)}
											className={`${activeItem?.id === el.id ? 'chooseToy__box-toy chooseToy__active' : 'chooseToy__box-toy'}`}>
											<img src={imgDomain(el.imgId)} alt=""/>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					<div className="col-4 chooseToy__col-2">
						<div className="chooseToy__box">
							<p className="chooseToy__box-name">{activeItem?.name}</p>
							<p className="chooseToy__box-description">{activeItem?.description}</p>
							<div className="chooseToy__abilities">
								<p className="chooseToy__nameOfParams">speed</p>
								<div className="chooseToy__range">
									<div
										style={{width: activeItem?.speed + '%'}}
										className="chooseToy__range-child"
									>
									</div>
								</div>

								<p className="chooseToy__nameOfParams">intuition</p>
								<div className="chooseToy__range">
									<div
										style={{width: activeItem?.intuition + '%'}}
										className="chooseToy__range-child"
									>
									</div>
								</div>

								<p className="chooseToy__nameOfParams">LOGICS</p>
								<div className="chooseToy__range">
									<div
										style={{width: activeItem?.logic + '%'}}
										className="chooseToy__range-child"
									>
									</div>
								</div>
							</div>
							<LetsPlayBtn letsFunc={callModal}/>
						</div>
					</div>

					<div className="col-4 chooseToy__col-3">
						<div className="chooseToy__box chooseToy__box-third">
							<div className="chooseToy__img">
								<LazyLoadImage src={imgDomain(activeItem?.imgId as string)}
									alt="person"
								/>
								<img src={block} alt="block"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChooseToy;
