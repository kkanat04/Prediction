import './CoverSecond.css';
import './Slider.css';

import leftArrow from 'assets/images/coverLeftArrow.svg';
import rightArrow from 'assets/images/coverRigthArrow.svg';
import {useCallback, useState} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useGetPersonQuery } from 'services/query';
import { imgDomain } from 'utils/imgDomain';


const CoverSecond = () => {

	const [slideIndex, setSlideIndex] = useState<any>(1);
	const {data} = useGetPersonQuery();

	const nextSlide = useCallback(() => {
		if (slideIndex !== data?.length) {
			setSlideIndex(slideIndex + 1);
		}
	},[slideIndex]);

	const prevSlide = useCallback(() => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1);
		}
	},[slideIndex]);


	return (
		<div className="cover__second">
			{data && data.map((el, i) => {
				return (
					<div key={el.id}
						className={slideIndex === i+1 ? 'cover__data slide active-anim' : 'cover__data slide'}>
						<div className="cover__img">
							<LazyLoadImage src={imgDomain(el.imgId)}
								alt="person"
							/>
						</div>
						<div className="cover__second-group">
							<p>{`${(i+1).toString().length === 1 ? `0${i+1}` : i+1}`}</p>
							<p>{el.name}</p>
							<p>{el.description}</p>
							<div className="cover__second-buttons-wrap">
								<div
									className={slideIndex === 1 ? 'cover__second-disable isDisabled' : 'cover__second-arrows'}
									onClick={prevSlide}>
									<img src={leftArrow} alt="arrow"/>
								</div>
								<div
									className={slideIndex === data.length ? 'cover__second-disable isDisabled' : 'cover__second-arrows'}
									onClick={nextSlide}>
									<img src={rightArrow} alt="arrow"/>
								</div>
							</div>
						</div>
					</div>
				);
			})}


		</div>
	);
};

export default CoverSecond;
