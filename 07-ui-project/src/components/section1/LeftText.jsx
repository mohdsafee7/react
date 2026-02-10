import React from 'react'
import { MoveUpRight } from 'lucide-react'
const LeftText = () => {
  return (
    <div className='h-full w-1/3  flex flex-col justify-between'>
      <div className='p-6'>
        <h3 className='text-6xl font-bold mb-7'>Prospective <br /> <span className='text-gray-400'>Customer</span> <br />Segmentation</h3>
        <p className='text-xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur ex aperiam deleniti officia eaque a distinctio sint, voluptatum facilis.</p>
      </div>
      <div className='p-6'><MoveUpRight size={90} /></div>
    </div>
  )
}

export default LeftText