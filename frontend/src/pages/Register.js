import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {BsEye,BsEyeSlash} from 'react-icons/bs'
import logo from '../images/logo.png'
import axios from 'axios'

function Register() {
  const [passwordType,setPasswordType] = useState('password')
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')
  const [confirmPasswordType,setConfirmPasswordType] = useState('password')
  const [confirmPassword, setConfirmPassword] = useState('')

  const toggleShowPassword = () =>{
    if(passwordType==='password')
    {
      setPasswordType('text')
      return
    }
    setPasswordType('password')
  }
  const toggleShowConfirmPassword = () =>{
    if(confirmPasswordType==='password')
    {
      setConfirmPasswordType('text')
      return
    }
    setConfirmPasswordType('password')
  } 
  const handleSubmit = async(e)=>{
    e.preventDefault();

    if(password !== confirmPassword) {
      console.error("Password Tidak Sesuai");
      return
    }
    try{
      const data = {
        username,
        email,
        password,
        confirm_password : confirmPassword
      }
      const response = await axios.post('https://capstone-dicoding-backend.up.railway.app/register', data)
      console.log(response)
    }
    catch(error){
      console.log(error)
    }
  }
  
  return (
    <div id="register">
      <div className="registerContainer">
                <div className="formContainer">
          <form action="" onSubmit={handleSubmit}>
            <div className="inputArea">
              <input type="text" id='inputUsername'placeholder='Username'  onChange={(e)=>setUsername(e.target.value)}/>
              <label hidden="hidden" htmlFor="inputUsername"></label>
            </div>
            <div className="inputArea">
              <input type="email" id='inputEmail'placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
              <label hidden="hidden" htmlFor="inputEmail"></label>
            </div>

            <div className="inputArea">
              <input type={passwordType} id='inputPassword' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
              <label hidden="hidden" htmlFor="inputPassword"></label>
              <i onClick={toggleShowPassword}>
                { 
                (passwordType==='password'?
                  <BsEyeSlash/>
                  :
                  < BsEye/>
                )}
                </i>
            </div>
              <div className="inputArea">
              <input type={confirmPasswordType} id='inputConfirmPassword' placeholder='Confirm Password' onChange={(e)=>setConfirmPassword(e.target.value)} />
              <label hidden="hidden" htmlFor="inputConfirmPassword"></label>
              <i onChange={toggleShowConfirmPassword}>
                { 
                (confirmPasswordType==='password'?
                  <BsEyeSlash/>
                  :
                  < BsEye/>
                )}
                </i>
            </div>
            <button className="signIn">Sign Up</button>
            <p>Don't have an account? <Link to='../login' className='link'>Sign In</Link></p>
          </form>
        </div>
        <div className="beFitBrand">
          <h2 className="brandName">BeFit.</h2>
          <p className="brandTakeline"><span>
            Get Your Ideal Body <br /></span>
            Maintain Your Ideal Weight
            </p>
          <div className="imgArea">
            <img src={logo} alt="" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Register