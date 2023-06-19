import express from 'express'
import  {Calculator}  from '../controllers/Calculator.js'


const router = express.Router()
router.post('/calculateBMI',Calculator)

export default router