import React from 'react'

const Footer = () => {
    const date = new Date();
  return (
    <>
    <footer className='mx-5 mt-auto bg-cyan-700 text-white text-center py-2 '>
        {date.getFullYear()}
        <a href="https://mail.google.com/" className=' italic text-cyan-100 px-1'>
        Techy .
        </a> 
        All rights reserved.
    </footer>
    </>
    
  )
}

export default Footer