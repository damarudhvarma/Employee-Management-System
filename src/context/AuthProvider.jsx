import React, { useEffect } from 'react'
import { createContext,useState } from 'react'
import { getLocalStorage } from '../utils/localStorage';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
 const [userData,setUserData]= useState([]);

useEffect(() => {   
    const {employees,admin}= getLocalStorage();
    setUserData({employees,admin});
},[])

  return (
    <AuthContext.Provider value = {userData}>
        <div>{children}</div>
      </AuthContext.Provider>     
  )
}

export default AuthProvider