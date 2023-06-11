const bcrypt = require('bcryptjs')
const newClient = require('./connection')
const { resolve } = require('path')
const { reject } = require('bluebird')
const register=(data)=>{
    return new Promise(async(resolve, reject)=>{
        const hashedPassword = await bcrypt.hash(data.password, 8)
        const client = newClient()
        client.connect()
        console.log('palpale')
        client.query(`INSERT into public.user(username, email, password, phone_number, name)
        values('${data.username}','${data.email}','${hashedPassword}','${data.phone_number}', '${data.name}')`, (err)=>{
            console.log('palpale')
            if(err){
                reject(err.message)
            }
            resolve({message : "Register success"})
            client.end()
        })
    })
}

const login=(data)=>{
    return new Promise(async(resolve, reject)=>{
        const client = newClient()
        client.connect()
        client.query(`SELECT * from public.user where username = '${data.username}'`, async (err, result)=>{
            if(err){
                reject(err.message)
            }
            if(!result.rows[0]){
                reject({message : "Data Tidak Ditemukan"})
            }
            const match = await bcrypt.compareSync(data.password, result.rows[0].password)
            if(!match){
                reject({ message : "Password Salah"})
            }
            resolve({message : "Login success", data : result.rows[0]})
            client.end()
        })
    })
}

module.exports = {
    register,
    login
}