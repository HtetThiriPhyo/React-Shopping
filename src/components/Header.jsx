import React from 'react'
import Container from './Container'

const Header = () => {
  return (
    <>
    <header className='px-5 py-2'>
       
      <Container>
      <div className="flex justify-between items-center">
   <h1 className='p-5 italic font-bold hover:not-italic text-cyan-700 text-2xl'>
      JEWELLERY RI
    </h1>
    
    <button className='border border-black-700 px-5 py-2 relative rounded-xl  hover:bg-slate-100'>
      Add Cart
      <span className='inline-block bg-red-700 text-white px-3 py-1 text-xs absolute top-0 right-0  translate-x-1/2  -translate-y-1/2 rounded-lg'>
      1
      </span>
    </button>
   </div>
      </Container>
        
    </header>
    </>
  )
}

export default Header