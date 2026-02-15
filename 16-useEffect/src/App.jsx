import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0);

  useEffect(function(){
    console.log("Use effect is running...");
     
  },[num])  //here num is the dependency, so whenever num changes useEffect will run, 
  // if we pass empty array then useEffect will run only once when the component is mounted, 
  // if we don't pass any array then useEffect will run on every render of the component.

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{setNum(num+1)}}>Click</button>
    </div>
  )
}

export default App
