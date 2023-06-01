import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {BsEye,BsEyeSlash} from 'react-icons/bs'
function Login() {
  const [passwordType,setPasswordType] = useState('password')
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  
  const toggleShowPassword = () =>{
    if(passwordType==='password')
    {
      setPasswordType('text')
      return
    }
    setPasswordType('password')
  }

  return (
    <div id="login">
      <div className="loginContainer">
        <div className="beFitBrand">
          <div className="imgArea">
            <img src="" alt="" />
          </div>
          <h2 className="brandName">BeFit.</h2>
          <p className="brandTakeline"><span>
            Get Your Ideal Body <br /></span>
            Maintain Your Ideal Weight
            </p>
        </div>
        <div className="formContainer">
          <form action="">
            <div className="inputArea">
              <input type="text" id='inputUsername'placeholder='Username' value={username} onClick={(e)=>setUsername(e.target.value)} />
              <label hidden="hidden" htmlFor="inputUsername"></label>
            </div>
            <div className="inputArea">
              <input type={passwordType} id='inputPassword' placeholder='Password' value={password} onClick={(e)=>setPassword(e.target.value)} />
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
            <button className="signIn">Sign In</button>
            <p>Don't have an account? <Link to='../register' className='link'>Sign Up</Link></p>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Login