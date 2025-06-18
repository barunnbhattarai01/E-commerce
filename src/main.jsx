import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from './Userside/product.jsx'
import Login from './Authentication/login.jsx'
import Cart from './Userside/chart.jsx' 

import {
  createBrowserRouter,  RouterProvider,createRoutesFromElements,Route}  from "react-router-dom"

import Navbar from './Userside/navbar.jsx'
import Intro from './Userside/intro.jsx'
import Services from './Adminside/service.jsx'
import Signup from './Authentication/sigup.jsx'
import Getdata from './Userside/getproduct.jsx'
import Adminlogin from './Authentication/adminlogin.jsx'
import Ai from './Userside//AI.jsx'
import MainPage from './landingpage/mainpage.jsx'
import {store } from './store/store.jsx'
import { Provider } from 'react-redux'

const router=createBrowserRouter(

   createRoutesFromElements(
      <>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/login' element={<Login/>}/>
         <Route path='/admin' element={<Adminlogin/>}/>
         <Route path='/signup' element={<Signup/>}/>
            <Route path='/service' element={<Services/>}/>

  <Route path='/' element={<App/>}>
  <Route path='/home' element={<Intro/>}/>
   <Route path='/items' element ={<Getdata/>}/>
   <Route path='/products' element={<Product/>}/>
   <Route path='/ai' element={<Ai/>}/>
   <Route path='/chart' element={<Cart/>}/>
   </Route>

</>
   )


)

   

   
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store ={store}>     {/*we warpped the whole router(element) */}
    <RouterProvider router={router}/> 
    </Provider> 
  </StrictMode>,
)
