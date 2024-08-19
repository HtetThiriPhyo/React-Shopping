import React from 'react'
import Ratings from './Ratings'
import { Link } from 'react-router-dom'
import carts from '../data/carts'

const ProductCard = ({
    
    product:{
        id,
        title,
        price,
        image,
        rating:{rate},
    },
}) => {
   
    
   
  return (
    <Link to={`/product-detail/${id}`} 
    className='border border-black-900 p-5 mb-2 flex flex-col items-start gap-5'>
        <img src={image} className='h-40 ' ></img>
       <p className='font-bold line-clamp-2'>{title}</p>
        <Ratings rate={rate}/>

      <div className='flex justify-between items-end w-full '>
      
      <p className=''>{price}</p>

      {carts.find((carts)=> carts.product.id === id)? (
        <button className='border border-black-900 px-3 py-1 text-sm bg-black text-white rounded-lg'>Added</button>
      ): 
      (<button className='border border-black-900 px-3 py-1 text-sm hover:bg-slate-100 rounded-lg'>
        Add Cart
        </button>
        )}

      </div>
    </Link>
  )
}

export default ProductCard