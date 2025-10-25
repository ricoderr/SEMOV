import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import './App.css'
import {Router, Routes, Route, Link } from 'react-router-dom'
import AnimatedRoutes from './AnimatedRoutes'
import FailedIcon from './components/icons/FailedIcon'
import MessageBox from './components/MessageBox'


function App() {


  return (
    <>
      <AnimatedRoutes/>
      <Routes>
        <Route path='/icon-view' element={<MessageBox/>}/>
      </Routes>
    </>
  )
}

export default App
