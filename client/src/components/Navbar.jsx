import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillDashboard } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { GoInbox } from 'react-icons/go';
import { MdOutlineHelp } from 'react-icons/md';

const Navbar = () => {
  const menu = [
    {
      id: 1,
      name: 'Account',
      icon: <FaUserCircle />,
      path: '/profile',
    },
    {
      id: 2,
      name: 'Dashboard',
      icon: <AiFillDashboard />,
      path: '/',
    },
    {
      id: 3,
      name: 'Courses',
      icon: <BsBook />,
      path: '/course',
    },
    {
      id: 4,
      name: 'Inbox',
      icon: <GoInbox />,
      path: '/inbox',
    },
    {
      id: 5,
      name: 'Help',
      icon: <MdOutlineHelp />,
      path: '/help',
    },
  ];

  const location = useLocation();

  return (
    <div className='fixed left-0 h-full top-0 w-[100px] bg-red-400 text-white font-bold'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-center text-4xl mt-4 border-b-2 border-gray-600 pb-2'>
          D<span>T</span>
          <span>A</span>
        </h1>
        {menu.map((item) => (
          <Link
            to={item.path}
            key={item.id}
            className={`${
              location.pathname === item.path ? 'bg-slate-100' : ''
            } group justify-center flex flex-col items-center py-2`}
            
          >
            <span className={`text-5xl group-hover:text-gray-300 scale-95 transition-all ease-in-out duration-500 ${ location.pathname === item.path ? 'text-red-400': 'text-white'}`}>
              {item.icon}
            </span>
            <span className={` font-semibold underline text-xl group-hover:text-black ${location.pathname === item.path ? "text-black": "text-gray-600"} `}>
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
