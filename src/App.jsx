import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Register from './Register/Register'

const App = () => {

const Router = createBrowserRouter(createRoutesFromElements(

  <Route path='/' element={<Register/>}/>
))

  return (
    <>
    <RouterProvider router={Router}/>
    </>
  )
}

export default App