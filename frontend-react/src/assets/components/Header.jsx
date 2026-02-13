import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
        <nav className='navbar container'>
          <a className='navbar-brand text-light pt-3 pb-3 align-items-start' href="">Stock prediction portal</a>
          <div>
           <Button text='Login' class="btn-outline-info"/>
            &nbsp;
           <Button  text='Register' class="btn-info" />
          </div>
        </nav>
        <br />
    </>
  )
}

export default Header