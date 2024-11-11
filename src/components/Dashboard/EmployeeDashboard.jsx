import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TasksLists/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-20 bg-[#1C1C1C] h-screen'>
     <Header/>
     <TaskListNumbers/>
     <TaskList/>
     

    </div>
  )
}

export default EmployeeDashboard