const port = process.env.PORT || 8080;
const fcEndpoint = process.env.ENDPOINT ||'http://f2ab241e-e115-4420-aa54-8656151b5909.westeurope.azurecontainer.io/score';

module.exports = { port, fcEndpoint }
