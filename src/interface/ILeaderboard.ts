export interface Stat {
	address: string;
	place: number;
	name?: any;
	netWinnings: string;
	imgId?: any;
	roundsWon: number;
	roundsPlayed: number;
}

export interface ILeaderboard {
	stats: Stat[];
}