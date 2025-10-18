import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Register from "./Pages/Register";
import { ToastContainer } from "react-toastify";
import Login from "./Pages/Login";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";

const App = () => {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
        </Route>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Route>
    )
  );

  return (
    <>
      <ToastContainer />
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
