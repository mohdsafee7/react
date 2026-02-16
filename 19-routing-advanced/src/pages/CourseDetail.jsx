import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

  const params = useParams() //useParams is a hook provided by react-router-dom to access the dynamic parameters from the URL. 
  // It returns an object containing the key-value pairs of the parameters defined in the route.

  console.log(params.id);
  

  return (
    <div className='p-8 text-2xl font-bold h-112 flex items-center justify-center'>
      <h1>course Detail</h1>
    </div>
  )
}

export default CourseDetail
