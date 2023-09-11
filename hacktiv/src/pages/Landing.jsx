import React, { useState } from 'react'
import Login from './Login';

function Landing() {
  const [logIn, setLogIn] = useState(false);

  const onLogIn = () => {
    setLogIn(true);
  }

  return (
    <>
      {!logIn ? (
        <div className="fixed top-12 left-20 bg-accent-a h-full w-full rounded font-inter">
          <div className="flex items-center flex-col">
            <h1 className='font-bold pt-[50px] min-[320px]:text-[25px] md:text-[50px] lg:text-[75px] xl:text-[100px]' style={{textAlign: 'center'}}> WELCOME TO CLOCKIUM </h1>
            <img src='src/images/logo.png' alt='Logo' className='h-[450px]' />
            <button className='bg-secondary text-primary text-[20px] py-1 px-5 rounded min-[320px]:mt-3' onClick={onLogIn}>
              Log in
            </button>
          </div>
        </div>) : <Login />}        
    </>
  )
}

export default Landing;