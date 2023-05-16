import React from 'react'
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/avatarp.png'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/userSlice'

const ProfileCard = ({showCard}) => {
  const socials = [
    {
      id : 1,
      link: 'http://twitter.com',
      icons: <BsTwitter />,
    },
    {
      id: 2,
      link: "",
      icons: <BsLinkedin />,
    },
    {
      id: 3,
      link: '',
      icons: <BsFacebook />
    }
  ]
  const user = useSelector((store)=> store.user.value)
  const dispatch = useDispatch()


  const nav = useNavigate()
  const gotoCourse = () => {
    nav('/course')
  } 
  const logoutFunction = () => {
    dispatch(logout())
      nav('/login')
  }
  return (
      <div className={`flex flex-col absolute left-[6.5rem]  gap-2 w-[30.3%] border-r-[2px]  border-blue-200 items-center pb-10 overflow-y-scroll max-h-screen transition-transform ease-in-out duration-500  -z-30 ${showCard ? '-translate-x-[130%]': 'translate-x-0'} `}>
         <div className="block w-[50%] ">
          <img src={avatar} alt="adddress" />
         </div>
          <div className="flex flex-col items-center">
              {
                user && (
                  <>
                    <h2 className="block text-md md:text-xl lg:text-xl font-bold">{user.name}</h2>
                    <Link className='italic underline font-semibold text-red-700 hover:text-red-900' to="/">{user.username}</Link>
                  </>
                )
              }
              <div className="flex items-end gap-2 w-full mt-3 pt-2 justify-center">
                <h1 className='text-3xl font-semibold'>2</h1>
                <p onClick={gotoCourse} className='hover:underline cursor-pointer'>Courses</p>
              </div>
              <button className='bg-black px-[50px] py-2 my-6 text-white hover:bg-gray-900 active:bg-black'>Edit Profile</button>
              <div className="block text-center" >
                <p className=' font-semibold text-xl'>Bio</p>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod minus quia nam voluptatem exercitationem quam, incidunt mollitia labore nobis provident. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore veritatis nostrum quos quas perferendis! Tempore fuga architecto magnam exercitationem eius voluptate distinctio consectetur eligendi voluptatum perferendis, doloremque minima earum id!</p>
              </div>
              <div className="flex items-center gap-2 mt-4  ">
                {
                  socials.map((item)=> (
                    <Link className=' text-md rounded-full hover:text-gray-600' to="" key={item.id} >{item.icons}</Link>
                  ))
                }
              </div>
              <button onClick={logoutFunction} className="px-5 py-1 bg-red-600 hover:bg-red-500 font-semibold mt-5 text-white rounded-sm">Logout</button>
          </div>
          
      </div>
  )
}

export default ProfileCard
