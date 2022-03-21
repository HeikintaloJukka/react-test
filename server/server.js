const express = require("express");
const helmet = require("helmet");
const api = require('./api/api');
const util = require('./util/util');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(helmet());

//allows post params in req.body
app.use(express.json());

//Allows CORS from other ips
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//all api routes
app.use('/api', api)

//route everything else to /api
app.all("*", (req, res) => {
  console.log('WARN failed path: '+req.method+' ',util.fullUrl(req),' time: ', Date.now())
  res.writeHead(303, {
    location: util.urlNoPath(req)+'/api',
  });
  res.end();
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});