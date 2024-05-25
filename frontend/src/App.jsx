// import { useState } from 'react'
import {Home} from './Pages/Home'
import Cart from './Pages/Cart'
import {Favourite} from './Pages/Favourite'
import {Order} from './Pages/Order'
// import {Login} from './Pages/Login'
// import {Signup} from './Pages/Signup'
import SideBar from './Components/SideBar'
import Payment from './Pages/PaymentPage'

import{
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route
}from 'react-router-dom'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element = {<Root/>}>
        <Route index element = {<Home/>}/>
        {/* <Route path='/login' element = {<Login/>}/>
        <Route path='/signup' element = {<Signup/>}/> */}
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/favs' element = {<Favourite/>}/>
        <Route path='/orders' element = {<Order/>}/>
        <Route path='/payment' element = {<Payment/>}/>
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App
const Root = () => {
  return(
    <>
    <div>
      <SideBar/>
    </div>
    <div>
      <Outlet/>
    </div></>
  )
}