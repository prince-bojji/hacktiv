import Header from '/src/components/Header';
import React, { useState } from 'react';
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const NavBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: '/',
      name: 'Dashboard',
      icon: <FaTh />,
    },
    {
      path: '/TimeTracker',
      name: 'Time Tracker',
      icon: <FaRegChartBar />,
    },
    {
      path: '/EmployeeRequest',
      name: 'Employee Request',
      icon: <FaUserAlt />,
    },
    {
      path: '/ProjectEnlisting',
      name: 'Project Enlisting',
      icon: <FaThList />,
    },
    {
      path: '/FileSystem',
      name: 'File System',
      icon: <FaShoppingBag />,
    },
    {
      path: '/FreedomBoard',
      name: 'Freedom Board',
      icon: <FaCommentAlt />,
    },
  ];

  return (
    <>
      <Header />
      <div className='flex relative top-8'>
        <div
          style={{ width: isOpen ? '200px' : '50px' }}
          className='sidebar fixed bg-white text-black h-screen transition-all duration-500'>
          <div className='top_section flex items-center p-4'>
            <div
              style={{ marginLeft: isOpen ? '50px' : '0px' }}
              className='bars text-2xl cursor-pointer'
              onClick={toggle}>
              <FaBars />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className='link flex items-center justify-start text-black text-left-wrap p-4 hover:bg-lightskyblue hover:bg-[#FFDA55] transition duration-500'
              activeClassName='active bg-lightskyblue text-black'>
              <div className='icon text-2xl'>{item.icon}</div>
              <div
                style={{ display: isOpen ? 'block' : 'none' }}
                className='text-xl pl-2'>
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main className='w-full p-20'>{children}</main>
      </div>
    </>
  );
};

export default NavBar;
