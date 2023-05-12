import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    comfirmPassword: '',
  })

  const {name, email, password, comfirmPassword} = data

  const handleRegister = (e) => {
    e.preventDefault()
    console.log(name, email, password)
  }
  return (
    <div className='bg-red-700 text-white'>
        <div className="flex flex-col gap-3 w-[80%] md:w-[30%] m-auto bg-black px-5">
        <form className='W-[60%] py-5'>
        <div className="block text-center text-6xl font-bold">
            <h1>DTA</h1>
        </div>
        <div className="flex flex-col gap-4 font-semibold ">
        <div className="flex flex-col gap-2">
                <label htmlFor="">Full Name</label>
                <input type="text" className='h-[40px] rounded-md px-3 text-gray-600 outline-blue-600' placeholder='Surname first' value={data.name} onChange={e => setData({...data, name: e.target.value})} />
           </div>
           <div className="flex flex-col gap-2">
                <label htmlFor="">Email</label>
                <input type="text" className='h-[40px] text-gray-600 rounded-md px-3' placeholder='Input your email' value={data.email} onChange={e => setData({...data, email: e.target.value})}  />
           </div>
           <div className="flex flex-col gap-2">
                <label htmlFor="">Password</label>
                <input type="text" className='h-[40px] text-gray-600 rounded-md px-3' placeholder='Input your password' value={data.password} onChange={e => setData({...data, password: e.target.value})} />
           </div>
           <div className="flex flex-col gap-2">
                <label htmlFor="">Comfirm Password</label>
                <input type="text" className='h-[40px] text-gray-600 rounded-md px-3' placeholder='Comfirm your password' value={data.comfirmPassword} onChange={e => setData({...data, comfirmPassword: e.target.value})} />
           </div>
           <div className="flex items-start justify-between">
                <div className="flex flex-col gap-2">
                    <label htmlFor="sign" className='italic'>Stay Signed In? <input type="checkbox" /></label>
                    <Link to="/" className='underline text-red-600 hover:text-red-500'>Already have an account</Link>
                </div>
                <div className="block">
                    <button className='bg-blue-600 h-[40px] px-12 rounded-md hover:bg-blue-500 active:bg-blue-700' type='submit' onClick={handleRegister}>Register</button>
                </div>
           </div>
        </div>
      </form>
      <div className="flex gap-5 flex-wrap text-sm text-blue-600 underline">
        <Link className='hover:text-blue-500' to="/">Help</Link>
        <Link className='hover:text-blue-500' to="/">Privacy Policy</Link>
        <Link className='hover:text-blue-500' to="/">Acceptable use Policy</Link>
        <Link className='hover:text-blue-500' to="/">Facebook</Link>
        <Link className='hover:text-blue-500' to="/">Twitter</Link>
      </div>
      <h2 className='text-center text-3xl mt-5 font-bold'>The largest Developer Community</h2>
      <Link className='text-center pb-6 hover:text-blue-500 underline' to="/">AfriDev (Coming soon)</Link>
        </div>
    </div>
  )
}

export default Register
