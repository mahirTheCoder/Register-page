import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Register from './Register/Register'
import { ToastContainer } from 'react-toastify'

const App = () => {

const Router = createBrowserRouter(createRoutesFromElements(

  <Route path='/' element={<Register/>}/>
))

  return (
    <>
     <ToastContainer />
    <RouterProvider router={Router}/>
    </>
  )
}

export default App