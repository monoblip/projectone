//asyncronous vs syncrounous
//es6 function

import fetch from 'node-fetch';

const primary = (cb) => {
	cb('This is the primary function biznatch');
}

const secondary = (sentence) => {
	console.log(sentence);
}

async function getTeslaStockPrice() {
	try {
		const response = await fetch('https://query1.finance.yahoo.com/v8/finance/chart/TSLA');
		const data = await response.json();
		const price = data.chart.result[0].meta.regularMarketPrice;
		console.log(`The current stock price of Tesla is $${price}`);
	} catch (error) {
		console.error('Error fetching data', error);
	}
}

getTeslaStockPrice();
primary(secondary);