import React from 'react'
import LeftText from './LeftText'
import RightContent from './RightContent'
const page1Content = (props) => {
  return (
    <div className='flex items-center gap-10 py-6 pb-16 h-[90vh]'>
      <LeftText />
      <RightContent users={props.users}/>
    </div>
  )
}

export default page1Content