const fs = require('fs');
const csvParser = require("csv-parse");
const { AnomalyDetectorClient } = require('@azure/ai-anomaly-detector');
const { AzureKeyCredential } = require('@azure/core-auth');
const fetch  = require('node-fetch');

const config = require('./config');
const forecastConfig = { days: 1};

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}


function generateTimesForDay(day, times) {
  for (let i = 1; i <= 24; i++) {
    const time = new Date(day);
    time.setHours(i);
    times.push(time.toISOString());
    for (let j = 1; j < 4; j++) {
      const minuteInterval = 15;
      const minute = new Date(time);
      minute.setMinutes(minuteInterval * j);
      times.push(minute.toISOString());
    }
  }
}


async function getForecast() {
  let day = new Date();
  day.setHours(0);
  day.setMinutes(0);
  day.setSeconds(0);
  day.setMilliseconds(0);
  const times = [];
  for (let i = 0; i < forecastConfig.days; i++) {
    day = day.addDays(i);
    generateTimesForDay(day, times);
  }
  console.log(times[0]);
  console.log(times[times.length - 1]);
  const req = {
    data: times,
    quantiles: [
        0.025, 0.975
    ]
  }
  const data =  await postData(config.fcEndpoint, req)
  console.log('got data from azure');

  return {times, result: data.forecast};
}

// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      'Content-Type': 'application/json'
    },
     body: JSON.stringify(data)
  });
  return JSON.parse(await response.json());
}

module.exports = { getForecast }
