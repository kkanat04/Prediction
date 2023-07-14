import { DOMAIN } from './../api/index';

export const imgDomain = (id: string) => {
	if (id) {
		return DOMAIN + `/data/resources/game/persons/${id}.png`;
	}
	else {
		return '';
	}
};