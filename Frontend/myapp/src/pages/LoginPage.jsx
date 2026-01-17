import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import baseUrl from '../Constant'
import apis from '../../utils'

function LoginPage() {
  const {register , handleSubmit }=useForm()
  const [token , setToken]=useState("")
  const onSubmit = async(e)=>{
   try {
    const response =await axios.post(`${baseUrl}/${apis.loginApi}` , e);
    const userToken = response.data.token
    setToken(userToken)
    localStorage.setItem("userToken" , token)
   } catch (error) {
    console.log(error.message);   
   }    
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
         Login
        </h2>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Email</label>
          <input
            {...register("userEmail")}
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Enter your password"
            className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="mt-3 bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition-all duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default LoginPage
