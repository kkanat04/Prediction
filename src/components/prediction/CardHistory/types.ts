import { IGameInfo } from 'interface/IGameInfo';

export type Props = {
	liveData: {
		status:string,
		cardId:string,
		lastPrice:number | null,
		betPrice:number | null,
		lockedPrice:number | null,
		prizePool:number | null
	}
	timer?: IGameInfo
}

