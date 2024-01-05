 import React from 'react'
import ProductList from '../features/Product/productList'
import Navbar from '../features/Navbar/Navbar'
 
 const Home = () => {
   return (
     <div>
        <Navbar>
            <ProductList/>
        </Navbar>
     </div>
   )
 }
 
 export default Home