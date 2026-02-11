import React, { use, useState } from 'react'

const App = () => {
  
  const [num, setNum] = useState(20)
  const [username, setUsername] = useState("Safee")

  function changeNum(){
    setNum(num + 1)
    setUsername("Safeeq")
  }
  return (
    <div>
      <h1>The value of a is {num} {username}</h1>
      <button onClick={changeNum}>Click to Change</button>
    </div>
  )
}

export default App
