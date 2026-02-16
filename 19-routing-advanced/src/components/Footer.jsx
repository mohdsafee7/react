import React from 'react'

const Footer = () => {
  return (
    <div className='bg-blue-600 text-white px-8 py-6 flex items-center justify-between shadow-lg'>
      <div>
        <h3 className='text-lg font-bold'>Safee School</h3>
        <p className='text-sm text-blue-100'>© 2026 All rights reserved</p>
      </div>
      <div className='flex gap-8'>
        <a href="#" className='hover:text-blue-200 transition-colors font-medium text-sm'>Privacy</a>
        <a href="#" className='hover:text-blue-200 transition-colors font-medium text-sm'>Terms</a>
        <a href="#" className='hover:text-blue-200 transition-colors font-medium text-sm'>Contact Us</a>
      </div>
    </div>
  )
}

export default Footer
