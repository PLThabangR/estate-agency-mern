import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/signIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';

function App() {
 

  return (
    <BrowserRouter>
   
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>


    </BrowserRouter>
   
  )
}

export default App
