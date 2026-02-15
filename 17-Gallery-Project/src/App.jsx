import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [userData, setuserData] = useState([])

  async function getData() {
    const res = await axios.get('https://picsum.photos/v2/list?page=2&limit=30');
    setuserData(res.data);
  }


  useEffect(function(){
    getData();
  },[])



  let printUserData = <h3>No User Available</h3>

  if(userData.length > 0) {
    printUserData = userData.map(function(elem,idx){
      return <div key={idx}>
        <div className='h-40 w-44 bg-white rounded-xl overflow-hidden'>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
      </div>  
      <h2 className='font-bold text-sm'>{elem.author}</h2>
      </div>
    })
  }
  return (
    <div className='bg-black h-screen overflow-auto p-4 text-white'>
      {/* <button onClick={getData} className='bg-green-600 active:scale-95 mb-5 px-5 py-2 rounded'>Get data</button> */}

      <div className='flex flex-wrap gap-5'>
        {printUserData}
      </div>
    </div>
  )
}

export default App
