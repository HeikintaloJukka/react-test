import {getWeather} from './api/api.js';
import axios from 'axios';
const config = require('./config.json');

//without this axios returns Network error in jest
//https://stackoverflow.com/questions/42677387/jest-returns-network-error-when-doing-an-authenticated-request-with-axios
axios.defaults.adapter = require('axios/lib/adapters/http');

/*
* TESTS
* to run use react scripts included jest with
* npm run test
*/
const isNumeric = (string) => {
  return !Number.isNaN(string)
} 

test('two plus two is four', () => {
  expect(2 + 2).toEqual(4);
});

test('getWeather is defined number', () => {
	const value = getWeather();
	expect(value).toBeDefined();
	expect(isNumeric(value)).toEqual(true)
});

describe('API order', () => {
	test('succesfully added', async () => {
		const data = await axios.post(config.serverUrl+"/api/order", {
		  nimi: "111",
		  osoite: "111"
		});
		expect(data.data.message).toEqual('Order added succesfully');
		expect(data.status).toEqual(200);
		expect(data.statusText).toEqual('OK');
	});

	test('wrong link', async () => {
		await axios.post(config.serverUrl+"/api/orderR", {
		  nimi: "111",
		  osoite: "111"
		})
		.then(res => {
			expect(res.data).toBeDefined();
			expect(res.data.message).toEqual('Hello from api!');
			expect(res.status).toBeGreaterThanOrEqual(200);
			expect(res.status).toBeLessThan(300);
		})
		.catch(e => {
			throw new Error('Expected succesfull response')
		});
	});

	test('error data', async () => {
		await axios.post(config.serverUrl+"/api/order", {
		  nimi: "error",
		  osoite: "111"
		})
		.then(res => {
			throw new Error('Expected failure response')
		})
		.catch(error => {
			if (error.response) {
				expect(error.response.status).toBeGreaterThanOrEqual(400);
				expect(error.response.status).toBeLessThan(500);
			} else {
				throw error;
			}
		});
	});
});