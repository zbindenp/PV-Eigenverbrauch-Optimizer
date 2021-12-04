const port = process.env.PORT || 8080;
const key = process.env.KEY || '7f08bc1d078c48ab8fa1504ebbf7d848';
const endpoint = process.env.ENDPOINT ||'https://pv-optimizer.cognitiveservices.azure.com/';

module.exports = { port, key, endpoint }
