const express = require("express");
const api = require('./api/api');
const util = require('./util/util');

const PORT = process.env.PORT || 3001;

const app = express();

//allows post params in req.body
app.use(express.json());

//Allows CORS from other ips
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//all api routes
app.use('/api', api)

//route everything else to /api
app.all("*", (req, res) => {
  console.log('WARN failed path: '+req.method+' ',util.fullUrl(req),' time: ', Date.now())
  res.writeHead(303, {
    location: "http://127.0.0.1:3001/api",
  });
  res.end();
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});