import React from 'react'
import Card from './components/card1.jsx'
import Navbar from './components/navbar.jsx'

const App = () => {
  let name = "Noor  "
  return (
    <div>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='card'>
        <h1>{name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, cumque.</p>
      </div>
      <div className='card'>
        {Card()}
      </div>
    

    </div>
  )
}

export default App
