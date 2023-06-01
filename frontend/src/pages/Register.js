import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {BsEye,BsEyeSlash} from 'react-icons/bs'
function Register() {
  const [passwordType,setPasswordType] = useState('password')
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')
  const [confirmPasswordType,setConfirmPasswordType] = useState('password')

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
  return (
    <div id="register">
      <div className="registerContainer">
                <div className="formContainer">
          <form action="">
            <div className="inputArea">
              <input type="text" id='inputUsername'placeholder='Username' value={username} onClick={(e)=>setUsername(e.target.value)}/>
              <label hidden="hidden" htmlFor="inputUsername"></label>
            </div>
            <div className="inputArea">
              <input type="email" id='inputEmail'placeholder='Email' value={email}  onClick={(e)=>setEmail(e.target.value)} />
              <label hidden="hidden" htmlFor="inputEmail"></label>
            </div>

            <div className="inputArea">
              <input type={passwordType} id='inputPassword' placeholder='Password' value={password} onClick={(e)=>setPassword(e.target.value)}/>
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
              <input type={confirmPasswordType} id='inputPassword' placeholder='Confirm Password' />
              <label hidden="hidden" htmlFor="inputPassword"></label>
              <i onClick={toggleShowConfirmPassword}>
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
            <img src="" alt="" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Register