 import React, { useEffect,useState } from 'react';
import { Outlet } from 'react-router-dom';
 import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
 import style from './Layout.module.css'
     
export default function Layout() {
   const [counter, setcounter] = useState(0)
 counter
  setcounter
  
  useEffect(() => {
   }, []);

  return (
    <>

     
      <Navbar />
      <div className="container   mx-auto max-w-7xl pt-16">
        <Outlet />
      </div>

      
      <Footer />
    </>
  );
}
