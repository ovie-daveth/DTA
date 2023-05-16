import React, { useEffect } from 'react'
import avatar from '../assets/avatarp.png'
import { MdEdit } from 'react-icons/md'

const ProfileForm = ({showCard}) => {
  // useEffect(() => {
  //   const getCountry = async () => {
  //     const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries';
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'X-RapidAPI-Key': '93d94c6dbfmshb4cbf8ee047309cp1b1ff8jsn94e3a995b220',
  //         'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  //       }
  //     };
  
  //     try {
  //       const response = await fetch(url, options);
  //       const data = await response.json();
  //       console.log(data.data);
  //       data.data.forEach(item => {
  //         console.log(item.name);
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  
  //   getCountry();
  // }, []);
  
  return (
    <div className={`gap-2 absolute right-0 bg-blue-50 text-gray-600 pb-10 overflow-y-scroll max-h-screen h-screen transition-w ease-in-out duration-500 ${showCard ? ' w-[92.5%]': ' w-[62%]'} -z-20 `}>
        <h1 className='text-center mt-6 font-bold lg:text-3xl md:text-xl'>Edit Your Profile</h1>
        <div className="flex items-start justify-between w-[90%] m-auto mt-10">
          <div className="inline-block group w-[23%]">
            <label htmlFor="photo" className='relative'>
              <img src={avatar} alt="avatar" className='border-[2px] border-gray-300 rounded-full bg-gray-200 w-[60%]' />
              <span className='absolute text-3xl text-white p-1 right-16 rounded-md bg-black bottom-0 hidden  group-hover:block'><MdEdit /></span>
            </label>
            <input type="file" itemType='img/jpg' id="photo" className='hidden' />
          </div>
          <form className='w-[70%] flex flex-col gap-5'>
            <div className="flex flex-col gap-1 w-[90%]">
                <label htmlFor="fname" className='font-semibold'>Name</label>
                <input type="text" id="fname" className='w-full border-[1px] border-black rounded-md outline-dashed outline-blue-500 bg-transparent h-[35px] px-3' />
            </div>
            <div className="flex flex-col gap-1 w-[90%]">
                <label htmlFor="loc" className='font-semibold'>Location</label>
                <input type="text" id="loc" placeholder='eg Warri, Delta State' className='w-full border-[1px] border-black rounded-md outline-dashed outline-blue-500 bg-transparent h-[35px] px-3 placeholder:text-gray-600 placeholder:font-semibold' />
            </div>
            <div className="flex flex-col gap-1 w-[90%]">
                <label htmlFor="email" className='font-semibold'>Change Email</label>
                <input type="email" id="email" className='w-full border-[1px] border-black rounded-md outline-dashed outline-blue-500 bg-transparent h-[35px] px-3' />
            </div>
            <div className="flex flex-col gap-1 w-[90%]">
                <label htmlFor="bio" className='font-semibold'>Bio</label>
                <textarea id="bio" rows="1" cols="1" className='w-full border-[1px] border-black rounded-md outline-dashed outline-blue-500 bg-transparent px-3 h-[120px]'></textarea>
            </div>
            <div className="flex flex-col gap-1 w-[90%] mt-5">
                <p className='font-bold text-center'>Social Links</p>
                <div className="flex items-center gap-3">
                  <label htmlFor="facebook" className='font-semibold'>Facebook</label>
                  <input type="text" placeholder='https://facebook.com/username' className='w-[70%] border-[1px] border-gray-600 px-3 rounded-sm py-1 placeholder:text-gray-600 placeholder:font-semibold ml-auto' />
                </div>
                <div className="flex items-center gap-3">
                  <label htmlFor="facebook" className='font-semibold'>LinkedIn</label>
                  <input type="text" placeholder='https://linkedin.com/in/username' className='w-[70%] border-[1px] border-gray-600 px-3 rounded-sm py-1 placeholder:text-gray-600 placeholder:font-semibold ml-auto' />
                </div>
                <div className="flex items-center gap-3">
                  <label htmlFor="facebook" className='font-semibold'>Twitter</label>
                  <input type="text" placeholder='https://twitter.com/username' className='w-[70%] border-[1px] border-gray-600 px-3 rounded-sm py-1 placeholder:text-gray-600 placeholder:font-semibold ml-auto' />
                </div>
            </div>
            <div className="flex flex-col gap-1 w-[90%]">
                <label htmlFor="port" className='font-semibold'>Portfolio</label>
                <input type="link" id="port" placeholder='https://www.myportfolio.com' className='w-full border-[1px] border-black rounded-md outline-dashed outline-blue-500 bg-transparent h-[35px] px-3 placeholder:text-gray-600 placeholder:font-semibold' />
            </div>
          </form>
        </div>
    </div>
  )
}

export default ProfileForm
