import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
    navigate('/Dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFDA55] font-inter">
      <div className="max-w-md w-full p-6 rounded-lg shadow-md">
        <img
          src="src/images/logo.png"
          alt="Logo"
          className="mx-auto mt-4 mb-6 w-24"
        />

        <h2 className="text-2xl font-bold mb-4">LOG IN</h2>

        <div className="mb-4">
          <label className="block text-lg mb-2">Email:</label>
          <input
            type="text"
            name="email"
            className="w-full h-10 px-3 rounded border border-gray-300 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2">Password:</label>
          <input
            type="password"
            name="password"
            className="w-full h-10 px-3 rounded border border-gray-300 focus:outline-none"
          />
        </div>

        <div className="flex justify-center">
          <button
            className="bg-secondary text-primary text-lg py-2 px-4 rounded mt-4"
            onClick={handleLogin} 
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;