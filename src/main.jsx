import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from './component/product.jsx'
import Login from './component/login.jsx'
import Cart from './component/chart.jsx' 

import {
  createBrowserRouter,  RouterProvider,createRoutesFromElements,Route}  from "react-router-dom"

import Navbar from './component/navbar.jsx';
import Intro from './component/intro.jsx'
import Services from './component/service.jsx'
import Signup from './component/sigup.jsx'
import Getdata from './component/getproduct.jsx'
import Adminlogin from './component/adminlogin.jsx'
import Ai from './component/AI.jsx'
import { store } from './component/Store/store.jsx'
import { Provider } from 'react-redux'

const router=createBrowserRouter(

   createRoutesFromElements(
      <>
      <Route path='/' element={<Login/>}/>
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
