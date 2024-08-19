import React from 'react'
import Container from './Container';

const Cart = ({cart}) => {
    const totalCost = cart.quantity * cart.product.price;
  return (
   <>
    <Container>
    <div>
   <div className='border border-black-800 p-5 grid grid-cols-6'>
    <div className="col-span-1">
    <img src={cart.product.image} className='h-16' alt="" />
    </div>
    <div className="col-span-3">
        <p className='mb-2'>{cart.product.title}</p>
        <p className='text-gray-500'>Price: {cart.product.price}</p>
    </div>
      
    <div className="col-span-1">
        <p className='mb-2'>Quantity</p>
       <div className="flex gap-3 ">
       <button className='bg-black text-white px-2 py-0.5 '>
            -
        </button>
        {cart.quantity}
        <button className='bg-black text-white px-2 py-0.5'>
            +
        </button>
       </div>
    </div>
       

    <div className="col-span-1">
        <p className='text-end text-xl font-bold'>{totalCost}</p>

    </div>

   </div>

</div>
    </Container>
   </>
  )
}

export default Cart