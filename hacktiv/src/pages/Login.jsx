import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import jsonData from '../data/db.json';
import { useUserContext } from '/src/components/UserContext';

//  json-server --watch src/data/db.json --port 8000

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const { setUserEmail } = useUserContext();

  const data = useNavigate();

  const handleLogin = () => {
    const { email, password } = formData;
    const user = jsonData.users.find(
      user => user.email === email && user.password === password
    );

    if (user) {
      onLogin();
      setUserEmail(user.email);
      navigate('/Dashboard');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-[#FFDA55] font-inter'>
      <div className='max-w-md w-full p-6 rounded-lg shadow-md bg-white'>
        <img
          src='src/images/logo.png'
          alt='Logo'
          className='mx-auto mt-4 mb-6 w-24'
        />

        <h2 className='text-2xl font-bold mb-4'>LOG IN</h2>

        <div className='mb-4'>
          <label className='block text-lg mb-2'>Email:</label>
          <input
            type='text'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            className='w-full h-10 px-3 rounded border border-gray-300 focus:outline-none'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-lg mb-2'>Password:</label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
            className='w-full h-10 px-3 rounded border border-gray-300 focus:outline-none'
          />
        </div>

        {error && <p className='text-center mb-2' style={{ color: 'red' }}>{error}</p>}

        <div className='flex justify-center'>
          <button
            className='bg-[#000000] text-[#FFFFFF] text-lg py-2 px-4 rounded mt-4 hover:bg-[#F00000]'
            onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
