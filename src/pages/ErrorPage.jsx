import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='w-full h-screen flex justify-center items-center gap-3'>
        <div className='text-center'>
            <h1 className='text-5xl font-bold mb-3 '>404 Not Found</h1>
            <p className='w-96 text-gray-400 mb-3'>Mollitia assumenda, quae, ipsam nemo maxime hic quisquam accusamus voluptate labore, porro accusantium! Obcaecati maiores voluptate veniam, deserunt accusamus delectus sint fugit.</p>
            <Link to={"/"} className='rounded-lg font-serif border border-black-900 hover:bg-slate-200 px-4 py-1 '>Return To Home</Link>

        </div>
    </section>
  )
}

export default ErrorPage