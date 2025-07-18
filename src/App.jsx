  import React from 'react';
  import './App.css';
  import Layout from './components/Layout/Layout';
  import Categories from './components/Catgeories/Catgeories';
  import NotFound from './components/NotFound/NotFound';
  import Home from './components/Home/Home';
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
 import { Offline, Online } from "react-detect-offline";
import { lazy } from 'react';
 


// import Cart from './components/Cart/Cart';

const Cart = lazy(() => import('./components/Cart/Cart'));
const Register = lazy(() => import('./components/Register/Register'));
const Login = lazy(() => import('./components/Login/Login'));
const Brands = lazy(() => import('./components/Brands/Brands'));
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
        { path: 'ProductDetails/:id/:category', element: <ProtectRouter><Productdatil/></ProtectRouter>  },
        { path: 'cart', element:<ProtectRouter><Cart/></ProtectRouter> },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },
        { path: '*', element: <NotFound /> },
      ],
    },

  ],
  {

    basename: "/viteTest",
  }
);

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
                      <Online>
              <h2 className='bg-green-400 py-3 rounded-md absolute bottom-0 started-2'>Connected </h2>
                      </Online>
                                   <Offline>
              <h2 className='bg-red-400 py-3 rounded-md absolute bottom-0 started-2'>NetWork issue </h2>
                      </Offline>
                 </CounterContextProvider>
     </CartContextProvider>
             </UserContextProvider>

    
    </QueryClientProvider>
       

    </Provider>
        
        
 
    );
  }

  export default App;
