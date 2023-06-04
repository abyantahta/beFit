import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {RxHamburgerMenu} from 'react-icons/rx'
function Header() {
    const [drawer,setDrawer] = useState(false)
  return (
    <header>
        <div className="headerContainer">
            <div className="left">
                <div className="img">
                    <img src="" alt="" />
                </div>
                <h2>BeFit</h2>
            </div>
            <div className="right">
                <nav className={(drawer? 'hide': '')}>
                    <ul>
                        <li>
                            <Link to='../' className='navItem'>Home</Link>
                        </li>
                        <li>
                            <Link to='../food' className='navItem'>Food</Link>
                        </li>
                        <li>
                            <Link className='navItem'>Workout</Link>
                        </li>
                        <li>
                            <Link className='navItem'>Bookmark</Link>
                        </li>
                        <li>
                            <Link className='navItem'>Article</Link>
                        </li>
                    </ul>
                <Link to='../login' className="headerToLogin">Login</Link>
                </nav>
                <i onClick={(e)=>setDrawer(!drawer)} ><RxHamburgerMenu/></i>
            </div>
        </div>
    </header>
  )
}

export default Header