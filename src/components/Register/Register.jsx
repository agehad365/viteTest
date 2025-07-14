  import {  useFormik } from 'formik';
  import * as Yup from 'yup';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
 import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/UserContext'
import style from './Register.module.css'
import {Helmet} from "react-helmet";

 
export default function Register() {
  const { userLogin, setUserLogin } = useContext(UserContext);
  const [errMsg, seterrMsg] = useState(null)
  const [isLoading, setisLoading] = useState(false)
  let navigate = useNavigate()

  function submitForm(val){
          setisLoading(true);
          axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, val)
          .then(response => {
            setisLoading(false);
            console.log(response?.data?.token);
            console.log(response?.data);
            

      if(response.data.message === 'success'){
      setUserLogin(response?.data?.token);
      localStorage.setItem("usertoken", response?.data?.token);
      navigate("/");
    }


          }).catch(err => {
            setisLoading(false);
            seterrMsg(err?.response?.data?.message);
            console.log(err);
          })
        }




  let validationRegisterForm = Yup.object().shape({ 
    name:Yup.string().required("name is required").min(3,"min 3 letters").max(10,"max 10 letters"),
    email:Yup.string().required("email is required").email("invalid email"),
    password:Yup.string().required("password is required").matches(/^[A-Z][a-z0-9]{4,10}$/, "invalid password"),
    rePassword:Yup.string().required("repassword is required").oneOf([Yup.ref("password")], "password not match"),
    phone:Yup.string().required("phone is required").matches(/^01[0125][0-9]{8}$/, "invalid phone")
  })

  let formik =useFormik({
    initialValues: {
    name: "",
    email:"",
    password:"",
    rePassword:"",
    phone:""
    },
    onSubmit:submitForm,

    validationSchema:validationRegisterForm
  })

  useEffect(() => {
  }, [])

 
  return (
    <>
     <Helmet>
            <title>
              Regidter page
            </title>
          </Helmet>
<div className=" bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8">
    <div className="bg-white shadow-md rounded-md p-6">
      <img className="mx-auto h-12 w-auto text-green-900" src="https://www.svgrepo.com/show/499664/user-happy.svg" />
      <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-green-900">
        Register Now
      </h2>
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Username</label>
          <div className="mt-1">
            <input value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} name="name" id="name" type="username" required className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" />
          </div>
          {/* alert Name */}
          {formik.touched.name && formik.errors.name?
          <div className="bg-red-200 px-6 py-3 mx-2 my-1.5 rounded-md  text-lg flex items-center mx-auto max-w-lg">
          <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
          <path fill="currentColor" d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
          </path>
          </svg>
          <span className="text-red-800"> {formik.touched.name && formik.errors.name}</span>
          </div>:null}
          {/* alert Name */}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <div className="mt-1">
            <input value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} name="email" id="email" type="email-address" autoComplete="email-address" required className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" />
          </div>
          {/* alert email */}
          {formik.touched.email && formik.errors.email?
          <div className="bg-red-200 px-6 py-3 mx-2 my-1.5 rounded-md  text-lg flex items-center mx-auto max-w-lg">
          <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
          <path fill="currentColor" d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
          </path>
          </svg>
          <span className="text-red-800"> {formik.touched.email && formik.errors.email}</span>
          </div>:null}
          {/* alert email */}
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <div className="mt-1">
            <input value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} name="password" id="password" type="password" autoComplete="password" required className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" />
          </div>
          {/* alert password */}
          {formik.touched.password && formik.errors.password?
          <div className="bg-red-200 px-6 py-3 mx-2 my-1.5 rounded-md  text-lg flex items-center mx-auto max-w-lg">
          <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
          <path fill="currentColor" d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
          </path>
          </svg>
          <span className="text-red-800"> {formik.touched.password && formik.errors.password}</span>
          </div>:null}
          {/* alert password */}
        </div>
        <div>
          <label htmlFor="rePassword" className="block text-sm font-medium text-gray-700">rePassword</label>
          <div className="mt-1">
            <input value={formik.values.rePassword} onBlur={formik.handleBlur} onChange={formik.handleChange} name="rePassword" id="rePassword" type="password" autoComplete="confirm-password" required className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" />
          </div>
          {/* alert rePassword */}
          {formik.touched.rePassword && formik.errors.rePassword?
          <div className="bg-red-200 px-6 py-3 mx-2 my-1.5 rounded-md  text-lg flex items-center mx-auto max-w-lg">
          <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
          <path fill="currentColor" d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
          </path>
          </svg>
          <span className="text-red-800"> {formik.touched.rePassword && formik.errors.rePassword}</span>
          </div>:null}
          {/* alert rePassword */}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <div className="mt-1">
            <input value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} name="phone" id="phone" type="tel" autoComplete="confirm-password" required className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" />
          </div>
          {/* alert phone */}
          {formik.touched.phone && formik.errors.phone?
          <div className="bg-red-200 px-6 py-3 mx-2 my-1.5 rounded-md  text-lg flex items-center mx-auto max-w-lg">
          <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
          <path fill="currentColor" d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
          </path>
          </svg>
          <span className="text-red-800"> {formik.touched.phone && formik.errors.phone}</span>
          </div>:null}
          {/* alert phone */}
        </div>
        <div>
          <button type="submit" className="flex w-full justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
              {isLoading?<i className='fas fa-spinner fa-spin'></i>: "Register Account" }     
          </button>
        </div>
          {/* alert Error */}
          {errMsg?
          <div className="bg-red-200 px-6 py-3 mx-2 my-1.5 rounded-md  text-lg flex items-center mx-auto max-w-lg">
          <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
          <path fill="currentColor" d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
          </path>
          </svg>
          <span className="text-red-800"> {errMsg}</span>
          </div>:null}
          {/* alert Error */}
      </form>
    </div>
  </div>
