import { createSlice} from '@reduxjs/toolkit';

type initialStateType = {
	sort: 'DESC' | 'ASC'
	search: string
}

const initialState: initialStateType = {
	sort: 'DESC',
	search: '',
};

const leaderSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		SET_SORT(state) {
			state.sort = state.sort === 'DESC' ? 'ASC' : 'DESC';
		},
		SET_SEARCH(state, action) {
			state.search = action.payload;
		},
	},
});

export const {SET_SORT, SET_SEARCH} = leaderSlice.actions;
export default leaderSlice.reducer;

