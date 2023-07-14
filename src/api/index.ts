export const DOMAIN = 'http://157.90.20.231:8083';
export const PREFIX_COMPANY = '/data/v1.0';

export const Routes = {
	get: {
		nonce: '/auth/nonce',
		authVerify: '/auth/verify/',
		gameInfo: '/chain/game/info?',
		leaderboard: '/chain/game/leaderboard',
		person: '/chain/game/persons',
	},
	post: {
		setPersonUser: '/chain/game/persons/person',
	},
};