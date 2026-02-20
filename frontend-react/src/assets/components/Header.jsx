import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav className='navbar container'>
          <Link className='navbar-brand text-light pt-3 pb-3 align-items-start' to="/">Stock prediction portal</Link>
          <div>
           <Button text='Login' class="btn-outline-info" url='/login'/>
            &nbsp;
           <Button  text='Register' class="btn-info" url='/register' />
          </div>
        </nav>
        <br />
    </>
  )
}

export default Header