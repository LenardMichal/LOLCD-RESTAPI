//Dependencies
const express = require('express');
const mongoose = require('mongoose');

const accessControlHeaders = require('./middlewares/accessControlHeaders');

const URI_ATLAS =
  'mongodb+srv://randomTestUser:radomtestpassword01@lol-cd-cluster-xlehp.mongodb.net/test';
const URI_DEVIL =
  'mongodb://mongoTestUser:password01@mongo29.mydevil.net/mo1163_lolapp';

//Initialize
const app = express();

app.use(accessControlHeaders);

mongoose
  .connect(URI_DEVIL, { useNewUrlParser: true })
  .catch(err => console.log(err));

app.listen(8080, () => {
  console.log('Server listening');
});
