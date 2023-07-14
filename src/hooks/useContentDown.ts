import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useEffect, useState } from 'react';
import { SET_TIMER } from 'redux/slicers/timerSlicer';
import { useLazyGetGameInfoQuery } from 'services/query';

const useCountdown = () => {
	const [countDown, setCountDown] = useState<number | undefined>(undefined);
	const { address, token } = useAppSelector(state => state.web3.user.infoUser);
	const {minutes, seconds} = useAppSelector(state => state.timer);
	const dispatch = useAppDispatch();
	const [trigger, {data: timer}] = useLazyGetGameInfoQuery();

	useEffect(()=>{
		if (minutes === '0' && seconds === '0') {
			trigger({address, token}).then(({data}) => {
				setCountDown(data && data?.timeframeMs / 1000);
				dispatch(SET_TIMER(data && data?.timeframeMs / 1000));
			});
		}
		else {
			setCountDown((+minutes * 60) + +(seconds));
		}
	},[minutes, seconds]);

	useEffect(() => {
		if (countDown) {
			const interval = setInterval(() => {
				setCountDown(countDown - 1);
			}, 1000);

			if (countDown === 0) {
				clearInterval(interval);
			}
			return () => clearInterval(interval);
		}
	}, [countDown, timer]);

	return getReturnValues(countDown, timer?.timeframeMs);
};

const getReturnValues = (countDown: any, timer: any) => {
	const minute = Math.floor(countDown / 60).toString();
	const second = (countDown - +minute * 60).toString();

	if (minute === 'NaN' && second === 'NaN') {
		return ['', '', timer];
	}
	else {
		return [minute, second];
	}
};

export { useCountdown };