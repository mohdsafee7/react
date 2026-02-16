import React from 'react'
import {useNavigate} from 'react-router-dom'
const About = () => {
  let navigate = useNavigate();

  const btnClicked = () => {
    navigate('/');
  }
  return (
    <div className='p-8 text-2xl font-bold h-112 flex flex-col items-center justify-center'>
      <h2>About Page</h2>
      <button onClick={btnClicked} className='bg-emerald-400 mt-4 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Return to Home Page</button>
      <button onClick={() =>{ navigate(-1) } } className='bg-emerald-400 mt-4 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Back</button>
    </div>
  )
}

export default About
