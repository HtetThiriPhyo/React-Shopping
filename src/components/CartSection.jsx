import React from 'react'
import Container from './Container'
import products from '../data/products'
import Cart from './Cart'
import { Link } from 'react-router-dom'
import carts from '../data/carts'

const CartSection = () => {
    
  return (
   <>
   <div className="flex flex-col gap-5 h-full">
   {carts.map((cart)=>(
    <Cart key={cart.id} cart={cart}/>
   ))}

   <div className="w-full bottom-20 absolute left-0 bg-white-400 h-38 mt-10">
    <Container>
        <div className='border-t border-black flex justify-end gap-10 mb-10'>
            <div className='text-right'>
                <p className='text-gray-500'>Total</p>
                <p className='font-bold'>123</p>

            </div>
            <div className='text-right'>
                <p className='text-gray-500'>Tax(10%)</p>
                <p className='font-bold'>123</p>

            </div>
            <div className='text-right'>
                <p className='text-gray-500'>Net Total</p>
                <p className='text-xl font-bold'>123</p>

            </div>
            
        </div>
       <div className='text-end mb-5 '>
       <Link className='rounded-md hover:bg-slate-100 border border-black px-4 py-2 '>
                Order Now
            </Link>
       </div>
    </Container>
   </div>
   </div>
   </>
  )
}

export default CartSection