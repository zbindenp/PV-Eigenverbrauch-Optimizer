const express = require('express');
const app = express();
const config = require('./config');

app.use('/', express.static('client'));

app.use(require('./api'));

app.listen(config.port, () => {
  console.log("app is started. http://localhost:" + config.port);
});
