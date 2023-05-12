import React from 'react'
import { Link } from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
import {AiFillDashboard} from "react-icons/ai"
import {BsBook} from "react-icons/bs"
import {GoInbox} from "react-icons/go"
import {MdOutlineHelp} from 'react-icons/md'
const Navbar = () => {
  return (
    <div className='fixed left-0 h-full top-0 w-[100px] bg-red-400 text-white font-bold'>
      <div className="flex flex-col gap-5">
            <h1 className='text-center text-4xl mt-4 border-b-2 border-blue-600 pb-2'>D<span>T</span><span>A</span></h1>
            <Link to="/" className='group relative justify-center flex items-center'>
                <span className="text-6xl hover:text-gray-300 scale-95 transition-all ease-in-out duration-500"><FaUserCircle /></span>
                <span className='hidden absolute -right-16 text-black font-semibold text-xl group-hover:block'>Account</span>
            </Link>
            <Link to="/" className='group relative justify-center flex items-center'>
                <span className="text-6xl hover:text-gray-300 scale-95 transition-all ease-in-out duration-500"><AiFillDashboard /></span>
                <span className='hidden absolute -right-20 text-black font-semibold text-xl group-hover:block'>Dashboard</span>
            </Link>
            <Link to="/" className='group relative justify-center flex items-center'>
                <span className="text-6xl hover:text-gray-300 scale-95 transition-all ease-in-out duration-500"><BsBook /></span>
                <span className='hidden absolute -right-16 text-black font-semibold text-xl group-hover:block'>Courses</span>
            </Link>
            <Link to="/" className='group relative justify-center flex items-center'>
                <span className="text-6xl hover:text-gray-300 scale-95 transition-all ease-in-out duration-500"><GoInbox /></span>
                <span className='hidden absolute -right-9 text-black font-semibold text-xl group-hover:block'>Inbox</span>
            </Link>
            <Link to="/" className='group relative justify-center flex items-center'>
                <span className="text-6xl hover:text-gray-300 scale-95 transition-all ease-in-out duration-500"><MdOutlineHelp /></span>
                <span className='hidden absolute -right-7 text-black font-semibold text-xl group-hover:block'>Help</span>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
