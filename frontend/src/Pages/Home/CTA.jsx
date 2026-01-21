import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-16 flex  flex-col justify-center text-center items-center text-white'>
        <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>Stay On Top of Your Work</h3>
        <p className='text-lg sm:text-xl md:text-2xl mb-4'>Start managing your tasks today and experience stress-free productivity.</p>
        <Link to={'/login'} className='bg-yellow-400 px-8 py-4 md:text-xl rounded-xl text-black hover:bg-yellow-300 font-semibold'>Try Task Manager Now</Link>
    </section>
  )
}

export default CTA