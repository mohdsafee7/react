import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className='bg-blue-600 text-white px-8 py-4 flex items-center justify-between shadow-lg'>
        <h3 className='text-2xl font-bold'>Safee School</h3>
        <div className='flex gap-8'>
          {/* <a href="/">Home</a> */}
          <Link to='/' className='hover:text-blue-200 transition-colors font-medium'>Home</Link>
          {/* <a href="/about" className='hover:text-blue-200 transition-colors font-medium'>About</a> */}
          <Link to='/about' className='hover:text-blue-200 transition-colors font-medium'>About</Link>
          {/* <a href="/contact" className='hover:text-blue-200 transition-colors font-medium'>Contact</a> */}
          <Link to='/contact' className='hover:text-blue-200 transition-colors font-medium'>Contact</Link>

          <Link to='/courses' className='hover:text-blue-200 transition-colors font-medium'>Courses</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
