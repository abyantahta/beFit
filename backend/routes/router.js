import express from 'express'
import  Calculator  from '../controllers/Calculator.js'


const router = express.Router()
// console.log(calculator)
router.post('/calculateBMI',Calculator)

export default router