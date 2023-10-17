import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Layout/Navbar'
function RouteWrap() {
  return (
    <div>
      <Navbar/>
        <Outlet>
          
        </Outlet>
      <Footer/>
    </div>
  )
}

export default RouteWrap