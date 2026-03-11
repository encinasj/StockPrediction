import './assets/css/style.css'
import Main from './assets/components/Main'
import Register from './assets/components/Register'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import Login from './assets/components/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AuthProvider from './AuthProvider'
import Dashboard from './assets/components/dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route element={<PublicRoute />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>


            {/* Grupo de rutas privadas */}
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}
export default App
