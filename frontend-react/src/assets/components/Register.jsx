import React,{useState} from 'react'

const Register = () => {
  const [Username, setUsername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  return (
    <>
      <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6 bg-light-dark p-5 rounded'>
              <h3 className='text-light text-center mb-4'>Create an account</h3>
              <form action="">
                <input type="text" className="form-control mb-3" placeholder='Username' id="" />
                <input type="email" className="form-control mb-3" placeholder='Email' id="" />
                <input type="password" className="form-control mb-5" placeholder='Password' id="" />
                <button type="submit" className='btn btn-info d-block mx-auto'>Register</button>
              </form>
            </div>
          </div>
      </div>
    </>
  )
}

export default Register