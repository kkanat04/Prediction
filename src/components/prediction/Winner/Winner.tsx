import './Winner.css';

import filter from 'assets/images/filter-list.svg';
import search from 'assets/images/searchIcon.svg';
import { useAppDispatch } from 'hooks/redux';
import { SET_SEARCH, SET_SORT } from 'redux/slicers/leaderSlice';


const Winner = () => {
	const dispatch = useAppDispatch();

	const sort = () => () => {
		dispatch(SET_SORT());
	};

	const handleChange = (e: any) => {
		if (e.target.value.length >= 3) {
			dispatch(SET_SEARCH(e.target.value));
		}
		else if (e.target.value.length === 0) {
			dispatch(SET_SEARCH(''));
		}
	};

	return (
		<section id="winner">
			<div onClick={sort()} className="winner__filter">
				<img src={filter} alt="filter"/>
				<p>Sort By: Net winnings</p>
			</div>
			<div className="winner__search">
				<input
					onChange={(e) => handleChange(e)}
					type="text"
					placeholder="Search address"
				/>
				<img src={search} alt="search"/>
			</div>
		</section>
	);
};

export default Winner;
