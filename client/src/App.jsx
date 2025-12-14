import React from 'react'
import { Navigate, Route,Routes } from 'react-router-dom'
import  HomePage  from './pages/HomePage.jsx'
import  LoginPage  from './pages/LoginPage.jsx'
import  ProfilePage  from './pages/ProfilePage.jsx'
import {Toaster} from 'react-hot-toast'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext.jsx'

export const App = () => {
  const {authUser}=useContext(AuthContext);

  return (
    <div className="w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bgImage.png')" }}>
      <Toaster/>  
      <Routes>
        <Route path='/' element={authUser?<HomePage />:<Navigate to="/login" />}/>
        <Route path='/login' element={!authUser?<LoginPage /> : <Navigate to="/" />}/>
        <Route path='/profile' element={authUser?<ProfilePage />:<Navigate to="/login"/>}/>
      </Routes>
    </div>
  )
}