</div>

</>
)
}


 
//   export default function Register() {
//  let { setuserlogin } = useContext(UserContext);
//     const [errMsg,seterrMsg]=useState(null)
//     const [isloading,setisloading]=useState(false)
//  let navigate=useNavigate()


// async function submitForm(val ){
//   setisloading(true)
// axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,val).then((data)=>{
 
//   setisloading(false)

//   console.log(data?.data.token);

//  if(data.data.message==='success'){
//   setuserlogin(data?.token)
// navigate('/')
//   localStorage.setItem('usertoken',data?.token)
//  }
// }).catch((error)=>{
//   setisloading(false)

// console.log(error?.response?.data?.message);
// seterrMsg(error?.response?.data?.message)
// })
// }
 


// // function validateinput(val){
// //   let errors={}
// //  if(val.name=='')  {
// //   errors.name='name is req'
// //  }
// //  else if(!/^[A-Z][a-z]{3,6}$/.test(val.name)){
// // errors.name='name must start with capital letter min 3 max 6'
// //  }
// //  if(val.email==''){
// //   errors.email='emali is req'
// //  }else if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val.email)){
// //    errors.email='invalid email'

// //  }
// //  return errors
// // }


//  let validationSchema=Yup.object().shape({
//   name:Yup.string().required('name is req').min(3,'min is 3letter').max(6,'max is 6 letter')
//  , email:Yup.string().required('email is req').email('email is valid')
//  , password:Yup.string().required('password is req').matches(/^[A-Z][a-z0-9]{4,10}$/,'invalid password ')
//  , rePassword :Yup.string().required('repassword is req').oneOf([Yup.ref('password')] ,'invalid repassword'),
//    phone:Yup.string().required('phone is requried').matches(/^01[0125][0-9]{8}$/,'invalid phone')
//  })



 
 
//    let Formik= useFormik({
//       initialValues:{
//            "name" : "",
//            "email" :"",
//            "password" :"",
//            "repassword" :"",
//            "phone" :""
//       },
//       validationSchema:validationSchema
    
//        ,
//       onSubmit:submitForm
//     })
//     useEffect(()=>{

