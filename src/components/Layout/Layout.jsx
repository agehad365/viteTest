 import React, { useEffect,useState } from 'react';
import { Outlet } from 'react-router-dom';
 import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
 import style from './Layout.module.css'
import { Helmet } from 'react-helmet';
    
export default function Layout() {
   const [counter, setcounter] = useState(0)
  console.log('addd');
  
  useEffect(() => {
   }, []);

  return (
    <>

    <Helmet>
      <title>
        layout Page
      </title>
    </Helmet>
      <Navbar />
      <div className="container   mx-auto max-w-7xl pt-16">
        <Outlet />
      </div>

      
      <Footer />
    </>
  );
}
