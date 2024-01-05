 import React from 'react' 
import Home from './pages/Home'
import Signup from './features/auth/components/Signup'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import CartPage from './pages/CartPage'
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

])


   return (
      <div>
        <RouterProvider router={router}/>
    </div>
   )
 }
 
 export default App