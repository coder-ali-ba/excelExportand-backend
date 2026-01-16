import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import baseUrl from '../Constant';
import apis from '../../utils';


function SignupPage() {
    const {register ,handleSubmit} = useForm()
    const onSubmit = async (e) => {
        // try {
        //     const response = await axios.post(`${baseUrl}/${apis.signupApi}`,e)  
        //     console.log(response);           
            
        // } catch (error) {
        //     console.log(error.message);
            
        // }
        console.log(e);
        
    }

    
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input {...register("Name")} />
          <label>Email</label>
          <input {...register("userEmail")} />
          <label>Password</label>
          <input {...register("password")} />
          <button variant='outlined' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SignupPage
