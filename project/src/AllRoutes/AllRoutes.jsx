import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from '../components/CartPage'
import LandingPage from '../components/LandingPage'
import MenPage from '../components/MenPage'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/men" element={<MenPage/>}/>
        <Route path="/cartPage" element={<CartPage/>}/>
        <Route/>
      </Routes>
    </div>
  )
}

export default AllRoutes
