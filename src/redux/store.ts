import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { PredictionApi } from './../services/query';
import leaderSlice from './slicers/leaderSlice';
import modalSlice from './slicers/modalSlice';
import timerSlicer from './slicers/timerSlicer';
import Web3Slicer from './slicers/Web3Slicer';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['modal', 'leader', 'timer', PredictionApi.reducerPath],
};
const rootReducer = combineReducers({
	modal: modalSlice,
	web3: Web3Slicer,
	timer: timerSlicer,
	[PredictionApi.reducerPath]: PredictionApi.reducer,
	leader: leaderSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(PredictionApi.middleware),
});

export default store;
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;