//     },[])
//    return (
//      < >
//   <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
//   <div className="w-full max-w-md space-y-8">
//     <div className="bg-white shadow-md rounded-md p-6">
//       <img className="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg"   />
//       <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
//         Sign up for an account
//       </h2>
//       <form onSubmit={Formik.handleSubmit} className="space-y-6" method="POST">

//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">Username</label>
//           <div className="mt-1">
//             <input value={Formik.values.name}  onBlur={Formik.handleBlur} onChange={Formik.handleChange} id='name' name="name" type="text"   className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
//           </div>
//                {/* {alert} */}
//                {Formik.errors.name && Formik.touched.name? <div className="bg-red-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg">
//                    <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
//                              <path fill="currentColor" d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
//                        </path>
//                             </svg>
//                               <span className="text-red-800"> {Formik.errors.name}</span>
//                      </div> :null}
                  
//                {/* {alert} */}

//         </div>

//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//           <div className="mt-1">
//             <input value={Formik.values.email} onBlur={Formik.handleBlur} onChange={Formik.handleChange} id='email' name="email" type="email" autoComplete="email-address"   className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
//           </div>

//                  {/* {alert} */}
//                {Formik.errors.email && Formik.touched.email? <div className="bg-red-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg">
//                    <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
//                              <path fill="currentColor" d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
//                        </path>
//                             </svg>
//                               <span className="text-red-800"> {Formik.errors.email}</span>
//                      </div> :null}
                  
//                {/* {alert} */}
//         </div>

//         <div>
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//           <div className="mt-1">
//             <input  value={Formik.values.password} onBlur={Formik.handleBlur} onChange={Formik.handleChange}  id='password' name="password" type="password" autoComplete="password"   className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
//           </div>
//                  {/* {alert} */}
//                {Formik.errors.password && Formik.touched.password? <div className="bg-red-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg">
//                    <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
//                              <path fill="currentColor" d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
//                        </path>
//                             </svg>
//                               <span className="text-red-800"> {Formik.errors.password}</span>
//                      </div> :null}
                  
//                {/* {alert} */}
//         </div>

//         <div>
//           <label htmlFor="repassword" className="block text-sm font-medium text-gray-700">RePassword</label>
//           <div className="mt-1">
//             <input  value={Formik.values.repassword} onBlur={Formik.handleBlur} onChange={Formik.handleChange}  id='repassword' name="repassword" type="password" autoComplete="confirm-password"   className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
//           </div>
//                  {/* {alert} */}
//                {Formik.errors.repassword && Formik.touched.repassword? <div className="bg-red-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg">
//                    <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
//                              <path fill="currentColor" d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
//                        </path>
//                             </svg>
//                               <span className="text-red-800"> {Formik.errors.repassword}</span>
//                      </div> :null}
                  
//                {/* {alert} */}
//         </div>

//             <div>
//           <label htmlFor="phone" className="block text-sm font-medium text-gray-700"> phone</label>
//           <div className="mt-1">
//             <input  value={Formik.values.phone} onBlur={Formik.handleBlur} onChange={Formik.handleChange}  id='phone' name="phone" type="text" autoComplete="confirm-password"   className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
//           </div>
//                  {/* {alert} */}
//                {Formik.errors.phone && Formik.touched.phone? <div className="bg-red-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg">
//                    <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
//                              <path fill="currentColor" d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
//                        </path>
//                             </svg>
//                               <span className="text-red-800"> {Formik.errors.phone}</span>
//                      </div> :null}
                  
//                {/* {alert} */}
//            </div>

//         <div>
//           <button type="submit" className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2" > {isloading ?<i className='fas fa-spinner fa-spin'></i>:'Register Account '} 
        
//           </button>
       
//         </div>
//                {/* error msg */}
//    {errMsg?     <div className="bg-red-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg">
//                    <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
//                              <path fill="currentColor" d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
//                        </path>
//                             </svg>
//                               <span className="text-red-800"> {errMsg}</span>
//                      </div>  :null}
              
//       </form>
//     </div>
//   </div>
// </div>

// </>
//    )
//  }