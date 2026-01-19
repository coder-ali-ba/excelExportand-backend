import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ResponsiveAppBar from '../components/NavbarComp'
import HeroSecComp from '../components/HeroSecComp'

function HomePage() {
  return (
    <>
    <div className=' text-4xl text-center py-2'>
      {/* HomePage
      <div className='bg-gray-500 p-3 flex justify-around mt-3'>
        <Button variant='contained' component={Link} to="/auth/login">LogIn</Button>
        <Button variant='contained' component={Link} to='/auth/signup'>SignUp</Button>
      </div> */}
      <ResponsiveAppBar />
    </div>
      <HeroSecComp />
    </>
  )
}

export default HomePage
