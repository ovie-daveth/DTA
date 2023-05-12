import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import axios from "axios"

import { Link } from 'react-router-dom'

const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    comfirmPassword: '',
  })
  const [error, setError] = useState(false)
  const {name, email, password, comfirmPassword} = data

  const handleRegister = async (e) => {
    e.preventDefault()
      if(name.length > 4){
        if(email.length > 7){
          if(comfirmPassword === password){
            if(password.length > 6 ){
              try {
                await axios.get("http://localhost:8000/register").then((res)=> {
                  const data = res.json();
                  console.log("Data from backend", data)
                })
              } catch (error) {
                toast.error("We could not sign you in try again in few seconfs", error)
              }
            }else{
              setError(true)
              toast.error("Your password is too short")
            }
        }else{
          setError(true)
         toast.error("Your password does not match")
        }
        }else{
          setError(true)
          setTimeout(() => {
           setError(false)
          }, 2000);
          toast.error("Invalid email")
        }
      }else{
        setError(true)
        setTimeout(() => {
         setError(false)
        }, 2000);
        toast.error("Invalid name")
      }
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
                <input type="text"  className={`h-[40px] text-gray-600 rounded-md px-3 ${error && 'border-[3px] border-red-600'}`} placeholder='Input your password' value={data.password} onChange={e => {
                   if(data.password.length >= 6){
                    setError(false)
                  }
                  setData({...data, password: e.target.value})}} />
           </div>
           <div className="flex flex-col gap-2">
                <label htmlFor="">Comfirm Password</label>
                <input type="text" className={`h-[40px] text-gray-600 rounded-md px-3 ${error && 'border-[3px] border-red-600'}`} placeholder='Comfirm your password' value={data.comfirmPassword} onChange={e => {
                    if(data.comfirmPassword === data.password){
                      setError(false)
                    }
                   setData({...data, comfirmPassword: e.target.value})}} />
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
