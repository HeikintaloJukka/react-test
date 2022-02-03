const url = require('url');
/*
* constructs url to show
* example: http://127.0.0.1:3001/api/order
*/
function fullUrl(req) {
    return url.format({
      protocol: req.protocol,
      host: req.get('host'),
      pathname: req.originalUrl
    });
  }

function test(req) {
    console.log("util test");
  }

module.exports.fullUrl = fullUrl;
module.exports.test = test;