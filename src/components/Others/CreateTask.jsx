import React from 'react'
import { useState } from 'react'
const CreateTask = () => {

  const[taskTitle, setTaskTitle] = useState('')
  const[taskDate, setTaskDate] = useState('')
  const[assignTo, setAssignTo] = useState('')
  const[category, setCategory] = useState('')
  const[taskDescription, setTaskDescription] = useState('')
  const [taskList, setTaskList] = useState({})
const handleSubmit = (e) => {
    e.preventDefault()
  setTaskList({taskTitle, taskDate,category, taskDescription,active:false,newTask:true,completed:false,failed:false})
  const data = JSON.parse(localStorage.getItem('employees'))
  data.forEach((elem)=>{
    if(elem.firstName === assignTo){
      elem.tasks.push(taskList)
      
    }
    localStorage.setItem('employees', JSON.stringify(data))
    setAssignTo('')
    setCategory('')
    setTaskDate('')
    setTaskDescription('')
    setTaskTitle('')
    setTaskList({})

  })
  
  }

  return (
    <div className='p-8 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e)=>{
            handleSubmit(e)
        }} className='flex flex-wrap w-full items-start justify-between' action="">
            <div className='w-1/2'>
    
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                 <input 
                 value={taskTitle}
                  onChange={(e)=>setTaskTitle(e.target.value)}
                 className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 ' type="text " placeholder='make UI' />
            </div>
            
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input
                value={taskDate}
                onChange={(e)=>setTaskDate(e.target.value)}
                className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 ' type="date" />
             </div>
            
             <div>
               <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
               <input
                value={assignTo}
                onChange={(e)=>setAssignTo(e.target.value)}
                className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 ' type="text" placeholder='Employee Name' />
             </div>

             <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                 className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 ' type="text" placeholder='design, dev, etc.' />
             </div>

            </div>
            
             <div className='w-1/2'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                 <textarea
                  value={taskDescription}
                  onChange={(e)=>setTaskDescription(e.target.value)} 
                 className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" ></textarea>
             
             <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm  mt-4 w-full'>Create Task</button>
             </div>
        </form>
        </div>
  )
}

export default CreateTask