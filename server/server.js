const express = require('express');
const app = express();
const port = 3003;
const bodyParser = require('body-parser');
const path = require('path');
const data = require('../database/index');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/../client/dist'));

app.get('/house', (req, res)=> {
  // data.loadFeatures((err, callback) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     callback(null)
  //     res.send("success");
  //   }
  // });

  res.send("data loaded");
});

app.get('/house/:id', (req, res) => {
  data.getFeatures(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(data);
    }
  });
});


app.get('/house/interior/:id', (req, res) => {
  data.getInterior(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

