import React, { useState, useEffect } from 'react';

const Header = ({ data }) => {
  const [firstName, setFirstName] = useState('Admin');

  useEffect(() => {
    if (data && data.firstName) {
      setFirstName(data.firstName);
    } else {
      setFirstName('Admin');
    }
  }, [data]);

  const logoutUser = () => {
    localStorage.removeItem('loggedInUser');
    window.location.reload();
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl'>
        Hello <br />
        <span className='text-3xl font-semibold'>{firstName} 🔥</span>
      </h1>
      <button onClick={logoutUser} className='bg-red-600 text-lg font-medium text-white px-4 py-3 rounded-sm'>
        Log Out
      </button>
    </div>
  );
};

export default Header;
