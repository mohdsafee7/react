import React, { useState } from 'react'

const App = () => {
  // const [num, setNum] = useState(10);
  const [obj, setObj] = useState({name: 'Aman', age: 22});

  const btnClick = () =>{
    // setNum(num + 1);
    const newObj = {...obj};
    newObj.name = 'Aman Kumar';
    console.log(newObj);
    setObj(newObj);

  }
  return (
    <div>
      <h1>{obj.name}, {obj.age}</h1>
      <button onClick={btnClick}>Click</button>
    </div>
  )
}

export default App
