import {useContext} from 'react'
import Button from './Button'
import { AuthContext } from '../../AuthProvider'

const Main = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

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
                <Button  text='Explore now' class="btn-outline-info"  url='/dashboard'/>
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