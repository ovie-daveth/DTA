import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    isStayedIn: false
  })
  const navigate = useNavigate()

  const {email, password, isStayedIn} = data

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log( email, password, isStayedIn)
    try {
      const response = await axios.post("/login", {
        email, password
      });
      const data = response.data; // Access the response data using response.data
      console.log("Data from backend", data);
      if(data.error){
        toast.error(data.error)
      } else if(data.success){
        setData({});
        navigate("/")
        toast.success(data.success)
        // console.log(data.user)
      }
    } catch (error) {
      toast.error(
        `We could not sign you in. Please try again in a few seconds, ${error.message}`
      );
    }
  }
  return (
    <div className='bg-red-700 h-screen text-white'>
        <div className="flex flex-col gap-3 w-[80%] md:w-[50%] lg:w-[30%] m-auto lg:translate-y-[2%] md:translate-y-[7%] bg-black px-5">
        <form className='py-5'>
        <div className="block text-center text-6xl font-bold">
            <h1>DTA</h1>
        </div>
        <div className="flex flex-col gap-4 font-semibold">
           <div className="flex flex-col gap-2">
                <label htmlFor="">Email</label>
                <input type="text" className='text-gray-600 h-[40px] rounded-md px-3' placeholder='Input your email' value={data.email} onChange={e => setData({...data, email: e.target.value})} />
           </div>
           <div className="flex flex-col gap-2">
                <label htmlFor="">Password</label>
                <input type="text" className='text-gray-600 h-[40px] rounded-md px-3' placeholder='Input your password' value={data.password} onChange={e => setData({...data, password: e.target.value})} />
           </div>
           <div className="flex flex-col md:flex-row  md:justify-between items-start m-auto md:m-[0]">
                <div className="flex flex-col gap-2">
                    <label htmlFor="sign" className='italic'>Stay Signed In? <input type="checkbox" value={data.isStayedIn} onChange={e => setData({...data, isStayedIn: e.target.checked})} /></label>
                    <Link to="forgot" className='underline text-red-600 hover:text-red-500'>Forgot Password</Link>
                </div>
                <div className="block mt-5">
                    <button className='bg-blue-600 h-[40px] px-12 rounded-md hover:bg-blue-500 active:bg-blue-700' type='submit' onClick={handleLogin}>Login</button>
                </div>
           </div>
           <Link className='text-center hover:text-gray-300' to="/register">Don't have an account?</Link>
        </div>
      </form>
      <div className="flex gap-5 flex-wrap text-sm text-blue-600 underline justify-center">
        <Link className='hover:text-blue-500' to="/">Help</Link>
        <Link className='hover:text-blue-500' to="/">Privacy Policy</Link>
        <Link className='hover:text-blue-500' to="/">Facebook</Link>
        <Link className='hover:text-blue-500' to="/">Twitter</Link>
      </div>
      <h2 className='md:text-center lg:text-3xl md:text-xl mt-5 font-bold w-full'>The largest Developer Community</h2>
      <Link className='text-center md:text-md text-sm pb-6 hover:text-blue-500 underline' to="/">AfriDev (Coming soon)</Link>
        </div>
    </div>
  )
}

export default Login
