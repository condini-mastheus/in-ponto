const functions = require('firebase-functions');
const admin = require("firebase-admin");
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

// routes
const routers = require('./routers');

const app = express();

admin.initializeApp(functions.config().firebase);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());

app.get('/', (req, res) => {
  res.send('<code>Version: 1.0.0')
});

routers(app)

exports.api = functions.https.onRequest(app);
