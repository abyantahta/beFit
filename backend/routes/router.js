const express = require('express')
const Calculator = require('../controllers/Calculator')
const router = express.Router()

// console.log(calculator)
router.route('/calculateBMI').post(Calculator)

module.exports = router