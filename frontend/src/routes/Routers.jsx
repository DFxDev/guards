
import Login from '../pages/Login'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Guards from '../pages/Guards/Guards'
import GuardsDetails from '../pages/Guards/GuardsDetails'
import { Routes, Route } from 'react-router-dom'
import MyAccount from "../Dasboard/User-Account/MyAccount";

import DeleteBookMe from "../Dasboard/Guards-Account/DeleteBookMe"

import Dashboard from "../Dasboard/Guards-Account/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import CheckoutSuccess from "../pages/CheckoutSuccess";

const Routers = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/guards' element={<Guards/>} />
    <Route path='/guards/:id' element={<GuardsDetails/>} />
    <Route path='/bookme-delete/:id' element={<DeleteBookMe/>} />
    <Route path='/services' element={<Services/>} /> 
  
    <Route
        path="/guards/profile/me"
        element={
          <ProtectedRoute allowedRoles={["guard"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    
    <Route
        path="/users/profile/me"
        element={
          <ProtectedRoute allowedRoles={["client"]}>
            <MyAccount />
          </ProtectedRoute>
        }
      />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Signup/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path="/checkout-success" element={<CheckoutSuccess />} />
   

   </Routes>
  )
}

export default Routers

