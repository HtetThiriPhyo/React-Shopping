import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({currentPageTitle}) => {
  return (
    <div className='w-full flex gap-2 mb-5'>
        <Link to={"/"} className='text-gray-400 font-serif'>Home</Link>
        <span className='font-serif'>{currentPageTitle}</span>
    </div>
  )
}

export default Breadcrumb