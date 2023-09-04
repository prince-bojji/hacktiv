import React from 'react';

function NavBar() {
  const user = 'Temp User Name'; //temporary only

  return (
    <header className='h-12 bg-white flex justify-between items-center px-10'>
      <div className='flex items-center'>
        <img src='src/images/logo.png' alt='Logo' className='h-20 pt-3' />
      </div>
      <div className='flex items-center ml-auto'>
        <span className='text-black mr-10'>{user}</span>
        <button className='bg-[#FFDA55] hover:bg-[#fecf26] text-black py-1 px-3 rounded'>
          Logout
        </button>
      </div>
    </header>
  );
}

export default NavBar;
