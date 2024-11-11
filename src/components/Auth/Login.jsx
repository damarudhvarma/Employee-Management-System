import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

 const submitHandler = (e) => { 
        e.preventDefault();
        console.log('Form submitted');

 }





  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form
            onSubmit={(e)=>{
                submitHandler(e);
                setEmail('');
                setPassword('');
            }}
             className='flex flex-col items-center justify-center' >
                <input   className='border-2 border-emerald-600 py-4 px-5 rounded-full text-xl text-white outline-none bg-transparent placeholder:text-gray-400 '
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required 
                placeholder='Enter email'/>

                <input className='border-2 border-emerald-600 py-4 px-5 rounded-full text-xl text-white outline-none mt-3 bg-transparent placeholder:text-gray-400'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
                placeholder='Enter password' />

                <button className='border-none  py-4 px-5 rounded-full text-xl outline-none mt-5 bg-emerald-600 text-white'>Login in </button>
                
          

            </form>
        </div>
         
    </div>
  )
}

export default Login