import React from 'react'
import Ratings from './Ratings'

const ProductCard = ({
    
    product:{
        title,
        price,
        image,
        rating:{rate},
    },
}) => {
   
    
   
  return (
    <div className='border border-black-900 p-5 mb-2 flex flex-col items-start gap-5'>
        <img src={image} className='h-40 ' ></img>
       <p className='font-bold line-clamp-2'>{title}</p>
        <Ratings rate={rate}/>

      <div className='flex justify-between items-end w-full '>
      
      <p className=''>{price }</p>
      <button className='border border-black-900 px-3 py-1 text-sm hover:bg-slate-100 text-black text-nowrap rounded-lg'>Add Cart</button>
      </div>
    </div>
  )
}

export default ProductCard