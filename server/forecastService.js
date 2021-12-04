const fs = require('fs');
const csvParser = require("csv-parse");
const { AnomalyDetectorClient } = require('@azure/ai-anomaly-detector');
const { AzureKeyCredential } = require('@azure/core-auth');

const config = require('./config');

const CSV_FILE = './consumption_3_weeks_geschirrspuehler.csv';
function getForecast() {
}

module.exports = { getForecast }
