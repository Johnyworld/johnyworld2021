import express from 'express';
import api from './api/index';
import bodyParser from 'body-parser';

const app = express();
const root = require('path').join(__dirname, '..', 'client', 'build');

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// app.use(bodyParser.json());
app.use('/api', api);

app.use(express.static(root));

app.get("*", (req, res) => { res.sendFile('index.html', { root }); })

const port = process.env.PORT || 4004;
app.listen(port, () => console.log(`Listening on port ${port}...`));
