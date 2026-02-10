import React from 'react'
import { ArrowRight } from 'lucide-react'
const RightCard = (props) => {
  return (
    <div className='h-full w-80 overflow-hidden relative rounded-4xl shrink-0'>
      <img className='w-full h-full object-cover' src={props.img} alt="" />
      <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-12 w-12 text-2xl flex justify-center items-center  font-semibold '>{props.id+1}</h2>
  
        <div>
          <p className='text-xl text-white mb-10 leading-relaxed '>{props.intro}</p>
          <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
            <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full '><ArrowRight /></button>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default RightCard
