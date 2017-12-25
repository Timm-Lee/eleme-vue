const express = require('express');

const app = express();

const appData = require('../data.json');
const seller = appData.seller;
const goods = appData.goods;
const ratings = appData.ratings;

const apiRouters = express.Router();

apiRouters.get('/seller', function (req, res) {
  res.json({
    errno: 0,
    data: seller
  });
});

apiRouters.get('/goods', function (req, res) {
  res.json({
    errno: 0,
    data: goods
  });
});

apiRouters.get('/ratings', function (req, res) {
  res.json({
    errno: 0,
    data: ratings
  });
});

app.use('/api', apiRouters);

app.listen(3333, function () {
  console.log('server is listening on 3333');
});
