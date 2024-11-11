import React from 'react'

const TaskList = () => {
  return (
    <div  id='tasklist' className='h-[55%] overflow-x-auto w-full justify-start gap-5 py-5 flex  flex-nowrap items-center mt-10'>
      <div className=' flex-shrink-0 p-5 h-full w-[250px] bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                 <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold '>Make YT Vid</h2>
         <p className='text-sm mt-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe maxime sint at. Accusamus, eligendi nesciunt? Nobis saepe culpa enim, sequi dolorem quaerat explicabo provident quo aut cumque, distinctio tempore?</p>
      </div>
      <div className=' flex-shrink-0 p-5 h-full w-[250px] bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                 <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold '>Make YT Vid</h2>
         <p className='text-sm mt-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe maxime sint at. Accusamus, eligendi nesciunt? Nobis saepe culpa enim, sequi dolorem quaerat explicabo provident quo aut cumque, distinctio tempore?</p>
      </div>
      <div className=' flex-shrink-0 p-5 h-full w-[250px] bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                 <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold '>Make YT Vid</h2>
         <p className='text-sm mt-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe maxime sint at. Accusamus, eligendi nesciunt? Nobis saepe culpa enim, sequi dolorem quaerat explicabo provident quo aut cumque, distinctio tempore?</p>
      </div>
      
     
      
     
      
      
    </div>
  )
}

export default TaskList