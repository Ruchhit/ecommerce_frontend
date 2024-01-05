 import React from 'react' 
import Home from './pages/Home'
import Signup from './features/auth/components/Signup'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
 const App = () => {

  const router = createBrowserRouter([{
    path : '/',
    element : <Home/>
  },
  {
    path : '/login',
    element : <LoginPage/>
  },
  {
    path : '/signup',
    element : <SignupPage/>
  },
  {
    path : '/cart',
    element : <CartPage/>
  },
  {
    path : '/checkout',
    element : <CheckoutPage/>
  },
  {
    path : '/productDetails',
    element : <ProductDetailsPage/>
  },
])


   return (
      <div>
        <RouterProvider router={router}/>
    </div>
   )
 }
 
 export default App