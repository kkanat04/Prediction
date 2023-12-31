import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InfoType = {
	address: string,
	token: string
}

type initialStateType = {
	user: {
		infoUser: InfoType
		connected: boolean
	},
}

const initialState: initialStateType = {
	user: {
		infoUser: {
			address: '',
			token: '',
		},
		connected: false,
	},
};

const Web3Slicer = createSlice({
	name: 'web3Slicer',
	initialState,
	reducers: {
		SET_ADDRESS(state, action: PayloadAction<string>) {
			state.user.infoUser.address = action.payload;
		},
		SET_INFO_USER(state, action: PayloadAction<InfoType>) {
			state.user.infoUser = action.payload;
		},
		SET_CONNECTED(state, action: PayloadAction<boolean>) {
			state.user.connected = action.payload;
		},
	},
});

export const { SET_ADDRESS, SET_INFO_USER, SET_CONNECTED } = Web3Slicer.actions;
export default Web3Slicer.reducer;