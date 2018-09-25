const express = require('express')
const admin = require("firebase-admin");

const router = express.Router()

console.log(process.env)
router.get('/', async (req, res) => {
    await admin.database().ref('employees').on('value', snapshot => {
        const users = snapshot.val()
        res.send(users);
    }, (error) => {
        res.send(new Error(error))
    })
})

router.post('/', async (req, res) => {
    await admin.database().ref('employees').on('value', snapshot => {
        const users = snapshot.val()
        res.send(users);
    }, (error) => {
        res.send(new Error(error))
    })
})

module.exports = app => app.use('/employees', router);