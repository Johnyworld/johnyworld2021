import express from 'express';
import api from './api/index';
import bodyParser from 'body-parser';
const path = require('path');

const app = express();
const clientApp = path.join(__dirname, 'build');

// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

// app.use(bodyParser.json());
// app.use('/api', api);;
app.use(express.static(clientApp));

app.use('*', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './build', 'index.html')); 
// });

const port = 4004;
// const port = process.env.PORT || 4004;
app.listen(port, () => console.log(`Listening on port ${port}...`));
