import Web3 from 'web3';

export const web3Provider = new Web3(Web3.givenProvider || 'http://localhost:3000' || 'https://bsc-dataseed1.binance.org:443');