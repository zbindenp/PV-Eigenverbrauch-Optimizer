const api = require('express').Router();
const forecastService = require('./forecastService');
module.exports =  api;

const mockJson = require('../pvoptimizer/mock/db.json');

api.get('/api/mockdata',  (req, res) => {
  res.send(mockJson.path);
});

api.get('/api/ping',  (req, res) => {
  res.send("api works");
});

