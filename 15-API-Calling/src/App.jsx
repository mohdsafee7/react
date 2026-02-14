import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([]);

  //using Fetch API to get data from the server
   /* const getData = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    const data = await response.json();
    console.log(data);
    
  }
  */

  //using Axios to get data from the server
  const getData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/');

    // console.log(res.data);
    setData(res.data);
    
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map((elem, idx)=>{
          return <h2 key={idx}>{elem.title}</h2> 
        })}
      </div>
    </div>
  )
}

export default App