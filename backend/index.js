const express=require('express');
const router =  require('./routes/router');
const cors = require('cors')
const { register, login } = require('./auth');
const app = express();
app.use(cors());
app.use('/api', router)

app.use(express.json());
app.get("/",(req, res)=>{
    res.json({message:"Berhasil Register"})
})
app.post("/register", (req, res)=>{
    try {
        console.log(req.body)
        if(!(req.body.username && req.body.email && req.body.password && req.body.phone_number && req.body.name)){
            res.status(400).json({message : "Data Belum Lengkap"})
        }
        if(!req.body.username.length>=3){
            res.status(400).json({message : "Username Tidak Mencukupi"})
        }
        if(!req.body.password.length>=6){
            res.status(400).json({message : "Password Minimal 6 Karakter"})
        }
        return register(req.body).then((result)=>{
            res.json(result)
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
})

app.post("/login", (req,res) => {
    try {
        if(!(req.body.username && req.body.password)){
            res.status(400).json({message:"Data Belum Lengkap"})
        }
        return login(req.body).then((result) => {
            res.json(result)
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
})

app.listen(8080, ()=>{
    console.log("apps jalan")
})
