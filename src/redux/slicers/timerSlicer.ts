import { createSlice} from '@reduxjs/toolkit';

type initialStateType = {
	minutes: string
	seconds: string
	timer: number
}

const initialState: initialStateType = {
	minutes: '',
	seconds: '',
	timer: 0,
};

const timerSlicer = createSlice({
	name: 'timer',
	initialState,
	reducers: {
		SET_MINUTE_SECONDS(state, action) {
			state.seconds = action.payload.second;
			state.minutes = action.payload.minute;
		},
		SET_TIMER (state, action) {
			state.timer = action.payload;
		},
	},
});

export const {SET_MINUTE_SECONDS, SET_TIMER} = timerSlicer.actions;
export default timerSlicer.reducer;

