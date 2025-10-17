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

const App = () => {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Route>
    )
  );

  return (
    <>
      <ToastContainer />
      <RouterProvider router={Router} />
    </>
  );
};

export default App;
