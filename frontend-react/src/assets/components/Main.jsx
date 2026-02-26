import {useContext} from 'react'
import Button from './Button'
import { AuthContext } from '../../AuthProvider'
import { useNavigate } from 'react-router-dom'

const Main = () => {
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
      <div className='container'>
        <div className='p-5 text-center text-light bg-light-dark rounded-3'>
          <h1 className='text-light'>Stock prediction portal</h1>
          <p className='text-light lead'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, quam ullam voluptatem, magnam molestiae voluptate animi beatae perferendis itaque dolores explicabo, inventore nisi. Ullam, modi! Impedit veritatis alias illo explicabo.</p>
            {isLoggedIn ? (
              <>
                <span className='bg-success rounded-3 lead'>Congratulations! You are now registered.</span>
                <br />
                <button className='btn btn-danger'  onClick={handleLogout}>Logout</button>
              </>
              ):(
              <>
                <Button  text='Login now' class="btn-outline-info" url='/login'/>
              </>
            )}
        </div>
      </div>
    </>
  )
}

export default Main