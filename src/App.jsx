import React, { useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useEffect,useState } from 'react'
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const authdata = useContext(AuthContext);
  const [user,setUser]= useState(null);
  const [loggedInUser,setLoggedInUser]= useState(null); 


useEffect(() => {
  setLocalStorage();
  if(authdata){
    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser){
     const  userData = JSON.parse(loggedInUser);
      setUser(userData.role); 
      setLoggedInUser(userData.data);
    }

  }
},[authdata])




 

const handleLogin = (email,password)=>{
  if(email=='admin@me.com'&& password=='123'){
      setUser('admin');
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
  }else if(authdata){
    const employee= authdata.employees.find((emp)=>email == emp.email && password == emp.password)
    if(employee){
      setUser('employee');
      setLoggedInUser(employee);
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}));
    }
  }
  else{
    alert("invalid Crendentials");
  }
}
 


  return (
    <>
    {!user? <Login handleLogin={handleLogin} /> : user=='admin'? <AdminDashboard /> :<EmployeeDashboard data={loggedInUser} />}
    </>
  )
}

export default App