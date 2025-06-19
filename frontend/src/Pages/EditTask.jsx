import React from 'react'

const EditTask = () => {
  return (
    <div>
      <div className="w-full p-4">
        <form action="" className="p-8 shadow-md rounded-md">
          <h2 className='text-4xl mb-4'>Edit Task</h2>
          <div className='flex mb-4'>
            <label htmlFor="" className='py-3 w-34'>Task Title</label>
            <input type="text" className='input' placeholder='Task Title' />
          </div>
          <div className='flex  mb-4'>
            <label htmlFor="" className='py-3 w-34'>Task Description</label>
            <textarea type="text" className='input' placeholder='Task Title' rows="5" />
          </div>
          <div className='flex mb-4'>
            <label htmlFor="" className='py-3 w-34'>Task Date</label>
            <input type="date" className='input' placeholder='Task Title' />
          </div>
          <button className='btn text-center'>Update Task</button>
        </form>
      </div>
    </div>
  )
}

export default EditTask