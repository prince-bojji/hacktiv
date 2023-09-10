import React from 'react'

function Login() {
  return (
    <>
      <div className="bg-accent-a h-full rounded font-inter">
        <div className='flex flex-row min-[320px]:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row'>
          <div className="lg:mt-[150px] xl:mt-0">
            <img src='src/images/logo.png' alt='Logo' className="min-[320px]:mt-[100px] sm:mt-[60px] md:mt-[60px] lg:mt-[80px] xl:mt-[170px]" />
          </div>
          <div className="flex items-center flex-col gap-[20px] min-[320px]:flex-col sm:flex-col md:flex-col md:mt-[10px] lg:gap-[3px] lg:mt-[160px] xl:mt-[180px]">
            <h2 className='font-bold min-[320px]:text-[25px] sm: md:text-[50px] lg:text-[50px] xl:text-[80px]'> LOG IN </h2>

            <div className='flex relative items-center mt-[50px] min-[320px]:flex-col md:flex-row md:pl-[80px] lg:flex-col lg:pl-[45px] lg:pr-[30px] xl:flex-row xl:pl-[125px]'>
              <label className='min-[320px]:text-[20px] lg:text-[40px]'>Email:</label>
              <input type="text" name="email" className='rounded h-[40px] min-[320px]:w-[200px] md:ml-2 lg:w-[200px] xl:w-[200px] xl:ml-2'></input>
            </div>

            <div className='flex relative items-center min-[320px]:flex-col md:flex-row md:pl-[40px] lg:flex-col lg:pr-[30px] xl:flex-row'>
              <label className='min-[320px]:text-[20px] lg:text-[40px]'>Password:</label>
              <input type="password" name="password" className='rounded h-[40px] md:ml-2 lg:w-[200px] w-[200px] xl:ml-2'></input>
            </div>

            <button className='bg-secondary text-primary text-[20px] py-1 px-5 rounded md:mt-2 lg:mt-5 '>
              Proceed
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Login;