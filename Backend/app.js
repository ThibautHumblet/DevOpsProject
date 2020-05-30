const http = require('http');

const express = require('./node_modules/express');
const logger = require('./logger');
const cors = require('cors');

const hostname = '127.0.0.1';
const app = express();


app.use(cors());
  
  app.get('/', function(req, res, next) {
    res.end(JSON.stringify({ "msg": "De Kazou node-express server werkt!" }));
  });
  
  app.post('/', function(req, res, next) {
    res.end(JSON.stringify({ "msg": "POST request aangekomen!" }));
  });

  const server = http.createServer(app).listen(9000, () => {
    logger.info("Server is up an listening on http://localhost:9000");
});