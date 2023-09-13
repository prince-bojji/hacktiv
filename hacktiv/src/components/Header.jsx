import React from 'react';
import { useUserContext } from '../components/UserContext';

function Header() {
  const { user } = useUserContext();

  return (
    <header className='h-12 bg-white flex justify-between items-center px-6 fixed top-0 w-full z-10'>
      <div className='flex items-center'>
        <img src='src/images/logo.png' alt='Logo' className='h-20 pt-3' />
      </div>
      <div className='flex items-center ml-auto'>
        <span className='text-black mr-10'>{user.email}</span>
        <button className='bg-[#FFDA55] hover:bg-[#fecf26] text-black py-1 px-5 rounded'>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
