 import   { useContext } from 'react';
import {   NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import { UserContext } from '../Context/UserContext';
import { CounterContext } from '../Context/Context';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

export default function Navbar() {
   let navigate=useNavigate()
 let {userlogin,setuserlogin}= useContext(UserContext)
 let {counter}=useContext(CounterContext)
 let {numofCartItems}=useContext(CartContext )
 counter
userlogin
 
function logout(){
  localStorage.removeItem('usertoken')
  setuserlogin(null)
  navigate('/login')
}


 return (
    <nav className="bg-gray-500 p-2 fixed top-0 left-0 right-0 z-50 shadow">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo and Main Links */}
        <div className="flex flex-col md:flex-row items-center gap-2.5 ">
        <Link  to="/cart"><i className="text-green-500 text-2xl  fa-solid fa-cart-shopping nav-icon" ></i>  </Link>
     
        <span className='h3 bold  text-2xl'>fresh cart</span>
    
          
          <ul className="flex flex-col md:flex-row items-center  md:ml-4">
            
<li className="text-xl text-slate-800 font-bold mx-2 py-2 relative group">
  <NavLink
    to="/home"
    className={({ isActive }) => (
      `relative transition-colors duration-300 ${
        isActive ?'text-blue-600' : "text-slate-800 group-hover:text-blue-600"
      } font-bold`
    )}
  >
    {({ isActive }) => (
      <>
        Home
        <span
          className={`absolute left-0 bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </>
    )}
  </NavLink>
</li>



  <li className="text-xl text-slate-800 mx-2 py-2 relative group">
  <NavLink
    to="/contact"
    className={({ isActive }) =>
      `relative font-bold ${
        isActive ? 'text-blue-600' : "text-slate-800 group-hover:text-blue-600"
      }`
    }
  >
    Wish list
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
  </NavLink>
</li>


  <li className="text-xl text-slate-800 mx-2 py-2 relative group">
  <NavLink
    to="/products"
    className={({ isActive }) =>
      `relative font-bold ${
        isActive ? 'text-blue-600' : "text-slate-800 group-hover:text-blue-600"
      }`
    }
  >
    Products
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
  </NavLink>
</li>


 <li className="text-xl text-slate-800 mx-2 py-2 relative group">
  <NavLink
    to="/Categories"
    className={({ isActive }) =>
      `relative font-bold ${
        isActive ? 'text-blue-600' : "text-slate-800 group-hover:text-blue-600"
      }`
    }
  >
    Categories
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
  </NavLink>
</li>

   <li className="text-xl text-slate-800 mx-2 py-2 relative group">
  <NavLink
    to="/Brands"
    className={({ isActive }) =>
      `relative font-bold ${
        isActive ? 'text-blue-600' : "text-slate-800 group-hover:text-blue-600"
      }`
    }
  >
    Brands
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
  </NavLink>
</li>


  <li className="text-xl text-slate-800 mx-2 py-2 relative group">
  <NavLink
    to="/Cart"
    className={({ isActive }) =>
      `relative font-bold ${
        isActive ? 'text-blue-600' : "text-slate-800 group-hover:text-blue-600"
      }`
    }
  >
   Cart<span className="absolute -top-1  bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">{numofCartItems}</span>


   </NavLink>
</li>




          </ul>
        </div>

        {/* Auth Links and Social Icons */}
        <div className="flex flex-col md:flex-row items-center mt-2 md:mt-0">

          <ul className="flex flex-col md:flex-row items-center">
             
            <li className="py-2 mx-3 font-bold text-2xl text-slate-700 hover:text-emerald-600">
      <NavLink to="/register"
       className={({isActive})=>
       isActive ?"text-emerald-600":undefined}
       >
        Register
      </NavLink>
             </li>

             <li className="py-2 mx-3  text-slate-700 font-bold text-2xl hover:text-emerald-600">
      <NavLink to="/login" 
     className={({isActive})=>
     isActive?"text-emerald-700":undefined}>
        Login
      </NavLink>
            </li>
            
               <li onClick={logout} className="py-2 mx-3 font-bold text-2xl text-slate-700 hover:text-emerald-600">
      <NavLink to="/logout" className={({isActive})=>
      isActive?"text-emerald-600":undefined}
      >
        Logout
      </NavLink>
             </li>
              
       
       
            {/* Social Media Icons */}
            <li><i className="fab fa-facebook mx-2 text-slate-700 hover:text-blue-600"></i></li>
            <li><i className="fab fa-youtube mx-2 text-slate-700 hover:text-red-600"></i></li>
            <li><i className="fab fa-linkedin mx-2 text-slate-700 hover:text-blue-700"></i></li>
            <li><i className="fab fa-tiktok mx-2 text-slate-700 hover:text-black"></i></li>
          </ul>
        </div>

      </div>
    </nav>
  );
}
