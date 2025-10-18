import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import Cookies from "js-cookie";

const Layout = () => {

  
  const navigate = useNavigate();
  const myCookie = Cookies.get('Authorization');
  //
  useEffect(() => {
    if (!myCookie) return navigate("/Login");
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
