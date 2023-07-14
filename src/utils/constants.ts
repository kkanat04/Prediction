import first from '../assets/toys/1.png';
import second from '../assets/toys/2.png';
import third from '../assets/toys/3.png';
import fourth from '../assets/toys/4.png';

export const randomColor = ()=> Math.floor(Math.random()*16777215).toString(16);


export const dataAccordion = [
	{
		id: 1,
		img: first,
		head: 'Heading Heading',
		title: '01',
		name: 'Choose your character',
		text: 'Likes to invite bears to beer. His special power is fall in love with bear girls in 2 seconds.',
	},
	{
		id: 2,
		img: second,
		head: 'Heading Heading Heading',
		title: '02',
		name: 'Choose your character',
		text: 'Likes to invite bears to beer. His special power is fall in love with bear girls in 2 seconds.',
	},
	{
		id: 3,
		img: third,
		head: 'Heading Heading Heading Heading',
		title: '03',
		name: 'Choose your character',
		text: 'Likes to invite bears to beer. His special power is fall in love with bear girls in 2 seconds.',
	},
	{
		id: 4,
		img: fourth,
		head: 'Heading',
		title: '04',
		name: 'Choose your character',
		text: 'Likes to invite bears to beer. His special power is fall in love with bear girls in 2 seconds.',
	},
];

export const dataRest = [
	{
		id:4,
		place:4,
		userId:'0xwrD7...be0',
		img:first,
		winRate:'58,07',
		netWinning:'+6 777,345386',
		roundsWon:'4 395',
		roundsPlayed:'7 568',
	},
	{
		id:5,
		place:5,
		userId:'SDwrD7...be0',
		img:second,
		winRate:'60,07',
		netWinning:'+6 777,345386',
		roundsWon:'4 395',
		roundsPlayed:'7 568',
	},
	{
		id:6,
		place:6,
		userId:'0xwrD7...be0',
		img:third,
		winRate:'58,07',
		netWinning:'+6 777,345386',
		roundsWon:'4 395',
		roundsPlayed:'7 568',
	},
];

export const profileStatisticDays = ['24H', '1D', '7D', '1M', '6M', '1Y'];


export const rechartsData = [
	{
		name: 'Mon',
		uv: 0,
	},
	{
		name: 'Tue',
		uv: 50,
	},
	{
		name: 'Wed',
		uv: 10,
	},
	{
		name: 'Thu',
		uv: 30,
	},
	{
		name: 'Fri',
		uv: 15,
	},
	{
		name: 'Sat',
		uv: 60,
	},
	{
		name: 'Sun',
		uv: 25,
	},
];
