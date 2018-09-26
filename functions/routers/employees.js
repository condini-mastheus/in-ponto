const express = require('express')
const admin = require("firebase-admin");

const router = express.Router()

router.get('/', async (req, res) => {
  res.send('<code>Version: 1.0.0')
})

module.exports = app => app.use('/employees', router);