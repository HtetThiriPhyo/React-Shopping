import React from 'react'


const CategoryBtn =({categoryName , current}) => {
  return (
    <>
      <button  className={` ${
        current ? "bg-sapphire-900 text-white border border-black-900 text-nowrap px-4 py-2 me-2 rounded-xl" : "hover:bg-slate-100 text-black border border-black-900 text-nowrap px-4 py-2 me-2 rounded-xl"
    }`
    }>
        {categoryName}

    {/* {/* <button
        className={current ? 'bg-sapphire-900 text-white border border-black-900 text-nowrap px-4 py-2 me-2 rounded-xl ':'hover:bg-slate-100 text-black border border-black-900 text-nowrap px-4 py-2 me-2 rounded-xl'}
    >
         */}
        
    </button> 
    </>
  )
}

export default CategoryBtn