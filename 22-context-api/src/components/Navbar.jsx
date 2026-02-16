import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { PostDataContext } from '../context/ThemeContext.jsx'

const Navbar = (props) => {

  const data = useContext(PostDataContext);
  console.log(data);

  return (
    <div className='nav'>
      <h2>{data}</h2>
      <Nav2 theme={props.theme} /> 
    </div>
  )
}

export default Navbar
