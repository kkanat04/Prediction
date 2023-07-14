export const getLatestRound = (currentRound: number) => {
	const res = [];
	const chekiang = currentRound > 10 ? 10 : currentRound - 1;

	for (let i = 0; i <= chekiang; i++) {
		if (currentRound > 10 && i > 0) {
			res.push(currentRound - i);
		}
		else if (i > 0) {
			res.push(currentRound - i);
		}
	}
	return res.reverse();
};