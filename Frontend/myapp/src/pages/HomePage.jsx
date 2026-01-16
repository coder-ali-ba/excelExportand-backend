import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='bg-yellow-300 text-white text-4xl text-center py-2'>
      HomePage
      <div className='bg-gray-500 p-3 flex justify-around mt-3'>
        <Button variant='contained' component={Link} to="/auth/login">LogIn</Button>
        <Button variant='contained' component={Link} to='/auth/signup'>SignUp</Button>
      </div>
    </div>
  )
}

export default HomePage
