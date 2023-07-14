import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { DOMAIN, PREFIX_COMPANY, Routes } from './../api/index';
import { IGameInfo } from './../interface/IGameInfo';
import { ILeaderboard } from './../interface/ILeaderboard';
import { INonse } from './../interface/INonse';
import { IPerson } from './../interface/IPerson';
import { ISetPersonUser } from './../interface/ISetPersonUser';
import { IVerifyToken } from './../interface/IVerifyToken';

type addressTokenType = {
	address: string,
	token: string,
}

type sortSearchType = {
	address: string,
	token: string,
	sort: string
	search?: string
}

type ISetPersonUserType = {
	id: string
	address: string
	token: string
}

export const PredictionApi = createApi({
	reducerPath: 'PredictionApi',
	baseQuery: fetchBaseQuery({ baseUrl: DOMAIN + PREFIX_COMPANY }),
	endpoints: (builder) => ({
		// query

		getAuthNonse: builder.query<INonse, string>({
			query: (address) => `${Routes.get.nonce}/${address}`,
		}),
		authVerify: builder.query<IVerifyToken, addressTokenType>({
			query: ({address, token}) => `${Routes.get.authVerify}${address}/${token}`,
		}),
		getGameInfo: builder.query<IGameInfo, addressTokenType>({
			query: ({address, token}) => `${Routes.get.gameInfo}address=${address}&token=${token}`,
		}),
		getLeaderboard: builder.query<ILeaderboard, sortSearchType>({
			query: ({address, token, sort, search}) => `${Routes.get.leaderboard}/${sort}${search ? `?search=${search}&` : '?'}address=${address}&token=${token}`,
		}),
		getPerson: builder.query<IPerson[], void>({
			query: () => `${Routes.get.person}`,
		}),

		// mutation

		setPersonUser: builder.mutation<ISetPersonUser, ISetPersonUserType>({
			query: ({id, address, token}) => {
				return {
					url: `${Routes.post.setPersonUser}/${id}/user/${address}/save?address=${address}&token=${token}`,
					method: 'POST',
				};
			},
		}),
	}),
});

export const { useLazyGetAuthNonseQuery, useLazyAuthVerifyQuery, useLazyGetGameInfoQuery, useLazyGetLeaderboardQuery, useGetPersonQuery, useSetPersonUserMutation } = PredictionApi;