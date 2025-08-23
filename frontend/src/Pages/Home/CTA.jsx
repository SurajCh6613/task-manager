import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='bg-indigo-600 py-16 flex  flex-col justify-center items-center text-white'>
        <h3 className='text-4xl font-bold mb-4'>Stay On Top of Your Work</h3>
        <p className='text-xl mb-4'>Start managing your tasks today and experience stress-free productivity.</p>
        <Link to={'/login'} className='bg-yellow-400 px-5 py-3 rounded-xl text-black hover:bg-yellow-300 font-semibold'>Try Task Manager Now</Link>
    </section>
  )
}

export default CTA