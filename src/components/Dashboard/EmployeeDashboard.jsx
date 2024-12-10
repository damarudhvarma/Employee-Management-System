import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TasksLists/TaskList'

const EmployeeDashboard = ({data}) => {
  console.log(data)
  return (
    <div className='p-20 bg-[#1C1C1C] h-screen'>
     <Header data = {data}/>
     <TaskListNumbers data = {data}/>
     <TaskList data = {data}/>
     

    </div>
  )
}

export default EmployeeDashboard