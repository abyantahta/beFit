import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import router from './routes/router.js';
const app = express();

connectDB()

app.use(cors());
app.use(express.json())
app.use(router)
app.listen(4000, ()=> console.log("Server running on port 4000"));

