import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import MyCart from '../pages/MyCart'

const Header = () => {
  return (
    <>
    <header className='px-5 py-2'>
       
      <Container>
      <div className="flex justify-between items-center">
   <Link to={"/"} className=' mt-2 italic font-bold hover:not-italic  text-cyan-700 text-4xl '>
      JEWELLERY RI
      </Link>
    <Link to={"/"} className='text-slate-700 font-serif text-sm underline '>Shop this look now!</Link>
    
    
    <Link to={"/my-cart"} className='flex  mt-2 border border-black-700 px-5 py-2 relative rounded-xl  hover:bg-slate-100'>
    <div className='py-1 px-1'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
    </div>
 Add Cart
      <span className='inline-block bg-red-700 text-white px-3 py-1 text-xs absolute top-0 right-0  translate-x-1/2  -translate-y-1/2 rounded-lg'>
      1
      </span>
    </Link>

   </div>
      </Container>
        
    </header>
    </>
  )
}

export default Header