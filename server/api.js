const api = require('express').Router();
const forecastService = require('./forecastService');
module.exports = api;

const mockJson = require('../pvoptimizer/mock/db.json');

api.get('/api/mockdata', (req, res) => {
  res.send(mockJson.path);
});

api.get('/api/forecast', (req, res) => {
  console.log('fc');
  getForecastMapped().then((mappedData) => {
    res.send(mappedData);
  });
});

async function getForecastMapped() {
  const forecast = await forecastService.getForecast();

  const mappedData = { data: [], tip: ""};
  let hour = 0;
  let sum = 0;
  for (let i = 0; i < forecast.result.length; i++) {
    sum = sum + forecast.result[i];
    if(i % 4 === 0) {
      const hourData = {
        hour: hour,
        yield: getYield(hour),
        devices: [{
          name: "Allgemein",
          consumption: sum * 1000
        }]
      };
      hour = hour + 1;
      mappedData.data.push(hourData);
      sum = 0;
    }
  }
  mappedData.data[10].devices.push({
    name: "Waschmaschine",
    consumption: 600
  });
  mappedData.tip = "Die Wäsche sollte anstelle um 10Uhr um 11Uhr gewaschen werden";
  return mappedData;
}

api.get('/api/ping', (req, res) => {
  res.send('api works');
});

function getYield(hour) {
  const MOCK_YIELD = [0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    600,
    200,
    3000,
    5000,
    5200,
    5400,
    5100,
    3000,
    300,
    0,
    0,
    0,
    0,
    0,
    0];
  return MOCK_YIELD[hour]/3;
}
