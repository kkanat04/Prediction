import { createSlice} from '@reduxjs/toolkit';

import { IPerson } from './../../interface/IPerson';

type modalState = {
	openState: boolean,
	activeItem: IPerson | null
}

const initialState:modalState = {
	openState:false,
	activeItem:null,
};

const detailsSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openModal(state,action){
			state.openState=action.payload;
		},
		getItem(state,action){
			state.activeItem=action.payload;
		},
	},
});

export const {openModal,getItem} = detailsSlice.actions;
export default detailsSlice.reducer;

