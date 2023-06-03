import express from 'express'
import mongoose, { mongo } from 'mongoose'
import cors from 'cors'
import connectDB from './config/db.js'
const app = express();

connectDB()

app.use(cors());
app.use(express.json())
// app.use(UserRoute)
app.listen(4000, ()=> console.log("Server running on port 4000"));

// console.log('hai')