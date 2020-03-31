import { PORT } from './config';
const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const login = require('./handlers/login');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors({
  origin: true
}));

app.get('/', (req: any, res: any) => {
  console.log('new req comming',req);
  res.send('Hello World!',);
});

app.post('/login/checklogin/', (request: any,response: any) =>
  login.login(request,response)
);

app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`),
);
