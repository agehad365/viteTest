  import React from 'react';
  import './App.css';
  import Layout from './components/Layout/Layout';
  import Categories from './components/Catgeories/Catgeories';
  import Register from './components/Register/Register';
  import Login from './components/Login/Login';
  import Cart from './components/Cart/Cart';
  import NotFound from './components/NotFound/NotFound';
  import Home from './components/Home/Home';
  import Brands from './components/Brands/Brands';
  import { CounterContext } from '../src/components/Context/Context';
  import { UserContextProvider } from '../src/components/Context/UserContext';
  import { useQuery,QueryClient,QueryClientProvider} from '@tanstack/react-query'
 import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
 import ProtectRouter from './components/ProtectRouter/ProtectRouter';
 import CounterContextProvider from './components/Context/Context';
 import Checkout from './components/Checkout/Checkout';
 import Productdatil from './components/Productdatil/Productdatil';
 import { CartContext } from './components/Context/CartContext'; 
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { CartContextProvider } from './components/Context/CartContext';
import Products from './components/Products/Products';
 import { store } from '../lib/store';
import   { Toaster } from 'react-hot-toast';
 import { Provider } from 'react-redux'
 
 

 const queryClient = new QueryClient()

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {index:true, element: <ProtectRouter><Home/></ProtectRouter> },
        {path:"/checkout", element: <ProtectRouter><Checkout/></ProtectRouter>},
        {path:"/home", element: <ProtectRouter><Home/></ProtectRouter> },
        {path:"categories", element: <ProtectRouter><Categories/></ProtectRouter> },
        { path: 'brands', element: <ProtectRouter><Brands/></ProtectRouter>  },
        { path: 'products', element: <ProtectRouter><Products/></ProtectRouter>  },
        { path: 'productdetail/:id/:category', element: <ProtectRouter><Productdatil/></ProtectRouter>  },
        { path: 'cart', element:<ProtectRouter><Cart/></ProtectRouter> },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);

  function App() {
    return (
     
      
   <Provider   store={store}>
    <QueryClientProvider client={queryClient}>
             <UserContextProvider>
     <CartContextProvider>
                  <CounterContextProvider>
                      <RouterProvider router={router} />

                      <Toaster/>
                      <ReactQueryDevtools/>
                 </CounterContextProvider>
     </CartContextProvider>
             </UserContextProvider>

    
    </QueryClientProvider>
       

    </Provider>
        
        
 
    );
  }

  export default App;
