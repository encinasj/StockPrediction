import {useContext} from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider'

const Header = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    console.log('Logout');
    navigate('/Login')
  }
  return (
    <>
        <nav className='navbar container'>
          <Link className='navbar-brand text-light pt-3 pb-3 align-items-start' to="/">Stock prediction portal</Link>
          <div>
            {isLoggedIn ? (
              <>
                <span>Loggout</span>
                <button className='btn btn-outline-danger' onClick={handleLogout}>Logout</button>
              </>
            ):(
              <>              
                <Button text='Login' class="btn-outline-info" url='/login'/>
                  &nbsp;
                <Button  text='Register' class="btn-info" url='/register' />
              </>
            )}
          </div>
        </nav>
        <br />
    </>
  )
}

export default Header