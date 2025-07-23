import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './index.css'
import { Outlet } from 'react-router-dom'

const App = () => {
   return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App