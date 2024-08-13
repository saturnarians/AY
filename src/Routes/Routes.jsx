import React from 'react';
import { Outlet, Link } from "react-router-dom";





const layout = () => {
  return (
  <>
  <div>
 
         {/*   <Link to="/">Home</Link> */}

        <Link to="/HomePage"></Link>
        <Link to="/Clients"> </Link>
        <Link to="/ContactUs"> </Link>
        <Link to="/LastestNews"> </Link>
        <Link to="/AboutUs"> </Link>


      <Outlet />
         
  </div>
  </> 
  )
}

export default layout;