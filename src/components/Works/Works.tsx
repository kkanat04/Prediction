import './Works.css';

import {useCallback, useState} from 'react';
import { dataAccordion } from 'utils/constants';



const Works = () => {

	const [selected, setSelected] = useState<any>(1);


	const toggleAccordion: any = useCallback((id: number) => {
		if (selected === id) {
			return setSelected(null);
		}
		setSelected(id );
	},[selected]);


	return (
		<section id="works">
			<div className="container">
				<h2>How It Works</h2>
				<p className="reuse-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.</p>
				<div className="works__wrap">


					{dataAccordion && dataAccordion.map((el: any, index: number) => {
						return (
							<div className={'works__flex'} key={el.id}>
								<div
									onClick={() => toggleAccordion(index)}
									className={selected === index ? 'works__child works__child-show' : 'works__child'}>
									<p className="works__number">{el.title}</p>
									{el.head.split(' ').map((item:string,i:number)=>{
										return(
											<p className="works__split" key={i}>{item}</p>
										);
									})}
								</div>
								<div
									className={selected === index ? 'works__open works__show' : 'works__open'}>
									<div className="works__forPadding">
										<div className="works__open-first">
											<p className="works__number">{el.title}</p>
											<img src={el.img} alt="person"/>
										</div>
										<div className="works__open-second">
											<p>{el.name}</p>
											<p>{el.text}</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}


				</div>
			</div>
		</section>
	);
};

export default Works;
